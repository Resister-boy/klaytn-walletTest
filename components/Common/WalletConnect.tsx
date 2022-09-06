import React, { useContext } from 'react'
import { AppContext } from '../../context/WalletContext'

const WalletConnect = () => {
  const {isConnected, walletAddress, networkVersion, connectWallet } = useContext(AppContext);
  console.log(isConnected, walletAddress, )

  const ConnectWallet = async () => {
    if (typeof window !== "undefined" && isConnected === false) {
      connectWallet()
    }
  }

  return (
    <div>
      {walletAddress}
      <button onClick={ConnectWallet}>클릭</button>
    </div>
  )
}

export default WalletConnect