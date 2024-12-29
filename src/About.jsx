import React from 'react'
import SectionTitle from './SectionTitle'
import about from './assets/about.svg'
function About() {
  return (
    <section className="py-20 bg-white " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={about} alt="about" className="h-64 w-full " />
        <article>
          <SectionTitle title={'code and coffee'} />
          <p className="text-slate-600 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            provident quos explicabo aliquid quaerat ratione repellendus,
            aliquam, nesciunt voluptate sapiente impedit adipisci ipsam
            perspiciatis unde, quam magni itaque blanditiis harum!
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
