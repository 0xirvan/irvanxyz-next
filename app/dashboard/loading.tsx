import { HeadingText } from "@/components/HeadingText";
import { DashboardSkeleton } from "@/components/skeleton/DashboardSkeleton";

const DashboardLoading = () => {
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
};

export default DashboardLoading;
