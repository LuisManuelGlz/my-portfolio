import React, { MutableRefObject, useContext, useRef, useState } from 'react';
import {
  Text,
  Button,
  Input,
  Textarea,
  Grid,
  GridItem,
  FormControl,
  FormErrorMessage,
  useColorModeValue,
} from '@chakra-ui/react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { sendEmail } from '../lib/api';
import useTranslation from '../hooks/useTranslation';
import config from '../config';
import { LanguageContext } from '../contexts/LanguageContext';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { t } = useTranslation();

  const [reCaptchaValue, setReCaptchaValue] = useState<string | null>(null);
  const [isReCaptchaVerified, setIsReCaptchaVerified] = useState<
    boolean | null
  >(null);
  const { locale } = useContext(LanguageContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const recaptchaRef = useRef() as MutableRefObject<ReCAPTCHA>;

  const onSubmit: SubmitHandler<Inputs> = ({ name, email, message }) => {
    if (isReCaptchaVerified) {
      const templateParams = {
        from_name: name,
        from_email: email,
        message,
        'g-recaptcha-response': reCaptchaValue,
      };

      sendEmail(templateParams)
        .then(() => {
          toast.dark(t('emailSent'));
          reset();
          recaptchaRef.current.reset();
          setReCaptchaValue(null);
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
      setReCaptchaValue(recaptchaRef.current.getValue());
      setIsReCaptchaVerified(true);
    } else {
      setReCaptchaValue(null);
      setIsReCaptchaVerified(false);
    }
  };

  return (
    <Grid
      as="form"
      templateRows="repeat(4, auto)"
      templateColumns="repeat(2, auto)"
      gap={3}
      onSubmit={handleSubmit(onSubmit)}
    >
      <GridItem colSpan={[2, null, 1]}>
        <FormControl isInvalid={errors.name !== undefined}>
          <Input
            id="name"
            autoComplete="off"
            maxLength={255}
            backgroundColor={useColorModeValue('gray.200', 'dark.600')}
            placeholder={t('namePlaceholder')}
            _placeholder={{
              color: useColorModeValue('dark.800', 'gray.300'),
            }}
            {...register('name', {
              required: t('nameError'),
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
      </GridItem>
      <GridItem colSpan={[2, null, 1]}>
        <FormControl isInvalid={errors.email !== undefined}>
          <Input
            id="email"
            type="email"
            autoComplete="off"
            maxLength={255}
            backgroundColor={useColorModeValue('gray.200', 'dark.600')}
            placeholder={t('namePlaceholder')}
            _placeholder={{
              color: useColorModeValue('dark.800', 'gray.300'),
            }}
            {...register('email', {
              required: t('emailError'),
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <FormControl isInvalid={errors.message !== undefined}>
          <Textarea
            id="message"
            maxLength={500}
            rows={10}
            resize="none"
            backgroundColor={useColorModeValue('gray.200', 'dark.600')}
            placeholder={t('namePlaceholder')}
            _placeholder={{
              color: useColorModeValue('dark.800', 'gray.300'),
            }}
            {...register('message', {
              required: t('messageError'),
            })}
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <ReCAPTCHA
          ref={recaptchaRef}
          theme="dark"
          hl={`${locale}${locale === 'es' ? '-419' : ''}`} // If locale is 'es', '-419' is added, '' otherwise
          sitekey={config.recaptchaSiteKey!}
          onChange={onReCaptchaChange}
        />
        {isReCaptchaVerified === false && (
          <Text color="red.300" fontSize="sm">
            {t('reCaptchaNotVerified')}
          </Text>
        )}
      </GridItem>
      <GridItem colSpan={2}>
        <Button
          colorScheme="primary"
          width="full"
          isLoading={isSubmitting}
          type="submit"
        >
          {t('sendButton')}
        </Button>
      </GridItem>
    </Grid>
  );
};

export default ContactForm;
