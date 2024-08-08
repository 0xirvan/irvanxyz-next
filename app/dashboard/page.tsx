import { Languages as LanguagesType } from "@/types";
import { getCodingStats } from "@/lib/api/wakatime";
import { HeadingText } from "@/components/HeadingText";
import { Languages } from "@/components/pages/dashboard/Languages";
import { DiscordCard } from "@/components/pages/dashboard/discord/DiscordCard";
import { DashboardSkeleton } from "@/components/skeleton/DashboardSkeleton";
import { CodeTime } from "@/components/pages/dashboard/CodeTime";

interface ResponseData {
  data: {
    human_readable_range: string;
    human_readable_total_including_other_language: string;
    languages: LanguagesType[];
  };
  error?: string;
}

const Dashboard = async () => {
  const data = (await getCodingStats()) as ResponseData;
  const started = data.data.human_readable_range;
  const totalTime = data.data.human_readable_total_including_other_language;
  const languages: LanguagesType[] = data.data.languages;

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
  return (
    <main className="items-center px-4 py-8">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my activities">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          <DiscordCard />
          <CodeTime
            started={data?.data.human_readable_range}
            totalTime={data?.data.human_readable_total_including_other_language}
            languages={data?.data.languages}
          />
          <Languages languages={data?.data.languages} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
