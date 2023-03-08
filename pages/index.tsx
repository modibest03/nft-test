import CardDetails from '@/components/CardDetails';
import Content from '@/components/Content';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import VectorLeft from '@/components/svg/VectorLeft';
import VectorTop from '@/components/svg/VectorTop';
import { EvmChain } from '@moralisweb3/common-evm-utils';
import Moralis from 'moralis';
import Head from 'next/head';
import { useState } from 'react';
import generalNft from '../public/fail.png';

export default function Home() {
  const [address, setAddress] = useState(
    '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'
  );
  const [nfts, setNfts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [nft, setNft] = useState(null);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  function getImgUrl(metadata: any) {
    if (!metadata) return generalNft;

    let meta = JSON.parse(metadata);

    if (!meta.image) return generalNft;

    if (meta.image.startsWith('https://arweave.net')) return meta.image;

    if (!meta.image.includes('ipfs://')) {
      return meta.image;
    } else {
      return 'https://ipfs.io/ipfs/' + meta.image.substring(7);
    }
  }

  const getNft = async (e: any) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      const chain = EvmChain.ETHEREUM;
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
        limit: 9,
      });
      setNfts(response.toJSON()?.result);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Fluxify</title>
        <meta name='description' content='Fluxify' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='px-5 lg:px-24 py-10 relative overflow-x-hidden'>
        <div className='absolute right-0 top-0 -z-10'>
          <VectorTop />
        </div>
        <div className='absolute left-0 bottom-0 -z-10'>
          <VectorLeft />
        </div>
        <Header />
        <Content
          setAddress={setAddress}
          address={address}
          getNft={getNft}
          nfts={nfts}
          getImgUrl={getImgUrl}
          setIsOpenModal={setIsOpenModal}
          setNft={setNft}
          isLoading={isLoading}
        />
      </div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <CardDetails nft={nft} getImgUrl={getImgUrl} />
      </Modal>
      {/* <button onClick={() => getNft()}>Run</button> */}
    </>
  );
}
