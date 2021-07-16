import { useEffect, useContext, useRef, useState } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import Project from '../components/project';
import ISiteSettings from '../types/siteSettings';
import IProject from '../types/project';
import { getAllProjects, getSiteSettings } from '../lib/api';
import config from '../config';
import useTranslation from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';

type Props = {
  siteSettings: ISiteSettings;
  allProjects: IProject[];
};

const Home = ({
  siteSettings: { siteName, shortName, role, about, ...socialLinks },
  allProjects,
}: Props) => {
  const { locale } = useContext(LanguageContext);
  const { t } = useTranslation();
  const [isReCaptchaVerified, setIsReCaptchaVerified] = useState(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const recaptchaRef = useRef<ReCAPTCHA>();

  const onSubmit = (data) => {
    if (recaptchaRef.current.getValue()) {
      reset();
      recaptchaRef.current.reset();
      setIsReCaptchaVerified(null);
      console.log(data);
    } else {
      setIsReCaptchaVerified(false);
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1000,
      once: true,
    });
  }, []);

  const link = ({ mark: { href }, children }) => (
    <a
      className="text-primary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

  const serializers = {
    types: {
      block: ({ children }) => (
        <p className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 text-light text-2xl">
          {children}
        </p>
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

        <Header siteName={siteName} />

        <Container>
          {/* showcase */}
          <section id="showcase">
            <div className="flex flex-col justify-center items-center h-screen">
              <h1 className="bg-gradient-to-r from-blue-700 to-primary text-transparent bg-clip-text text-center text-6xl md:text-7xl lg:text-8xl font-bold mb-4 p-2">
                {/* <h1 className="text-primary text-center text-6xl md:text-7xl lg:text-8xl font-bold mb-4"> */}
                {t('greeting')} {shortName}.
              </h1>
              <h2 className="text-gray text-center text-xl md:text-2xl lg:text-3xl">
                {t('imA')} {role[locale]}
              </h2>
            </div>
          </section>

          {/* projects */}
          <section id="projects">
            <div className="py-16 text-light">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                {t('my')}{' '}
                <span className="block text-primary">{t('projects')}</span>
              </h3>
              <div className="flex flex-col items-center">
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
            <div className="text-light py-16">
              <h3 className="text-5xl md:text-6xl lg:text-7xl text-primary font-bold mb-8">
                {t('about')}
              </h3>
              <BlockContent blocks={about[locale]} serializers={serializers} />
            </div>
          </section>

          {/* contact */}
          <section id="contact">
            <div className="py-16">
              <h3 className="text-5xl md:text-6xl lg:text-7xl text-primary font-bold mb-8">
                {t('contact')}
              </h3>
              <form
                className="flex flex-col gap-3 w-2/3"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex gap-3">
                  <div className="w-full">
                    <input
                      {...register('name', { required: true })}
                      className="rounded border border-transparent focus:ring-2 w-full p-3 bg-secondary text-light"
                      type="text"
                      maxLength={255}
                      placeholder={t('namePlaceholder')}
                    />
                    {errors.name && (
                      <span className="text-red-400">{t('nameError')}</span>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      {...register('email', { required: true })}
                      className="rounded border border-transparent focus:ring-2 w-full p-3 bg-secondary text-light"
                      maxLength={255}
                      type="email"
                      placeholder={t('emailPlaceholder')}
                    />
                    {errors.email && (
                      <span className="text-red-400">{t('emailError')}</span>
                    )}
                  </div>
                </div>
                <textarea
                  {...register('message', { required: true })}
                  className="resize-none rounded border border-transparent focus:ring-2 p-3 bg-secondary text-light"
                  maxLength={500}
                  rows={10}
                  placeholder={t('messagePlaceholder')}
                />
                {errors.message && (
                  <span className="text-red-400">{t('messageError')}</span>
                )}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  theme="dark"
                  sitekey={config.recaptchaSiteKey}
                />
                {isReCaptchaVerified === false && (
                  <span className="text-red-400">
                    {t('reCaptchaNotVerified')}
                  </span>
                )}
                <button
                  className="rounded bg-gradient-to-r from-primary to-blue-600 font-bold p-3 text-light"
                  type="submit"
                >
                  {t('sendButton')}
                </button>
              </form>
            </div>
          </section>
        </Container>
      </Layout>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const siteSettings = await getSiteSettings();
  const allProjects = await getAllProjects();

  return {
    props: { siteSettings, allProjects },
  };
};
