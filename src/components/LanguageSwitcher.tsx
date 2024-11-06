'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import Image from 'next/image';
import { languages, fallbackLng, removeLocaleFromUrl } from '@/i18n/settings';
import { useState } from 'react';

export const LanguageSwitcher = ({ lng }: { lng: string }) => {
  const { i18n } = useTranslation(lng);
  const currentPathname = usePathname();
  const router = useRouter();
  const currentLocale = i18n.language;
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `i18next=${newLocale};expires=${expires};path=/`;

    const newPath = removeLocaleFromUrl(currentPathname);
    if (newLocale === fallbackLng) {
      router.push(newPath);
    } else {
      router.push(`/${newLocale}${newPath}`);
    }
    router.refresh();
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 bg-inherit p-2 min-w-full"
        style={{ width: 'max-content' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={`/assets/flags/${currentLocale}.svg`}
          alt={currentLocale}
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span>{currentLocale}</span>
      </button>

      {isOpen && (
        <div
          className="absolute bg-white shadow-md rounded mt-2 min-w-full"
          style={{ width: 'max-content' }}
        >
          {languages
            .filter((locale) => locale !== currentLocale)
            .map((locale) => (
              <button
                key={locale}
                onClick={() => {
                  handleChange(locale);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 w-full text-left cursor-pointer hover:bg-gray-100"
              >
                <Image
                  src={`/assets/flags/${locale}.svg`}
                  alt={locale}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>{locale}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
