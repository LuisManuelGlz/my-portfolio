import { ReactNode, HTMLAttributes } from 'react';
import styles from './common-link.module.scss';

type Props = {
  children: ReactNode;
  href: string;
};

const CommonLink = ({ children, href }: Props) => {
  return (
    <a
      className={styles.commonLinkContainer}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default CommonLink;
