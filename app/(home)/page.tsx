import { siteConfig } from "@/config/siteConfig";
import { GithubRepo } from "@/types";
import { HeadingText } from "@/components/HeadingText";
import { Introduction } from "@/components/pages/home/Introduction";
import { SocialMediaIcons } from "@/components/pages/home/SocialMediaIcons";
import { ProjectCard } from "@/components/pages/home/ProjectCard";
import { ProjectSkeleton } from "@/components/skeleton/ProjectSkeleton";
import { getRepo } from "@/lib/api/github";

type RepoData = GithubRepo[] | { error: string };

const Home = async () => {
  const data = (await getRepo()) as RepoData;
  if ("error" in data) {
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
  }
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
            {data.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
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

export default Home;
