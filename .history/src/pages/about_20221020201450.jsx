import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
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

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta
          name="description"
          content="I’m Konrad Podstawski. I live in Tarnow where I try to realize my ideas"
        />
      </Head>
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
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I am Konrad Podstawski. I live in Tarnow where I try to realize my ideas
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              I love creating things since I can remember, and I wrote my first program/more like a website at the age of 8. In the same year I started playing the game Minecraft, where I first started creating and administering servers then adding plugins and configuring them up to writing new plugins from scratch.
              </p>
              <p>
              I became more interested in programming in middle school, when I no longer wanted to make just modifications and plugins for Minecraft, but to create my own game, which ended up learning C++.
Of course, when I started learning I didn’t think I would make games from scratch in 2D, but I immediately wanted to do 3D, but I was annoyed that graphics engines require licensing fees, so (not knowing what I was getting into) I started creating my own graphics engine in C++ and OpenGL. I managed to finish the engine to the point where I could play 3D Pong on it, and that was the end of the adventure of this engine ( I didn’t know what github was then, so unfortunately I didn’t keep a copy :( )
              </p>
              <p>
              Along with exploring the world of programming, I began to be interested in programming languages and so I accidentally came across rust and immediately fell in love with it. To see if I could already write something in it, I wrote a simple engine that allowed me to play pong (only in 2D), but it gave me an interesting insight into the limitations and strengths of this language.
              </p>
              <p>
              I used to want to make games, but today I see that the best I can do is to create tools and programs that make things easier or more interesting, and to realize my new ideas.
              </p>
              <p>
              Currently I’m sandblasting smart contracts, and in my spare time I write my own small projects (some of them for the so-called drawer, and some I share on my github). 
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/konrad-podstawski/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                spencer@planetaria.tech
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
