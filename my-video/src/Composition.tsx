import {
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

const ACCENT = "#b8935a";
const BG = "#f5f2ed";
const TEXT = "#1a1a17";
const MUTED = "#7a7870";

const projects = [
  {
    id: "descartes",
    title: "Descartes",
    subtitle: "Residential Complex",
    location: "France",
    image: "hero-descartes.jpg",
  },
  {
    id: "ecolodge",
    title: "Ecolodge",
    subtitle: "Eco Resort Design",
    location: "Morocco",
    image: "hero-ecolodge.png",
  },
  {
    id: "farmboy",
    title: "Farm Boy",
    subtitle: "Retail Architecture",
    location: "Canada",
    image: "hero-farmboy.jpg",
  },
  {
    id: "embassy",
    title: "Embassy",
    subtitle: "Cultural Infrastructure",
    location: "International",
    image: "hero-embassy.png",
  },
];

// ─── Intro scene (0–90f) ──────────────────────────────────────────────────────

const Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const lineWidth = interpolate(frame, [10, 50], [0, 120], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const tagOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const nameY = interpolate(frame, [20, 60], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const nameOpacity = interpolate(frame, [20, 60], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const titleOpacity = interpolate(frame, [45, 70], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const titleY = interpolate(frame, [45, 70], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const photoOpacity = interpolate(frame, [30, 75], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const photoX = interpolate(frame, [30, 75], [-30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ background: BG, display: "flex", flexDirection: "row", alignItems: "stretch" }}>
      {/* Left photo */}
      <div style={{
        width: 440,
        position: "relative",
        opacity: photoOpacity,
        transform: `translateX(${photoX}px)`,
        flexShrink: 0,
      }}>
        <Img
          src={staticFile("profile.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
        <div style={{
          position: "absolute",
          top: 24,
          left: 24,
          right: -14,
          bottom: -14,
          border: `2px solid ${TEXT}`,
          pointerEvents: "none",
        }} />
      </div>

      {/* Right content */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 90px 90px 90px",
      }}>
        {/* Tag line */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 32,
          opacity: tagOpacity,
        }}>
          <div style={{ width: lineWidth, height: 2, background: ACCENT }} />
          <span style={{
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: TEXT,
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}>Portfolio</span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: 88,
          fontWeight: 400,
          lineHeight: 0.92,
          color: TEXT,
          margin: "0 0 20px",
          opacity: nameOpacity,
          transform: `translateY(${nameY}px)`,
        }}>
          Lahcen<br />
          <span style={{ fontStyle: "italic", color: ACCENT }}>Mdarhri</span><br />
          Alaoui
        </h1>

        {/* Title */}
        <div style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}>
          <div style={{
            display: "inline-block",
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontWeight: 600,
            color: TEXT,
            background: `rgba(184,147,90,0.15)`,
            padding: "10px 18px",
            borderLeft: `3px solid ${ACCENT}`,
            marginBottom: 28,
          }}>
            Architectural Designer &amp; Project Manager
          </div>
          <div style={{
            fontSize: 15,
            color: MUTED,
            fontFamily: "sans-serif",
            lineHeight: 1.7,
            maxWidth: 420,
          }}>
            Over 10 years designing spaces across France, Morocco, and Canada —
            combining technical precision with architectural vision.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ─── Project scene ────────────────────────────────────────────────────────────

const ProjectScene: React.FC<{
  title: string;
  subtitle: string;
  location: string;
  image: string;
  index: number;
}> = ({ title, subtitle, location, image, index }) => {
  const frame = useCurrentFrame();

  const imageScale = interpolate(frame, [0, 90], [1.06, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const overlayOpacity = interpolate(frame, [0, 30], [0.85, 0.55], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const contentY = interpolate(frame, [10, 50], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const contentOpacity = interpolate(frame, [10, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const lineWidth = interpolate(frame, [20, 55], [0, 80], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const numOpacity = interpolate(frame, [0, 25], [0, 0.25], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Fade out near end
  const exitOpacity = interpolate(frame, [70, 85], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#000", opacity: exitOpacity }}>
      {/* Background image */}
      <AbsoluteFill style={{ transform: `scale(${imageScale})`, transformOrigin: "center center" }}>
        <Img
          src={staticFile(image)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Overlay gradient */}
      <AbsoluteFill style={{
        background: `linear-gradient(to right, rgba(26,26,23,${overlayOpacity}) 40%, rgba(26,26,23,0.1) 100%)`,
      }} />

      {/* Large project number */}
      <div style={{
        position: "absolute",
        top: 60,
        right: 80,
        fontFamily: "Georgia, serif",
        fontSize: 160,
        fontWeight: 400,
        color: "#fff",
        opacity: numOpacity,
        lineHeight: 1,
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Content */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "0 90px 90px",
        opacity: contentOpacity,
        transform: `translateY(${contentY}px)`,
      }}>
        {/* Accent line + label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <div style={{ width: lineWidth, height: 2, background: ACCENT }} />
          <span style={{
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: ACCENT,
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}>
            {subtitle} — {location}
          </span>
        </div>

        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: 96,
          fontWeight: 400,
          color: "#fff",
          lineHeight: 0.9,
          margin: 0,
          letterSpacing: "-0.01em",
        }}>
          {title}
        </h2>
      </div>
    </AbsoluteFill>
  );
};

// ─── Outro scene (390–420f) ───────────────────────────────────────────────────

const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const y = interpolate(frame, [0, 25], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{
      background: TEXT,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity,
    }}>
      <div style={{ transform: `translateY(${y}px)`, textAlign: "center" }}>
        <div style={{
          width: 60,
          height: 2,
          background: ACCENT,
          margin: "0 auto 32px",
        }} />
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: 64,
          fontWeight: 400,
          color: "#fff",
          margin: "0 0 16px",
          letterSpacing: "-0.01em",
        }}>
          Let's build something
          <span style={{ fontStyle: "italic", color: ACCENT }}> together.</span>
        </h2>
        <p style={{
          fontSize: 15,
          color: "rgba(255,255,255,0.5)",
          fontFamily: "sans-serif",
          letterSpacing: "0.08em",
          margin: "0 0 40px",
        }}>
          lahcen.alaoui@gmail.com
        </p>
        <div style={{
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: ACCENT,
          fontFamily: "sans-serif",
          fontWeight: 600,
        }}>
          Architectural Designer &amp; Project Manager
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ─── Main composition ─────────────────────────────────────────────────────────
// Timeline (30fps):
//   0–90   : Intro
//  90–165  : Descartes
// 165–240  : Ecolodge
// 240–315  : Farm Boy
// 315–390  : Embassy
// 390–420  : Outro

export const PortfolioReel: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={90}>
        <Intro />
      </Sequence>

      {projects.map((p, i) => (
        <Sequence key={p.id} from={90 + i * 75} durationInFrames={85}>
          <ProjectScene {...p} index={i} />
        </Sequence>
      ))}

      <Sequence from={390} durationInFrames={30}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
