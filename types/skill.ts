import BackgroundColorType from './backgroundColor';
import ImageType from './image';

type SkillType = {
  _id: string;
  name: string;
  backgroundColor: BackgroundColorType;
  logo: ImageType;
};

export default SkillType;
