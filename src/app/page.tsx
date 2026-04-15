"use client";

import { useEffect, useRef, useState } from "react";
import ShaderBackground from "@/components/ui/shader-background";
import CountdownTimer from "@/components/ui/countdown-timer";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const fnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  /* Scroll-reveal observer */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function handleSubmit() {
    const fname = fnameRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";
    if (!fname || !email) {
      alert("Please fill in your name and email to continue.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      {/* NAV */}
      <nav className="site-nav">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a className="gusi-logo" href="#">
            <img
              src="/gusi-logo.jpg"
              alt="GUSI — Global Ultrasound Institute"
              style={{ height: 42, width: "auto", borderRadius: 6 }}
            />
          </a>
          <div className="nav-product">
            Instant Review <span>&middot; ScanHub</span>
          </div>
        </div>
        <a className="nav-cta" href="#early-access">
          Get Early Access
        </a>
      </nav>

      {/* COUNTDOWN — sticky below nav */}
      <div style={{ paddingTop: 68 }}>
        <CountdownTimer />
      </div>

      {/* HERO — with shader background */}
      <section className="hero">
        <ShaderBackground />

        <div className="hero-eyebrow" style={{ position: "relative", zIndex: 10 }}>
          <div className="eyebrow-dot" />
          Pre-Launch &mdash; Join the Waitlist
        </div>
        <h1 className="hero-title" style={{ position: "relative", zIndex: 10 }}>
          Feedback that makes
          <br />
          you <em>better, faster.</em>
        </h1>
        <p className="hero-subtitle" style={{ position: "relative", zIndex: 10 }}>
          Instant Review uses AI to analyze your ultrasound scans and deliver
          targeted, actionable feedback — in minutes. Available 24/7 through
          GUSI ScanHub.
        </p>
        <div className="hero-actions" style={{ position: "relative", zIndex: 10 }}>
          <a href="#early-access" className="btn-primary">
            Request Early Access
          </a>
          <a href="#how-it-works" className="btn-ghost-w">
            See how it works
          </a>
        </div>

        <div className="hero-visual" style={{ position: "relative", zIndex: 10 }}>
          <div className="scan-card">
            <div className="scan-top">
              <span className="scan-label">AI Analysis — DVT Screening</span>
              <span className="scan-ai-badge">
                <span className="ai-dot" />
                &nbsp;AI Analyzing
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
              <img src="/scans/scan3.jpeg" alt="Annotated liver ultrasound" style={{ width: "100%", height: 90, objectFit: "cover", borderRadius: 8, border: "1px solid var(--gray-light)" }} />
              <img src="/scans/scan4.jpeg" alt="Gall bladder ultrasound" style={{ width: "100%", height: 90, objectFit: "cover", borderRadius: 8, border: "1px solid var(--gray-light)" }} />
              <img src="/scans/scan2.jpeg" alt="Kidney ultrasound" style={{ width: "100%", height: 90, objectFit: "cover", borderRadius: 8, border: "1px solid var(--gray-light)" }} />
            </div>
            <div className="scan-bars">
              <div className="sbar">
                <div className="sbar-name">Image Quality</div>
                <div className="sbar-track">
                  <div className="sbar-fill fill-teal" style={{ width: "88%" }} />
                </div>
                <div className="sbar-val val-teal">88%</div>
              </div>
              <div className="sbar">
                <div className="sbar-name">Completeness</div>
                <div className="sbar-track">
                  <div className="sbar-fill fill-orange" style={{ width: "74%" }} />
                </div>
                <div className="sbar-val val-orange">74%</div>
              </div>
              <div className="sbar">
                <div className="sbar-name">Technique</div>
                <div className="sbar-track">
                  <div className="sbar-fill fill-green" style={{ width: "91%" }} />
                </div>
                <div className="sbar-val val-green">91%</div>
              </div>
            </div>
            <div className="scan-feedback">
              <div className="fb-block">
                <div className="fb-tag tag-green">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <circle cx="4.5" cy="4.5" r="3.5" fill="#1f9e60" fillOpacity="0.2" />
                    <path d="M2.5 4.5l1.5 1.5L6.5 3" stroke="#1f9e60" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  &nbsp;Strengths
                </div>
                <div className="fb-line fl-80" style={{ background: "rgba(31,158,96,0.2)" }} />
                <div className="fb-line fl-60" style={{ background: "rgba(31,158,96,0.14)" }} />
                <div className="fb-line fl-70" style={{ background: "rgba(31,158,96,0.10)" }} />
              </div>
              <div className="fb-block">
                <div className="fb-tag tag-orange">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <circle cx="4.5" cy="4.5" r="3.5" fill="#ff6d00" fillOpacity="0.2" />
                    <path d="M4.5 2.5v3M4.5 7v.5" stroke="#ff6d00" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  &nbsp;Recommendations
                </div>
                <div className="fb-line fl-50" style={{ background: "rgba(255,109,0,0.16)" }} />
                <div className="fb-line fl-65" style={{ background: "rgba(255,109,0,0.11)" }} />
                <div className="fb-line fl-70" style={{ background: "rgba(255,109,0,0.08)" }} />
              </div>
            </div>
            <div className="scan-time">
              Report generated in <strong>2m 14s</strong>&nbsp; &middot; &nbsp;Available 24/7 via ScanHub
            </div>
          </div>
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ff6d00" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stats-inner">
          <div className="reveal">
            <div className="stat-num">&lt;5<sup>min</sup></div>
            <div className="stat-label">Feedback turnaround,<br />not days</div>
          </div>
          <div className="reveal">
            <div className="stat-num">24/7</div>
            <div className="stat-label">Always-on access<br />through ScanHub</div>
          </div>
          <div className="reveal">
            <div className="stat-num">4+</div>
            <div className="stat-label">Clinical domains<br />at launch</div>
          </div>
          <div className="reveal">
            <div className="stat-num">∞</div>
            <div className="stat-label">Scans reviewed<br />without bottleneck</div>
          </div>
        </div>
      </div>
      <div style={{ background: "#ff6d00", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
          <path d="M0,0 C360,60 1080,0 1440,30 L1440,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* HOW IT WORKS */}
      <section className="hiw" id="how-it-works">
        <div className="section-inner">
          <span className="section-eyebrow reveal">How It Works</span>
          <h2 className="section-title reveal">
            Three steps to <span className="teal">better scanning</span>
          </h2>
          <p className="section-desc reveal">
            No waiting for a supervisor. No scheduling review sessions. Upload and get a full AI report while the scan is still fresh.
          </p>
          <div className="steps">
            <div className="step reveal">
              <div className="step-num num-teal">01</div>
              <h3>Upload your scan</h3>
              <p>Submit any ultrasound acquisition directly through ScanHub — GUSI&apos;s secure central platform for scan management and review.</p>
            </div>
            <div className="step reveal">
              <div className="step-num num-orange">02</div>
              <h3>AI analyzes in minutes</h3>
              <p>Instant Review evaluates image quality, scan completeness, probe technique, and anatomical visualization — automatically.</p>
            </div>
            <div className="step reveal">
              <div className="step-num num-green">03</div>
              <h3>Get your report</h3>
              <p>Receive a structured report covering strengths, areas for improvement, and specific, actionable steps for your very next scan.</p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ background: "#fff", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 50 }}>
          <path d="M0,50 C480,0 960,50 1440,20 L1440,50 Z" fill="#fdf6f0" />
        </svg>
      </div>

      {/* VIDEO DEMO */}
      <section style={{ background: "var(--cream)" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <span className="section-eyebrow reveal">See It In Action</span>
          <h2 className="section-title reveal">
            Watch how <span className="teal">Instant Review</span> works
          </h2>
          <p className="section-desc reveal" style={{ margin: "0 auto 48px" }}>
            A quick look at how AI-powered feedback transforms your ultrasound learning experience.
          </p>
          <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 340,
              maxWidth: "100%",
              aspectRatio: "9 / 16",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              border: "3px solid var(--gray-light)",
              background: "#000",
            }}>
              <iframe
                src="https://www.youtube.com/embed/obWe3AQUZFI"
                title="Instant Review Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </div>
        </div>
      </section>
      <div style={{ background: "var(--cream)", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 50 }}>
          <path d="M0,0 C360,50 1080,0 1440,30 L1440,50 L0,50 Z" fill="var(--cream)" />
        </svg>
      </div>

      {/* FEATURES */}
      <section className="features">
        <div className="section-inner">
          <span className="section-eyebrow reveal">Why Instant Review</span>
          <h2 className="section-title reveal">
            Built different.<br />
            <span className="teal">On purpose.</span>
          </h2>
          <p className="section-desc reveal">Targeted feedback that tells you not just what to improve — but exactly how.</p>
          <div className="features-grid">
            <div className="feat-card reveal">
              <div className="feat-icon fi-orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#ff6d00" strokeWidth="1.8" /><path d="M12 7v5.5l3 1.8" stroke="#ff6d00" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </div>
              <h3>Instant, not eventual</h3>
              <p>Feedback in under 5 minutes. When learning is immediate, skill compounds — not days after the fact when the moment has passed.</p>
            </div>
            <div className="feat-card reveal">
              <div className="feat-icon fi-teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5v14" stroke="#00848e" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="12" r="4.5" stroke="#00848e" strokeWidth="1.8" /></svg>
              </div>
              <h3>Targeted, not generic</h3>
              <p>Every recommendation is specific and actionable — acquire orthogonal views, optimize gain settings, demonstrate structural continuity.</p>
            </div>
            <div className="feat-card reveal">
              <div className="feat-icon fi-orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5" stroke="#ff6d00" strokeWidth="1.8" /><rect x="13" y="4" width="7" height="7" rx="1.5" stroke="#ff6d00" strokeWidth="1.8" /><rect x="4" y="13" width="7" height="7" rx="1.5" stroke="#ff6d00" strokeWidth="1.8" /><rect x="13" y="13" width="7" height="7" rx="1.5" stroke="#ff6d00" strokeWidth="1.8" /></svg>
              </div>
              <h3>Scalable, not bottlenecked</h3>
              <p>Review unlimited scans across your entire team — zero human throughput limit. Real quality assurance at genuine scale.</p>
            </div>
            <div className="feat-card reveal">
              <div className="feat-icon fi-teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="#00848e" strokeWidth="1.8" /><path d="M8.5 12l2.5 2.5 5-5" stroke="#00848e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Education-first design</h3>
              <p>Built as a learning tool, not a diagnostic one. Transparent AI so learners build real skill — not a false sense of clinical accuracy.</p>
            </div>
            <div className="feat-card reveal">
              <div className="feat-icon fi-orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 17.5L8.5 12L12.5 15.5L18 9L21 11.5" stroke="#ff6d00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Track your progress</h3>
              <p>Monitor improvement across repeated scans and clinical scenarios. Quality programs gain longitudinal data to show real growth.</p>
            </div>
            <div className="feat-card reveal">
              <div className="feat-icon fi-teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2.5L14.3 8.8H21L15.85 12.5L17.7 19L12 15.4L6.3 19L8.15 12.5L3 8.8H9.7L12 2.5Z" stroke="#00848e" strokeWidth="1.8" strokeLinejoin="round" /></svg>
              </div>
              <h3>Powered by GUSI AI</h3>
              <p>Built on GUSI&apos;s deep expertise in ultrasound education — the same rigor behind our structured curricula, now automated and always on.</p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ background: "#fdf6f0", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
          <path d="M0,60 C400,0 1040,60 1440,20 L1440,60 Z" fill="#00848e" />
        </svg>
      </div>

      {/* WHO IT'S FOR */}
      <section className="teal-band">
        <div className="teal-band-inner">
          <div className="reveal">
            <div style={{ fontFamily: "var(--f-body)", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
              Who It&apos;s For
            </div>
            <h2>
              Designed for every step of the <em>journey.</em>
            </h2>
            <p className="lead">
              From first-year residents discovering ultrasound to experienced clinicians running institutional QA programs — Instant Review grows with you.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 32 }}>
              <img src="/scans/scan1.jpeg" alt="Fetal ultrasound scan" style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 10, border: "2px solid rgba(255,255,255,0.15)" }} />
              <img src="/scans/scan5.jpeg" alt="Liver long ultrasound" style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 10, border: "2px solid rgba(255,255,255,0.15)" }} />
              <img src="/scans/scan2.jpeg" alt="Kidney ultrasound" style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 10, border: "2px solid rgba(255,255,255,0.15)", gridColumn: "1 / -1" }} />
            </div>
          </div>
          <div className="aud-list reveal">
            <div className="aud-row"><div className="aud-icon">🎓</div><div className="aud-text"><h4>Residents &amp; Medical Students</h4><p>Immediate feedback at every step accelerates real skill development.</p></div></div>
            <div className="aud-row"><div className="aud-icon">🏥</div><div className="aud-text"><h4>Clinical Teams</h4><p>Maintain consistent image quality standards across your entire practice.</p></div></div>
            <div className="aud-row"><div className="aud-icon">⚡</div><div className="aud-text"><h4>POCUS Providers</h4><p>Quick quality checks when you need them — around the clock.</p></div></div>
            <div className="aud-row"><div className="aud-icon">📊</div><div className="aud-text"><h4>QA Program Directors</h4><p>Systematize feedback and track improvement with longitudinal data.</p></div></div>
            <div className="aud-row"><div className="aud-icon">📚</div><div className="aud-text"><h4>Educators &amp; Faculty</h4><p>Scalable, objective assessment tools for every student in your program.</p></div></div>
          </div>
        </div>
      </section>
      <div style={{ background: "#00848e", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
          <path d="M0,0 C480,60 960,0 1440,40 L1440,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* CLINICAL */}
      <section className="clinical">
        <div className="section-inner clinical-center">
          <span className="section-eyebrow reveal">Clinical Scope</span>
          <h2 className="section-title reveal">
            Multiple domains at launch,<br />
            <span className="teal">more on the way.</span>
          </h2>
          <p className="section-desc reveal">Instant Review is modular and expanding. Current coverage includes:</p>
          <div className="pills reveal">
            <div className="pill"><div className="pill-dot" />Musculoskeletal (MSK)</div>
            <div className="pill"><div className="pill-dot" />DVT Screening</div>
            <div className="pill"><div className="pill-dot" />Vascular Assessment</div>
            <div className="pill"><div className="pill-dot" />Abdominal Imaging</div>
            <div className="pill"><div className="pill-dot" />Liver</div>
            <div className="pill"><div className="pill-dot" />POCUS</div>
            <div className="pill"><div className="pill-dot" />Ankle &amp; Foot</div>
            <div className="pill"><div className="pill-dot" />Joints &amp; Tendons</div>
            <div className="pill pill-more">+ More coming</div>
          </div>
        </div>
      </section>
      <div style={{ background: "#fff", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 50 }}>
          <path d="M0,0 C360,50 1080,0 1440,30 L1440,50 L0,50 Z" fill="#fdf6f0" />
        </svg>
      </div>

      {/* ECOSYSTEM */}
      <section className="ecosystem">
        <div className="section-inner">
          <span className="section-eyebrow reveal">GUSI Ecosystem</span>
          <h2 className="section-title reveal">
            Part of something <span className="teal">bigger.</span>
          </h2>
          <p className="section-desc reveal">Instant Review amplifies every other part of your GUSI learning journey.</p>
          <div className="eco-grid">
            <div className="eco-card highlight reveal"><div className="eco-tag">You&apos;re here</div><div className="eco-name">Instant Review</div><div className="eco-desc">AI-powered, real-time scan feedback and quality assessment.</div></div>
            <div className="eco-card reveal"><div className="eco-name">ScanHub</div><div className="eco-desc">Central platform for uploading, storing, and reviewing scans.</div></div>
            <div className="eco-card reveal"><div className="eco-name">GUSI Essentials</div><div className="eco-desc">Structured curricula covering fundamental ultrasound principles.</div></div>
            <div className="eco-card reveal"><div className="eco-name">E-Sim Cases</div><div className="eco-desc">Virtual simulation cases for immersive procedural learning.</div></div>
            <div className="eco-card reveal"><div className="eco-name">Live Instruction</div><div className="eco-desc">Professional training and mentorship from GUSI experts.</div></div>
          </div>
        </div>
      </section>
      <div style={{ background: "#fdf6f0", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
          <path d="M0,60 C360,10 1080,60 1440,20 L1440,60 Z" fill="#00848e" />
        </svg>
      </div>

      {/* FORM */}
      <section className="form-section" id="early-access">
        <div className="form-inner">
          <div className="form-left reveal">
            <div style={{ fontFamily: "var(--f-body)", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
              Pre-Launch
            </div>
            <h2>
              Be first in line.
              <br />
              <em>No limits. No wait.</em>
            </h2>
            <p className="lead">
              Instant Review is in pre-launch. Join the waitlist and we&apos;ll reach out when access opens for your institution.
            </p>
            <div className="perks">
              {["Priority access before public launch", "Free trial period for early registrants", "Input into features before full launch", "Direct onboarding support from GUSI"].map((text) => (
                <div className="perk" key={text}>
                  <div className="perk-check">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 5.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="form-card">
              {!submitted ? (
                <div>
                  <h3 className="form-title">Request Early Access</h3>
                  <p className="form-subtitle">Takes under 60 seconds — no commitment required.</p>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fname">First name</label>
                      <input ref={fnameRef} type="text" id="fname" placeholder="Elena" autoComplete="given-name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lname">Last name</label>
                      <input type="text" id="lname" placeholder="Marchetti" autoComplete="family-name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Work email</label>
                    <input ref={emailRef} type="email" id="email" placeholder="you@institution.edu" autoComplete="email" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="role">Your role</label>
                      <select id="role" defaultValue="">
                        <option value="" disabled>Select role</option>
                        <option>Physician / Clinician</option>
                        <option>Resident / Fellow</option>
                        <option>Medical Student</option>
                        <option>Sonographer</option>
                        <option>Educator / Faculty</option>
                        <option>QA / Program Director</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="domain">Clinical focus</label>
                      <select id="domain" defaultValue="">
                        <option value="" disabled>Select focus</option>
                        <option>Emergency / Critical Care</option>
                        <option>Musculoskeletal</option>
                        <option>Vascular</option>
                        <option>Abdominal / General</option>
                        <option>Point-of-care (POCUS)</option>
                        <option>Multiple / General</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="institution">Institution or organization</label>
                    <input type="text" id="institution" placeholder="e.g. UCSF Medical Center" autoComplete="organization" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">
                      Anything to share?{" "}
                      <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, opacity: 0.55 }}>(optional)</span>
                    </label>
                    <textarea id="notes" placeholder="e.g. We run a 40-resident POCUS curriculum and are exploring QA tools..." />
                  </div>
                  <button className="form-submit" onClick={handleSubmit}>
                    Request Early Access →
                  </button>
                  <p className="form-fine">
                    By submitting you agree to receive updates about Instant Review from GUSI. No spam, ever.{" "}
                    <a href="#">Privacy policy</a>
                  </p>
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <div className="success-icon" style={{ display: "flex" }}>✓</div>
                  <h3 style={{ fontFamily: "var(--f-head)", fontSize: 24, fontWeight: 700, letterSpacing: "-0.8px", color: "var(--black)", marginBottom: 10 }}>
                    You&apos;re on the list!
                  </h3>
                  <p style={{ fontFamily: "var(--f-body)", fontSize: 15, fontWeight: 500, color: "var(--gray)", lineHeight: 1.7 }}>
                    We&apos;ll be in touch when early access opens. In the meantime, explore GUSI&apos;s courses and simulation cases on ScanHub.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div style={{ background: "#00848e", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 50 }}>
          <path d="M0,0 C720,50 1200,0 1440,30 L1440,0 Z" fill="#fdf6f0" />
        </svg>
      </div>

      {/* DISCLAIMER */}
      <div className="disclaimer-wrap">
        <div className="disclaimer">
          <strong>Important:</strong> Instant Review is a{" "}
          <strong>learning and quality assurance tool</strong>, not a clinical diagnostic tool. AI-generated feedback is designed to support skill development and scan quality improvement only. It should not be used to guide clinical decision-making or replace qualified medical judgment. All clinical decisions remain the sole responsibility of the treating clinician.
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            <strong>Instant Review</strong> &nbsp;&middot;&nbsp; Part of ScanHub by GUSI — Global Ultrasound Institute
            <br />
            &copy; 2025 GUSI. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
            <a href="#">gusipocus.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
