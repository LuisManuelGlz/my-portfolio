import LocaleBlockType from './localeBlock';
import LocaleStringType from './localeString';

type SiteSettingsType = {
  _id: string;
  siteName: string;
  shortName: string;
  role: LocaleStringType;
  about: LocaleBlockType;
  whatIDo: LocaleBlockType;
  github: string;
  linkedIn: string;
  twitter: string;
  location: string;
};

export default SiteSettingsType;
