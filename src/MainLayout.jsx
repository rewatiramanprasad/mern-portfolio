import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import { BiDownArrowAlt } from 'react-icons/bi'
import resume from './assets/4_6_RewatiRamanPrasad_Resume.pdf'

function MainLayout({ darkMode, handleDarkMode, handleLightMode, children }) {
  return (
    <div className="relative">
      {children}
      <div className="block lg:hidden md:hidden">
        <button
          className="p-2 border border-emerald-600 dark:border-black bg-emerald-500  overflow-visible rounded-full shadow-xl float-right border-black fixed bottom-28 right-14 dark:bg-slate-700"
          onClick={!darkMode ? handleDarkMode : handleLightMode}
        >
          {darkMode ? (
            <CiLight className=" text-white" />
          ) : (
            <MdDarkMode className="" />
          )}
        </button>
        <button className="p-2 border dark:border-black bg-emerald-500 border-emerald-600  overflow-visible rounded-full shadow-xl float-right border-black fixed bottom-12 right-12 dark:bg-slate-700">
          <a href={resume} download="resume">
            <BiDownArrowAlt className="h-8 w-8 text-white animate-bounce" />
          </a>
        </button>
      </div>
    </div>
  )
}

export default MainLayout
