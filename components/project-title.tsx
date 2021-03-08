import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const ProjectTitle = ({ children }: Props) => {
  return (
    <h4 className="text-primary text-xl font-semibold mb-2">
      {children}
    </h4>
  );
}

export default ProjectTitle;
