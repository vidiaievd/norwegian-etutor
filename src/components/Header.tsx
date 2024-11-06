"use server";

import { LanguageSwitcher } from "./LanguageSwitcher";

interface UserProps {
  image?: string;
  name?: string;
  email: string;
}

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
        <div className="flex items-center space-x-6">
          <LanguageSwitcher lng={lng} />
        </div>
      </div>
    </header>
  );
};

export default Header;
