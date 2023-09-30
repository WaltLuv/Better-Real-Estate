import type { AppProps } from "next/app";
import { ThirdwebProvider, paperWallet, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";
//const clientId = "8d9f437f988cf37815584e12eb2633f1";
//const secretKey = "mJrGfHF1z6NBom4OU44tLZGGqMqhhoN-5fUi_-WMjTAishOAX2KFDz-xLf8D4lFGzUQh7xv7u_XRNGJaysatRw"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      //clientId={clientId}
      supportedWallets={[metamaskWallet(),
        paperWallet({
          paperClientId: "b4a76ecf-c2d3-49b2-a471-8022e11a079b" 
        }),
      ]}  
    >
     <ChakraProvider> 
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
