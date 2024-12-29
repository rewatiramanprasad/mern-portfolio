import React from 'react'
import SkillCard from './skillCard'
import { skills } from './data'
import SectionTitle from './SectionTitle'

function Skills() {
  return (
    <section className="align-element py-20" id="Skills">
      <SectionTitle title={'Tech Stack'} />
      <div className="py-16 grid gap-8 md:grid-cols-2   lg:grid-cols-3 ">
        {skills.map((skill) => {
          const { id, title, icon, text } = skill
          return <SkillCard key={id} title={title} icon={icon} text={text} />
        })}
      </div>
    </section>
  )
}

export default Skills
