import { siteContent } from "@/lib/content"

export default function Interests() {
  return (
    <section id="interests" className="bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-serif font-light mb-8 text-balance">Interests</h2>
        <div className="grid grid-cols-2 gap-4">
          {siteContent.interests.map((interest) => (
            <div key={interest} className="flex items-start gap-3">
              <span className="text-muted-foreground mt-1">•</span>
              <span className="text-foreground">{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
