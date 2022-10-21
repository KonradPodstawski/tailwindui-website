import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Konrad Podstawski</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, M1, 32GB RAM (2015)">
              I was using an Intel-based 13” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Asus KG241Q">
              Just the 2nd muonitor I caught on promotion.
            </Tool>
            <Tool title="Keychron K2 B1">
            Keyboard with a very pleasant sound ( known from ASMR videos), fully customizable. I highly recommend it if someone appreciates the comfort of using a keyboard, for some it may be a bit noisy. well, and it is not suitable for gaming 
            </Tool>
            <Tool title="Logitech MX Vertical Ergonomic">
            Pleasant to use on a daily basis (surprisingly quickly you can get used to it), allows you to keep your wrists free of fatigue for longer with constant work
            </Tool>
            <Tool title="Fotel QUERSUS VAOS 501">
            The chair is Gaming ( so I guess it’s faster or something...) comfortable has a lot of types of adjustment. My cat seems to like it more than me 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
            A cool DIE that I can customize myself a lot through a huge number of plugins
            </Tool>
            <Tool title="GitHub Copilot">
            Assistant for writing boilerplate code, it is pleasant to use it for writing classic applications ( not yet embrace the context in smart conteracts ) and repetitive code
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Rize">
            focus tracer. very useful if you want to measure your and improve your focus at work
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
