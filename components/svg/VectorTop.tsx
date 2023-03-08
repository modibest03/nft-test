import React from 'react';

const VectorTop = (props: any) => {
  return (
    <svg
      width={466}
      height={801}
      viewBox='0 0 466 801'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g opacity={0.34} filter='url(#filter0_f_4_9)'>
        <path
          d='M591.899 504.021c-63.384 40.236-147.667 41.35-201.707-8.25-54.039-49.599-119.272-200.275-122.531-289.347-3.259-89.072 44.828-180.739 102.979-245.084 58.151-64.346 179.283-189.826 245.926-140.99 66.643 48.835 158.041 320.06 153.93 434.005'
          fill='url(#paint0_linear_4_9)'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_4_9'
          x={0.504639}
          y={-457.673}
          width={1037.13}
          height={1258.31}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur
            stdDeviation={133.5}
            result='effect1_foregroundBlur_4_9'
          />
        </filter>
        <linearGradient
          id='paint0_linear_4_9'
          x1={519.067}
          y1={-190.673}
          x2={519.067}
          y2={533.637}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#8E80FF' />
          <stop offset={1} stopColor='#FF80F0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VectorTop;
