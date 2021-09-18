import React from 'react'
import ReactDOM from 'react-dom'
import Preloader from './components/Preloader/Preloader'
import Timer from './components/Countdown/Timer'
import './bootstrap.min.css'
import './styles.css'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'
import { IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5'
import { Link } from 'react-router-dom'
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
          Hello! Thank you for visiting us. In the meantime, <br /> please visit
          our{' '}
          <a
            style={{ color: 'white' }}
            href='https://www.etsy.com/shop/themushroomhunter'
            target='_blank'
          >
            ETSY STORE
          </a>
          {'. '} <br />
          Thank you for supporting our small business.
        </h4>

        <div className='iconcontainer'>
          <a
            href='https://www.instagram.com/gomushroomhunting/'
            target='_blank'
          >
            {' '}
            <AiFillInstagram
              size='3rem'
              style={{ marginRight: 30 }}
              color='white'
            />
          </a>
          <a href='https://www.facebook.com/gomushroomhunting' target='_blank'>
            {' '}
            <FaFacebookSquare
              size='3rem'
              style={{ marginRight: 30 }}
              color='white'
            />
          </a>
          <a
            href='https://www.tiktok.com/@gomushroomhunting?lang=en'
            target='_blank'
          >
            {' '}
            <IoLogoTiktok
              size='3rem'
              style={{ marginRight: 30 }}
              color='white'
            />
          </a>

          <a href='https://twitter.com/mushroomhuntmap' target='_blank'>
            {' '}
            <FaTwitter size='3rem' style={{ marginRight: 30 }} color='white' />
          </a>

          <a
            href='https://www.youtube.com/channel/UCT86MModn8glhm2HH46EFaQ'
            target='_blank'
          >
            {' '}
            <IoLogoYoutube
              size='3rem'
              style={{ marginRight: 30 }}
              color='white'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
