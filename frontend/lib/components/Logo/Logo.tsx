
import Link from "next/link";

export const Logo = (): JSX.Element => {
  return (
    <Link
      data-testid="app-logo"
      href={"/chat"}
      className="flex items-center gap-4"
    >
      
      <h1 className="font-bold">Ŏzaru</h1>
    </Link>
  );
};
