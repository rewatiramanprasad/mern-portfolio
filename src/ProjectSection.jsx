
import SectionTitle from './SectionTitle'
import { projects } from './data'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  return (
    <section className="py-20 align-element" id="Projects">
      <SectionTitle title={'Web Creations'} />
      <div className=" grid py-16 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          const { id } = project
          return <ProjectCard key={id} {...project} />
        })}
      </div>
    </section>
  )
}

export default ProjectSection
