import React from 'react'
import { NextPage } from 'next'
import WalletConnect from 'components/Common/WalletConnect'


const MyPage:NextPage = () => {
  return (
    <div>
      <h1>MyPage</h1>
      <WalletConnect />
    </div>
  )
}

export default MyPage