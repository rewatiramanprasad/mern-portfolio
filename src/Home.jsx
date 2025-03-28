import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import hero from './assets/hero.svg'

function Home() {
  return (
    <section className="bg-emerald-100  dark:bg-black py-24">
      <div className=" grid md:grid-cols-2 align-element">
        <article>
          <h1 className="text-7xl dark:text-white font-bold tracking-wider">
            I&apos;m Raman
          </h1>
          <p className=" mt-4 text-3xl text-slate-700 capitalize tracking-wider ">
            Full Stack Developer
          </p>
          <p className=" mt-2 text-lg text-slate-700 tracking-wider">
            Turning Ideas into Interactive Reality
          </p>
          <div className="flex gap-x-4 mt-4 ">
            <a href="https://github.com/rewatiramanprasad">
              <FaGithubSquare className="h-8 w-8 text-slate-700 dark:text-emerald-600  hover:text-black  animate-bounce-one" />
            </a>
            <a href="https://www.linkedin.com/in/rewatiramanprasad/">
              <FaLinkedin className="h-8 w-8 text-slate-700 dark:text-emerald-600   hover:text-black animate-bounce-one animation-delay-500" />
            </a>
            <a href="#twitter">
              <FaTwitterSquare className="h-8 w-8 text-slate-700 dark:text-emerald-600   hover:text-black animate-bounce-one  animation-delay-1000" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={hero} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  )
}

export default Home
