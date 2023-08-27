"use client"
import Benefints from '@/components/Benefints'
import Choose from '@/components/Choose'
import Cleaners from '@/components/Cleaners'
import Contact from '@/components/Contact'
import Featured from '@/components/Featured'
import Slider from '@/components/Slider'
import Testimonlas from '@/components/Testimonlas'
import Tips from '@/components/Tips'
import Aos from 'aos'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 10,
    });
  }, []);
  return (
    <div>
      <Slider/>
      <Featured/>
      <Cleaners/>
      <Tips/>
      <Choose/>
      <Benefints/>
      <Testimonlas/>
      <Contact/>
      
    </div>
  )
}
