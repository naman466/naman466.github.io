import { siteContent } from "@/lib/content"
import Link from "next/link"


const Projects = () => {
  return (
    <section id="projects" className="bg-muted/30 border-t border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-serif font-light mb-12 text-balance">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {siteContent.projects.map((project, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
                <Link
                href={project.link}
                className="inline-block text-accent hover:text-accent/80 text-sm font-medium transition-colors pt-2"
              >
                Visit Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
