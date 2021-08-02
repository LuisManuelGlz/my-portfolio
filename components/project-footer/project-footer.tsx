import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import styles from './project-footer.module.scss';

type Props = {
  website?: string;
  repo?: string;
};

const ProjectFooter = ({ website, repo }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.projectFooterContainer}>
      <a
        className={styles.projectFooterGoToSiteButton}
        href={website}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('goToSite')}
      </a>

      <a
        className={styles.projectFooterSeeCodeButton}
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('seeCode')}
      </a>
    </div>
  );
};

export default ProjectFooter;
