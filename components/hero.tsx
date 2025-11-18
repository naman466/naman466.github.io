import { siteContent } from "@/lib/content"

export default function Hero() {
  const { name, title, bio, photoUrl } = siteContent.hero
  
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0">
          <img
            src={photoUrl || "/placeholder.svg"}
            alt="Profile photo"
            className="w-48 h-48 rounded-lg object-cover border-2 border-primary"
          />
        </div>
        
        <div className="space-y-6 flex-1">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-2 text-balance">
              {name}
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              {title}
            </p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {bio}
          </p>
        </div>
      </div>
    </section>
  )
}
