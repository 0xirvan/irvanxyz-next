export const Footer = () => {
  return (
    <footer className="mt-auto block px-4 pb-2 pt-4 text-sm text-zinc-500 dark:text-green-300">
      © {new Date().getFullYear()} made with{" "}
      <a href="https://nextjs.org/">nextjs</a>
    </footer>
  );
};
