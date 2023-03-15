import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Skills from '@/components/skills/Skills'
import Projects from '@/components/projects/Projects'
import Contact from '@/components/contact/Contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
