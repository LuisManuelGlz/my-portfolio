import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type LanguageContextType = {
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>;
};

type Props = {
  children: ReactNode;
};

export const defaultLocale = 'en';
export const locales = ['en', 'es'];
export const LanguageContext = createContext({} as LanguageContextType);

export const LanguageProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      setLocale(lang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};
