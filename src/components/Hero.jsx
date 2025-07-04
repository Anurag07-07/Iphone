import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo,smallHeroVideo } from '../utils'

const Hero = () => {

  const [videoSrc,setVideoSrc] =  useState(
    window.innerWidth<760 ? smallHeroVideo :heroVideo
  )

  const handleVideoSrcSet = ()=>{
    if (window.innerWidth<760) {
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrcSet)
    
    //CleanUp
    return ()=>{
      window.removeEventListener('resize',handleVideoSrcSet)
    }
  },[])

  useGSAP(()=>{
    gsap.to('#hero',{
      opacity:1,
      delay:2,
    })
    gsap.to('#cta',{
      opacity:1,
      y:-50,
      delay:2
    })
  },[])

  return (
    <section className=' w-full nav-height bg-black relative'>
      <div className=' h-5/6 w-full flex-center flex-col'>
        <p id='hero' className=' hero-title'>iPhone 15 Pro</p>
        <div className=' md:w-10/12 w-9/12'>
          <video  src={videoSrc} type='video' autoPlay muted playsInline={true} key={videoSrc}>
          </video>
        </div>
      </div>
      <div id='cta' className=' flex flex-col translate-y-20 opacity-0 items-center'>
        <a href='#highlights' className='btn'>Buy</a>
        <p className=' font-normal text-xl'>From $199/month or $999 </p>
      </div>
    </section>
  )
}

export default Hero