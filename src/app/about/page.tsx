import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Soy Montserrat Moragrega, Psicóloga del Deporte, Escritora y Coach.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Mi formación y experiencia me distinguen al combinar la psicología
              del deporte, el coaching y una sólida especialización en temas
              complejos como el abuso, el control y la codependencia.
            </p>
            <p>
              Además, mis diplomados en victimología, criminología, tanatología
              y adicciones me permiten abordar los desafíos emocionales y
              conductuales desde una perspectiva multidisciplinaria.
            </p>
            <p>
              A través de un enfoque integral, no solo trabajo en los aspectos
              emocionales, sino también en las barreras mentales, los patrones
              conductuales y las experiencias que limitan tu desarrollo
              personal. Mi labor se enriquece con mis vivencias personales, lo
              que me permite comprender de manera más profunda y cercana los
              retos a los que te enfrentas.
            </p>
            <p>
              Mis libros, conferencias y consultas están diseñados para
              proporcionarte herramientas prácticas y profundas que generan
              cambios reales y duraderos. Mi misión es ayudarte a reconectar
              contigo mismo, romper ciclos dañinos y alcanzar una versión más
              plena y auténtica de ti.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:montsem@mac.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              montsem@mac.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
