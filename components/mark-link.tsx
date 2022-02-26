import { Link } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type Props = {
  mark: { href: string };
  children: ReactNode;
};

const MarkLink = ({ mark, children }: Props) => {
  const { href } = mark;

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};

export default MarkLink;
