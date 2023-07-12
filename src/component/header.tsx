import React, { useState } from 'react'
import MainLogo from '../assets/images/ic_main_logo.svg'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const mainTabData: string[] = ['분양', '커뮤니티', '업체', '고객센터']
  const [isSubmenu, setisSubmenu] = useState<boolean>(false)
  const navigate = useNavigate()

  const tabClick = () => {
    setisSubmenu(!isSubmenu)
  }

  const loginClick = () => {
    navigate('/')
  }

  return (
    <div className="headerWrapper">
      <div className="logoWrapper">
        <img src={MainLogo} className="logo" />
        <p className="logoName">세이프 댕냥</p>
      </div>
      <ul className="menuTabWrapper">
        {mainTabData.map((item, index) => {
          return (
            <li key={index}>
              <p onClick={tabClick}>{item}</p>
            </li>
          )
        })}
      </ul>
      <button className="loginBtn" onClick={loginClick}>
        로그인
      </button>
    </div>
  )
}

export default Header
