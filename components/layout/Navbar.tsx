import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="select-none bg-background px-18">
      <div className="flex justify-between">
        <Link href={"/"} className="flex items-center">
          <h1 className="text-lg font-bold text-zinc-900 dark:text-green-300">
            ./irvan
          </h1>
        </Link>
        <div className="flex gap-4">
          <ul className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-green-300">
            <Link href={"/"} className="hover:underline">
              <p>Home</p>
            </Link>
            <Link href={"/dashboard"} className="hover:underline">
              <p>Dashboard</p>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
