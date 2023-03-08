import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react';
import generalNft from '../public/fail.png';

const Card = ({
  nft,
  getImgUrl,
  setIsOpenModal,
  setNft,
}: {
  nft: any;
  getImgUrl: any;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setNft: any;
}) => {
  const [isImageError, setIsImageError] = useState(false);

  return (
    <div
      className='bg-white rounded-[1.25rem] p-5 cursor-pointer'
      onClick={() => {
        setIsOpenModal(true);
        setNft(nft);
      }}
    >
      <div className='w-full h-[20.375rem] relative rounded-[1.25rem] overflow-hidden'>
        <Image
          src={isImageError ? generalNft : getImgUrl(nft.metadata)}
          alt='Nft'
          fill
          objectFit='cover'
          onError={() => setIsImageError(true)}
        />
      </div>
      <div className='mt-5 text-xl font-bold font-sans'>{nft?.name}</div>
    </div>
  );
};

export default Card;
