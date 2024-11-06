export const fallbackLng = 'en';
export const languages: string[] = [fallbackLng, 'uk'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

// interface I18nOptions {
//   supportedLangs: string[];
//   fallbackLng: string;
//   lng: string;
//   fallbackNS: string;
//   defaultNS: string;
//   ns: string | string[];
// }

export function getOptions(lng: string = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
}

export function removeLocaleFromUrl(url: string): string {
  const parts = url.split('/').filter(Boolean);

  if (languages.includes(parts[0])) {
      parts.shift();
  }

  return '/' + parts.join('/');
}
