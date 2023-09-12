"use client"

import {useSelector} from 'react-redux'
import Hero from './components/Hero'
// import { useTranslation } from "react-i18next";
// import './i18next';
import TechSkills from './components/TechSkills';
import Sidebar from './components/Sidebar';



export default function Home() {
const theme = useSelector(state => state.theme.theme)
const lang = useSelector(state => state.lang.lang)

  return (
    <main className={theme}>
      <Hero />
      {/* <TechSkills /> */}
      <Sidebar />
      {lang}
    </main>
  )
}
