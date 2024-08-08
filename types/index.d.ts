//Config

export type SiteConfig = {
  name: string;
  description: string;
  links: {
    github: string;
    facebook: string;
    linkedin: string;
    twitter: string;
  };
};

//Github
export type GithubRepo = {
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  link: string;
  website: string;
};
