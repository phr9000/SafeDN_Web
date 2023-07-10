import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../pages/main/main'

const InitRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}

export default InitRoutes
