import { ImageLoaderProps } from 'next/image';

export const getFileExtension = (fileName: string): string =>
  fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2);

export const generateUEID = () => {
  let first = ((Math.random() * 46656) | 0).toString();
  let second = ((Math.random() * 46656) | 0).toString();
  first = ('000' + first.toString()).slice(-3);
  second = ('000' + second.toString()).slice(-3);

  return first + second;
};

export const ImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `http://95.217.203.101:8000${src}?w=${width}`;
};
