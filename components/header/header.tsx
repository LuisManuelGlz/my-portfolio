import { useState } from 'react';
import useTranslation from '../../hooks/useTranslation';
import Container from '../container';
import FlagButton from '../flag-button';
import styles from './header.module.scss';

type Props = {
  siteName: string;
};

const Header = ({ siteName }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className={styles.headerContainer}>
      <Container>
        <button
          id="hamburger"
          className={styles.headerHamburgerButton}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <span className={styles.headerTimesButton}>&times;</span>
          ) : (
            <>
              <div className={styles.headerHamburgerLine} />
              <div className={styles.headerHamburgerLine} />
              <div className={styles.headerHamburgerLine} />
            </>
          )}
        </button>
        <ul
          className={`${!isNavOpen && styles.headerList} ${
            styles.headerListFullScreen
          }`}
        >
          <li className={styles.headerSiteNameListItem}>
            <a
              id="badge"
              href="#"
              className={styles.headerSiteName}
              onClick={() => setIsNavOpen(false)}
            >
              {siteName}
            </a>
          </li>
          <div className={styles.headerDivider} />
          <li className={styles.headerListItem}>
            <a
              href="#projects"
              className={styles.headerLink}
              onClick={() => setIsNavOpen(false)}
            >
              {t('projects')}
            </a>
          </li>
          <li className={styles.headerListItem}>
            <a
              href="#about"
              className={styles.headerLink}
              onClick={() => setIsNavOpen(false)}
            >
              {t('about')}
            </a>
          </li>
          <li className={styles.headerListItem}>
            <a
              href="#contact"
              className={styles.headerLink}
              onClick={() => setIsNavOpen(false)}
            >
              {t('contact')}
            </a>
          </li>
          <li className={styles.headerFlags}>
            <FlagButton locale="en" />
            <FlagButton locale="es" />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Header;
