"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UseLanyard } from "@/hooks/UseLanyard";
import { DiscordActivityCard } from "./DiscordActivityCard";
import { Activity } from "@/types";

export const DiscordActivity = () => {
  const { data } = UseLanyard();
  return (
    <>
      {!data ? (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-28 md:w-[14rem]" />
          </div>
          <Skeleton className="h-8 w-full" />
        </div>
      ) : (
        <>
          {data.data ? (
            <>
              {/* // display no activities if there are no activities */}
              <div className="flex flex-grow flex-col gap-2">
                {!data ||
                !data.data ||
                !data.data.activities ||
                data.data.activities.length === 0 ? (
                  <Alert className="border-none bg-muted dark:text-green-300">
                    <AlertDescription className="dark:text-green-300">
                      No activities currently.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <>
                    {/* // render custom status if there is only one activity */}
                    {data.data.activities.length === 1 &&
                    data.data.activities[0].name === "Custom Status" ? (
                      <>
                        {data?.data?.activities?.map(
                          (activity: Activity) =>
                            activity.name === "Custom Status" && (
                              <p className="text-sm text-muted-foreground">
                                {activity.state}
                              </p>
                            )
                        )}
                        <Alert className="border-none bg-muted dark:text-green-300">
                          <AlertDescription className="dark:text-green-300">
                            No activities currently.
                          </AlertDescription>
                        </Alert>
                      </>
                    ) : (
                      <>
                        {/* // render custom status and other activities */}
                        {data?.data?.activities?.map(
                          (activity: Activity) =>
                            activity.name === "Custom Status" && (
                              <p className="text-sm text-muted-foreground dark:text-green-300">
                                {activity.state}
                              </p>
                            )
                        )}
                        {data?.data?.activities?.map(
                          (activity: Activity, index: number) =>
                            activity.name !== "Custom Status" && (
                              <DiscordActivityCard
                                key={index}
                                activity={activity}
                                data={data}
                              />
                            )
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="flex gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-28 md:w-[14rem]" />
            </div>
          )}
        </>
      )}
    </>
  );
};
