"use client";

const speakersData = [
  {
    name: "Jean François Tremblay",
    day: "",
    role: "Original Pioneer of Peptide Science",
    topic: "Peptide Science & Real Clinical Protocols",
    color: "#00D4B8",
    image: "/jean.jpeg",
    instagram: "https://www.instagram.com/jeanfrancois6579/"
  },
  {
    name: "Dr. Syed Hasnain Haider Shah",
    day: "",
    role: "Clinical & Regenerative Anchor",
    topic: "Regenerative Medicine & Clinical Protocols",
    color: "#1A7A8A",
    image: "/shah.jpeg",
    instagram: "https://www.instagram.com/dr_sayed_shah/"
  },
  {
    name: "Dr. Adeel Khan",
    day: "",
    role: "Regenerative Expert",
    topic: "MUSE Cells & Stem Cell Science",
    color: "#22D3EE",
    image: "/adeel.jpeg",
    instagram: "https://www.instagram.com/dr.akhan/"
  },
  {
    name: "Sabine Hazan, MD",
    day: "",
    role: "Gut Expert",
    topic: "Gut Microbiome & Peptide Foundations",
    color: "#3D8EFF",
    image: "/sabine.jpeg",
    instagram: "https://www.instagram.com/dr.sabinehazan/"
  },
  {
    name: "Dr. Arpit Bansal",
    day: "",
    role: "Medicine 3.0",
    topic: "Longevity Science expert",
    color: "#8B5CF6",
    image: "/arpit.JPG.jpeg",
    instagram: "https://www.instagram.com/drarpitbansal?igsh=am5mN3A4eGV5cHFj"
  },
  {
    name: "Nathalie Niddam",
    day: "",
    role: "Bioregulator Expert",
    topic: "Oral Bioregulators & Longevity Science",
    color: "#A78BFA",
    image: "/natalie.jpg",
    instagram: "https://www.instagram.com/nathalieniddam/"
  },
  {
    name: "Shirley A. D'Souza",
    day: "",
    role: "Host, Moderator & Nutrition Expert",
    topic: "Nutrition, Peptide Synergy & Summit Curation",
    color: "#C9A84C",
    image: "/shirley-new.png",
    instagram: "https://www.instagram.com/shirleybioreset/"
  }
];

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-brand">
          Master The <span>Molecule</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#learn">What You'll Learn</a>
          </li>
          <li>
            <a href="#speakers">Speakers</a>
          </li>
          <li>
            <a href="https://api.leadconnectorhq.com/widget/form/vIxRp1MuWANGfjYl67GZ" target="_blank" rel="noopener noreferrer">Register</a>
          </li>
        </ul>
        <a href="https://api.leadconnectorhq.com/widget/form/vIxRp1MuWANGfjYl67GZ" target="_blank" rel="noopener noreferrer" className="nav-cta">
          Register Free
        </a>
      </nav>

      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-circle c1"></div>
          <div className="hero-bg-circle c2"></div>
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-presented">
              &nbsp;&middot;&nbsp; A Free Live Summit
            </div>
            <h1 className="hero-title">
              <span className="hero-title-top">Master The</span>
              <span className="hero-title-bot">Molecule</span>
            </h1>
            <div className="hero-rule"></div>
            <div className="hero-subtitle">
              Peptides &nbsp;&middot;&nbsp; Bioregulators &nbsp;&middot;&nbsp;
              Stem Cell Science
            </div>
            <div className="hero-dates">
              <div className="hero-date-card d1">
                <div className="hero-date-label">Day 1</div>
                <div className="hero-date-day">Tue 14 April 2026</div>
                <div className="hero-date-time">
                  6:00 PM Dubai &nbsp;&middot;&nbsp; 3:00 PM UK &nbsp;&middot;&nbsp; 4:00 PM Africa (SAST) &nbsp;&middot;&nbsp; 12:00 AM AUS (AEST)
                </div>
              </div>
              <div className="hero-date-card d2">
                <div className="hero-date-label">Day 2</div>
                <div className="hero-date-day">Wed 15 April 2026</div>
                <div className="hero-date-time">
                  6:00 PM Dubai &nbsp;&middot;&nbsp; 3:00 PM UK &nbsp;&middot;&nbsp; 4:00 PM Africa (SAST) &nbsp;&middot;&nbsp; 12:00 AM AUS (AEST)
                </div>
              </div>
            </div>
            <div className="hero-actions">
              <a href="https://api.leadconnectorhq.com/widget/form/vIxRp1MuWANGfjYl67GZ" target="_blank" rel="noopener noreferrer" className="hero-cta">
                Register Free
              </a>
              <span className="hero-zoom-pill">
                <span className="hero-zoom-dot"></span>
                Live on Zoom
              </span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-header">
              <div className="hero-panel-title">Free Summit</div>
              <div className="hero-panel-val">2 Days of Science</div>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">7</div>
                <div className="hero-stat-label">World Class Experts</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">6h</div>
                <div className="hero-stat-label">Of Live Education</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">0</div>
                <div className="hero-stat-label">Cost to Attend</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">∞</div>
                <div className="hero-stat-label">Noise Removed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section speakers" id="speakers">
        <div className="section-inner">
          <div className="section-eyebrow">Presenting Experts</div>
          <div className="section-rule"></div>
          <div className="speakers-grid">
            {speakersData.map((speaker, index) => (
              <div className="speaker-card" key={index}>
                <div
                  className="speaker-accent"
                  style={{ background: speaker.color }}
                ></div>
                <div className="speaker-photo-wrap">
                  {speaker.instagram ? (
                    <a href={speaker.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                      <div className="speaker-photo">
                        {speaker.image ? (
                          <img src={speaker.image} alt={speaker.name} />
                        ) : (
                          "PHOTO"
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className="speaker-photo">
                      {speaker.image ? (
                        <img src={speaker.image} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                      ) : (
                        "PHOTO"
                      )}
                    </div>
                  )}
                </div>
                <div className="speaker-body">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    {/* <div className="speaker-day" style={{ color: speaker.color, marginBottom: 0 }}>
                      {speaker.day}
                    </div> */}
                    {speaker.instagram && (
                      <a href={speaker.instagram} target="_blank" rel="noopener noreferrer" style={{ color: speaker.color, display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="speaker-name">
                    {speaker.instagram ? (
                      <a href={speaker.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        {speaker.name}
                      </a>
                    ) : (
                      speaker.name
                    )}
                  </div>
                  <div className="speaker-role" style={{ color: speaker.color }}>
                    {speaker.role}
                  </div>
                  <div className="speaker-topic">
                    {speaker.topic}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section about" id="about">
        <div className="section-inner">
          <div className="about-inner">
            <div className="about-pull">
              "Your health is not a trend. Treat it like science."
            </div>
            <div className="about-body">
              <div className="section-eyebrow">About This Summit</div>
              <div className="section-rule"></div>
              <p>
                Peptides, bioregulators and stem cell science are transforming
                the longevity space but so is the noise around them.
                Influencers are dosing on camera, unverified compounds are being
                sold in back channels, and protocols are being copied with no
                understanding of interactions, contraindications or individual
                biochemistry. This is not optimisation.{" "}
                <strong>This is gambling with your health.</strong>
              </p>
              <p>
                Master The Molecule was built to cut through every bit of that.
                The mastermind of <strong>Shirley A. D'Souza</strong> has
                brought together some of the greatest minds in this field
                spearheaded clinically by{" "}
                <strong>Dr. Syed Hasnain Haider Shah</strong> and anchored in
                science by <strong>Jean François Tremblay</strong>, the original
                pioneer of peptide research. Free. Live. No noise.
              </p>
              <div className="about-signature">
                Free. Live. No noise. &nbsp;&middot;&nbsp;
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section learn" id="learn">
        <div className="section-inner">
          <div className="section-eyebrow">What You Will Learn</div>
          <div className="section-rule"></div>
          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-num">01</div>
              <div className="learn-title">
                Peptide Protocols That Actually Work
              </div>
              <div className="learn-desc">
                Real clinical dosing not testing frameworks. What practitioners
                use with real patients every day.
              </div>
            </div>
            <div className="learn-card">
              <div className="learn-num">02</div>
              <div className="learn-title">Bioregulator Cycling &amp; Longevity</div>
              <div className="learn-desc">
                Epitalon, Thymalin, Endolutin — how to cycle oral bioregulators
                intelligently over time.
              </div>
            </div>
            <div className="learn-card">
              <div className="learn-num">03</div>
              <div className="learn-title">
                MUSE Cells, Stem Cells &amp; Exosomes
              </div>
              <div className="learn-desc">
                Where peptide therapy ends and regenerative medicine begins and
                who is a real candidate.
              </div>
            </div>
            <div className="learn-card">
              <div className="learn-num">04</div>
              <div className="learn-title">Your Gut as the Foundation</div>
              <div className="learn-desc">
                Why microbiome health determines how well every peptide protocol
                actually works in the body.
              </div>
            </div>
            <div className="learn-card">
              <div className="learn-num">05</div>
              <div className="learn-title">Supplements &amp; Synergy</div>
              <div className="learn-desc">
                What to stack, what to avoid, and how supplements interact with
                peptide protocols.
              </div>
            </div>
            <div className="learn-card">
              <div className="learn-num">06</div>
              <div className="learn-title">Precision Over Protocol</div>
              <div className="learn-desc">
                How to assess individual biochemistry, health conditions and
                contraindications before starting anything.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section who" id="who">
        <div className="section-inner">
          <div className="section-eyebrow">Who Should Attend</div>
          <div
            className="section-rule"
            style={{ background: "#1A7A8A" }}
          ></div>
          <div className="who-grid">
            <div className="who-card">
              <div className="who-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B83A52"
                  strokeWidth="1.5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="who-card-title">Coaches &amp; Nutritionists</div>
              <div className="who-card-desc">
                You are advising clients who are already asking about peptides.
                This summit gives you the clinical literacy to guide them
                safely, confidently and correctly.
              </div>
            </div>
            <div className="who-card">
              <div className="who-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1A7A8A"
                  strokeWidth="1.5"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="who-card-title">Doctors &amp; Practitioners</div>
              <div className="who-card-desc">
                You want the real protocols dosing, cycling, contraindications
                and regenerative options presented by the researchers and
                clinicians who developed them.
              </div>
            </div>
            <div className="who-card">
              <div className="who-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7A5A3A"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <div className="who-card-title">
                Health Enthusiasts &amp; Biohackers
              </div>
              <div className="who-card-desc">
                You are curious, self directed and done with influencer noise.
                This is the room where the serious conversation happens and it
                is free.
              </div>
            </div>
          </div>
          <div className="who-closing">
            You will learn directly from the minds who live and breathe this
            science every single day researchers, clinicians and specialists
            with decades of hands on experience. This is rare. And it is free.
            <strong>Reserve your seat below</strong>
          </div>
        </div>
      </section>



      <section className="section register" id="register">
        <div className="section-inner">
          <div className="register-inner">
            <div className="register-left">
              <div className="section-eyebrow">Reserve Your Seat</div>
              <div className="section-rule"></div>
              <h2 className="register-heading">
                It's Free.<br />
                <span>Join Us Live.</span>
              </h2>
              <p className="register-sub">
                Two days of world class peptide education from the researchers
                and clinicians who live this science every day. No cost. No
                catch. Just science.
              </p>
              <div className="register-details">
                <div className="register-detail">
                  <div className="register-detail-dot"></div>
                  Tuesday 14 April 2026 &middot; 6:00 PM Dubai &middot; 3:00 PM UK &middot; 4:00 PM Africa (SAST) &middot; 12:00 AM AUS (AEST)
                </div>
                <div className="register-detail">
                  <div
                    className="register-detail-dot"
                    style={{ background: "#1A7A8A" }}
                  ></div>
                  Wednesday 15 April 2026 &middot; 6:00 PM Dubai &middot; 3:00 PM UK &middot; 4:00 PM Africa (SAST) &middot; 12:00 AM AUS (AEST)
                </div>
                <div className="register-detail">
                  <div
                    className="register-detail-dot"
                    style={{ background: "#00D4B8" }}
                  ></div>
                  Live on Zoom &middot; Free to attend
                </div>
              </div>
            </div>
            <div className="register-form">
              <a
                href="https://api.leadconnectorhq.com/widget/form/vIxRp1MuWANGfjYl67GZ"
                target="_blank"
                rel="noopener noreferrer"
                className="form-submit"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  padding: "24px 40px",
                  fontSize: "18px",
                  marginTop: 0,
                  textDecoration: "none",
                  boxSizing: "border-box"
                }}
              >
                Register Now It's Free
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">
              Master The <span>Molecule</span>
            </div>
            <div className="footer-brand-tag">
              Peptides &middot; Bioregulators &middot; Stem Cell Science
            </div>
          </div>
          <div>
            <div className="footer-col-title">Event Details</div>
            <div className="footer-detail">14 &amp; 15 April 2026</div>
            <div className="footer-detail">6:00 PM Dubai &middot; 3:00 PM UK &middot; 4:00 PM Africa (SAST) &middot; 12:00 AM AUS (AEST)</div>
            <div className="footer-detail">Live on Zoom</div>
            <div
              className="footer-detail"
              style={{ color: "var(--burg)", marginTop: "4px" }}
            >
              Free to Attend
            </div>
          </div>
          <div>
            <div className="footer-col-title">Follow</div>
            <div className="footer-handle"> </div>
            <div className="footer-handle">@shirleybioreset</div>
          </div>
        </div>
        <div className="footer-copy">
          <span>&copy; Master The Molecule 2026. All rights reserved.</span>
          <span style={{ color: "var(--petrol-muted)" }}>

          </span>
        </div>
      </footer>
    </>
  );
}
