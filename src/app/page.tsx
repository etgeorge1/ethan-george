import { Section } from "@/components/section";
import { SiteHeader } from "@/components/site-header";
import { SpotlightCard } from "@/components/spotlight-card";
import { experience, projects, site, skills } from "@/content/site";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="aurora -z-10" aria-hidden />
          <div className="grid-bg -z-10" aria-hidden />

          <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-6 py-24">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </p>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tighter text-balance sm:text-7xl">
              Hi, I&apos;m {site.name}.{" "}
              <span className="text-gradient">{site.role}.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-pretty text-muted sm:text-xl">{site.tagline}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 font-medium text-background transition hover:opacity-90"
              >
                View my work
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full border border-border px-6 font-medium transition hover:bg-surface"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="Crafting interfaces that feel effortless.">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="reveal space-y-4 text-lg text-pretty text-muted">
              <p>
                Placeholder bio. Talk about what drives you as a frontend engineer — the intersection of design and
                engineering, obsessing over details, and shipping experiences people love.
              </p>
              <p>Placeholder paragraph about your background, current focus, and what you&apos;re exploring next.</p>
            </div>
            <ul className="reveal flex flex-wrap content-start gap-2" aria-label="Skills">
              {skills.map((skill) => (
                <li key={skill} className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="work" eyebrow="Selected Work" title="Things I've built.">
          <ul className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.title} className="reveal">
                <SpotlightCard className="h-full">
                  <a href={project.href} className="flex h-full flex-col p-6 sm:p-8">
                    <div className="mb-6 aspect-video rounded-xl border border-border bg-gradient-to-br from-accent/20 via-surface to-accent-2/20" />
                    <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-2 flex-1 text-pretty text-muted">{project.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech used">
                      {project.tags.map((tag) => (
                        <li key={tag} className="font-mono text-xs text-muted">
                          #{tag}
                        </li>
                      ))}
                    </ul>
                  </a>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Where I've worked.">
          <ol className="relative space-y-10 border-l border-border pl-8">
            {experience.map((job) => (
              <li key={`${job.role}-${job.period}`} className="reveal relative">
                <span className="absolute top-1.5 -left-[2.3rem] size-3 rounded-full border-2 border-background bg-accent" />
                <p className="font-mono text-xs text-muted">{job.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-pretty text-muted">{job.summary}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's build something great.">
          <div className="reveal flex flex-col items-start gap-6">
            <p className="max-w-xl text-lg text-pretty text-muted">
              Placeholder call to action. Whether it&apos;s a role, a collaboration, or just to say hi — my inbox is
              open.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-2xl font-semibold tracking-tight underline decoration-accent decoration-2 underline-offset-8 transition hover:decoration-accent-2 sm:text-4xl"
            >
              {site.email}
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
          <p>
            Designed &amp; built by {site.name}.
          </p>
          <ul className="flex gap-4">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
