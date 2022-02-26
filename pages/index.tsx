import { useContext, ReactNode } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Text, Box, HStack, Image } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import ISiteSettings from '../types/siteSettings';
import ISkill from '../types/skill';
// import { getSiteSettings, getSkills } from '../lib/api';
import { getSiteSettings, getSkills } from '../lib/api.dev';
import useTranslation from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';
import Section from '../components/section';
import Title from '../components/title';
import MarkLink from '../components/mark-link';
import styles from '../styles/Home.module.scss';

import 'react-toastify/dist/ReactToastify.css';

type Props = {
  siteSettings: ISiteSettings;
  skills: ISkill[];
};

const Home = ({
  siteSettings: { siteName, shortName, role, about, ...socialLinks },
  skills,
}: Props) => {
  const { locale } = useContext(LanguageContext);
  const { t } = useTranslation();

  const serializers = {
    types: {
      block: ({ children }: { children: ReactNode }) => (
        <Text
          as="p"
          fontSize={{ base: '18px', sm: '24px' }}
          textAlign={{ base: 'center', sm: 'start' }}
        >
          {children}
        </Text>
      ),
    },
    marks: { link: MarkLink },
  };

  return (
    <div>
      <Section delay={0.1}>
        <div className={styles.showcaseContainer}>
          <h1 className={styles.showcaseGreeting}>
            {t('greeting')} {shortName}.
          </h1>
          <h2 className={styles.showcaseRole}>
            {t('imA')} {role[locale]}
          </h2>
        </div>
      </Section>

      {/* about */}
      <Section delay={0.1}>
        <Title>{t('about')}</Title>
        <BlockContent blocks={about[locale]} serializers={serializers} />
        <HStack wrap="wrap" marginTop={8} justifyContent="center">
          {skills.map(({ _id, name, logo, backgroundColor: { hex } }) => (
            <Box
              key={_id}
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="90px"
              height="90px"
              borderRadius="full"
              background={hex}
              overflow="hidden"
            >
              <Image
                src={logo.asset.url}
                alt={`${name} logo`}
                width="75px"
                objectFit="cover"
              />
            </Box>
          ))}
        </HStack>
      </Section>

      <ToastContainer
        position="top-center"
        hideProgressBar
        closeButton={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const siteSettings = await getSiteSettings();
  const skills = await getSkills();

  return {
    props: { siteSettings, skills },
  };
};
