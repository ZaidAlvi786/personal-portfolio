import React from 'react';

interface IconProps {
  fillColor?: string;
  width?: string;
  height?: string;
}

const DotBoxIcon: React.FC<IconProps> = ({ fillColor = '#928dab', width = '800px', height = '800px' }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    fill={fillColor}
    height={height}
    width={width}
    viewBox="0 0 210 140" // Adjusted viewBox height
  >
    <g id="XMLID_12_">
      {/* First Row */}
      <rect x="25" y="25" width="20" height="20" />
      <rect x="95" y="25" width="20" height="20" />
      <rect x="165" y="25" width="20" height="20" />

      {/* Second Row */}
      <rect x="25" y="95" width="20" height="20" />
      <rect x="95" y="95" width="20" height="20" />
      <rect x="165" y="95" width="20" height="20" />
    </g>
  </svg>
);

export default DotBoxIcon;
