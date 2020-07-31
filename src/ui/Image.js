import React from "react";

function Image({ src, alt, className, width, height }) {
  return (
    <picture width={width} height={height}>
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
