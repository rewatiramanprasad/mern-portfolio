import { links } from './data'
import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import { BiDownArrowAlt } from 'react-icons/bi'
import resume from './assets/4_6_RewatiRamanPrasad_Resume.pdf'

export default function NavBar({ darkMode, handleDarkMode, handleLightMode }) {
  return (
    <nav className="bg-emerald-100 dark:bg-black">
      <div className="align-element  flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl dark:text-white font-bold ">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="text-xl dark:text-white flex gap-x-3">
          {links.map((link) => {
            const { id, href, label } = link
            return (
              <a href={href} key={id}>
                {label}
              </a>
            )
          })}
        </div>
        <div className="flex hidden gap-4 md:flex lg:flex  ">
          <button
            title="mode"
            className=" animate- rounded p-1 bg-emerald-600 dark:bg-slate-700"
            onClick={!darkMode ? handleDarkMode : handleLightMode}
          >
            {darkMode ? (
              <CiLight className="h-8 w-8 text-white " />
            ) : (
              <MdDarkMode className="h-8 w-8" />
            )}
          </button>
          <button
            title="download resume"
            className=" rounded p-1 bg-emerald-600 dark:bg-slate-700"
          >
            <a href={resume} download="resume">
              <BiDownArrowAlt className="h-8 w-8 animate-bounce dark:text-white" />
            </a>
          </button>
        </div>
      </div>
    </nav>
  )
}
