import React from 'react';

const S = {
  outer: { maxWidth: '540px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  document: {
    background: '#f0ece2',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
    position: 'relative',
  },
  damage1: {
    position: 'absolute', top: '8px', right: '12px',
    width: '60px', height: '40px',
    background: 'radial-gradient(ellipse, rgba(80,60,30,0.06) 30%, transparent 70%)',
    pointerEvents: 'none',
  },
  damage2: {
    position: 'absolute', bottom: '40px', left: '20px',
    width: '80px', height: '60px',
    background: 'radial-gradient(ellipse, rgba(60,40,20,0.04) 30%, transparent 65%)',
    pointerEvents: 'none',
  },
  damage3: {
    position: 'absolute', top: '45%', right: '30px',
    width: '50px', height: '70px',
    background: 'radial-gradient(ellipse, rgba(90,70,40,0.05) 25%, transparent 60%)',
    pointerEvents: 'none',
  },
  header: {
    padding: '10px clamp(16px, 4vw, 20px) 6px',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
    color: '#b0a890', letterSpacing: '0.04em', fontStyle: 'italic',
    borderBottom: '1px solid rgba(0,0,0,0.04)',
  },
  body: {
    padding: 'clamp(24px, 5vw, 36px) clamp(16px, 4vw, 28px)',
  },
  line: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '17px', lineHeight: 1.85, color: '#2a2520',
    display: 'block', marginBottom: '4px',
  },
  corrupted: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '14px', lineHeight: 1.7, color: '#2a2520',
    display: 'block', marginBottom: '4px',
  },
  redactBlock: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '14px', lineHeight: 1.7,
    color: '#1a1d24', display: 'block',
    letterSpacing: '0.05em',
    marginBottom: '4px',
  },
  heavyRedact: {
    display: 'inline-block', background: '#1a1d24',
    borderRadius: '1px', height: '14px',
    verticalAlign: 'middle', margin: '0 2px',
  },
  block: {
    display: 'inline', background: '#3a3530',
    color: '#3a3530', borderRadius: '1px',
    padding: '0 2px',
  },
  gap: { marginBottom: '20px' },
  note: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '12px', lineHeight: 1.6, color: '#8a8070',
    fontStyle: 'italic', display: 'block', marginBottom: '4px',
  },
  paren: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '16px', lineHeight: 1.7, color: '#6a6050',
    fontStyle: 'italic', display: 'block', marginBottom: '4px',
  },
  panic: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '13px', lineHeight: 1.5, color: '#2a2520',
    display: 'block', marginBottom: '2px',
  },
  redactNote: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11px', lineHeight: 1.6, color: '#8a8070',
    fontStyle: 'italic', display: 'block',
    marginTop: '16px', marginBottom: '16px',
  },
  signalLost: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '14px', fontWeight: 600,
    color: '#993333', letterSpacing: '0.12em',
    textAlign: 'center', marginTop: '28px',
    display: 'block',
  },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '40px', paddingTop: '20px' },
  annotationLabel: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600,
    color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px',
  },
  fnote: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75,
    color: '#6a7080', marginBottom: '8px',
  },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

export default function VoynichManuscript() {
  return (
    <div style={S.outer}>
      <div style={S.document}>
        <div style={S.damage1} />
        <div style={S.damage2} />
        <div style={S.damage3} />

        <div style={S.header}>
          Ophelia's Books, Seattle, WA — 2020
        </div>

        <div style={S.body}>
          <span style={S.line}>I was never here.</span>

          <div style={S.gap} />

          <span style={S.corrupted}>
            burning bright / <span style={S.heavyRedact}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> / someone was here / <span style={S.heavyRedact}>&nbsp;&nbsp;</span> too late to / remember
          </span>

          <div style={S.gap} />

          <span style={S.redactBlock}>▓▓▓▓▓▓▓▓▓▓</span>
          <span style={S.redactBlock}>██████████</span>

          <div style={S.gap} />

          <span style={S.note}>[unreadable text]</span>
          <span style={S.note}>[crossed out, pressure deep</span>
          <span style={S.note}>into the page]</span>

          <div style={S.gap} />

          <span style={S.corrupted}>error // cannot // restore // corrupted data</span>

          <span style={S.paren}>(a voice I almost recognized)</span>

          <div style={S.gap} />

          <span style={S.corrupted}>
            <span style={S.heavyRedact}>&nbsp;</span> seen through glass <span style={S.heavyRedact}>&nbsp;</span> fogged at the edges <span style={S.heavyRedact}>&nbsp;</span>
          </span>

          <span style={S.corrupted}>
            <span style={S.heavyRedact}>&nbsp;&nbsp;&nbsp;</span> glitch <span style={S.heavyRedact}>&nbsp;&nbsp;</span> ghost <span style={S.heavyRedact}>&nbsp;&nbsp;</span> forget <span style={S.heavyRedact}>&nbsp;&nbsp;</span> forget <span style={S.heavyRedact}>&nbsp;&nbsp;</span> forget
          </span>

          <div style={S.gap} />

          <span style={S.panic}>no no no no no no no no no no no</span>

          <span style={S.redactBlock}>██████████████████</span>

          <div style={S.redactNote}>
            [entire line redacted with<br />
            heavy ink, repeated strokes,<br />
            pressed hard enough to dent<br />
            the page.]
          </div>

          <span style={S.signalLost}>SIGNAL LOST</span>
        </div>
      </div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.fnote}><span style={S.noteNum}>1</span> The Voynich Manuscript is a 15th-century book written in an unknown script and language, often cited as one of history's greatest cryptographic mysteries.</p>
      </div>
    </div>
  );
}
