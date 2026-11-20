import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { links, summary, about, education, skills, projects, experience, certifications, achievements } from './data.js'

const nav = ['About', 'Skills', 'Projects', 'Experience']
const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.5 } }

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <motion.div {...fade}>
        <h2 className="mb-8 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">{title}</h2>
        {children}
      </motion.div>
    </section>
  )
}
const Tag = ({ children }) => <span className="rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-3 py-1 text-xs text-neutral-200">{children}</span>
const Btn = ({ href, children, primary, ...p }) => (
  <a href={href} {...p} className={`rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-widest transition ${primary ? 'bg-[#a78bfa] text-white hover:bg-[#9373f5]' : 'border border-[#a78bfa]/60 text-white hover:bg-[#a78bfa]/15'}`}>{children}</a>
)

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight text-white">SAI POOJA K</a>
        <nav className="hidden gap-6 text-sm text-neutral-400 lg:flex">
          {nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-white">{n}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-[#a78bfa] px-5 py-2 text-xs font-semibold tracking-widest text-white transition hover:bg-[#9373f5] lg:block">CONTACT</a>
        <button aria-label="Menu" className="text-neutral-300 lg:hidden" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
      {open && <nav className="flex flex-col gap-3 border-t border-white/10 px-6 py-4 text-sm text-neutral-300 lg:hidden">
        {nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>)}
      </nav>}
    </header>
  )
}

const Words = ({ text, delay = 0, className = '' }) => text.split(' ').map((w, i) => (
  <span key={i} className={`inline-block overflow-hidden align-bottom ${className}`}>
    <motion.span className="inline-block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: delay + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}>{w}&nbsp;</motion.span>
  </span>
))

function Orb({ className, size, delay = 0, drift = 24 }) {
  return (
    <motion.div aria-hidden className={`pointer-events-none absolute rounded-full ${className}`}
      style={{ width: size, height: size, background: 'radial-gradient(circle at 30% 28%, #f3e8ff 0%, #a78bfa 22%, #5b21b6 55%, #12041f 85%)', boxShadow: '0 0 80px rgba(167,139,250,0.35)' }}
      animate={{ y: [0, -drift, 0], rotate: [0, 8, 0] }} transition={{ duration: 7, delay, repeat: Infinity, ease: 'easeInOut' }} />
  )
}

function Progress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-[#a78bfa]" />
}

function Marquee() {
  const items = skills.flatMap(([, i]) => i)
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-white/10 py-5">
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-bold text-neutral-500">
        {row.map((t, i) => <span key={i} className="flex items-center gap-10">{t}<span className="text-[#a78bfa]">✦</span></span>)}
      </div>
    </div>
  )
}

function Hero({ onResume }) {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-center md:text-left">
      <Orb size={340} className="-left-28 top-1/4 hidden sm:block" />
      <Orb size={90} className="left-[12%] bottom-[14%]" delay={1.2} drift={16} />
      <Orb size={150} className="-right-10 top-[18%]" delay={0.6} />
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row md:justify-between">
      <div className="max-w-4xl md:ml-16 lg:ml-28">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-6 inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs tracking-widest text-neutral-300">B.TECH CSBS · PANIMALAR ENGINEERING COLLEGE</motion.p>
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl">
          <Words text="Hi, I’m" /><br /><Words text="Sai Pooja K." delay={0.3} />
        </h1>
        <h2 className="shine mt-4 font-display text-3xl font-bold sm:text-5xl"><Words text="Full-Stack Developer." delay={0.8} /></h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mt-6 max-w-xl text-neutral-400">
          I build practical web applications with Java, Spring Boot and React.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }} className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
          <Btn primary href="#projects">View Projects</Btn>
          <button onClick={onResume} className="rounded-full border border-[#a78bfa]/60 px-7 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#a78bfa]/15">View Resume</button>
        </motion.div>
      </div>
      <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} src="/sai.jpeg" alt="Sai Pooja K" className="h-56 w-56 shrink-0 rounded-full border-2 border-[#a78bfa]/60 object-cover sm:h-72 sm:w-72 md:h-80 md:w-80" />
      </div>
    </section>
  )
}

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.article layout whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="rounded-2xl border border-[#a78bfa]/20 bg-[#0f0f12] p-6 transition hover:border-[#a78bfa]/60 hover:bg-[#17171d]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><h3 className="text-xl font-semibold text-white">{p.name}</h3><p className="text-sm text-neutral-400">{p.subtitle}</p></div>
        <div className="flex gap-3 text-sm">
          <a href={p.github} target="_blank" rel="noreferrer" className="text-neutral-300 underline-offset-4 hover:text-white hover:underline">GitHub</a>
          {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-neutral-300 underline-offset-4 hover:text-white hover:underline">Live Demo</a>}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <Tag key={t}>{t}</Tag>)}</div>
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="mt-5 text-sm font-medium text-white">{open ? 'Hide details −' : 'View details +'}</button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="space-y-5 pt-5 text-sm text-neutral-300">
              {p.image ? <img src={p.image} alt={`${p.name} screenshot`} className="rounded-lg border border-white/10" />
                : <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-white/15 text-neutral-500">Screenshot coming soon</div>}
              <div><h4 className="mb-1 font-medium text-white">Problem</h4><p>{p.problem}</p></div>
              <div><h4 className="mb-1 font-medium text-white">Solution</h4><p>{p.solution}</p></div>
              <div><h4 className="mb-1 font-medium text-white">Features</h4><ul className="list-disc space-y-1 pl-5">{p.features.map(f => <li key={f}>{f}</li>)}</ul></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)
  return (
    <>
      <AnimatePresence>{resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}</AnimatePresence>
      <Progress />
      <Navbar />
      <main>
        <Hero onResume={() => setResumeOpen(true)} />
        <Marquee />
        <Section id="summary" title="Professional Summary"><p className="max-w-3xl text-neutral-300">{summary}</p></Section>
        <Section id="about" title="About Me"><div className="flex flex-col items-center gap-8 md:flex-row"><motion.img whileHover={{ rotate: -4, scale: 1.04 }} src="/sai.jpeg" alt="Sai Pooja K" className="h-44 w-44 shrink-0 rounded-full border-2 border-[#a78bfa]/60 object-cover" /><p className="max-w-3xl text-neutral-300">{about}</p></div></Section>
        <Section id="education" title="Education">
          <div className="rounded-2xl border border-[#a78bfa]/20 bg-[#0f0f12] p-6">
            <div className="flex flex-wrap justify-between gap-2"><h3 className="font-semibold text-white">{education.degree}</h3><span className="text-neutral-400">{education.years}</span></div>
            <p className="mt-1 text-neutral-300">{education.school}</p><p className="text-neutral-400">CGPA: {education.cgpa}</p>
          </div>
        </Section>
        <Section id="skills" title="Technical Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(([g, items]) => (
              <div key={g} className="rounded-2xl border border-[#a78bfa]/20 bg-[#0f0f12] p-5">
                <h3 className="mb-3 text-sm font-medium text-white">{g}</h3><div className="flex flex-wrap gap-2">{items.map(i => <Tag key={i}>{i}</Tag>)}</div>
              </div>))}
          </div>
        </Section>
        <Section id="projects" title="Featured Projects"><div className="space-y-5">{projects.map(p => <ProjectCard key={p.name} p={p} />)}</div></Section>
        <Section id="experience" title="Experience">
          <div className="space-y-4">{experience.map(e => (
            <div key={e.role} className="rounded-2xl border border-[#a78bfa]/20 bg-[#0f0f12] p-6">
              <div className="flex flex-wrap justify-between gap-2"><h3 className="font-semibold text-white">{e.role} <span className="font-normal text-neutral-400">| {e.org}</span></h3><span className="text-sm text-neutral-400">{e.when}</span></div>
              <ul className="mt-2 list-disc pl-5 text-neutral-300">{e.points.map(x => <li key={x}>{x}</li>)}</ul>
            </div>))}</div>
        </Section>
        <Section id="certifications" title="Certifications">
          <ul className="grid gap-3 sm:grid-cols-2">{certifications.map(c => <li key={c} className="rounded-xl border border-[#a78bfa]/20 bg-[#0f0f12] p-4 text-neutral-300">{c}</li>)}</ul>
        </Section>
        <Section id="achievements" title="Achievements & Activities">
          {achievements.map(a => <div key={a.title} className="rounded-2xl border border-[#a78bfa]/20 bg-[#0f0f12] p-6"><h3 className="font-semibold text-white">{a.title}</h3><p className="mt-2 text-neutral-300">{a.text}</p></div>)}
        </Section>
        <Section id="contact" title="Contact">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-neutral-300">
              <p>Open to software developer and graduate engineer trainee opportunities. Reach out any time.</p>
              <p><a className="underline underline-offset-4 hover:text-white" href={`mailto:${links.email}`}>{links.email}</a></p>
              <p>{links.phone}</p>
              <p className="flex gap-4"><a className="underline underline-offset-4 hover:text-white" href={links.github} target="_blank" rel="noreferrer">GitHub</a><a className="underline underline-offset-4 hover:text-white" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <footer className="border-t border-white/10 bg-black/40 py-10 text-sm text-neutral-500">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <a href="#top" className="font-display text-lg font-extrabold tracking-tight text-white">SAI POOJA K</a>
            <p className="mt-1">Full-Stack Developer</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-neutral-400">
            {nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-white">{n}</a>)}
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <div className="flex gap-5 text-neutral-400">
            <a href={`mailto:${links.email}`} className="transition hover:text-white">Email</a>
            <a href={links.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
          </div>
        </div>
        <p className="mt-8 text-center">© 2026 Sai Pooja K. All rights reserved.</p>
      </footer>
    </>
  )
}

function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState('')
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email) || f.message.trim().length < 10) { setErr('Please enter your name, a valid email and a message of at least 10 characters.'); return }
    setErr('')
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(f.message + '\n\n' + f.name + ' (' + f.email + ')')}`
  }
  const c = 'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none focus:border-[#a78bfa]'
  return (
    <form onSubmit={submit} className="space-y-3" noValidate>
      <input className={c} placeholder="Your name" value={f.name} onChange={set('name')} />
      <input className={c} placeholder="Your email" type="email" value={f.email} onChange={set('email')} />
      <textarea className={c} rows={4} placeholder="Your message" value={f.message} onChange={set('message')} />
      {err && <p className="text-sm text-red-400">{err}</p>}
      <button className="rounded-lg bg-[#a78bfa] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#9373f5]" type="submit">Send Message</button>
    </form>
  )
}

function ResumeModal({ onClose }) {
  useEffect(() => {
    const k = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label="Resume">
      <motion.div initial={{ scale: 0.97, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.97, y: 12 }} onClick={e => e.stopPropagation()}
        className="flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#a78bfa]/30 bg-[#0c0c10]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <h3 className="font-semibold text-white">Resume</h3>
          <div className="flex items-center gap-3 text-sm">
            <a href={links.resume} download className="rounded-lg bg-[#a78bfa] px-4 py-2 font-medium text-white transition hover:bg-[#9373f5]">Download</a>
            <a href={links.resume} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white">Open in new tab</a>
            <button onClick={onClose} aria-label="Close" className="text-lg text-neutral-300 hover:text-white">✕</button>
          </div>
        </div>
        <iframe src={links.resume} title="Resume" className="h-full w-full bg-white" />
      </motion.div>
    </motion.div>
  )
}
