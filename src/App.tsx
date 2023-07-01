import React from 'react'
import logo from './logo.svg'
import './App.css'
import './styles/index.scss'
import * as antd from 'antd'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload11.
          <antd.Button type="primary">버튼</antd.Button>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
