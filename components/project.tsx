import { Fragment } from 'react';

type Props = {
  effect: 'zoom-in-up' | 'zoom-in-down';
  title: string;
  description: string;
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
      <div className="sm:w-80 md:w-96 lg:w-1/2 mb-4 lg:mb-0">
        <a href={website} target="_blank" rel="noopener noreferrer">
          <img
            className="w-full md:h-60 lg:h-80 rounded-lg"
            src={image}
            alt={title}
          />
        </a>
      </div>
      {/* project content */}
      <div className="w-full lg:w-1/2 lg:px-12">
        {/* project header */}
        <div>
          <h4 className="text-primary text-xl font-semibold mb-2">
            <a href={website} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h4>
        </div>
        {/* project body */}
        <div>
          <p>{description}</p>
          <div className="text-gray">
            Creado por:{' '}
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

        {/* project footer */}
        <div className="flex sm:block flex-col">
          <a
            className="font-medium text-center py-3 px-4 rounded-full bg-primary mb-4 md:mb-0 sm:mr-4"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver sitio
          </a>

          <a
            className="font-medium text-center py-3 px-4 rounded-full g-none sm:bg-secondary"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Código fuente
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
