import Header from '@/components/header'
import Hero from '@/components/hero'
import Bio from '@/components/bio'
import Interests from '@/components/interests'
import Publications from '@/components/publications'
import Projects from '@/components/projects'
import Blogs from '@/components/blogs'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Bio />
      <Interests />
      <Publications />
      <Projects />
      <Blogs />
      <Contact />
    </main>
  )
}
