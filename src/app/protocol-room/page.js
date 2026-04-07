
"use client";

import { useState, useEffect } from "react";
import "./styles.css";

export default function ProtocolRoom() {
  const [timeLeft, setTimeLeft] = useState({ hours: "48", mins: "00", secs: "00" });
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // Setting 48 hours from component mount
    const endTime = new Date().getTime() + (48 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft({ hours: "00", mins: "00", secs: "00" });
        clearInterval(interval);
        return;
      }

      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(h).padStart(2, '0'),
        mins: String(m).padStart(2, '0'),
        secs: String(s).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="protocol-room">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>



      <section className="hero">
        <div className="hero-inner">

          <div className="hero-left">
            <div className="hero-eyebrow">Master The Molecule · Exclusive Add On</div>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Limited to 50 seats
            </div>
            <h1>The<span>Protocol Room</span></h1>
            <div className="hero-rule"></div>
            <p className="hero-sub">Two private sessions. Two world class experts. Your questions answered directly.</p>
            <p className="hero-desc">
              The main summit gives you <strong>two days of world class science</strong> completely free. The Protocol Room gives you something rarer. Sixty minutes after each day, Jean François Tremblay and Dr. Syed Hasnain Haider Shah stay on Zoom for a private, intimate Q&A with a small group of serious attendees. <strong>No presentations. No slides. Just your questions, answered.</strong>
            </p>
          </div>


          <div className="price-card">
            <div className="price-card-header">
              <div className="price-card-title">The Protocol Room</div>
              <div className="price-card-sub">VIP Access · Both Days</div>
            </div>
            <div className="price-card-body">

              <div className="countdown-wrap">
                <div className="countdown-label">This offer closes in</div>
                <div className="countdown-timer">
                  <div className="countdown-unit">
                    <span className="countdown-num">{timeLeft.hours}</span>
                    <span className="countdown-lbl">Hours</span>
                  </div>
                  <span className="countdown-sep">:</span>
                  <div className="countdown-unit">
                    <span className="countdown-num">{timeLeft.mins}</span>
                    <span className="countdown-lbl">Mins</span>
                  </div>
                  <span className="countdown-sep">:</span>
                  <div className="countdown-unit">
                    <span className="countdown-num">{timeLeft.secs}</span>
                    <span className="countdown-lbl">Secs</span>
                  </div>
                </div>
              </div>

              <div className="price-main">
                <div className="price-amount"><span className="price-currency">$</span>48</div>
                <div className="price-was">Value: $200+</div>
                <div className="price-value">One time · No recurring charges</div>
              </div>

              <ul className="price-includes">
                <li>
                  <span className="check">✓</span>
                  Private 60 min VIP Q&A after Day 1 Jean François & Dr. Shah
                </li>
                <li>
                  <span className="check">✓</span>
                  Private 60 min VIP Q&A after Day 2 Jean François & Dr. Shah
                </li>
                <li>
                  <span className="check">✓</span>
                  Submit your questions in advance priority answered live
                </li>
                <li>
                  <span className="check">✓</span>
                  Full recordings of both Protocol Room sessions
                </li>
                <li>
                  <span className="check">✓</span>
                  30 day replay access to all Master The Molecule recordings
                </li>
                <li>
                  <span className="check">✓</span>
                  Maximum 100 seats intimate and direct
                </li>
              </ul>

              <a href="https://link.fastpaydirect.com/payment-link/69d2ad9dc6a0e600f4d07ad3" target="_blank" rel="noopener noreferrer" className="btn-primary">Join The Protocol Room $48 (One time)</a>
              <a href="https://link.fastpaydirect.com/payment-link/69d2db38a6c96e61a845fd05" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: "transparent", border: "1px solid var(--burg)", color: "var(--burg)" }}>Recording for 2 days ($28)</a>

              <p className="price-note">
                Secure checkout · One time payment · No subscription<br />
                Recordings delivered within 72 hours of Day 2
              </p>

            </div>
          </div>

        </div>
      </section>


      <section className="what">
        <div className="section-inner">
          <div className="what-grid">
            <div>
              <div className="section-eyebrow">What Is The Protocol Room</div>
              <div className="section-rule" style={{ "background": "#1A7A8A" }}></div>
              <h2 className="section-heading" style={{ "color": "var(--petrol)" }}>The room where the real conversation happens.</h2>
              <div className="what-body">
                <p>The main summit is designed to educate everyone. The Protocol Room is designed for the people who want to go further.</p>
                <p>Immediately after each day of Master The Molecule closes, <strong>Jean François Tremblay</strong> one of the world's longest standing peptide researchers and <strong>Dr. Syed Hasnain Haider Shah</strong> the UAE's only triple fellowship trained Neurointerventional and Regenerative Medicine Physician stay on Zoom for sixty minutes with a small, serious group.</p>
                <p>No presentations. No repeat of what was covered in the main session. Just your questions, answered directly by two of the most credentialled minds in this space. Submit your questions in advance the best ones get prioritised and answered live.</p>
                <p>This is the conversation that happens after the cameras stop. And it is available to 100 people at $48.</p>
              </div>
            </div>
            <div className="what-pull">
              "The questions that cannot be answered in a room of thousands these are the ones we answer here."
            </div>
          </div>
        </div>
      </section>


      <section className="sessions">
        <div className="section-inner">
          <div className="section-eyebrow">Your Two Sessions</div>
          <div className="section-rule"></div>
          <h2 className="section-heading light" style={{ "color": "var(--bone)" }}>Two evenings. Two hours of direct access.</h2>
          <div className="sessions-grid">

            <div className="session-card">
              <div className="session-card-header">
                <div>
                  <div className="session-day">Protocol Room · Session 1</div>
                  <div className="session-time">After Day 1 · ~9:00 PM Dubai</div>
                </div>
                <div style={{ "fontSize": "10px", "color": "var(--pmuted)", "textAlign": "right", "letterSpacing": "0.1em" }}>
                  Tue 14 APRIL<br />6:00 PM London*<br />1:00 PM NY*
                </div>
              </div>
              <div className="session-card-body">
                <div className="session-title">Foundations & Protocols</div>
                <div className="session-sub">Your questions on peptide science, dosing, cycling, sourcing and clinical applications answered directly.</div>
                <div className="session-hosts">
                  <div className="session-host">
                    <div className="host-photo">PHOTO</div>
                    <div>
                      <div className="host-name">Jean François Tremblay</div>
                      <div className="host-role">Peptide Science Pioneer · Founder CanLab</div>
                    </div>
                  </div>
                  <div className="session-host">
                    <div className="host-photo">PHOTO</div>
                    <div>
                      <div className="host-name">Dr. Syed Hasnain Haider Shah</div>
                      <div className="host-role">Clinical Co Anchor · Regenerative Medicine</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="session-card">
              <div className="session-card-header">
                <div>
                  <div className="session-day">Protocol Room · Session 2</div>
                  <div className="session-time">After Day 2 · ~9:00 PM Dubai</div>
                </div>
                <div style={{ "fontSize": "10px", "color": "var(--pmuted)", "textAlign": "right", "letterSpacing": "0.1em" }}>
                  Wed 15 APRIL<br />6:00 PM London*<br />1:00 PM NY*
                </div>
              </div>
              <div className="session-card-body">
                <div className="session-title">Regenerative Deep Dive</div>
                <div className="session-sub">Your questions on regenerative medicine, stem cells, bioregulators and clinical protocols answered directly.</div>
                <div className="session-hosts">
                  <div className="session-host">
                    <div className="host-photo">PHOTO</div>
                    <div>
                      <div className="host-name">Jean François Tremblay</div>
                      <div className="host-role">Peptide Science Pioneer · Founder CanLab</div>
                    </div>
                  </div>
                  <div className="session-host">
                    <div className="host-photo">PHOTO</div>
                    <div>
                      <div className="host-name">Dr. Syed Hasnain Haider Shah</div>
                      <div className="host-role">Clinical Co Anchor · Regenerative Medicine</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <p style={{ "fontSize": "11px", "color": "var(--pmuted)", "marginTop": "12px" }}>* Approximate times London and New York shown for Day 2. Sessions begin immediately after the main summit closes each evening.</p>
        </div>
      </section>


      <section className="includes">
        <div className="section-inner">
          <div className="section-eyebrow">Everything Included</div>
          <div className="section-rule" style={{ "background": "#1A7A8A" }}></div>
          <h2 className="section-heading">One price. Everything you need.</h2>
          <div className="includes-grid">
            <div className="include-card">
              <div className="include-num">01</div>
              <div className="include-title">Two Private VIP Sessions</div>
              <div className="include-desc">60 minutes after Day 1 and 60 minutes after Day 2. Two hours of direct access to Jean François Tremblay and Dr. Syed Hasnain Haider Shah no filter, no script, just answers.</div>
            </div>
            <div className="include-card">
              <div className="include-num">02</div>
              <div className="include-title">Submit Your Questions</div>
              <div className="include-desc">Protocol Room members submit questions in advance. The most important ones get prioritised and answered live. Your question will be heard.</div>
            </div>
            <div className="include-card">
              <div className="include-num">03</div>
              <div className="include-title">All Recordings · 30 Days</div>
              <div className="include-desc">Full recordings of both Protocol Room sessions plus all Master The Molecule main sessions. 30 day replay access delivered within 72 hours of Day 2 closing.</div>
            </div>
          </div>
        </div>
      </section>


      <section className="forwho">
        <div className="section-inner">
          <div className="section-eyebrow">Who Should Join</div>
          <div className="section-rule"></div>
          <h2 className="section-heading" style={{ "color": "var(--bone)" }}>The Protocol Room is for serious people.</h2>
          <ul className="forwho-list">
            <li>
              <span className="forwho-icon">⚕</span>
              <div><strong>Coaches and nutritionists</strong> who advise clients on peptides and want clinical answers they cannot get anywhere else dosing, contraindications, protocol design for specific conditions.</div>
            </li>
            <li>
              <span className="forwho-icon">🔬</span>
              <div><strong>Doctors and practitioners</strong> who want direct access to a triple fellowship trained regenerative medicine physician and a 30-year peptide researcher outside of a formal consultation setting.</div>
            </li>
            <li>
              <span className="forwho-icon">🧬</span>
              <div><strong>Experienced biohackers</strong> who have done the research, are already using protocols and have the specific advanced questions that the main session does not have time to cover.</div>
            </li>
            <li>
              <span className="forwho-icon">📋</span>
              <div><strong>Anyone who wants the recordings</strong> to rewatch, share with colleagues, refer clients to or build their own education around. 30 days of full access to everything.</div>
            </li>
          </ul>
        </div>
      </section>


      <section className="faq">
        <div className="section-inner">
          <div className="section-eyebrow">Questions</div>
          <div className="section-rule" style={{ "background": "#1A7A8A" }}></div>
          <h2 className="section-heading" style={{ "color": "var(--petrol)" }}>Frequently asked.</h2>
          <div className="faq-list">

            <div className="faq-item">
              <div className={`faq-q ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(0)}>Do I need to register for the free summit first?</div>
              <div className={`faq-a ${openFaq === 0 ? 'open' : ''}`}>Yes Protocol Room access is exclusively for registered Master The Molecule attendees. Register free at www.masterthemolecule.com first, then return to this page to join The Protocol Room.</div>
            </div>

            <div className="faq-item">
              <div className={`faq-q ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(1)}>What platform is the Protocol Room on?</div>
              <div className={`faq-a ${openFaq === 0 ? 'open' : ''}`}>The same Zoom link as the main summit. You simply stay on Zoom after the main session closes each evening. The room transitions directly into The Protocol Room no new link needed.</div>
            </div>

            <div className="faq-item">
              <div className={`faq-q ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(2)}>When can I submit my questions?</div>
              <div className={`faq-a ${openFaq === 0 ? 'open' : ''}`}>Immediately after purchase. Your confirmation email contains a question submission link. Submit before the event for priority. You can also ask questions live in the session itself.</div>
            </div>

            <div className="faq-item">
              <div className={`faq-q ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(3)}>When do I get the recordings?</div>
              <div className={`faq-a ${openFaq === 0 ? 'open' : ''}`}>All recordings both Protocol Room sessions and both main summit days are delivered within 72 hours of Day 2 closing on 15 April. Your 30 day access period begins from that delivery date.</div>
            </div>

            <div className="faq-item">
              <div className={`faq-q ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(4)}>What happens if I cannot attend one of the sessions live?</div>
              <div className={`faq-a ${openFaq === 0 ? 'open' : ''}`}>You still get the full recording of every session you miss. Submit your question in advance and it may still be answered even if you are not there live. The recording gives you full access to everything that was covered.</div>
            </div>

            <div className="faq-item">
              <div className={`faq-q ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(5)}>Is there a maximum number of seats?</div>
              <div className={`faq-a ${openFaq === 0 ? 'open' : ''}`}>Yes. The Protocol Room is strictly capped at 100 seats. This is not a marketing technique it is a deliberate choice to keep the room small, intimate and genuinely useful. When 100 seats are sold, the offer closes.</div>
            </div>

            <div className="faq-item">
              <div className={`faq-q ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(6)}>Will the price go up after the event?</div>
              <div className={`faq-a ${openFaq === 0 ? 'open' : ''}`}>Yes. The $48 price is available only before and during the event. After Day 2 closes, recording only access will be offered at a higher price and without the live Protocol Room sessions.</div>
            </div>

          </div>
        </div>
      </section>


      <section className="final-cta">
        <div className="final-cta-inner">
          <div className="section-eyebrow" style={{ "color": "var(--burg)", "textAlign": "center", "justifyContent": "center", "display": "flex", "gap": "10px" }}>
            <span style={{ "width": "30px", "height": "1px", "background": "var(--burg)", "display": "inline-block", "marginTop": "9px" }}></span>
            Limited Seats Remaining
            <span style={{ "width": "30px", "height": "1px", "background": "var(--burg)", "display": "inline-block", "marginTop": "9px" }}></span>
          </div>
          <h2>Two hours.<br /><strong>Their full attention.</strong></h2>
          <p>Two private sessions with Jean François Tremblay and Dr. Syed Hasnain Haider Shah. All recordings. 30 day access. Maximum 50 people.</p>
          <div className="final-price">
            <span className="final-price-cur">$</span>
            <span className="final-price-num">48</span>
          </div>
          <div className="final-price-desc">One time payment · No subscription · Recordings included</div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
            <a href="https://link.fastpaydirect.com/payment-link/69d2ad9dc6a0e600f4d07ad3" target="_blank" rel="noopener noreferrer" className="btn-large" style={{ marginBottom: 0 }}>Join The Protocol Room $48 (One time)</a>
            <a href="https://link.fastpaydirect.com/payment-link/69d2db38a6c96e61a845fd05" target="_blank" rel="noopener noreferrer" className="btn-large" style={{ background: "transparent", border: "1px solid var(--burg)", color: "var(--burg)", marginBottom: 0 }}>Recording for 2 days ($28)</a>
          </div>
          <div className="seats-remaining">
            <span className="seats-dot"></span>
            Limited seats available · Offer closes 48 hours after registration
          </div>
        </div>
      </section>


      <footer>
        <div className="footer-inner">
          <div className="footer-brand">Master The <span>Molecule</span></div>
          <ul className="footer-links">
            <li><a href="https://www.masterthemolecule.com">Main Event</a></li>
            <li><a href="#">Register Free</a></li>
            <li><a href="https://www.instagram.com/shirleybioreset" target="_blank" rel="noopener noreferrer">@shirleybioreset</a></li>
          </ul>
        </div>
        <div className="footer-copy">
          <span>© Master The Molecule 2026. All rights reserved.</span>
          <span style={{ "color": "var(--pmuted)" }}>#masterthemolecule · <a href="https://www.instagram.com/shirleybioreset" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>@shirleybioreset</a></span>
        </div>
      </footer>


    </div>
  );
}
