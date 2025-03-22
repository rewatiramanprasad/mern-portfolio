import { useState,useEffect } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Skills from './Skills'
import About from './About'
import ProjectSection from './ProjectSection'
import MainLayout from './MainLayout'
export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    localStorage.setItem('theme', 'dark')
    setDarkMode(!darkMode)
  }

  const handleLightMode = () => {
    localStorage.setItem('theme', 'light')
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    let theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    }
  }, [localStorage.getItem('theme')])

  const darkModeProps = {
    darkMode,
    setDarkMode,
    handleDarkMode,
    handleLightMode,
  }

  return (
    <MainLayout {...darkModeProps}>
      <div>
        <NavBar {...darkModeProps} />
        <Home />
        <Skills />
        <About />
        <ProjectSection />
      </div>
    </MainLayout>
  )
}
