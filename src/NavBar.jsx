import { links } from './data'
export default function NavBar() {
  return (
    <nav className="bg-emerald-100 px-6 align-element  flex flex-row gap-x-12 sm:flex-col sm:gap-y-5">
      <h2 className="text-3xl font-bold">
        Web<span className="text-emerald-700">Dev</span>
      </h2>
      <div className='text-xl flex gap-x-4'>
        {links.map((link) => {
          const { id, href, label } = link
          return (
            <a href={href} key={id}>
              {label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
