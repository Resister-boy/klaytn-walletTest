import { useState } from 'react';
import { AppContext } from './WalletContext'

interface Props {
  children: JSX.Element | JSX.Element[];
} 

export const WalletProvider = ({ children }: Props) => {

  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>(undefined);
  const [networkVersion, setNetworkVersion] = useState<number>(undefined);

  const connectWallet = () => {
    if(typeof window !== "undefined" && window.klaytn.isKaikas === false) {
      window.open(
        "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"
      );
    } else {
      if(typeof window !== "undefined") {
        window.klaytn.enable()
          .then((result:string) => {
            setIsConnected(true)
            setWalletAddress(result)
            setNetworkVersion(window.klaytn.networkVersion)
            console.log(window.klaytn)
          })
      } else {
        if(typeof window !== "undefined") {
          setIsConnected(true)
          setWalletAddress(window.klaytn.selectedAddress)
          setNetworkVersion(window.klaytn.networkVersion)
        }
      }
    }   
  }

  return (
    <AppContext.Provider value={{ isConnected, walletAddress, networkVersion, connectWallet}}>
      { children }
    </AppContext.Provider>
  )
}