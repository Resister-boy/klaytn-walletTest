import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import WalletConnect from 'components/Common/WalletConnect'

const MyPage:NextPage = () => {
  return (
    <div>
      <h1>MyPage</h1>
      <Link href="/">
        Home
      </Link>
      <WalletConnect />
    </div>
  )
}

export default MyPage