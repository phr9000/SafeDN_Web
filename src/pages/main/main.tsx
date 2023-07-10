import React from 'react'
import InitRoutes from '../../router/routes'
import Header from '../../component/header'

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <InitRoutes />
    </div>
  )
}

export default Main
