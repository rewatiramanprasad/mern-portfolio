import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

function Home() {
  return (
    <section className="bg-emerald-100 py-24">
      <div className=" grid md:grid-cols-2 px-8 mx-auto max-w-7xl">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Raman</h1>
          <p className=" mt-4 text-3xl text-slate-700 capitalize tracking-wider ">
            Full Stack Developer
          </p>
          <p className=" mt-2 text-lg text-slate-700 tracking-wider">
            Turning Ideas into Interactive Reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/rewatiramanprasad">
              <FaGithubSquare className="h-8 w-8 text-slate-700  hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/rewatiramanprasad/">
              <FaLinkedin className="h-8 w-8 text-slate-700  hover:text-black duration-300 " />
            </a>
            <a href="#twitter">
              <FaTwitterSquare className="h-8 w-8 text-slate-700  hover:text-black duration-300 " />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Home
