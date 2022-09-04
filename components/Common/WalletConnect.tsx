import React, { useContext, useState, useEffect } from 'react'
import { WalletContext } from 'context/WalletContext'
import { Window } from '../../interface/index'

const WalletConnect = () => {
  const { klaytn } = useContext(WalletContext)
  // console.log('Before Coonnect', klaytn)
  const [ isConnect, SetIsConnect ] = useState(klaytn)
  
  useEffect(() => {

  }, [isConnect])

  const connectWallet= () => {
    window.klaytn.enable()
    SetIsConnect(window.klaytn.selectedAddress)
    console.log(window.klaytn)
  }

  return (
    <div>
      {isConnect}
      {isConnect === undefined 
      ? (
        <h1>지갑이 연결되지 않았습니다 </h1>
      )
      : (
        <h1>지갑이 연결되었습니다</h1>
      )}
      <button onClick={connectWallet}>버튼</button>
    </div>
  )
}

export default WalletConnect