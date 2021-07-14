import ProjectHeader from './project-header';
import ProjectBody from './project-body';
import ProjectFooter from './project-footer';
import LocaleBlockType from '../types/localeBlock';

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
      className={`flex flex-col lg:flex-row w-11/12 mb-16 ${
        effect === 'zoom-in-down' && 'lg:flex-row-reverse'
      }`}
      data-aos={effect}
    >
      {/* project image */}
      <div className='sm:w-80 md:w-96 lg:w-1/2 mb-4 lg:mb-0'>
        <a href={website} target='_blank' rel='noopener noreferrer'>
          <img
            className='w-full md:h-60 lg:h-80 rounded-lg'
            src={image}
            alt={title}
          />
        </a>
      </div>
      {/* project content */}
      <div className='w-full lg:w-1/2 lg:px-12'>
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
