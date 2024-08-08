import { HeadingText } from "@/components/HeadingText";
import { Introduction } from "@/components/pages/home/Introduction";
import { SocialMediaIcons } from "@/components/pages/home/SocialMediaIcons";
import { ProjectSkeleton } from "@/components/skeleton/ProjectSkeleton";
import { siteConfig } from "@/config/siteConfig";

const loading = () => {
  return (
    <main className="py-2">
      <section className="py-4">
        <Introduction />
        <SocialMediaIcons />
      </section>
      <section className="space-y-4 py-4">
        <div className="px-4">
          <HeadingText>Projects</HeadingText>
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <ProjectSkeleton />
          </div>
          <a
            target="_blank"
            href={`${siteConfig.links.github}?tab=repositories`}
            className="px-4 text-sm underline dark:text-green-300"
          >
            See More...
          </a>
        </div>
      </section>
    </main>
  );
};

export default loading;
