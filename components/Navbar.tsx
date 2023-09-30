/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'

export default function Navbar() {
    const address = useAddress();
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div>
                    <Link href="/">
                    <img 
                            src="https://tomato-recent-halibut-222.mypinata.cloud/ipfs/QmRHJW7EXW5fgFLWToScauhNmHhCNJYa3KqXtDqninsV6S?pinataGatewayToken=rxbfJwqWt95BLT5tYJpRnWPBYwjhS-1IYpvfntaKXAr9dK2gDPDOj_m9bXcVnO5c&_gl=1*wjgr06*_ga*MTcwOTI2NDY3Mi4xNjk1OTQ1ODUz*_ga_5RMPXG14TE*MTY5NTk1MDA4MC4yLjAuMTY5NTk1MDA4MC42MC4wLjA." 
                            alt="logo" 
                            className={styles.avatar}
                        />
                    </Link>
                </div>
                <div className={styles.receipt}>
                    <Link href="/marketplace">
                        <Button as={NextLink} href='/marketplace'>
                          Dashboard
                        </Button>
                    </Link>
                </div>
                <div>
                    {!address ? (
                        <ConnectWallet
                            btnTitle="Login"
                        />
                    ) : (
                        <Link href={`/profile/${address}`}>
                        <img 
                            src="https://tomato-recent-halibut-222.mypinata.cloud/ipfs/QmRdzJYcWGj8DMaCoUgimK2qcBq3LPVeCoa1CZPZirwUpF?pinataGatewayToken=rxbfJwqWt95BLT5tYJpRnWPBYwjhS-1IYpvfntaKXAr9dK2gDPDOj_m9bXcVnO5c&_gl=1*1ghvp4y*_ga*MTcwOTI2NDY3Mi4xNjk1OTQ1ODUz*_ga_5RMPXG14TE*MTY5NTk1MDA4MC4yLjAuMTY5NTk1MDA4MC42MC4wLjA." 
                            alt="avatar" 
                            className={styles.avatar}
                        />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}