import { Activity, DiscordApiResponse } from "@/types";
import { RiDiscordLine } from "@remixicon/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ElapsedTime } from "@/components/timer/ElapsedTime";
import { ProgressBar } from "@/components/timer/ProgressBar";
import Image from "next/image";

interface DiscordActivityCardProps {
  activity: Activity;
  data: DiscordApiResponse;
}

export const DiscordActivityCard = ({
  activity,
  data,
}: DiscordActivityCardProps) => {
  return (
    <Alert className="flex flex-col items-center gap-3 border-none bg-muted text-center sm:flex-row sm:text-left dark:text-green-300">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {activity.assets &&
            activity.assets.large_image &&
            activity.assets.large_image.startsWith("spotify:") ? (
              <Image
                src={data.data.spotify.album_art_url}
                width={90}
                height={90}
                alt="Activity image"
                className="rounded"
                quality={100}
              />
            ) : activity.assets && activity.application_id ? (
              <Image
                src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp?size=512`}
                width={90}
                height={90}
                alt="Activity image"
                className="rounded"
                quality={100}
              />
            ) : activity.application_id ? (
              <Image
                src={`https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=512`}
                width={90}
                height={90}
                alt="Activity image"
                className="rounded"
                quality={100}
              />
            ) : (
              <div
                className="flex items-center justify-center"
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "gray",
                  borderRadius: "0.25rem",
                }}
              >
                <RiDiscordLine className="h-12 w-12" />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent>
            {activity.assets
              ? activity.assets.large_text || activity.name
              : activity.name}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div>
        <AlertTitle className="line-clamp-1">{activity.name}</AlertTitle>
        <AlertDescription className="line-clamp-1">
          {activity.details || null}
        </AlertDescription>
        <AlertDescription className="line-clamp-1">
          {activity.state || null}
        </AlertDescription>
        <AlertDescription className="flex justify-center sm:block">
          {activity.timestamps &&
          activity.timestamps.start &&
          activity.timestamps.end ? (
            <ProgressBar
              start={activity.timestamps.start}
              end={activity.timestamps.end}
            />
          ) : null}
        </AlertDescription>
        <AlertDescription className="line-clamp-1">
          {activity.timestamps && activity.timestamps.start ? (
            <ElapsedTime unixTimestamp={activity.timestamps.start} />
          ) : null}
        </AlertDescription>
      </div>
    </Alert>
  );
};
