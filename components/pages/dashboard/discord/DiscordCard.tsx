import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DiscordActivity } from "@/components/pages/dashboard/discord/DiscordActivity";

export const DiscordCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium dark:text-green-300">
          Discord activity
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <DiscordActivity />
      </CardContent>
    </Card>
  );
};
