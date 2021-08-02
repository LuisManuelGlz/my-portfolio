import React from 'react';
import ProjectTitle from '../project-title';

type Props = {
  title: string;
  website?: string;
};

const ProjectHeader = ({ title, website }: Props) => {
  return (
    <div>
      <ProjectTitle>
        {/* if project has a website then the title will be a link
          else it'll be just a text */}
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </ProjectTitle>
    </div>
  );
};

export default ProjectHeader;
