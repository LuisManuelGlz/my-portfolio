import { Container, Box, useColorModeValue } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <Box as="footer" background={useColorModeValue('gray.200', 'dark.900')}>
      <Container maxW="container.md">
        <Box display="flex" justifyContent="center" padding={8}>
          <SocialIcon
            style={{ height: 45, width: 45, marginRight: 20 }}
            url="https://github.com/LuisManuelGlz"
            target="_blank"
            rel="noopener noreferrer"
            network="github"
            bgColor={useColorModeValue('', '#ffffff')}
          />
          <SocialIcon
            style={{ height: 45, width: 45, marginRight: 20 }}
            url="https://www.linkedin.com/in/luismanuelglz"
            target="_blank"
            rel="noopener noreferrer"
            network="linkedin"
            bgColor={useColorModeValue('', '#ffffff')}
          />
          {/* <SocialIcon
            style={{ height: 45, width: 45, marginRight: 20 }}
            url="https://twitter.com/LuisManuelGlz_"
            target="_blank"
            rel="noopener noreferrer"
            network="twitter"
            bgColor={useColorModeValue('', '#ffffff')}
          /> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
