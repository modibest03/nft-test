import React from 'react';

const VectorLeft = (props: any) => {
  return (
    <svg
      width={438}
      height={1175}
      viewBox='0 0 438 1175'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g opacity={0.34} filter='url(#filter0_f_4_7)'>
        <path
          d='M60.88 920.301c-60.05 60.162-202.854 84.989-254.987 38.99-52.133-45.995-57.292-206.529-57.812-314.959-.52-108.429 2.166-279.03 54.693-335.616 52.526-56.587 199.895-52.168 260.466-3.901 60.57 48.267 126.063 141.188 102.957 293.503'
          fill='url(#paint0_linear_4_7)'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_4_7'
          x={-518.968}
          y={0.444946}
          width={956.917}
          height={1249.64}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            stdDeviation={133.5}
            result='effect1_foregroundBlur_4_7'
          />
        </filter>
        <linearGradient
          id='paint0_linear_4_7'
          x1={14.8569}
          y1={352.449}
          x2={14.8569}
          y2={1068.09}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#8ECAE6' />
          <stop offset={1} stopColor='#030E3F' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VectorLeft;
