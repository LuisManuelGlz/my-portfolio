import Member from './member';

type ProjectType = {
  _id: string;
  title: string;
  description: string;
  members: Member[];
  tags: string[];
  image: { asset: { url: string } };
  website: string;
  repo: string;
};

export default ProjectType;
