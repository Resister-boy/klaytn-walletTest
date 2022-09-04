import React from 'react'
import { Window }  from '../../interface/index'



const WalletConnect = () => {

  const connectWallet= () => {
    window.klaytn.enable()
    console.log(window.klaytn)
  }

  return (
    <div>
      <button onClick={connectWallet}>버튼</button>
    </div>
  )
}

export default WalletConnect