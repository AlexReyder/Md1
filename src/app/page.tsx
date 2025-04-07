

import { Section } from '@/shared/ui'
import { Header } from '@/widgets'
import Link from 'next/link'

export default function Home() {
  
  return (
    <>
      <Header/>
      <Section className='Hero' asChild>
        <h2>Hi345!</h2>
      </Section>
      {/* <Link href="/signin">Open modal</Link> */}
    </>
  );
}
