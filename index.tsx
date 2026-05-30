import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import portrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const rotating = [
  "Building scalable ideas from ambiguity",
  "Solving product problems with empathy + logic",
  "Turning chaos into structured strategy",
  "Product thinking meets storytelling",
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useRotator(ref: React.RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % rotating.length;
      if (ref.current) {
        ref.current.style.opacity = "0";
        setTimeout(() => {
          if (ref.current) {
            ref.current.textContent = rotating[i];
            ref.current.style.opacity = "1";
          }
        }, 250);
      }
    }, 2600);
    return () => clearInterval(id);
  }, [ref]);
}

function Nav() {
  const links = [
    ["About", "#about"],
    ["Work", "#work"],
    ["Services", "#services"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full grad-bg text-primary-foreground">P</span>
          <span>Pushpanjali</span>
        </a>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="transition-colors hover:text-foreground">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/pushpanjali-patel-b90586322/" target="_blank" rel="noreferrer" className="rounded-full border border-foreground/15 bg-card px-4 py-2 text-xs font-medium transition-transform hover:-translate-y-0.5 hover:bg-foreground hover:text-background">
            LinkedIn ↗
          </a>
          <a href="https://drive.google.com/file/d/1WjAbI5fk0YA4HDqVtgpjva6H3cpLb3F9/view?usp=sharing" target="_blank" rel="noreferrer" className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5">
            Resume ↗
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const rotRef = useRef<HTMLSpanElement>(null);
  useRotator(rotRef);
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-10 pb-24 md:pt-16">
      <div className="blob -left-20 top-20 h-72 w-72" style={{ background: "var(--lavender)" }} />
      <div className="blob right-0 top-40 h-80 w-80" style={{ background: "var(--lilac)" }} />
      <div className="blob left-1/3 top-[28rem] h-64 w-64" style={{ background: "var(--coral)", opacity: 0.35 }} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-[var(--coral)]" />
            Open to Product Strategy & Consulting roles 
          </span>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight">
            Product <span className="serif font-normal">strategist</span><br/>
            with a <span className="grad-text">creative mind</span><br/>
            & a storyteller's <em className="serif font-normal">soul</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A student at <strong className="text-foreground">IIT (BHU) Varanasi</strong> turning ambiguous product problems into structured, human centered strategy across startups, consulting and growth.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">Currently exploring →</p>
          <span ref={rotRef} className="mt-1 inline-block text-base font-medium text-foreground transition-opacity duration-300">
            {rotating[0]}
          </span>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full grad-bg px-6 py-3 text-sm font-semibold text-primary-foreground ring-soft transition-transform hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="#about" className="rounded-full border border-foreground/15 bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background">
              Read About Me
            </a>
            <a href="https://www.linkedin.com/in/pushpanjali-patel-b90586322/" target="_blank" rel="noreferrer" className="rounded-full border border-foreground/15 bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] ring-soft">
            <img src={portrait} alt="Pushpanjali Patel portrait" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>

          <div className="float-y absolute -left-4 top-8 rounded-2xl glass px-4 py-3 text-xs shadow-xl md:-left-12">
            <div className="font-display text-2xl font-bold grad-text">15+</div>
            <div className="text-muted-foreground">Case Comp Wins</div>
          </div>
          <div className="float-y absolute -right-2 top-1/3 rounded-2xl glass px-4 py-3 text-xs shadow-xl md:-right-10" style={{ animationDelay: "1s" }}>
            <div className="font-display text-sm font-semibold">Product Strategy</div>
            <div className="text-muted-foreground">GTM · Growth · UX</div>
          </div>
          <div className="float-y absolute -bottom-4 left-6 rounded-2xl glass px-4 py-3 text-xs shadow-xl" style={{ animationDelay: "2s" }}>
            <div className="font-display text-sm font-semibold">Consulting</div>
            <div className="text-muted-foreground">Research · Benchmarking</div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["Product Strategy", "GTM", "Consulting", "UX Thinking", "Storytelling", "Growth", "Market Research", "Pitch Decks"];
  const row = [...items, ...items];
  return (
    <div className="relative mt-20 overflow-hidden border-y border-foreground/10 bg-foreground py-5 text-background">
      <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-[var(--coral)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 py-24">
      <div className="reveal mb-12 flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">— {eyebrow}</span>
        <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function About() {
  const obsessions = ["Product psychology", "Growth strategy", "Consumer behavior", "Sustainable systems", "Storytelling in products"];
  const traits = ["Curious", "Strategic", "Creative", "Analytical", "Adaptable"];
  return (
    <Section id="about" eyebrow="About" title={<>I live where <span className="serif font-normal">curiosity</span> meets <span className="grad-text">structured chaos</span>.</>}>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="reveal md:col-span-7 space-y-5 text-lg text-muted-foreground">
          <p>I'm an Integrated Dual Degree student in Industrial Chemistry at <strong className="text-foreground">IIT (BHU) Varanasi</strong>, but my obsession is <strong className="text-foreground">product</strong>&nbsp;the messy, ambiguous, deeply human kind.</p>
          <p>I love sitting with a vague problem until it becomes a framework. Then a system. Then a story stakeholders can actually rally around. My work lives at the intersection of <em className="serif text-foreground">empathy and analytics</em>: user psychology, scalable systems, and consulting style problem solving.</p>
          <p>Across startups and case competitions, I've learned that the best strategies aren't the cleverest they're the ones rooted in how people actually behave.</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {traits.map((t) => (
              <span key={t} className="rounded-full border border-foreground/15 bg-card px-3 py-1 text-sm text-foreground">{t}</span>
            ))}
          </div>
        </div>

        <div className="reveal md:col-span-5 space-y-4">
          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Currently obsessed with</div>
            <ul className="mt-4 space-y-3">
              {obsessions.map((o, i) => (
                <li key={o} className="flex items-center gap-3 text-foreground">
                  <span className="grid h-7 w-7 place-items-center rounded-full grad-bg text-xs font-bold text-primary-foreground">{i + 1}</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-foreground p-6 text-background ring-soft">
            <div className="serif text-2xl leading-snug">
              "Probably dancing, journaling, reading, or brainstorming with music at full volume."
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-background/60">— off-hours me</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { school: "IIT (BHU) Varanasi", program: "Integrated Dual Degree, Industrial Chemistry", meta: "Expected 2029", score: "CGPA 9.25" },
    { school: "Global Indian International School", program: "CBSE Class XII", meta: "2024", score: "86%" },
    { school: "Happy Hours School", program: "CBSE Class X", meta: "2022", score: "96%" },
  ];
  return (
    <Section eyebrow="Education" title={<>A foundation in <span className="serif font-normal">science</span>, sharpened for <span className="grad-text">strategy</span>.</>}>
      <div className="relative pl-6 md:pl-8">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--electric)] via-[var(--lilac)] to-[var(--coral)] md:left-3" />
        <div className="space-y-6">
          {items.map((e) => (
            <div key={e.school} className="reveal relative">
              <span className="absolute -left-[1.35rem] top-6 h-3 w-3 rounded-full bg-[var(--electric)] ring-4 ring-background md:-left-[1.65rem]" />
              <div className="grid gap-3 rounded-3xl border border-foreground/10 bg-card p-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <h3 className="font-display text-xl font-bold">{e.school}</h3>
                  <p className="text-muted-foreground">{e.program}</p>
                </div>
                <div className="text-sm text-muted-foreground md:col-span-4">{e.meta}</div>
                <div className="md:col-span-3 md:text-right">
                  <span className="rounded-full grad-bg px-4 py-1.5 text-sm font-semibold text-primary-foreground">{e.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const roles = [
    {
      role: "Product Manager Intern",
      org: "HelloPM",
      time: "Mar 2026 – Apr 2026",
      bullets: [
        "Built PM-focused educational modules used by 100+ aspirants",
        "Designed product growth & retention case studies",
        "Benchmarked 15+ startups for GTM and pricing opportunities",
        "Proposed activation and engagement strategies",
      ],
    },
    {
      role: "Founder's Associate",
      org: "TasteIQ POS",
      time: "Jul 2025 – Feb 2026",
      bullets: [
        "Competitor benchmarking across restaurant SaaS",
        "GTM and feature gap analysis (40+ competitors)",
        "Founder-level strategic research",
        "Investor deck & competitive positioning",
      ],
    },
  ];
  const metrics = [
    ["15+", "Startups benchmarked"],
    ["40+", "Competitors analyzed"],
    ["100+", "PM aspirants impacted"],
  ];
  return (
    <Section id="experience" eyebrow="Experience" title={<>From founder's desk to <span className="grad-text">product floor</span>.</>}>
      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map(([n, l]) => (
          <div key={l} className="reveal glass rounded-3xl p-6 text-center">
            <div className="font-display text-5xl font-bold grad-text">{n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {roles.map((r) => (
          <article key={r.org} className="reveal group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full grad-bg opacity-0 blur-2xl transition-opacity group-hover:opacity-40" />
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold">{r.role}</h3>
                <p className="text-muted-foreground">{r.org}</p>
              </div>
              <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs">{r.time}</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {r.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--coral)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const groups = [
    { title: "Product & Strategy", items: ["Product Management", "GTM Strategy", "Growth Strategy", "Business Analysis", "Market Research", "Competitive Benchmarking"] },
    { title: "Analytical", items: ["Python", "SQL (Basic)", "Excel", "Power BI", "Statistical Analysis"] },
    { title: "Creative & Comms", items: ["Storytelling", "Strategic Thinking", "Presentation Design", "Stakeholder Comms", "Root Cause Analysis"] },
    { title: "Tools", items: ["PowerPoint", "Canva", "Notion", "Slack"] },
  ];
  return (
    <Section eyebrow="Skills" title={<>The <span className="serif font-normal">toolkit</span> behind the strategy.</>}>
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className="reveal rounded-3xl border border-foreground/10 bg-card p-6">
            <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="rounded-full border border-foreground/10 bg-background px-3 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  const services = [
    { t: "Product Strategy & Problem Solving", d: "User retention, engagement optimization, scalable product frameworks." },
    { t: "Market Research & Competitive Analysis", d: "Benchmarking, pricing analysis, GTM planning, market opportunity discovery." },
    { t: "Product UI/UX Ideation", d: "User-centric flows, activation-focused experiences, feature strategy." },
    { t: "Business & Growth Strategy", d: "Growth roadmaps, consulting recommendations, acquisition strategy." },
    { t: "Investor & Presentation Storytelling", d: "Pitch decks, strategic narratives, startup storytelling." },
  ];
  return (
    <Section id="services" eyebrow="Services" title={<>What I can <span className="grad-text">build with you</span>.</>}>
      <div className="grid gap-4 md:grid-cols-6">
        {services.map((s, i) => (
          <div key={s.t} className={`reveal glass rounded-3xl p-7 ${i < 2 ? "md:col-span-3" : i === 2 ? "md:col-span-2" : "md:col-span-2"}`}>
            <div className="font-display text-sm uppercase tracking-[0.18em] text-muted-foreground">0{i + 1}</div>
            <h3 className="mt-3 font-display text-xl font-bold leading-snug">{s.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Work() {
  const projects = [
    { t: "ShareChat / Moj Retention", tag: "Product · Growth", d: "Engagement drop-off analysis, personalized recommendations, episodic content strategy.", color: "from-[var(--electric)] to-[var(--lilac)]", link: "https://drive.google.com/file/d/1WSU3gm4XNq3DGUkwn8Qr_KtCbrCzmfHN/view" },
    { t: "Sustainable Olympics", tag: "ESG · Infra", d: "Circular infrastructure systems, renewable energy integration, ESG-aligned urban dev.", color: "from-[var(--coral)] to-[var(--lilac)]", link: "https://drive.google.com/file/d/1pU2HVZBTEPiY-FCM7tS6fpo3g5nDlg_C/view" },
    { t: "OYO Turnaround", tag: "Consulting · Trust", d: "Trust-building systems, AI-powered hotel previews, women-focused hotel concepts.", color: "from-[var(--lavender)] to-[var(--electric)]", link: "https://drive.google.com/file/d/19E5yw94cYuBIRcC5RM9XYYvu8EYn1O-N/view?usp=sharing" },
    { t: "Delhivery CX Engine", tag: "Product · CX", d: "Hyper-personalized delivery comms, dynamic windows, trust-focused experiences.", color: "from-[var(--electric)] to-[var(--coral)]", link: "https://drive.google.com/file/d/15DtarN67aAqPhX5YmSzbtpG4l02htDSr/view?usp=sharing" },
  ];
  return (
    <Section id="work" eyebrow="Featured Work" title={<>Case studies that turned <span className="serif font-normal">ambiguity</span> into <span className="grad-text">action</span>.</>}>
      <div className="grid gap-5 md:grid-cols-6">
        {projects.map((p, i) => {
          const span = i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : i === 2 ? "md:col-span-3" : "md:col-span-3";
          return (
            <a key={p.t} href={p.link} target="_blank" rel="noreferrer" className={`reveal group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card transition-all hover:-translate-y-1 hover:shadow-2xl ${span}`}>
              <div className={`relative h-48 bg-gradient-to-br ${p.color} overflow-hidden`}>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 0, transparent 40%), radial-gradient(circle at 70% 70%, white 0, transparent 30%)" }} />
                <div className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-[0.18em] text-white/80">{p.tag}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-transform group-hover:translate-x-1">
                  View deck ↗
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}

function Achievements() {
  const items = [
    ["15+", "National Case Competition Wins"],
    ["5", "Product & ESG case studies"],
    ["3", "Domains: Product, Consulting, Sustainability"],
  ];
  return (
    <Section eyebrow="Achievements" title={<>Milestones along the way.</>}>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map(([n, l]) => (
          <div key={l} className="reveal rounded-3xl bg-foreground p-8 text-background ring-soft">
            <div className="font-display text-6xl font-bold leading-none">{n}</div>
            <div className="mt-3 text-sm text-background/70">{l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Quote() {
  return (
    <section className="relative mx-auto my-16 max-w-6xl px-4">
      <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[var(--electric)] via-[var(--lilac)] to-[var(--coral)] p-10 text-center text-white md:p-20">
        <div className="blob -left-10 top-10 h-60 w-60 bg-white/40" />
        <div className="blob -right-10 bottom-10 h-60 w-60 bg-white/30" />
        <div className="relative">
          <div className="serif text-3xl leading-tight md:text-6xl">
            "Great products are built where <em>curiosity</em> meets <em>empathy</em>, and <em>strategy</em> meets <em>storytelling</em>."
          </div>
          <div className="mt-6 text-sm uppercase tracking-[0.25em] text-white/80">— Pushpanjali's working principle</div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build something <span className="grad-text">meaningful</span>.</>}>
      <div className="grid gap-6 md:grid-cols-2">
        <a href="mailto:pushpanjali.patel.chy24@itbhu.ac.in" className="reveal group rounded-3xl border border-foreground/10 bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
          <div className="mt-3 font-display text-2xl font-bold group-hover:text-[var(--electric)]">pushpanjali.patel.chy24@itbhu.ac.in</div>
        </a>
        <a href="tel:+918854015909" className="reveal group rounded-3xl border border-foreground/10 bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</div>
          <div className="mt-3 font-display text-2xl font-bold group-hover:text-[var(--electric)]">+91 88540 15909</div>
        </a>
        <a href="https://www.linkedin.com/in/pushpanjali-patel-b90586322/" target="_blank" rel="noreferrer" className="reveal group md:col-span-2 rounded-3xl grad-bg p-8 text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] opacity-80">LinkedIn</div>
              <div className="mt-3 font-display text-2xl font-bold">Connect with me ↗</div>
            </div>
            <div className="font-display text-6xl opacity-30 transition-opacity group-hover:opacity-60">in</div>
          </div>
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-foreground/10 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="font-display text-[clamp(3rem,15vw,12rem)] font-bold leading-none tracking-tight grad-text">
          Pushpanjali
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-6 text-sm text-background/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Pushpanjali Patel · Built with care.</div>
          <div className="flex gap-5">
            <a href="#about" className="hover:text-background">About</a>
            <a href="#work" className="hover:text-background">Work</a>
            <a href="#contact" className="hover:text-background">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  useReveal();
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Quote />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Services />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
