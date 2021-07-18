import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../lib/api';
import useTranslation from '../hooks/useTranslation';
import config from '../config';

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

  const onSubmit = async ({ name, email, message }) => {
    if (isReCaptchaVerified) {
      const templateParams = {
        from_name: name,
        from_email: email,
        message,
      };

      try {
        await sendEmail(templateParams);
        toast.dark(t('emailSent'));
        reset();
        recaptchaRef.current.reset();
        setIsReCaptchaVerified(null); // null means that ReCaptcha is verified
      } catch (error) {
        toast.error(t('emailNotSent'));
      }
    } else {
      setIsReCaptchaVerified(false);
    }
  };

  const onReCaptchaChange = () => {
    if (recaptchaRef.current.getValue()) {
      setIsReCaptchaVerified(true);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 lg:w-2/3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-full">
          <input
            {...register('name', { required: true })}
            className="rounded border border-transparent focus:ring-2 w-full p-3 bg-secondary text-light"
            type="text"
            autoComplete="off"
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
            autoComplete="off"
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
        onChange={onReCaptchaChange}
      />
      {isReCaptchaVerified === false && (
        <span className="text-red-400">{t('reCaptchaNotVerified')}</span>
      )}
      <button
        className="rounded bg-gradient-to-r from-primary to-blue-600 font-bold p-3 text-light"
        type="submit"
      >
        {t('sendButton')}
      </button>
    </form>
  );
};

export default ContactForm;
