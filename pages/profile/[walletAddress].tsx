/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { ThirdwebNftMedia, useAddress, useContract, useDisconnect, useOwnedNFTs } from '@thirdweb-dev/react';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Profile() {
    const router = useRouter();
    const address = useAddress();
    const disconnect = useDisconnect();

    const {
        contract
    } = useContract('0xf477131536c385c112A3A569d44015e51838cbE2', 'edition-drop');

    const {
        data: ownedNfts,
        isLoading: loadingOwnedNfts,
    } = useOwnedNFTs(contract, address);

    const signout = () => {
        disconnect();
        router.push('/');
    };

    return (
        <div>
            {/*<div>Sidebar</div>*/}
            <button className={styles.receipt} onClick={signout}>Sign Out</button>
            <h1 className={styles.receipt}>NFT Receipts:</h1>
            {!loadingOwnedNfts && ownedNfts ? (
                ownedNfts.length > 0 ? (
                    <div className={styles.grid}>
                        {ownedNfts.map((nft) => (
                            <div className={styles.artCard} key={nft.metadata.id}>
                                <ThirdwebNftMedia
                                    metadata={nft.metadata}
                                />
                                <div className={styles.cardContent}>
                                    <h3>{nft.metadata.name}</h3>
                                    <p>QTY: {nft.quantityOwned}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.receipt}>You haven't purchased any of our services yet</p>
                )
            ) : (
                <p className={styles.receipt}>Loading...</p>
            )}
        </div>
    )
}