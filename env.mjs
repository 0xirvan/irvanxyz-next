import { createEnv } from "@t3-oss/env-nextjs";
import {z} from "zod";

export const env = createEnv({
    server: {
        WAKATIME_API_KEY: z.string(),
        GITHUB_API_URL: z.string(),
        GITHUB_USERNAME: z.string(),
        DISCORD_ID: z.string(),
    },
    runtimeEnv: {
        WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
        GITHUB_API_URL: process.env.GITHUB_API_URL,
        GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        DISCORD_ID: process.env.DISCORD_ID,
    }
});