import Benefints from '@/components/Benefints'
import Choose from '@/components/Choose'
import Cleaners from '@/components/Cleaners'
import Contact from '@/components/Contact'
import Featured from '@/components/Featured'
import Slider from '@/components/Slider'
import Testimonlas from '@/components/Testimonlas'
import Tips from '@/components/Tips'
import Image from 'next/image'

export default function Home() {
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
