import React, { Fragment, useContext } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import useTranslation from '../../hooks/useTranslation';
import { LanguageContext } from '../../contexts/LanguageContext';
import styles from './project-body.module.scss';

type Props = {
  description: any;
  members: any[];
  tags: string[];
};

const ProjectBody = ({ description, members, tags }: Props) => {
  const { locale } = useContext(LanguageContext);
  const { t } = useTranslation();

  const link = ({ mark: { href }, children }) => (
    <a
      className="text-primary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );

  return (
    <div>
      <BlockContent
        blocks={description[locale]}
        serializers={{ marks: { link } }}
      />
      <div className={styles.projectBodyCreatedByContainer}>
        {t('createdBy')}:{' '}
        {members.map((member, index) => (
          <Fragment key={member._id}>
            <a
              className={styles.projectBodyAuthorLink}
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {member.name}
            </a>
            {/* it adds a coma for each member except the last one */}
            {index + 1 !== members.length && ', '}
          </Fragment>
        ))}
      </div>
      <div className={styles.projectBodyTagsContainer}>
        {tags.map((tag, index) => (
          <div key={index} className={styles.projectBodyTag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBody;
