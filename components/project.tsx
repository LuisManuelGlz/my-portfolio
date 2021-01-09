import { Fragment } from 'react';

type Props = {
  fade: 'fade-left' | 'fade-right';
  title: string;
  description: string;
  image: string;
  website: string;
  repo: string;
  members: any[];
  tags: string[];
};

const Project = ({
  fade,
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
      <div className={`project ${fade === 'fade-right' && 'project__direction_reverse'}`} data-aos={fade}>
        <img className="project__image" src={image} alt={title} />
        <div className="project__content">
          <h4 className="project__title">{title}</h4>
          <div className="project__body">
            <p>{description}</p>
            <div className="project__members">
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
            <div className="project__tags">
              {tags.map((tag, index) => (
                <div key={index} className="project__tags_tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="project__footer">
            <a
              className="project__button"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sitio
            </a>

            <a
              className="project__button"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Código fuente
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
        .project {
          width: 100%;
          display: flex;
          margin-bottom: 2em;
          height: 400px;
        }

        .project__direction_reverse {
          flex-direction: row-reverse;
        }

        .project__image {
          width: 60%;
          border-radius: 10px
        }

        .project__content {
          width: 40%;
          padding: 2em;
        }
        
        .project__title {
          font-size: 1.5em;
          color: var(--root-text-color-light);
          font-weight: 300;
        }
        
        .project__body {
          font-weight: 200;
        }

        .project__tags {
          display: flex;
          padding: 30px 10px;
          font-size: 0.8rem;
          color: var(--root-text-color-dark);
        }
        
        .project__tags_tag {
          background: var(--root-background-dark);
          font-weight: 400;
          padding: 5px 10px;
          border-radius: 50px;
          margin-right: 10px;
          opacity: 0.8;
        }
        
        .project__footer {
          margin-top: 50px;
          display: flex;
          justify-content: flex-end;
        }
        
        .project__button {
          font-weight: 300;
          margin-left: 20px;
          padding: 10px 15px;
          color: var(--root-text-color-light);
          position: relative;
        }

        .project__button::after {
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

        .project__button:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        `}
      </style>
    </>
  );
};

export default Project;
