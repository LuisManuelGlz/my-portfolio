import React from 'react';
import Head from 'next/head';
import useTranslation from '../hooks/useTranslation';
import ContactForm from '../components/contact-form';
import Section from '../components/section';
import styles from '../styles/Home.module.scss';

const contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t('contact')} | Luis Manuel</title>
      </Head>

      {/* contact */}
      <Section transition={{ delay: 0.6 }}>
        <div className={styles.contactContainer}>
          <h3 className={styles.contactHeader}>{t('contact')}</h3>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
};

export default contact;
