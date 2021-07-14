import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

type Props = {
  locale: 'en' | 'es';
};

const FlagButton = ({ locale }: Props) => {
  const { setLocale } = useContext(LanguageContext);

  const handleClick = () => {
    setLocale(locale);
    localStorage.setItem('lang', locale);
  };

  return (
    <button onClick={handleClick}>
      <img src={`flags/${locale}.png`} alt={`${locale} flag`} width="25" />
    </button>
  );
};

export default FlagButton;
