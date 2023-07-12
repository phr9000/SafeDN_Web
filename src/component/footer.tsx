import React from 'react'
import FooterLogo from '../assets/images/ic_footer_logo.svg'

const Footer: React.FC = () => {
  return (
    <div className="footerWrapper">
      <div className="infoWrapper">
        <div className="customerServiceWrapper">
          <p className="basicFont customerService">고객센터</p>
          <p className="emphasisFont">1577-1577</p>
        </div>
        <div className="policyWrapper">
          <p className="basicFont">개인정보처리방침</p>
          <p className="basicFont">운영약관</p>
          <p className="basicFont">분양관련약관</p>
        </div>
        <div className="companyWrapper">
          <div className="representativeWrapper">
            <p className="basicFont">
              인천광역시 인천주소인천주소 12345-56 1234567호
            </p>
            <p className="basicFont representative">대표이사 : 오현빈</p>
          </div>
          <p className="copyrightFont">
            COPYRIGHT © SAFEDANGNANG.CO.,LTD.ALL RIGHTS RESERVES
          </p>
        </div>
      </div>
      <div className="logooWrapper">
        <img src={FooterLogo} className="logo" />
        <p className="logoFont">세이프댕냥</p>
      </div>
    </div>
  )
}

export default Footer
