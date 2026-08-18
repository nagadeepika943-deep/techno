import { useEffect, useState } from "react";
import ThreeBackground from "./ThreeBackground";
import "./App.css";

const events = [
  {
    number: "01",
    type: "TECHNICAL FESTIVAL",
    title: "AAVARTAN",
    description:
      "The flagship technical festival of NIT Raipur, bringing together technology, competition, innovation and creativity.",
  },
  {
    number: "02",
    type: "SCIENCE & INNOVATION",
    title: "VIGYAAN",
    description:
      "A platform where curiosity becomes experimentation and students explore the world of science and technology.",
  },
  {
    number: "03",
    type: "IDEATION PLATFORM",
    title: "IGNITE",
    description:
      "A space for bold ideas, prototypes and the first step towards building something meaningful.",
  },
];

const milestones = [
  ["2007", "THE BEGINNING", "Vigyaan begins as a national-level science exhibition."],
  ["2011", "AAVARTAN", "Vigyaan evolves into a complete technical festival."],
  ["2019", "10,000+", "Aavartan reaches a massive audience across Central India."],
  ["2026", "NEXT CHAPTER", "A new generation continues the journey of innovation."],
];

function App() {
  const [entered, setEntered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouse = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const enterWebsite = () => {
    if (loading) return;

    setLoading(true);

    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 5;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setTimeout(() => {
          setEntered(true);
        }, 500);
      }

      setProgress(current);
    }, 100);
  };

  if (!entered) {
    return (
      <div className="intro-screen">
        <ThreeBackground />
        <div
          className="cursor-glow"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
          }}
        />

        <div className="intro-grid" />
        <div className="intro-noise" />

        <div className="intro-orbit orbit-a" />
        <div className="intro-orbit orbit-b" />
        <div className="intro-orbit orbit-c" />

        <div className="floating-object object-one">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="floating-object object-two">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="intro-content">
          <div className="intro-status">
            <span className="status-dot" />
            NIT RAIPUR · TECHNICAL COMMITTEE
          </div>

          <div className="intro-brand">
            <div className="intro-logo">T</div>

            <div>
              <h1>TECHNOCRACY</h1>
              <p>ENGINEERING THE FUTURE</p>
            </div>
          </div>

          <div className="intro-heading">
            <span>ENTER THE</span>

            <h2>
              TECH
              <br />
              <em>UNIVERSE.</em>
            </h2>
          </div>

          <p className="intro-description">
            Where curiosity becomes creation and ideas become impact.
          </p>

          {!loading ? (
            <button className="enter-button" onClick={enterWebsite}>
              <span>ENTER TECHNOCRACY</span>
              <strong>↗</strong>
            </button>
          ) : (
            <div className="loader">
              <div className="loader-header">
                <span>INITIALIZING TECHNOCRACY CORE</span>
                <strong>{progress}%</strong>
              </div>

              <div className="loader-track">
                <div
                  className="loader-progress"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p>
                {progress < 30
                  ? "CONNECTING TO NITRR NETWORK..."
                  : progress < 60
                  ? "LOADING INNOVATION MODULES..."
                  : progress < 90
                  ? "CALIBRATING DIGITAL SPACE..."
                  : "SYSTEM READY — WELCOME."}
              </p>
            </div>
          )}
        </div>

        <div className="intro-footer">
          <span>TECHNOCRACY / 01</span>
          <span>SCROLL TO EXPLORE</span>
          <span>EST. 2007</span>
        </div>
      </div>
    );
  }

  return (
  <div
    className="website"
    style={{
      "--mouse-x": `${mouse.x}%`,
      "--mouse-y": `${mouse.y}%`,
    }}
  >
    <ThreeBackground />
      <div className="site-noise" />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">T</span>
          <span>TECHNOCRACY</span>
        </a>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#events">EVENTS</a>
          <a href="#journey">JOURNEY</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a href="#contact" className="nav-action">
          JOIN THE MOVEMENT <span>↗</span>
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span />
              OFFICIAL TECHNICAL COMMITTEE · NIT RAIPUR
            </div>

            <h2>
              WHERE
              <br />
              <i>IDEAS</i>
              <br />
              BECOME
              <br />
              <span>IMPACT.</span>
            </h2>

            <p>
              A community of builders, creators and innovators pushing
              technology beyond boundaries.
            </p>

            <div className="hero-actions">
              <a href="#about" className="primary-button">
                DISCOVER TECHNOCRACY <span>↗</span>
              </a>

              <a href="#events" className="secondary-button">
                EXPLORE EVENTS
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />

            <div className="tech-orb">
              <div className="orb-core">
                <span>T</span>
              </div>

              <div className="orb-ring ring-one" />
              <div className="orb-ring ring-two" />
              <div className="orb-ring ring-three" />

              <div className="orb-dot dot-one" />
              <div className="orb-dot dot-two" />
            </div>

            <div className="coordinates">
              21°14' N
              <br />
              81°38' E
            </div>

            <div className="hero-index">TECH / 01</div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL</span>
            <i />
          </div>
        </section>

        <section className="manifesto section" id="about">
          <div className="section-label">
            <span>01</span>
            THE MANIFESTO
          </div>

          <div className="manifesto-grid">
            <h3>
              TECHNOLOGY
              <br />
              IS NOT THE
              <br />
              <em>DESTINATION.</em>
            </h3>

            <div className="manifesto-copy">
              <p>
                Team Technocracy is the official technical committee of
                NIT Raipur — a community driven by curiosity, engineering,
                creativity and innovation.
              </p>

              <p>
                We create platforms where students don't simply learn
                technology. They experiment with it, build with it and
                turn ideas into experiences.
              </p>

              <div className="manifesto-quote">
                THINK.
                <br />
                BUILD.
                <br />
                IMPACT.
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div>
            <strong>2007</strong>
            <span>ORIGIN</span>
          </div>

          <div>
            <strong>10K+</strong>
            <span>FOOTFALL</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>POSSIBILITIES</span>
          </div>

          <div>
            <strong>01</strong>
            <span>COMMUNITY</span>
          </div>
        </section>

        <section className="events section" id="events">
          <div className="section-heading">
            <div>
              <span className="section-kicker">02 / WHAT WE BUILD</span>

              <h3>
                ONE COMMUNITY.
                <br />
                <em>MANY WORLDS.</em>
              </h3>
            </div>

            <p>
              From technical festivals and exhibitions to innovation
              platforms, every initiative is designed to move ideas forward.
            </p>
          </div>

          <div className="event-list">
            {events.map((event) => (
              <article className="event-card" key={event.number}>
                <span className="event-number">{event.number}</span>

                <div className="event-main">
                  <span className="event-type">{event.type}</span>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>

                <div className="event-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section className="journey section" id="journey">
          <div className="section-label">
            <span>03</span>
            THE JOURNEY
          </div>

          <div className="journey-heading">
            <h3>
              BUILT ON
              <br />
              <em>EVOLUTION.</em>
            </h3>

            <p>
              Every chapter started with a simple idea: create something
              that didn't exist before.
            </p>
          </div>

          <div className="timeline">
            {milestones.map(([year, title, description]) => (
              <div className="timeline-item" key={year}>
                <div className="timeline-year">{year}</div>

                <div className="timeline-line">
                  <span />
                </div>

                <div className="timeline-content">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" />

          <span className="section-kicker">04 / YOUR MOVE</span>

          <h3>
            HAVE AN
            <br />
            <em>IDEA?</em>
          </h3>

          <p>The next breakthrough could start with you.</p>

          <a href="mailto:nitrr.technocracy@gmail.com">
            CONNECT WITH US <span>↗</span>
          </a>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">T</div>

            <div>
              <h4>TECHNOCRACY</h4>
              <p>BUILDING TOMORROW SINCE 2007.</p>
            </div>
          </div>

          <div className="footer-navigation">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#events">EVENTS</a>
            <a href="#journey">JOURNEY</a>
          </div>

          <div className="footer-contact">
            <span>CONTACT</span>

            <a href="mailto:nitrr.technocracy@gmail.com">
              nitrr.technocracy@gmail.com
            </a>

            <p>NIT Raipur, Chhattisgarh, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 TEAM TECHNOCRACY · NIT RAIPUR</span>
          <span>MADE FOR THE FUTURE</span>
          <span>TECH / 01</span>
        </div>
      </footer>
    </div>
  );
}

export default App;