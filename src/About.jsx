import SectionTitle from './SectionTitle'
import about from './assets/about.svg'
function About() {
  return (
    <section className="dark:bg-black" id="About">
      <div className="py-20 bg-white dark:bg-black " id="Contact">
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
          <img src={about} alt="about" className="h-64 w-full " />
          <article>
            <SectionTitle title={'code and coffee'} />
            <p className="text-slate-600 mt-8 :">Getting in touch is easy!</p>
            <button className="rounded-lg bg-emerald-600 mt-4 ml-4 p-1 dark:text-white px-4">
              <a href="mailto:ramanprasad.0203@gmail.com">Contact me</a>
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
