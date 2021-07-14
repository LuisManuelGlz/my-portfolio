import React from 'react';
import useTranslation from '../hooks/useTranslation';

type Props = {
  website?: string;
  repo?: string;
};

const ProjectFooter = ({ website, repo }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex sm:block flex-col">
      <a
        className="font-medium text-center py-3 px-4 rounded-full bg-primary mb-4 md:mb-0 sm:mr-4"
        href={website}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('goToSite')}
      </a>

      <a
        className="font-medium text-center py-3 px-4 rounded-full g-none sm:bg-secondary"
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
