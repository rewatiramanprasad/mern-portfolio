import SkillCard from './SkillCard'
import { skills } from './data'
import SectionTitle from './SectionTitle'

function Skills() {
  return (
    <section className='dark:bg-black'>
      <div className="align-element py-20  " id="Skills">
        <SectionTitle title={'Tech Stack'} />
        <div className=" flex lg:flex-row flex-col gap-8 overflow-hidden group h-lvh lg:h-full ">
          <div className="py-16 flex lg:flex-row flex-col gap-8 animate-loop-scroll-vertical lg:animate-loop-scroll-horizontal group-hover:paused">
            {skills.map((skill) => {
              const { id, title, icon, text } = skill
              return (
                <SkillCard key={id} title={title} icon={icon} text={text} />
              )
            })}
          </div>
          <div
            className="py-16 flex lg:flex-row flex-col gap-8 animate-loop-scroll-vertical lg:animate-loop-scroll-horizontal group-hover:paused "
            aria-hidden="true"
          >
            {skills.map((skill) => {
              const { id, title, icon, text } = skill
              return (
                <SkillCard key={id} title={title} icon={icon} text={text} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
