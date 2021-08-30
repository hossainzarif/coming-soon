import React from 'react'
import ReactDOM from 'react-dom'
import Preloader from './components/Preloader/Preloader'
import Timer from './components/Countdown/Timer'
import './bootstrap.min.css'
import './styles.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Preloader />
        <h4>
          Hello! Thank you for visiting us and supporting our small business.{' '}
          <br />
          In the meantime, please visit our{' '}
          <a
            style={{ color: 'white' }}
            href='https://www.etsy.com/shop/themushroomhunter'
          >
            ETSY STORE
          </a>
          {'.'}
        </h4>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
