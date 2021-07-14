import React, { Fragment, useContext } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import useTranslation from '../hooks/useTranslation';
import { LanguageContext } from '../contexts/LanguageContext';

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
      <div className="text-gray">
        {t('createdBy')}:{' '}
        {members.map((member, index) => (
          <Fragment key={member._id}>
            <a
              className="text-primary"
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
      <div className="flex flex-wrap mt-4 mb-8">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="text-sm py-1 px-3 rounded-full bg-secondary mr-2 mb-2"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBody;
