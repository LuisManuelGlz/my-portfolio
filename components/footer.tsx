import { SocialIcon } from 'react-social-icons';
import Container from './container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="py-8 flex justify-center">
          <SocialIcon
            style={{ height: 40, width: 40, marginRight: 20 }}
            url="https://github.com/LuisManuelGlz"
            target="_blank"
            rel="noopener noreferrer"
            network="github"
            bgColor="#FFFFFF"
          />
          <SocialIcon
            style={{ height: 40, width: 40, marginRight: 20 }}
            url="https://linkedin.com/in/luismanuelglz"
            target="_blank"
            rel="noopener noreferrer"
            network="linkedin"
            bgColor="#FFFFFF"
          />
          <SocialIcon
            style={{ height: 40, width: 40, marginRight: 20 }}
            url="https://twitter.com/LuisManuelGlz_"
            target="_blank"
            rel="noopener noreferrer"
            network="twitter"
            bgColor="#FFFFFF"
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
