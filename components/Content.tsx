import React, { Dispatch, SetStateAction } from 'react';
import Card from './Card';
import Loader from './Loader';

const Content = ({
  address,
  setAddress,
  getNft,
  nfts,
  getImgUrl,
  setIsOpenModal,
  setNft,
  isLoading,
}: {
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  getNft: (e: any) => Promise<void>;
  nfts: any;
  getImgUrl: any;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setNft: any;
  isLoading: boolean;
}) => {
  return (
    <div className='mt-[3rem] md:mt-[7.75rem]'>
      <h1 className='text-[#03045E] text-4xl md:text-6xl font-extrabold text-center leading-tight'>
        Revolutionize your world <br className='hidden md:flex' /> with Fluxify
        NFTs
      </h1>

      <form className='flex justify-center mt-10' onSubmit={getNft}>
        <input
          type='text'
          placeholder='Search by Address'
          className='p-6 border-solid border-[1px] font-sans text-xl border-[#4F4F4F] rounded-[1.25rem] basis-[100%] lg:basis-[50%] placeholder:text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </form>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-x-5 gap-y-10'>
        {isLoading ? (
          <>
            {' '}
            {Array(6)
              .fill(undefined)
              .map((_, index) => (
                <Loader key={index} />
              ))}
          </>
        ) : (
          <>
            {nfts.map((nft: any, index: number) => (
              <Card
                key={index}
                nft={nft}
                getImgUrl={getImgUrl}
                setIsOpenModal={setIsOpenModal}
                setNft={setNft}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
