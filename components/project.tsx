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
    <div className="project" data-aos={fade}>
      <img className="project__image" src={image} alt="" />
      <div className="project__overlay" />

      <div className="project__content">
        <h4 className="project__title">{title}</h4>
        <div className="project__tags">
          {tags.map((tag, index) => (
            <div key={index} className="project__tags_tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="project__body">
          <p>{description}</p>
          Creado por:{' '}
          {members.map((member, index) => (
            <Fragment key={index}>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                {member.name}
              </a>
              {index + 1 !== members.length && ', '}
            </Fragment>
          ))}
        </div>
        <div className="project__footer">
          <a
            className="project__button project__button_light"
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

      <style>
        {`
        .project {
          position: relative;
          width: 75%;
          height: 400px;
          padding: 50px;
          box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
        }
        
        .project__image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .project__overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: rgba(0, 0, 0, 0.8);
        }
        
        .project__content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          z-index: 20;
        }
        
        .project__title {
          font-size: 1.5em;
          color: var(--root-text-color-dark);
          font-weight: 200;
        }
        
        .project__tags {
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--root-text-color-dark);
        }
        
        .project__tags_tag {
          margin-left: 15px;
        }
        
        .project__body {
          font-size: 1.2em;
          color: var(--root-text-color-dark);
          font-weight: 200;
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
          text-transform: uppercase;
          color: var(--root-text-color-dark);
        }
        
        .project__button_light {
          background: var(--root-background-light);
          color: var(--root-text-color-light);
        }
        `}
      </style>
    </div>
  );
};

export default Project;
