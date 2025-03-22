import { links } from './data'
export default function NavBar() {
  return (
    <nav className="bg-emerald-100 dark:bg-black">
      <div className='align-element  flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className="text-3xl dark:text-white  font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="text-xl dark:text-white flex gap-x-3">
          {links.map((link) => {
            const { id, href, label } = link;
            return (
              <a href={href} key={id}>
                {label}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
