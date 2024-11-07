"use server";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

const Header = async ({
  lng,
  className,
}: {
  lng: string;
  className: string;
}) => {
  return (
    <header className={className}>
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">My App</div>
        <div className="flex items-center space-x-3">
          <LanguageSwitcher lng={lng} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
