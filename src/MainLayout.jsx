import React, { useEffect, useState } from 'react'
import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'

function MainLayout({ children }) {
  const handleDarkMode = () => {
    localStorage.setItem('theme', 'dark')
  }

  const handleLightMode = () => {
    localStorage.setItem('theme', 'light')
  }

  useEffect(() => {
    console.log('its me')
    let theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    }
  }, [localStorage.getItem('theme')])

  return (
    <div className={`relative`}>
      {children}
      <button
        className="p-2 border overflow-visible rounded-full shadow-xl float-right border-black fixed bottom-12 right-12 dark:bg-slate-400  "
        onClick={!darkMode ? handleDarkMode : handleLightMode}
      >
        {darkMode ? (
          <CiLight className="h-8 w-8" />
        ) : (
          <MdDarkMode className="h-8 w-8" />
        )}
      </button>
    </div>
  )
}

export default MainLayout
