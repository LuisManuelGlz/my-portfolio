import React from 'react';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useTranslation from '../hooks/useTranslation';
import ContactForm from '../components/contact-form';
import Section from '../components/section';
import Title from '../components/title';
import styles from '../styles/Home.module.scss';

const contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t('contact')} | Luis Manuel</title>
      </Head>

      <Section delay={0.1}>
        <div className={styles.contactContainer}>
          <Title>{t('contact')}</Title>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
};

export default contact;
