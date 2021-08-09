import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../lib/api';
import useTranslation from '../../hooks/useTranslation';
import config from '../../config';
import styles from './contact-form.module.scss';

const ContactForm = () => {
  const { t } = useTranslation();

  const [isReCaptchaVerified, setIsReCaptchaVerified] = useState(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const recaptchaRef = useRef<ReCAPTCHA>();

  const onSubmit = ({ name, email, message }) => {
    if (isReCaptchaVerified) {
      const templateParams = {
        from_name: name,
        from_email: email,
        message,
      };

      sendEmail(templateParams)
        .then(() => {
          toast.dark(t('emailSent'));
          reset();
          recaptchaRef.current.reset();
          setIsReCaptchaVerified(null); // null means that ReCaptcha has been reset
        })
        .catch(() => {
          toast.error(t('emailNotSent'));
        });
    } else {
      setIsReCaptchaVerified(false);
    }
  };

  const onReCaptchaChange = () => {
    if (recaptchaRef.current.getValue()) {
      setIsReCaptchaVerified(true);
    } else {
      setIsReCaptchaVerified(false);
    }
  };

  return (
    <form
      className={styles.contactFormContainer}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.contactFormPersonalDataContainer}>
        <div className={styles.contactFormGroup}>
          <input
            {...register('name', { required: true })}
            className={`${styles.contactFormInputFull} ${styles.contactFormInput}`}
            type="text"
            autoComplete="off"
            maxLength={255}
            placeholder={t('namePlaceholder')}
          />
          {errors.name && (
            <span className={styles.contactFormErrorMessage}>
              {t('nameError')}
            </span>
          )}
        </div>
        <div className={styles.contactFormGroup}>
          <input
            {...register('email', { required: true })}
            className={`${styles.contactFormInputFull} ${styles.contactFormInput}`}
            autoComplete="off"
            maxLength={255}
            type="email"
            placeholder={t('emailPlaceholder')}
          />
          {errors.email && (
            <span className={styles.contactFormErrorMessage}>
              {t('emailError')}
            </span>
          )}
        </div>
      </div>
      <textarea
        {...register('message', { required: true })}
        className={`${styles.contactFormInputNoResize} ${styles.contactFormInput}`}
        maxLength={500}
        rows={10}
        placeholder={t('messagePlaceholder')}
      />
      {errors.message && (
        <span className={styles.contactFormErrorMessage}>
          {t('messageError')}
        </span>
      )}
      <ReCAPTCHA
        ref={recaptchaRef}
        theme="dark"
        sitekey={config.recaptchaSiteKey}
        onChange={onReCaptchaChange}
      />
      {isReCaptchaVerified === false && (
        <span className={styles.contactFormErrorMessage}>
          {t('reCaptchaNotVerified')}
        </span>
      )}
      <button className={styles.contactFormSubmitButton} type="submit">
        {t('sendButton')}
      </button>
    </form>
  );
};

export default ContactForm;
