import { useContext, ReactNode } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import {
  Text,
  Box,
  HStack,
  Image,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import ISiteSettings from '../types/siteSettings';
import ISkill from '../types/skill';
import { getSiteSettings, getSkills } from '../lib/api';
// import { getSiteSettings, getSkills } from '../lib/api.dev';
import useTranslation from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';
import Section from '../components/section';
import Title from '../components/title';
import MarkLink from '../components/mark-link';

type Props = {
  siteSettings: ISiteSettings;
  skills: ISkill[];
};

const Home = ({ siteSettings: { greeting, role, about }, skills }: Props) => {
  const { locale } = useContext(LanguageContext);
  const { t } = useTranslation();

  const serializers = {
    types: {
      block: ({ children }: { children: ReactNode }) => (
        <Text as="p" fontSize={{ base: '18px', sm: '24px' }} textAlign="center">
          {children}
        </Text>
      ),
    },
    marks: { link: MarkLink },
  };

  return (
    <Box>
      <Section delay={0.1}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="90vh"
        >
          <Heading
            as="h1"
            textAlign="center"
            color="primary.500"
            marginBottom="24px"
            fontSize={{ base: '50px', sm: '70px', md: '90px' }}
          >
            {greeting[locale]}
          </Heading>
          <Text
            color={useColorModeValue('dark', 'gray.100')}
            fontSize={{ base: 'lg', sm: '2xl', md: '3xl' }}
          >
            {role[locale]}
          </Text>
        </Box>
      </Section>

      {/* about */}
      <Section delay={0.1}>
        <Box
          textAlign="center"
          margin="auto"
          width={{ sm: '90%', md: '80%' }}
          marginBottom={14}
        >
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
        </Box>
      </Section>
    </Box>
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
