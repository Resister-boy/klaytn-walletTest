import React from 'react'
import { NextPage } from'next'

const UserProfile:NextPage = () => {

  const checkIsConnected = () => {
    console.log(window.klaytn)
  }
  return (
    <div>
      UserProfile
      <button onClick={checkIsConnected}>버튼!</button>
    </div>
  )
}

export default UserProfile