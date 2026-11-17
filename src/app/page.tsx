import {
  ArrowDownIcon, ArrowDownRightIcon, ArrowUpRightIcon, CodeIcon,
  DatabaseIcon, EnvelopeSimpleIcon, FlowArrowIcon, GithubLogoIcon,
  LinkedinLogoIcon, MapPinIcon, PhoneIcon, TerminalWindowIcon, TestTubeIcon,
} from "@phosphor-icons/react/ssr";
import { Navigation } from "@/components/navigation";
import { Illustration } from "@/components/illustration";
import { HeroCodeBackground } from "@/components/hero-code-background";
import { HeroMascot } from "@/components/hero-mascot";
import { about, bankComparison, experience, profile, projects, skillGroups, type Experience } from "@/data/portfolio";

const skillIcons = [FlowArrowIcon, CodeIcon, TerminalWindowIcon, DatabaseIcon, TerminalWindowIcon, TestTubeIcon];

function Tags({ items, label = "Technologies" }: { items: string[]; label?: string }) {
  return <ul className="tags" aria-label={label}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function ExperienceRow({ job }: { job: Experience }) {
  return (
    <article className="experience-row">
      <div className="experience-copy">
        <p className="period">{job.period}</p><h3>{job.organization}</h3>
        <p className="job-role">{job.role}</p>
        <p className="job-summary">{job.summary}</p>
        <ul className="experience-details">{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <Tags items={job.technologies} />
      </div>
      <Illustration id={job.illustration} />
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="top" tabIndex={-1}>
        <section className="hero hero--editorial" data-enter aria-labelledby="hero-title">
          <div className="wrap hero-content">
            <div className="hero-text hero-composition">
              <div className="hero-intro"><span className="hero-discipline">Workflow automation · Backend systems</span></div>
              <div className="hero-main">
                <div className="hero-copy-column">
                  <p className="hero-name">{profile.name}</p>
                  <h1 id="hero-title" aria-label={profile.title}><span>Automation</span><span>Developer <span className="hero-amp">&</span></span><span>Software Engineer</span></h1>
                  <div className="hero-bottom">
                    <p className="hero__lead">I build workflow automations and backend systems.<br className="desktop-break" /> Software engineering, Cairo University · 2023.</p>
                    <div className="btn-row">
                      <a className="btn btn--primary" href={profile.resume} download>Download Resume <ArrowDownIcon size={20} weight="regular" aria-hidden="true" /></a>
                      <a className="btn btn--secondary" href="#projects">View Projects <ArrowDownRightIcon size={20} weight="regular" aria-hidden="true" /></a>
                    </div>
                  </div>
                </div>
                <div className="hero-artwork">
                  <HeroCodeBackground />
                  <HeroMascot />
                </div>
              </div>
              <div className="hero-foot">
                <div className="hero-contact">
                  <p><MapPinIcon size={17} weight="regular" aria-hidden="true" />{profile.location}</p>
                  <a className="hero-phone m-link" href={profile.phone.href}><PhoneIcon size={17} weight="regular" aria-hidden="true" />{profile.phone.display}</a>
                </div>
                <a href="#projects" className="scroll-link">Selected work <ArrowDownIcon size={18} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects" aria-labelledby="projects-title" style={{ "--h": 2 } as React.CSSProperties}>
          <div className="wrap two-screens">
            {projects.map((project, index) => (
              <div className="screen-group" key={project.name}>
                {index === 0 && <div className="section-heading"><h2 id="projects-title">Selected projects</h2><span className="section-index" aria-hidden="true">01 / Work</span></div>}
                <article className="card project-card m-nolift">
                  <div className="project-inner">
                  <div className="project-copy">
                    <div className="project-meta"><span className="mint-tag">{project.category}</span><span className="item-number" aria-hidden="true">0{index + 1}</span></div>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="detail-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                    <Tags items={project.technologies} />
                    <p className="period">{project.period}</p>
                  </div>
                  <Illustration id={project.illustration} />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience" aria-labelledby="experience-title" style={{ "--h": 2 } as React.CSSProperties}>
          <div className="wrap two-screens">
            {experience.slice(0, 1).map((job) => (
              <div className="screen-group" key={job.organization}>
                <div className="section-heading"><h2 id="experience-title">Work experience</h2><span className="section-index" aria-hidden="true">02 / Experience</span></div>
                <ExperienceRow job={job} />
              </div>
            ))}
            <div className="screen-group">
              <article className="experience-row">
                <div className="experience-copy">
                  <p className="period">United Elite / Sales workflow</p>
                  <h3>{bankComparison.title}</h3>
                  <p className="job-summary">{bankComparison.description}</p>
                  <Tags items={bankComparison.banks} label="Banks considered" />
                </div>
                <Illustration id={bankComparison.illustration} />
              </article>
            </div>
          </div>
        </section>

        <section id="earlier-experience" className="section experience experience--previous" aria-labelledby="earlier-experience-title">
          <div className="wrap">
            <div className="section-heading"><h2 id="earlier-experience-title">Earlier experience</h2><span className="section-index" aria-hidden="true">02 / Continued</span></div>
            {experience.slice(1).map((job) => <ExperienceRow job={job} key={job.organization} />)}
          </div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title" data-moment="word-highlight">
          <div className="wrap">
            <div className="section-heading"><h2 id="about-title">About Mohamed</h2><span className="section-index" aria-hidden="true">03 / About</span></div>
            <div className="about-grid">
              <div className="about-copy">
                <p className="mo-wh__text">{about.introduction}</p>
                <div className="about-story">
                  {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="education"><span className="mint-tag">Education</span><h3>Cairo University</h3><p>Bachelor of Computer Science<br />Software Engineering · 2019–2023</p></div>
              </div>
              <Illustration id={about.illustration} />
            </div>
          </div>
        </section>

        <section id="skills" className="section skills" aria-labelledby="skills-title">
          <div className="wrap">
            <div className="section-heading"><h2 id="skills-title">Technical skills</h2><span className="section-index" aria-hidden="true">04 / Toolkit</span></div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = skillIcons[index];
                return <div key={group.name} className="skill-group"><Icon size={28} weight="regular" aria-hidden="true" /><h3>{group.name}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>;
              })}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="closing" aria-labelledby="contact-title">
        <div className="wrap footer-content">
          <div className="contact-top">
            <div className="section-heading"><h2 id="contact-title">Contact<br />Mohamed</h2><span className="section-index" aria-hidden="true">05 / Contact</span></div>
            <div className="contact-details"><p>Automation, backend development,<br />and the systems in between.</p><a className="email-link" href={`mailto:${profile.email}`}><EnvelopeSimpleIcon size={24} weight="regular" aria-hidden="true" /><span>{profile.email}</span><ArrowUpRightIcon size={24} weight="regular" aria-hidden="true" /></a></div>
            <div className="contact-actions"><a className="btn btn--primary" href={profile.resume} download>Download Resume <ArrowDownIcon size={20} weight="regular" aria-hidden="true" /></a><div className="socials"><a href={profile.github} target="_blank" rel="noopener noreferrer"><GithubLogoIcon size={22} weight="regular" aria-hidden="true" />GitHub <ArrowUpRightIcon size={17} aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinLogoIcon size={22} weight="regular" aria-hidden="true" />LinkedIn <ArrowUpRightIcon size={17} aria-hidden="true" /></a></div></div>
          </div>
        </div>
      </footer>
    </>
  );
}
