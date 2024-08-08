import Link from "next/link";
import { GithubRepo } from "@/types";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { RiStarSLine } from "@remixicon/react";

interface ProjectCardProps {
  project: GithubRepo;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      target="_blank"
      href={project.link}
      rel="noopener noreferrer"
      aria-label={project.repo}
      className="flex flex-col justify-between gap-2 rounded p-4 hover:bg-muted"
    >
      <div className="flex flex-col gap-1  dark:text-green-300">
        <CardTitle className="text-base">{project.repo}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm font-light dark:text-green-300">
          {project.description}
        </CardDescription>
      </div>
      <CardDescription className="flex items-center gap-1 dark:text-green-300">
        <RiStarSLine className="h-4 w-4" />
        {project.stars}
      </CardDescription>
    </Link>
  );
};
