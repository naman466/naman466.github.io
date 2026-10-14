import type { ReactNode } from 'react'
import { siteContent as c } from '@/lib/content'

function H({ children, note }: { children: ReactNode; note?: string }) {
  return (
    <div className="h-wrap">
      <h2>{children}</h2>
      <svg className="squiggle" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1 5 C 30 1, 50 8, 80 4 S 140 2, 199 5" />
      </svg>
      {note && <span className="margin-note">{note}</span>}
    </div>
  )
}

// hand-drawn-ish boxes: slightly uneven paths instead of rects
function Sketch() {
  const boxes = [
    { x: 8, label: 'ONNX' },
    { x: 128, label: 'graph IR' },
    { x: 248, label: 'schedule' },
    { x: 368, label: 'C code!' },
  ]
  return (
    <svg viewBox="0 0 480 120" className="sketch" role="img" aria-label="Sketch: ONNX to graph IR to schedule to C code">
      {boxes.map((b, i) => (
        <g key={b.label}>
          <path
            d={`M${b.x + 2} 32 L${b.x + 98} ${30 + (i % 2)} L${b.x + 100} 78 L${b.x + 1} ${80 - (i % 2)} Z`}
            className="ink"
          />
          <text x={b.x + 50} y="62" textAnchor="middle">{b.label}</text>
          {i < boxes.length - 1 && (
            <path d={`M${b.x + 104} 56 Q ${b.x + 112} 50 ${b.x + 122} 55 M${b.x + 115} 49 L${b.x + 123} 55 L${b.x + 115} 61`} className="ink" />
          )}
        </g>
      ))}
      <path d="M418 84 Q 420 104 400 108" className="pen" />
      <text x="394" y="112" textAnchor="end" className="pen-text">no runtime deps</text>
    </svg>
  )
}

export default function Home() {
  return (
    <div className="nb">
      <main className="page">
        <div className="holes" aria-hidden="true"><span /><span /><span /></div>

        <table className="boxes">
          <tbody>
            <tr>
              <td><small>PROJECT</small>me, mostly</td>
              <td><small>BOOK No.</small>1</td>
              <td><small>PAGE</small>1</td>
              <td><small>DATE</small>{c.updated}</td>
            </tr>
          </tbody>
        </table>

        <header className="top">
          <figure className="taped">
            <span className="tape t1" aria-hidden="true" />
            <span className="tape t2" aria-hidden="true" />
            <img src={c.photoUrl} alt={c.name} width={150} height={150} />
            <figcaption>exhibit A</figcaption>
          </figure>
          <div>
            <h1>{c.name}</h1>
            <p className="sub">{c.tagline}</p>
            <p className="sub">systems / low-level / compilers</p>
          </div>
        </header>

        <aside className="sticky">
          Looking for <b>systems internships</b> for 2027!
          <br />
          &rarr; <a href={`mailto:${c.contact.email}`}>email me</a>
        </aside>

        <section>
          <H note="why I'm here">About</H>
          {c.about.map((p, i) => <p key={i}>{p}</p>)}
        </section>

        <section>
          <H>Currently</H>
          <ul className="checks">
            {c.now.map((n, i) => (
              <li key={n} className={i === 2 ? 'open' : undefined}>{n}</li>
            ))}
          </ul>
        </section>

        <section>
          <H note="see sketch below">Things I like poking at</H>
          <ul>
            {c.interests.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <Sketch />
          <p className="fig">fig. 1: Null, roughly</p>
        </section>

        <section>
          <H note="more soon">Experiments</H>
          {c.projects.map((p, i) => (
            <div key={p.title} className="exp">
              <h3>
                Exp. #{i + 1}: {p.link ? <a href={p.link}>{p.title}</a> : p.title}{' '}
                <span className="dim">({p.when})</span>
              </h3>
              <p>{p.description}</p>
              <p className="result"><b>Tools:</b> {p.tags.join(', ')}</p>
            </div>
          ))}
        </section>

        <section>
          <H>Education</H>
          <ul>
            {c.education.map((e) => (
              <li key={e.school}><b>{e.school}</b>: {e.degree} <span className="dim">({e.years})</span></li>
            ))}
          </ul>
        </section>

        <section>
          <H note="glued in">References</H>
          <ol className="refs">
            {c.publications.map((p) => (
              <li key={p.title}>
                <a href={p.link}>{p.title}</a>
                <br />
                <span className="dim">{p.authors}. {p.venue}, {p.year}.</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="found">
          <p className="found-title">IF FOUND, PLEASE RETURN TO</p>
          <p>
            <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a>
            <br />
            <a href={c.contact.github}>{c.contact.github.replace('https://', '')}</a>
            {' · '}
            <a href={c.contact.linkedin}>{c.contact.linkedin.replace('https://www.', '')}</a>
            <br />
            {c.contact.location}
          </p>
        </section>

        <footer className="sign">
          <div><span>Signed</span><span className="sig">N. Tyagi</span></div>
          <div><span>Witnessed &amp; understood by</span><span className="line" /></div>
        </footer>
      </main>
    </div>
  )
}
