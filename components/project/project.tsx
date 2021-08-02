import ProjectHeader from '../project-header';
import ProjectBody from '../project-body';
import ProjectFooter from '../project-footer';
import LocaleBlockType from '../../types/localeBlock';
import styles from './project.module.scss';

type Props = {
  effect: 'zoom-in-up' | 'zoom-in-down';
  title: string;
  description: LocaleBlockType;
  image: string;
  website: string;
  repo: string;
  members: any[];
  tags: string[];
};

const Project = ({
  effect,
  title,
  description,
  image,
  website,
  repo,
  members,
  tags,
}: Props) => {
  return (
    <div
      className={`${styles.projectContainer} ${
        effect === 'zoom-in-down' && styles.projectContainerReverse
      }`}
      data-aos={effect}
    >
      {/* project image */}
      <div className={styles.projectImageContainer}>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <img className={styles.projectImage} src={image} alt={title} />
        </a>
      </div>
      {/* project content */}
      <div className={styles.projectContent}>
        {/* project header */}
        <ProjectHeader title={title} website={website} />

        {/* project body */}
        <ProjectBody description={description} members={members} tags={tags} />

        {/* project footer */}
        <ProjectFooter website={website} repo={repo} />
      </div>
    </div>
  );
};

export default Project;
