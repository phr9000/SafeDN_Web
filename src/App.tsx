import React from 'react'
import './assets/styles/index.scss'
import './assets/styles/index.css'
import Header from './component/header'
import InitRoutes from './router/routes'
import Footer from './component/footer'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <InitRoutes />
        <Footer />
      </main>
    </div>
  )
}

export default App
