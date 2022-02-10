import { useContext, ReactNode } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Text } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import Container from '../components/container';
import CommonLink from '../components/common-link';
import ISiteSettings from '../types/siteSettings';
import ISkill from '../types/skill';
// import { getAllProjects, getSiteSettings, getSkills } from '../lib/api';
import { getAllProjects, getSiteSettings, getSkills } from '../lib/api.dev';
import useTranslation from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';
import Section from '../components/section';
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

  const link = ({
    mark: { href },
    children,
  }: {
    mark: { href: string };
    children: ReactNode;
  }) => <CommonLink href={href}>{children}</CommonLink>;

  const serializers = {
    types: {
      block: ({ children }: { children: ReactNode }) => (
        <Text as="p" className={styles.aboutBlockContent}>
          {children}
        </Text>
      ),
    },
    marks: { link },
  };

  return (
    <div>
      <Container>
        <Section transition={{ delay: 0.6 }}>
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
        <Section transition={{ delay: 0.6 }}>
          <div className={styles.aboutContainer}>
            <h3 className={styles.aboutHeader}>{t('about')}</h3>
            <BlockContent blocks={about[locale]} serializers={serializers} />
            <div className={styles.aboutSkillsListContainer}>
              {skills.map(({ _id, name, logo, backgroundColor: { hex } }) => (
                <div
                  key={_id}
                  style={{ backgroundColor: hex }}
                  className={styles.aboutSkill}
                >
                  <img
                    className={styles.aboutSkillImage}
                    src={logo.asset.url}
                    alt={`${name} logo`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </Container>
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
