import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import generalNft from '../public/fail.png';

const CardDetails = ({ nft, getImgUrl }: { nft: any; getImgUrl: any }) => {
  const [isImageError, setIsImageError] = useState(false);

  return (
    <div className='lg:flex gap-x-12'>
      <div className='w-full h-[33.25rem] relative rounded-[1.25rem] overflow-hidden object-cover basis-[40%]'>
        <Image
          src={isImageError ? generalNft : getImgUrl(nft.metadata)}
          alt='Nft'
          fill
          objectFit='cover'
          onError={() => setIsImageError(true)}
        />
      </div>
      <div className='basis-[60%] mt-10 overflow-x-scroll'>
        <h2 className='font-bold text-3xl mb-6'>{nft?.name}</h2>
        <div className='text-2xl font-bold font-sans'>Description</div>
        <div className='font-sans text-base mt-2 text-[#828282]'>
          {JSON.parse(nft?.metadata)?.description}
        </div>
        <div className='text-2xl font-bold font-sans mt-6 mb-2'>Details</div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-4 text-base font-sans mb-3'>
          <div className='text-[#828282] lg:col-span-1'>Owners Address:</div>
          <div className='lg:col-span-3'>{nft?.owner_of}</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-3 text-base font-sans mb-3'>
          <div className='text-[#828282] lg:col-span-1'>Minter Address:</div>
          <div className='lg:col-span-3'>{nft?.minter_address}</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-10 text-base font-sans mb-3'>
          <div className='text-[#828282] lg:col-span-1'>Symbol:</div>
          <div className='lg:col-span-3'>{nft?.symbol}</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-10 text-base font-sans mb-3'>
          <div className='text-[#828282] lg:col-span-1'>Token Address:</div>
          <div className='lg:col-span-3'>{nft?.token_address}</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-10 text-base font-sans mb-3'>
          <div className='text-[#828282] lg:col-span-1'>Token Hash:</div>
          <div className=''>{nft?.token_hash}</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-10 text-base font-sans'>
          <div className='text-[#828282] lg:col-span-1'>Token Id:</div>
          <div className='lg:col-span-3'>{nft?.token_id}</div>
        </div>

        <div className='font-sans flex justify-end mt-5'>
          <Link
            href={`https://opensea.io/assets/ethereum/${nft?.token_address}/${nft?.token_id}`}
            target='_blank'
          >
            <button className='bg-black text-white py-4 px-10 rounded-[1.25rem]'>
              Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
