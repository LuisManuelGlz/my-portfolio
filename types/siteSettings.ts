import LocaleBlockType from './localeBlock';
import LocaleStringType from './localeString';

type SiteSettingsType = {
  _id: string;
  greeting: LocaleStringType;
  role: LocaleStringType;
  about: LocaleBlockType;
  whatIDo: LocaleBlockType;
  location: string;
};

export default SiteSettingsType;
