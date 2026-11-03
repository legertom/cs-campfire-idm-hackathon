import { resources, roles, teams } from "./content";

function Flame({ small = false }: { small?: boolean }) {
  return (
    <svg
      className={small ? "flame small" : "flame"}
      viewBox="0 0 64 80"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M35 2C40 25 61 28 61 48C61 66 48 78 31 78C13 78 3 65 3 50C3 37 11 29 17 22C16 35 23 38 24 37C32 29 35 17 35 2Z"
        fill="currentColor"
      />
      <path
        d="M34 40C33 50 45 52 45 62C45 70 39 76 31 76C23 76 18 70 18 63C18 54 28 50 34 40Z"
        fill="#F7EEDC"
      />
    </svg>
  );
}
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="header">
        <a className="brand" href="#">
          <Flame small />
          <span>
            campfire<span className="brand-year"> / 2026</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#challenge">The challenge</a>
          <a href="#roles">Your role</a>
          <a href="#teams">The teams</a>
        </nav>
        <a className="nav-cta" href="#get-ready">
          Get ready <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> CLEVER CUSTOMER SUPPORT · CAMPFIRE
              2026
            </p>
            <h1 id="hero-title">
              A little spark.
              <br />A stronger <em>CS team.</em>
            </h1>
            <p className="hero-description">
              Bring your Clever IDM know-how. Build something that helps the
              next agent learn it.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#get-ready">
                Find your starting point <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#challenge">
                Explore the challenge <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-note">
              Three teams. Three perspectives. One shared mission.
            </p>
          </div>
          <div
            className="camp-scene"
            aria-label="An illustrated campfire surrounded by three teams"
            role="img"
          >
            <div className="scene-orbit orbit-one" />
            <div className="scene-orbit orbit-two" />
            <span className="scene-star star-one">✦</span>
            <span className="scene-star star-two">✧</span>
            <span className="scene-star star-three">+</span>
            <span className="scene-label label-one">THE KNOW-HOW</span>
            <span className="scene-label label-two">THE BUILD</span>
            <span className="scene-label label-three">THE LEARNING</span>
            <div className="fire-halo">
              <Flame />
              <div className="log log-one" />
              <div className="log log-two" />
            </div>
            <span className="scene-caption">
              GOOD THINGS START AROUND A CAMPFIRE.
            </span>
          </div>
        </section>
        <div className="stats" aria-label="Hackathon at a glance">
          <div>
            <strong>03</strong>
            <span>hackathon teams</span>
          </div>
          <div>
            <strong>01</strong>
            <span>training experience per team</span>
          </div>
          <div>
            <strong>
              ≤ 30<span className="unit"> min</span>
            </strong>
            <span>for an agent to learn</span>
          </div>
          <div className="stats-mission">
            <span className="tiny-flame">✳</span>
            <p>
              Built by CS.
              <br />
              <b>For the next “I've got this.”</b>
            </p>
          </div>
        </div>
        <section id="challenge" className="section challenge">
          <div>
            <p className="eyebrow">01 / THE CHALLENGE</p>
            <h2>
              Turn what you know
              <br />
              into what we <em>all know.</em>
            </h2>
          </div>
          <div className="challenge-copy">
            <p className="lead">
              Build one asynchronous training experience on a Clever IDM topic
              that a CS agent can complete in 30 minutes or less.
            </p>
            <p>
              Each team will create an interactive learning experience as a
              Next.js app, stored on GitHub and hosted on Vercel. Pick one
              useful skill, make room to practice, and help an agent feel ready
              to use it.
            </p>
            <div className="outcome">
              <span aria-hidden="true">↳</span>
              <p>
                <b>The finish line</b>
                <br />
                One focused topic. One interactive artifact. One clear learning
                outcome.
              </p>
            </div>
          </div>
        </section>
        <section id="roles" className="section roles">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / YOUR ROLE</p>
              <h2>Three seats at the fire.</h2>
            </div>
            <p>
              Different strengths.
              <br />A shared finish line.
            </p>
          </div>
          <div className="role-grid">
            {roles.map((role) => (
              <article className="role-card" key={role.name}>
                <span className="role-number">
                  {role.number}
                  <span aria-hidden="true">✳</span>
                </span>
                <h3>{role.name}</h3>
                <p className="role-tagline">{role.label}</p>
                <p>{role.description}</p>
                <ul>
                  {role.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section id="get-ready" className="section prepare">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / BEFORE WE GATHER</p>
              <h2>A little prep. A running start.</h2>
            </div>
            <p>
              Your starting points,
              <br />
              all in one place.
            </p>
          </div>
          <article
            className="sme-brief everyone-prep"
            aria-labelledby="everyone-prep-title"
          >
            <div className="sme-brief-heading">
              <span className="pill">FOR EVERYONE</span>
              <p className="everyone-deadline">Complete before the hackathon</p>
            </div>
            <h3 id="everyone-prep-title">
              Make It Count. Then put it into practice.
            </h3>
            <p className="sme-intro">
              Subject Matter Experts, Builders, and Learning Designers: complete
              the <strong>Make It Count</strong> course before the hackathon if
              you haven't already.
            </p>
            <p className="sme-intro">
              <strong>Get your workspace ready:</strong> download the Claude
              desktop app or use VS Code with the Claude Code extension.
              <strong>
                {" "}
                Claude.ai in the browser is not allowed for the hackathon.
              </strong>
            </p>
            <p className="sme-intro">
              Everyone is responsible for using Claude{" "}
              <strong>effectively and efficiently</strong> while working toward
              our shared goal: building something significant that helps CS
              agents learn a useful Clever IDM skill.
            </p>
            <a
              className="button primary"
              href={resources.everyone}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Make It Count <Arrow />
            </a>
          </article>
          <article className="sme-brief" aria-labelledby="sme-brief-title">
            <div className="sme-brief-heading">
              <span className="pill">FOR SUBJECT MATTER EXPERTS</span>
              <p className="sme-deadline">Before 5 p.m. · Friday, November 6</p>
            </div>
            <h3 id="sme-brief-title">
              Pick the topic. Set your team up for impact.
            </h3>
            <p className="sme-intro">
              Adam, Nikkole, and Keith: choose a Clever IDM topic with your team
              and tell Tom and Katie{" "}
              <strong>before 5 p.m. on November 6.</strong> Aim for a topic narrow
              enough that an agent can make significant progress in 30 minutes,
              but broad enough to make an impact.
            </p>
            <ol className="sme-steps">
              <li>
                <h4>Consult your team</h4>
                <p>
                  Work with your teammates in the Builder and Learning Designer
                  roles to choose a focus. Agree on what the learner should be able to do after
                  the training.
                </p>
              </li>
              <li>
                <h4>Research where the need is</h4>
                <p>
                  Consult Guru, review Salesforce cases from the past year,
                  and draw on your own expertise. Connect Claude
                  to Salesforce and Sigma and ask Claude to help research
                  patterns, recurring questions, and opportunities for training.
                </p>
              </li>
              <li>
                <h4>Choose together, then tell Tom and Katie</h4>
                <p>
                  Use that research and your team's judgment to pick one topic.
                  Send Tom and Katie your team's choice before the deadline.
                </p>
              </li>
            </ol>
          </article>
          <div className="resource-grid">
            <a
              href={resources.builder}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card builder-resource"
            >
              <div className="resource-top">
                <span className="pill">FOR BUILDERS</span>
                <Arrow />
              </div>
              <h3>The Golden Path</h3>
              <p>
                Your step-by-step setup guide for Claude Code, GitHub, and
                Vercel. Arrive with a live team page and the tools to build.
              </p>
              <div className="resource-foot">
                <span>Open the setup guide</span>
                <span aria-hidden="true">→</span>
              </div>
            </a>
            <a
              href={resources.designer}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card designer-resource"
            >
              <div className="resource-top">
                <span className="pill">FOR LEARNING DESIGNERS</span>
                <Arrow />
              </div>
              <h3>Fifteen Pieces</h3>
              <p>
                Your Learning Designer ramp-up course. Start here to prepare for
                shaping your team's training experience.
              </p>
              <div className="resource-foot">
                <span>Start the ramp-up course</span>
                <span aria-hidden="true">→</span>
              </div>
            </a>
          </div>
          <div className="prep-note">
            <span className="note-label">BUILDER CHECKPOINT</span>
            <p>
              Finish setup and send your live team page to Tom and Katie by{" "}
              <b>5 p.m. on Friday, November 6.</b> Set aside about an hour; the
              Golden Path walks you through it.
            </p>
          </div>
        </section>
        <section id="teams" className="section teams">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / THE CREW</p>
              <h2>Meet your fellow builders.</h2>
            </div>
            <p>
              Your teams are set. Topics are coming.
              <br />
              Find your crew and choose your focus together.
            </p>
          </div>
          <div className="team-grid">
            {teams.map((team, i) => (
              <article className="team-card" key={team.name}>
                <div className="team-top">
                  <span className="team-index">0{i + 1}</span>
                  <span className="team-status">Taking shape</span>
                </div>
                <h3>{team.name}</h3>
                <p className="team-topic">{team.topic}</p>
                <dl>
                  <div>
                    <dt>Subject Matter Expert</dt>
                    <dd>{team.sme}</dd>
                  </div>
                  <div>
                    <dt>Builder</dt>
                    <dd>{team.builder}</dd>
                  </div>
                  <div>
                    <dt>
                      {team.designers.length > 1
                        ? "Learning Designers"
                        : "Learning Designer"}
                    </dt>
                    <dd>{team.designers.join(" & ")}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
        <section className="closing">
          <Flame small />
          <p>
            Make Clever IDM the best-supported
            <br />
            identity management solution for our customers.
          </p>
          <span>THAT'S THE SPARK.</span>
        </section>
      </main>
      <footer>
        <a className="brand" href="#">
          <Flame small />
          <span>campfire / 2026</span>
        </a>
        <p>Clever CS · Made for learning together.</p>
        <a href="#main">Back to the top ↑</a>
      </footer>
    </>
  );
}
