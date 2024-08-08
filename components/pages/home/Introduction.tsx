import { siteConfig } from "@/config/siteConfig";

export const Introduction = () => {
  return (
    <div className="space-y-4 p-4 dark:text-green-300">
      <p className="font-light text-muted-foreground dark:text-green-300">
        Welcome to {siteConfig.name}&apos;s!
      </p>
      <p className="font-light">
        I&apos;m a full-stack developer who loves open-source. I enjoy building
        apps in the JavaScript ecosystem and I like learning new technologies.
      </p>
      <p className="font-light">
        My favorite tech stack for building web apps includes{" "}
        <a href="https://react.dev/" target="_blank" className="font-semibold">
          React
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="font-semibold"
        >
          TypeScript
        </a>
        , and{" "}
        <a href="https://bun.sh/" target="_blank" className="font-semibold">
          Bun
        </a>{" "}
        for the toolkit and{" "}
        <a href="https://hono.dev/" target="_blank" className="font-semibold">
          Hono
        </a>{" "}
        for the backend.
      </p>
      <p className="font-light">
        I am currently{" "}
        <span className="font-semibold">&quot;leveling up my skills&quot;</span>{" "}
        at{" "}
        <span className="font-semibold">
          Bina Sarana Informatika University!
        </span>{" "}
        🚀💻.
      </p>
    </div>
  );
};
