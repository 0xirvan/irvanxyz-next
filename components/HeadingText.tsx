interface HeadingProps {
  children: string;
  subtext?: string;
}

export const HeadingText = ({ children, subtext }: HeadingProps) => {
  return (
    <div>
      <h1 className="text-lg font-semibold dark:text-green-300">{children}</h1>
      {subtext && (
        <h2 className="font-light text-zinc-500 dark:text-green-300">
          {subtext}
        </h2>
      )}
    </div>
  );
};
