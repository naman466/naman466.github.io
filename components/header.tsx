import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#" className="text-xl font-semibold tracking-tight">
          Naman Tyagi
        </Link>
        <div className="flex gap-8 text-sm">
          <Link href="#bio" className="hover:text-accent transition-colors">About</Link>
          <Link href="#publications" className="hover:text-accent transition-colors">Publications</Link>
          <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="#blogs" className="hover:text-accent transition-colors">Blogs</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
