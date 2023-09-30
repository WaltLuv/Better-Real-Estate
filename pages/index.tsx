import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Lottie from "lottie-react";
import homeAnimation from '../public/images/home.json';


const Home: NextPage = () => {
  const {
    contract
  } = useContract('0xf477131536c385c112A3A569d44015e51838cbE2', 'edition-drop');
  const {
    data: nfts,
    isLoading: loadingNfts,
  } = useNFTs(contract);

  return (
    <div className={styles.container}>
          <Lottie animationData={homeAnimation} 
          loop={true} 
          className={styles.heroBanner} 
          alt='' 
          />
          <div className={styles.receipt}>
            <h1>Better Options NFTs</h1>
          </div>
        {!loadingNfts && nfts && (
          <div className={styles.grid}>
            {nfts.map((nft) => (
              <Link href={`/artwork/${nft.metadata.id}`} key={nft.metadata.id}>
                <div className={styles.artCard}>
                  <ThirdwebNftMedia
                    metadata={nft.metadata}
                  />
                  <div className={styles.cardContent}>
                    <h3>{nft.metadata.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
    </div>
  );
};

export default Home;
