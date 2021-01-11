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
    <>
      <div
        className={`flex flex-col lg:flex-row items-center lg:w-11/12 mb-8 text-dark ${
          effect === 'zoom-in-down' && 'lg:flex-row-reverse'
        }`}
        data-aos={effect}
      >
        <img
          className="w-80 md:w-96 lg:w-3/6 h-52 md:h-64 lg:h-80 rounded-lg"
          src={image}
          alt={title}
        />
        <div className="w-3/4 lg:w-3/6 lg:px-12">
          <h4 className="text-2xl font-light">{title}</h4>
          <div className="font-extralight">
            <p>{description}</p>
            <div className="mt-1">
              Creado por:{' '}
              {members.map((member, index) => (
                <Fragment key={member._id}>
                  <a
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
            <div className="flex flex-wrap text-sm mt-4">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-full py-1 px-2 mb-1 mr-2 bg-gray"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-6 lg:mt-12 font-light">
            <a
              className="button relative py-2 px-3 mr-4"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sitio
            </a>

            <a
              className="button relative py-2 px-3"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Código fuente
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .button::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            border-radius: 50px;
            background: currentColor;
            width: 40px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 250ms ease-in-out;
          }

          .button:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        `}
      </style>
    </>
  );
};

export default Project;
