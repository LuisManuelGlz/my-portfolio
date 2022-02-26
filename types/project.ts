import ImageType from './image';
import LocaleBlockType from './localeBlock';
import Member from './member';
import Tag from './tag';

type ProjectType = {
  _id: string;
  title: string;
  description: LocaleBlockType;
  members: Member[];
  tags: Tag[];
  image: ImageType;
  website: string;
  repo: string;
};

export default ProjectType;
