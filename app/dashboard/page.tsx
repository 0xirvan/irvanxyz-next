import { Languages as LanguagesType } from "@/types";
import { getCodingStats } from "@/lib/api/wakatime";
import { HeadingText } from "@/components/HeadingText";
import { Languages } from "@/components/pages/dashboard/Languages";
import { DiscordCard } from "@/components/pages/dashboard/discord/DiscordCard";
import { DashboardSkeleton } from "@/components/skeleton/DashboardSkeleton";
import { CodeTime } from "@/components/pages/dashboard/CodeTime";
import { Metadata } from "next";

interface ResponseData {
  data: {
    human_readable_range: string;
    human_readable_total_including_other_language: string;
    languages: LanguagesType[];
  };
  error?: string;
}

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = async () => {
  const data = (await getCodingStats()) as ResponseData;

  if (!data || data.error) {
    return (
      <main className="items-center px-4 py-8">
        <div className="space-y-4">
          <HeadingText subtext="Statistics about my activities">
            Dashboard
          </HeadingText>
          <div className="flex flex-wrap gap-2">
            <DashboardSkeleton />
          </div>
        </div>
      </main>
    );
  }

  const started = data.data.human_readable_range;
  const totalTime = data.data.human_readable_total_including_other_language;
  const languages: LanguagesType[] = data.data.languages;

  return (
    <main className="items-center px-4 py-8">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my activities">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          <DiscordCard />
          <CodeTime
            started={started}
            totalTime={totalTime}
            languages={languages}
          />
          <Languages languages={languages} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
