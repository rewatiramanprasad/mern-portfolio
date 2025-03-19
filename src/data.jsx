import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'

export const links = [
  { id: nanoid(), href: '#Home', label: 'Home' },
  { id: nanoid(), href: '#About', label: 'About' },
  { id: nanoid(), href: '#Skills', label: 'Skills' },
  { id: nanoid(), href: '#Projects', label: 'Projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://store-vert-two.vercel.app/',
    github: 'https://github.com/rewatiramanprasad/store',
    title: 'Store',
    text: 'Next.js | Typescript | Shadcn/ui | postgres | TailwindCss | React 19 | Zod | Clerk | Vercel | Git | Stripe ',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://jobify-two-delta.vercel.app/',
    github: 'https://github.com/rewatiramanprasad/jobify',
    title: 'Jobify',
    text: 'Next.js | Typescript | Shadcn/ui | postgres | TailwindCss | React 19 | Zod | Clerk | Vercel | Git | ReactQuery |Recharts ',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://rewatiramanprasad.github.io/genfrontend/',
    github: 'https://github.com/rewatiramanprasad/genfrontend',
    title: 'GenAI',
    text: 'Node.js | React.js | Gemini Api | TailwindCss | Clerk | Git | GitAction |GitPage ',
  },
]
