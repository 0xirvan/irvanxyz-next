import wretch from "wretch";
import { env } from "@/env.mjs";

const api = wretch("https://api.lanyard.rest", { cache: "no-store" })
  .errorType("json")
  .resolve((r) => r.json());

export const getDiscordActivity = async () => {
  try {
    return await api.get(`/v1/users/${env.NEXT_PUBLIC_DISCORD_ID}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed fetching data" };
  }
};
