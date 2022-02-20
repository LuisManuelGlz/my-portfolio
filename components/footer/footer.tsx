import { Container } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import ISocialLinks from '../../types/socialLinks';
import styles from './footer.module.scss';

type Props = {
  socialLinks?: ISocialLinks;
};

const Footer = ({ socialLinks }: Props) => {
  return (
    <footer>
      <Container maxW="container.lg">
        footer goes here
        <div className={styles.footerContainer}>
          {socialLinks?.github && (
            <SocialIcon
              style={{ height: 45, width: 45, marginRight: 20 }}
              url={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              network="github"
              bgColor="#FFFFFF"
            />
          )}
          {socialLinks?.linkedIn && (
            <SocialIcon
              style={{ height: 45, width: 45, marginRight: 20 }}
              url={socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              network="linkedin"
              bgColor="#FFFFFF"
            />
          )}
          {socialLinks?.twitter && (
            <SocialIcon
              style={{ height: 45, width: 45, marginRight: 20 }}
              url={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              network="twitter"
              bgColor="#FFFFFF"
            />
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
