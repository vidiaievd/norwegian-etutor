'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import Image from 'next/image';
import { languages, fallbackLng, removeLocaleFromUrl } from '@/i18n/settings';
// import { useState } from 'react';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = ({ lng }: { lng: string }) => {
  const { i18n } = useTranslation(lng);
  const currentPathname = usePathname();
  const router = useRouter();
  const currentLocale = i18n.language;

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="flex items-center gap-2  min-w-max px-2">
          <Image
            src={`/assets/flags/${currentLocale}.svg`}
            alt={currentLocale}
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span>{currentLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-max">
        {languages
          .filter((locale) => locale !== currentLocale)
          .map((locale) => (
            <DropdownMenuItem
              key={locale}
              onClick={() => handleChange(locale)}
              className="flex items-center gap-2"
            >
              <Image
                src={`/assets/flags/${locale}.svg`}
                alt={locale}
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>{locale}</span>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
