import React, { ReactNode } from 'react';
import styles from './project-title.module.scss';

type Props = {
  children?: ReactNode;
};

const ProjectTitle = ({ children }: Props) => {
  return <h4 className={styles.projectTitleContainer}>{children}</h4>;
};

export default ProjectTitle;
