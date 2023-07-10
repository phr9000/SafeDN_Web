import React from 'react'
import MainLogo from '../assets/images/ic_main_logo.svg'

const mainTabData: string[] = ['분양', '커뮤니티', '업체', '고객센터']

const Header: React.FC = () => {
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
              <p>{item}</p>
            </li>
          )
        })}
      </ul>
      <button className="loginBtn">로그인</button>
    </div>
  )
}

export default Header
