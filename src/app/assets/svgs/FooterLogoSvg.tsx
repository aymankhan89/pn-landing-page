import React from "react";

const FooterLogoSvg = () => {
  return (
    <svg
      width="144"
      height="38"
      viewBox="0 0 144 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      filter="url(#whiteFilter)"
    >
      <rect
        y="8.44"
        width="20.24"
        height="21.12"
        fill="url(#pattern0_109_24)"
      />
      <rect
        x="23.54"
        y="0.299988"
        width="119.35"
        height="37.4"
        fill="url(#pattern1_109_24)"
      />
      <defs>
        {/* Force every pixel to white (preserving alpha) */}
        <filter id="whiteFilter">
          <feColorMatrix
            type="matrix"
            values="
              0 0 0 0 1
              0 0 0 0 1
              0 0 0 0 1
              0 0 0 1 0
            "
          />
        </filter>

        {/* Icon pattern */}
        <pattern
          id="pattern0_109_24"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_109_24" transform="scale(0.0217391 0.0208333)" />
        </pattern>

        {/* Wordmark pattern */}
        <pattern
          id="pattern1_109_24"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image1_109_24" transform="scale(0.0046083 0.0147059)" />
        </pattern>

        {/* Paste your original base64 data here */}
        <image
          id="image0_109_24"
          width="46"
          height="48"
          preserveAspectRatio="none"
          href="data:image/png;base64,<<PASTE_IMAGE0_BASE64_HERE>>"
        />

        <image
          id="image1_109_24"
          width="217"
          height="68"
          preserveAspectRatio="none"
          href="data:image/png;base64,<<PASTE_IMAGE1_BASE64_HERE>>"
        />
      </defs>
    </svg>
  );
};

export default FooterLogoSvg;
