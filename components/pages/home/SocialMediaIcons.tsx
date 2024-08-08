import {
  RiFacebookLine,
  RiGithubLine,
  RiTwitterLine,
  RiLinkedinLine,
} from "@remixicon/react";
import { siteConfig } from "@/config/siteConfig";

export const SocialMediaIcons = () => {
  return (
    <div className="flex">
      <a
        target="_blank"
        href={`${siteConfig.links.github}`}
        rel="noopener noreferrer"
        aria-label="Github"
        className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <RiGithubLine className="dark:text-[#86efac]" />
      </a>
      <a
        target="_blank"
        href={`${siteConfig.links.facebook}`}
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <RiFacebookLine className="dark:text-[#86efac]" />
      </a>
      <a
        target="_blank"
        href={`${siteConfig.links.twitter}`}
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <RiTwitterLine className="dark:text-[#86efac]" />
      </a>
      <a
        target="_blank"
        href={`${siteConfig.links.linkedin}`}
        rel="noopener noreferrer"
        aria-label="Linkedin"
        className="rounded px-4 py-3 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <RiLinkedinLine className="dark:text-[#86efac]" />
      </a>
    </div>
  );
};
