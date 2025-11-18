import { Mail, Linkedin, Github } from 'lucide-react'
import { siteContent } from "@/lib/content"

export default function Contact() {
  const { email, office, university, social } = siteContent.contact
  
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-serif font-light mb-8 text-balance">Get in Touch</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-2xl">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Email</h3>
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={20} />
            <span>{email}</span>
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Location</h3>
          <p className="text-foreground">
            {office}<br />
            {university}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">Social</h3>
          <div className="flex gap-4">
            <a href={social.linkedin} className="hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={social.github} className="hover:text-accent transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
