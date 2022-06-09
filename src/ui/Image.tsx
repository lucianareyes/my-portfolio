import React from "react";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
  width?: any;
  height?: any;
};

function Image({ src, alt, className, width, height }: Props) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.png`} type="image/png" />
      <img
        src={`${src}.png`}
        alt={alt}
        className={className}
        width={width}
        height={height}
      />
    </picture>
  );
}

export default Image;
