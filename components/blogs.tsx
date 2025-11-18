import { siteContent } from "@/lib/content"

export default function Blogs() {
  return (
    <section id = "blogs" className="max-w-4xl mx-auto px-6 py-20 md:py-32 border-t border-border">
      <div className="mb-12">
        <h2 className="text-4xl font-serif font-light mb-3">Blog</h2>
        <p className="text-muted-foreground">
          Thoughts on Machine Learning, usually writups about theoretical topics I find interesting.
        </p>
      </div>

      <div className="space-y-8">
        {siteContent.blogs.map((post) => (
          <article key={post.id} className="pb-8 border-b border-border last:border-b-0">
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm px-3 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              <a href={post.link} className="group">
                <h3 className="text-2xl font-serif font-light group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </a>
            </div>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              {post.excerpt}
            </p>
            <time className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </article>
        ))}
      </div>
    </section>
  )
}
