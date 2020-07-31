import React from "react";

function Image({ src, alt, className, width, height }) {
  return (
    <picture>
      <source srcset={`${src}.webp`} type="image/webp" />
      <source srcset={`${src}.png`} type="image/png" />
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
