import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

function ProjectCard({ url, img, title, text, github }) {
  return (
    <article className="bg-white dark:bg-slate-700 rounded-lg shadow-md block hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium dark:text-white">
          {title}
        </h2>
        <p className="mt-4 text-slate-900 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 dark:text-emerald-600 hover:text-black" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500  dark:text-emerald-600 hover:text-black" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
