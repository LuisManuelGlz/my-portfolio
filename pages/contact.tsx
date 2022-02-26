import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import useTranslation from '../hooks/useTranslation';
import ContactForm from '../components/contact-form';
import Section from '../components/section';
import Title from '../components/title';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Head>
        <title>{t('contact')} | Luis Manuel</title>
      </Head>

      <Section delay={0.1}>
        <Title>{t('contact')}</Title>
        <ContactForm />
      </Section>
    </Box>
  );
};

export default Contact;
