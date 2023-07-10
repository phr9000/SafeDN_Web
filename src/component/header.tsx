import React from 'react'
import MainLogo from '../assets/images/ic_main_logo.svg'

const Header: React.FC = () => {
  return (
    <div className="headerWrapper">
      <img src={MainLogo} />
    </div>
  )
}

export default Header
