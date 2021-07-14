import { useContext } from 'react';

import { LanguageContext, defaultLocale } from '../contexts/LanguageContext';
import { langStrings } from '../translations/langStrings';

export default function useTranslation() {
  const { locale } = useContext(LanguageContext);

  const t = (key: string) => {
    if (!langStrings[locale][key])
      console.warn(`No string '${key}' for locale '${locale}'`);

    return langStrings[locale][key] || langStrings[defaultLocale][key] || '';
  };

  return { t, locale };
}
