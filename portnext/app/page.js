"use client"

import {useSelector} from 'react-redux'
import Hero from './components/Hero'
import { useTranslation } from "react-i18next";
import './i18next';
import TechSkills from './components/TechSkills';



export default function Home() {
const theme = useSelector(state => state.theme.theme)

  return (
    <main id={theme}>
      <Hero />
      <TechSkills />
    </main>
  )
}
