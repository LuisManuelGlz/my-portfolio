import { Container, Box } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <Box as="footer">
      <Container maxW="container.lg">
        <Box display="flex" justifyContent="center" padding={8}>
          <SocialIcon
            style={{ height: 45, width: 45, marginRight: 20 }}
            url="https://github.com/LuisManuelGlz"
            target="_blank"
            rel="noopener noreferrer"
            network="github"
            bgColor="#FFFFFF"
          />
          <SocialIcon
            style={{ height: 45, width: 45, marginRight: 20 }}
            url="https://www.linkedin.com/in/luismanuelglz"
            target="_blank"
            rel="noopener noreferrer"
            network="linkedin"
            bgColor="#FFFFFF"
          />
          {/* <SocialIcon
            style={{ height: 45, width: 45, marginRight: 20 }}
            url="https://twitter.com/LuisManuelGlz_"
            target="_blank"
            rel="noopener noreferrer"
            network="twitter"
            bgColor="#FFFFFF"
          /> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
