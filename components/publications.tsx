import { ExternalLink } from 'lucide-react'
import { siteContent } from "@/lib/content"

export default function Publications() {
  return (
    <section id="publications" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-serif font-light mb-12 text-balance">Publications</h2>
      <div className="space-y-8">
        {siteContent.publications.map((pub, idx) => (
          <article key={idx} className="pb-8 border-b border-border last:border-b-0">
            <h3 className="text-lg font-medium mb-2 leading-relaxed">
              {pub.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
            <p className="text-sm text-muted-foreground mb-3">
              {pub.venue} • {pub.year}
            </p>
            <a 
              href={pub.doi} 
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
            >
              View Paper
              <ExternalLink size={14} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
