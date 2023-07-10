import React from 'react'
import './assets/styles/index.scss'
import './assets/styles/index.css'
import Header from './component/header'
import InitRoutes from './router/routes'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <InitRoutes />
    </div>
  )
}

export default App
