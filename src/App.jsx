import { useState, useEffect, useRef } from "react";

const slides = [
  "Rifuoooo 😇",
  // "First thanne oru soorryyyy..... aa reel njn onnm vicharich ayachaallaattoo 🙂",
  // "athil bad aavarth ttoo",
  // "Innale njn pinnem pinnem nthaa choich verpichath ",
  // "Enk ath solve aakan kayym nn oru orapum indayittalla",
  // "Pakshe... nthelloo ante thalel ipo ind nn enk ariya",
  // "Sathym paranja ntha parayande enk areela",
  // "Enk oraale aaswasipikan lla vallya ithonnm lla",
  // "aake ariynath sarrla potte ellum sheryvm nn aan",
  // "Relax aayit irikk tto",
  // "Over tension aavateh irikk",
  // "Nthanelm ank paraynm nn indel epo venelm iyy vilichoo ttoo",
  // "Manushyammar thammil eth relation um nalla pole ponenkl aadym nalla friend aavan vendyee",
  // "Angne oru friend aayit epolum njn indvm, nthoke indayalm",
  // "Pinnee friend aan paranj vicharich relation nn back nikonnum allaaattooo 😁",
  // "Married aanelm allenklm oru relationship nallapole ponenkl oor randlm nalla best friend aayrkknm , alleee..?",
  // "Angne aan paranje",
  // "Apo nth indelm ath epo enth parynm thonnyalm njn ivde indvm, Insha Allah",
  // "Pinne ethoru kayattathinum oru erakam indvm nn aanalloo...",
  // "Oru rathrik oru pakal",
  // "Oru mazhak oru veyil",
  // "Athe pole thanne aan ellm",
  // "Oru sangdm indenkl athinte double santhosham apparth indvm",
  // "Nammak illath nammale adthk thanne varum",
  // "Inipo nammk venm nn llath nallonm onn padachonod dua aakya athm kittm",
  // "Apo sangadapedand, tension adikand, mind cool aayit irikk tto",
  // "Insha allah ellm ready aavm"
];

const NUM_PARTICLES = 38;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function generateParticles() {
  return Array.from({ length: NUM_PARTICLES }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: randomBetween(2, 7),
    duration: randomBetween(8, 20),
    delay: randomBetween(0, 20),
    opacity: randomBetween(0.08, 0.35),
    drift: randomBetween(-18, 18),
  }));
}

const particles = generateParticles();

const appFont = "'Trebuchet MS', 'Segoe UI', system-ui, -apple-system, sans-serif";

function HugScene({ onShowImage }) {
  return (
    <div className="hug-scene" style={hugStyles.wrap}>
      <div style={hugStyles.heading} className="hug-heading">
        Njan Ind tto koode 🫂
      </div>

      <svg
        className="hug-svg"
        viewBox="0 0 260 220"
        width="260"
        height="220"
        style={hugStyles.svg}
        aria-label="Two figures hugging"
      >
        <ellipse cx="130" cy="135" rx="72" ry="58" fill="rgba(32,178,170,0.10)" />
        <ellipse cx="94" cy="148" rx="22" ry="30" fill="rgba(100,190,210,0.22)" stroke="rgba(140,220,230,0.55)" strokeWidth="1.5" />
        <circle cx="94" cy="108" r="18" fill="rgba(100,190,210,0.22)" stroke="rgba(140,220,230,0.55)" strokeWidth="1.5" className="head-left" />
        <path d="M112 130 Q148 112 155 140" fill="none" stroke="rgba(140,220,230,0.65)" strokeWidth="4" strokeLinecap="round" className="arm-left" />
        <ellipse cx="166" cy="148" rx="22" ry="30" fill="rgba(180,150,220,0.22)" stroke="rgba(200,170,240,0.55)" strokeWidth="1.5" />
        <circle cx="166" cy="108" r="18" fill="rgba(180,150,220,0.22)" stroke="rgba(200,170,240,0.55)" strokeWidth="1.5" className="head-right" />
        <path d="M148 130 Q112 112 105 140" fill="none" stroke="rgba(200,170,240,0.65)" strokeWidth="4" strokeLinecap="round" className="arm-right" />
        <text x="118" y="82" fontSize="13" className="heart h1" fill="rgba(255,180,200,0.75)">♥</text>
        <text x="136" y="74" fontSize="10" className="heart h2" fill="rgba(255,180,200,0.60)">♥</text>
        <text x="148" y="83" fontSize="8"  className="heart h3" fill="rgba(255,180,200,0.50)">♥</text>
      </svg>

      <p style={hugStyles.sub} className="hug-sub">
        Ethra doore aanenkilum 😊.
      </p>

      {/* Surprise button */}
      <button style={hugStyles.surpriseBtn} className="hug-sub" onClick={onShowImage}>
        <span>Pinnee last Oru karym koodi 😁?</span>
        <span style={{ fontSize: 24, marginLeft: 6 }}>👀</span>
      </button>
    </div>
  );
}

function ImageReveal() {
  return (
    <div className="img-reveal" style={imgStyles.wrap}>
      <div style={imgStyles.eyeLabel} className="hug-heading">look who's thinking of you 🤍</div>
      <div style={imgStyles.frame}>
        <img
          src="/eyes-1.png"
          alt="Someone thinking of you"
          style={imgStyles.img}
          className="reveal-img"
        />
        <div style={imgStyles.shimmerLine} className="shimmer-line" />
      </div>
      <p style={imgStyles.caption} className="hug-sub">
        Eee kann nirkarth tto....
        Anne kurich aaloikanum iyy chiriknath kananum aagrahikan kannukalum ind 😇.
        Ath marakarth 🥺❤️
      </p>
    </div>
  );
}

const imgStyles = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    padding: "4px 0 8px",
    width: "100%",
  },
  eyeLabel: {
    fontSize: "clamp(16px, 3vw, 20px)",
    fontFamily: appFont,
    fontWeight: 500,
    color: "rgba(200,240,255,0.90)",
    letterSpacing: "0.02em",
    textAlign: "center",
  },
  frame: {
    position: "relative",
    width: "100%",
    maxWidth: 420,
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid rgba(140,220,230,0.25)",
    boxShadow: "0 4px 40px rgba(32,178,170,0.15)",
  },
  img: {
    width: "100%",
    display: "block",
    borderRadius: 16,
    objectFit: "cover",
  },
  shimmerLine: {
    position: "absolute",
    top: 0, left: "-60%",
    width: "40%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
    pointerEvents: "none",
  },
  caption: {
    fontSize: 14,
    fontFamily: appFont,
    color: "rgba(160,220,230,0.60)",
    textAlign: "center",
    margin: 0,
    lineHeight: 1.6,
    fontStyle: "italic",
  },
};

const hugStyles = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    padding: "8px 0 4px",
  },
  heading: {
    fontSize: "clamp(26px, 5vw, 36px)",
    fontFamily: appFont,
    fontWeight: 600,
    color: "rgba(200,240,255,0.95)",
    letterSpacing: "0.03em",
    textAlign: "center",
  },
  svg: { overflow: "visible" },
  sub: {
    fontSize: 15,
    fontFamily: appFont,
    color: "rgba(160,220,230,0.65)",
    textAlign: "center",
    margin: 0,
    letterSpacing: "0.02em",
    lineHeight: 1.6,
  },
  surpriseBtn: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,200,220,0.10)",
    border: "1px solid rgba(255,180,210,0.28)",
    borderRadius: 50,
    color: "rgba(255,210,230,0.85)",
    fontSize: 14,
    fontFamily: appFont,
    fontWeight: 400,
    padding: "11px 28px",
    cursor: "pointer",
    letterSpacing: "0.04em",
    transition: "background 0.25s, transform 0.15s",
    outline: "none",
  },
};

export default function CalmSlideshow() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [showHug, setShowHug] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const timeoutRef = useRef(null);

  const isLast = index === slides.length - 1;

  function handleNext() {
    if (leaving) return;
    if (isLast) {
      setLeaving(true);
      timeoutRef.current = setTimeout(() => {
        setShowHug(true);
        setLeaving(false);
      }, 420);
      return;
    }
    setLeaving(true);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
      setAnimKey((k) => k + 1);
      setLeaving(false);
    }, 420);
  }

  function handlePrevious() {
    if (leaving || index === 0) return;
    setLeaving(true);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev - 1);
      setAnimKey((k) => k + 1);
      setLeaving(false);
    }, 420);
  }

  function handleShowImage() {
    setShowImage(true);
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // const progress = showHug ? 100 : ((index + 1) / slides.length) * 100;

  return (
    <div style={styles.root}>
      <style>{css}</style>

      <div style={styles.blob1} />
      <div style={styles.blob2} />
      <div style={styles.blob3} />

      <div style={styles.particleLayer} aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift": `${p.drift}px`,
            }}
          />
        ))}
      </div>

      <div style={styles.center}>
        <div style={showHug ? { ...styles.card, ...styles.cardHug } : styles.card}>
          {!showHug && (
            <>
              <span style={styles.quoteLeft} aria-hidden="true">"</span>
              <p
                key={animKey}
                className={leaving ? "text-out" : "text-in"}
                style={styles.text}
              >
                {slides[index]}
              </p>
              <span style={styles.quoteRight} aria-hidden="true">"</span>
            </>
          )}

          {showHug && !showImage && (
            <div className="hug-in">
              <HugScene onShowImage={handleShowImage} />
            </div>
          )}

          {showHug && showImage && (
            <div className="hug-in">
              <ImageReveal />
            </div>
          )}
        </div>

        {/* <div style={styles.progressTrack} aria-hidden="true">
          <div className="progress-fill" style={{ "--prog": `${progress}%` }} />
        </div> */}

        {!showHug && (
          <div style={styles.buttonRow}>
            <button
              style={{ ...styles.btn, ...styles.btnSecondary }}
              onClick={handlePrevious}
              disabled={leaving || index === 0}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              <span>Previous</span>
            </button>

            <button style={styles.btn} onClick={handleNext} disabled={leaving}>
              <span>{isLast ? "Finish" : "Next"}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(145deg, #0b1a2e 0%, #0d2240 45%, #0a2a38 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: appFont,
    position: "relative",
    overflow: "hidden",
  },
  blob1: {
    position: "absolute", width: 520, height: 520, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(32,178,170,0.13) 0%, transparent 70%)",
    top: "-120px", left: "-100px", pointerEvents: "none",
  },
  blob2: {
    position: "absolute", width: 600, height: 600, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(70,130,180,0.10) 0%, transparent 70%)",
    bottom: "-180px", right: "-140px", pointerEvents: "none",
  },
  blob3: {
    position: "absolute", width: 300, height: 300, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(100,149,237,0.08) 0%, transparent 70%)",
    top: "40%", left: "60%", pointerEvents: "none",
  },
  particleLayer: { position: "absolute", inset: 0, pointerEvents: "none" },
  center: {
    display: "flex", flexDirection: "column", alignItems: "center",
    gap: 28, padding: "32px 24px", width: "100%", maxWidth: 640,
    position: "relative", zIndex: 1,
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 20,
    padding: "48px 44px 36px",
    width: "100%",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    position: "relative",
    minHeight: 160,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 48px rgba(0,0,0,0.32)",
    transition: "border-color 0.8s ease",
  },
  cardHug: {
    border: "1px solid rgba(140,220,230,0.22)",
    boxShadow: "0 8px 64px rgba(32,178,170,0.18)",
    padding: "40px 36px 32px",
  },
  quoteLeft: {
    position: "absolute", top: 14, left: 20, fontSize: 72, lineHeight: 1,
    color: "rgba(100,200,200,0.18)", fontFamily: appFont, userSelect: "none",
  },
  quoteRight: {
    position: "absolute", bottom: 40, right: 20, fontSize: 72, lineHeight: 1,
    color: "rgba(100,200,200,0.18)", fontFamily: appFont, userSelect: "none",
  },
  text: {
    color: "rgba(220,240,255,0.92)",
    fontSize: "clamp(17px, 2.6vw, 22px)",
    lineHeight: 1.75,
    textAlign: "center",
    letterSpacing: "0.01em",
    margin: 0,
    fontStyle: "normal",
    fontWeight: 500,
    position: "relative",
    zIndex: 1,
  },
  progressTrack: {
    width: "100%", height: 3,
    background: "rgba(255,255,255,0.08)",
    borderRadius: 99, overflow: "hidden",
  },
  buttonRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  btn: {
    display: "flex", alignItems: "center", justifyContent: "center",
    background: "rgba(32,178,170,0.16)",
    border: "1px solid rgba(32,178,170,0.35)",
    borderRadius: 50,
    color: "rgba(160,230,230,0.92)",
    fontSize: 15,
    fontFamily: appFont,
    fontWeight: 400,
    padding: "13px 34px",
    cursor: "pointer",
    letterSpacing: "0.06em",
    transition: "background 0.25s, transform 0.15s, opacity 0.2s",
    outline: "none",
  },
  btnSecondary: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "rgba(200,230,240,0.72)",
  },
  btnRestart: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "rgba(200,230,240,0.65)",
    fontSize: 13,
    padding: "10px 28px",
  },
};

const css = `
  @keyframes float {
    0%   { transform: translateY(0) translateX(0); }
    50%  { transform: translateY(-22px) translateX(var(--drift, 10px)); }
    100% { transform: translateY(0) translateX(0); }
  }
  .particle {
    position: absolute; border-radius: 50%;
    background: rgba(150, 210, 230, 0.9);
    animation: float linear infinite;
    will-change: transform;
  }

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideOut {
    from { opacity: 1; transform: translateY(0); }
    to   { opacity: 0; transform: translateY(-12px); }
  }
  .text-in  { animation: fadeSlideIn 0.5s ease forwards; }
  .text-out { animation: fadeSlideOut 0.38s ease forwards; }

  @keyframes progressGrow {
    from { width: 0%; }
    to   { width: var(--prog, 0%); }
  }
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, rgba(32,178,170,0.7), rgba(100,180,220,0.7));
    border-radius: 99px;
    animation: progressGrow 0.55s cubic-bezier(0.4,0,0.2,1) forwards;
  }

  @keyframes hugIn {
    from { opacity: 0; transform: scale(0.94) translateY(10px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
  .hug-in { animation: hugIn 0.7s cubic-bezier(0.34,1.3,0.64,1) forwards; }

  @keyframes shimmer {
    0%,100% { opacity: 0.85; }
    50%      { opacity: 1; }
  }
  .hug-heading { animation: shimmer 3s ease-in-out infinite; }

  @keyframes subFade {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hug-sub { animation: subFade 1s ease 0.5s both; }

  .arm-left  { animation: armPulse 3.2s ease-in-out infinite; }
  .arm-right { animation: armPulse 3.2s ease-in-out infinite 0.3s; }
  @keyframes armPulse {
    0%,100% { opacity: 0.65; stroke-width: 4; }
    50%      { opacity: 0.9;  stroke-width: 5; }
  }

  @keyframes nod {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-3px); }
  }
  .head-left  { animation: nod 4s ease-in-out infinite; transform-origin: center; }
  .head-right { animation: nod 4s ease-in-out infinite 0.6s; transform-origin: center; }

  @keyframes heartFloat {
    0%   { transform: translateY(0)  scale(1);   opacity: 0.75; }
    60%  { transform: translateY(-22px) scale(1.15); opacity: 0.9; }
    100% { transform: translateY(-40px) scale(0.8);  opacity: 0; }
  }
  .heart { animation: heartFloat ease-in infinite; }
  .h1 { animation-duration: 2.8s; animation-delay: 0.2s; }
  .h2 { animation-duration: 3.4s; animation-delay: 1.1s; }
  .h3 { animation-duration: 2.5s; animation-delay: 1.8s; }

  /* Image reveal */
  @keyframes imgReveal {
    from { opacity: 0; transform: scale(0.96) translateY(12px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
  .reveal-img { animation: imgReveal 0.8s cubic-bezier(0.34,1.2,0.64,1) forwards; }

  /* Shimmer sweep on image */
  @keyframes shimmerSweep {
    0%   { left: -60%; }
    100% { left: 120%; }
  }
  .shimmer-line { animation: shimmerSweep 2.4s ease 0.8s both; }

  button:hover:not(:disabled) {
    background: rgba(32,178,170,0.28) !important;
    transform: translateY(-1px);
  }
  button:active:not(:disabled) { transform: scale(0.97) !important; }
  button:disabled { opacity: 0.5; cursor: default; }
`;
