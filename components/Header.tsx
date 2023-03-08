import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div>
      <div>
        <Image
          src='/logo.png'
          alt='Picture of the author'
          width={116}
          height={38}
          priority
        />
      </div>
    </div>
  );
};

export default Header;
