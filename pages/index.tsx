import { useEffect, useContext } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import Project from '../components/project';
import CommonLink from '../components/common-link';
import ISiteSettings from '../types/siteSettings';
import IProject from '../types/project';
import ISkill from '../types/skill';
// import { getAllProjects, getSiteSettings, getSkills } from '../lib/api';
import { getAllProjects, getSiteSettings, getSkills } from '../lib/api.dev';
import useTranslation from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';
import ContactForm from '../components/contact-form';
import Navigation from '../components/navigation';
import styles from '../styles/Home.module.scss';

import 'react-toastify/dist/ReactToastify.css';

type Props = {
  siteSettings: ISiteSettings;
  allProjects: IProject[];
  skills: ISkill[];
};

const Home = ({
  siteSettings: { siteName, shortName, role, about, ...socialLinks },
  allProjects,
  skills,
}: Props) => {
  const { locale } = useContext(LanguageContext);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1000,
      once: true,
    });
  }, []);

  const link = ({ mark: { href }, children }) => (
    <CommonLink href={href}>{children}</CommonLink>
  );

  const serializers = {
    types: {
      block: ({ children }) => (
        <p className={styles.aboutBlockContent}>{children}</p>
      ),
    },
    marks: { link },
  };

  return (
    <div>
      <Layout socialLinks={socialLinks}>
        <Head>
          <title>
            {siteName} | {t('developer')}
          </title>
        </Head>

        <Navigation siteName={siteName} />

        <Container>
          {/* showcase */}
          <section id="showcase">
            <div className={styles.showcaseContainer}>
              <h1 className={styles.showcaseGreeting}>
                {t('greeting')} {shortName}.
              </h1>
              <h2 className={styles.showcaseRole}>
                {t('imA')} {role[locale]}
              </h2>
            </div>
          </section>

          {/* projects */}
          <section id="projects">
            <div className={styles.projectsContainer}>
              <h3 className={styles.projectsHeader}>
                <span>{t('my')}</span>
                <span>{t('projects')}</span>
              </h3>
              <div className={styles.projectsListContainer}>
                {allProjects.map((project, index) => (
                  <Project
                    key={project._id}
                    effect={index % 2 === 0 ? 'zoom-in-up' : 'zoom-in-down'}
                    title={project.title}
                    description={project.description}
                    members={project.members}
                    tags={project.tags}
                    image={project.image.asset.url}
                    website={project.website}
                    repo={project.repo}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* about */}
          <section id="about">
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
          </section>

          {/* contact */}
          <section id="contact">
            <div className={styles.contactContainer}>
              <h3 className={styles.contactHeader}>{t('contact')}</h3>
              <ContactForm />
            </div>
          </section>
        </Container>
      </Layout>
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
  const allProjects = await getAllProjects();

  return {
    props: { siteSettings, allProjects, skills },
  };
};
