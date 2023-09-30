import NextLink from 'next/link'
import type { NextPage } from "next";
import { Button, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';



const Marketplace: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
            <Heading>Better Options Real Estate NFT Dashboard</Heading>
            <Link href="/buy">
                        <Button as={NextLink} href='/marketplace'>
                         Click image to enter marketplace
                        </Button>
                    </Link>
            <Link href="https://real-estate-nft-marketplace.netlify.app/">
                <Image 
                    src="https://tomato-recent-halibut-222.mypinata.cloud/ipfs/QmRNghdWiRBif6Z5TB5bDtpYs37ZjkPzuCaHJTfM1dbUVd?pinataGatewayToken=rxbfJwqWt95BLT5tYJpRnWPBYwjhS-1IYpvfntaKXAr9dK2gDPDOj_m9bXcVnO5c&_gl=1*4wdm2g*_ga*MTcwOTI2NDY3Mi4xNjk1OTQ1ODUz*_ga_5RMPXG14TE*MTY5NjA5NzA0MS4zLjAuMTY5NjA5NzA0MS42MC4wLjA." 
                    alt="logo"
                    height={400}
                    width={400} 
                />
            </Link>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Marketplace;