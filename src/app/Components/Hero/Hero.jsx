import React from 'react'
// import HeroVid from '/vids/hero.mp4'

export default function Hero(props) {
  return (
    <div className=''>
        <video  width={1920} height={400} controls className=''> 
            <source src="hero.mp4" type="video/mp4" />
        </video>

    </div>
  )
}
