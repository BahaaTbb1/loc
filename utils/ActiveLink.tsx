import React from 'react';
import NextLink from 'next/link';
interface ILink {
  href: string;
  children: React.ReactNode;
}
const Link = ({ href, children }: ILink) => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <NextLink href={href}>{children}</NextLink>
    </div>
  );
};

export default Link;
