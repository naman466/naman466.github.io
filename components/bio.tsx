import { siteContent } from "@/lib/content"

export default function Bio() {
  const { paragraphs } = siteContent.about
  
  return (
    <section id="bio" className="bg-muted/30 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-serif font-light mb-8 text-balance">About</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
