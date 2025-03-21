import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaAws, FaStripe } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiClerk,
  SiReactquery,
  SiMysql,
} from 'react-icons/si'

export const links = [
  { id: nanoid(), href: '#Home', label: 'Home' },
  { id: nanoid(), href: '#About', label: 'About' },
  { id: nanoid(), href: '#Skills', label: 'Skills' },
  { id: nanoid(), href: '#Projects', label: 'Projects' },
  { id: nanoid(), href: '#Contact', label: 'Contact' },
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
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Next.js, leveraging server-side rendering, static site generation, and dynamic routing to build high-performance and scalable web applications.',
  },
  {
    id: nanoid(),
    title: 'TailwindCss',
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Next.js, leveraging server-side rendering, static site generation, and dynamic routing to build high-performance and scalable web applications.',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <SiNodedotjs className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Next.js, leveraging server-side rendering, static site generation, and dynamic routing to build high-performance and scalable web applications.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Next.js, leveraging server-side rendering, static site generation, and dynamic routing to build high-performance and scalable web applications.',
  },
  {
    id: nanoid(),
    title: 'Clerk',
    icon: <SiClerk className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Next.js, leveraging server-side rendering, static site generation, and dynamic routing to build high-performance and scalable web applications.',
  },
  {
    id: nanoid(),
    title: 'ReactQuery',
    icon: <SiReactquery className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Next.js, leveraging server-side rendering, static site generation, and dynamic routing to build high-performance and scalable web applications.',
  },
  {
    id: nanoid(),
    title: 'AWS',
    icon: <FaAws className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Next.js, leveraging server-side rendering, static site generation, and dynamic routing to build high-performance and scalable web applications.',
  },
  {
    id: nanoid(),
    title: 'Stripe',
    icon: <FaStripe className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Next.js, leveraging server-side rendering, static site generation, and dynamic routing to build high-performance and scalable web applications.',
  },
  {
    id: nanoid(),
    title: 'Mysql',
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in Next.js, leveraging server-side rendering, static site generation, and dynamic routing to build high-performance and scalable web applications.',
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
