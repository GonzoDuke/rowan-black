import React from 'react';

const S = {
  outer: { maxWidth: '520px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  document: {
    background: '#d4c8a0',
    border: '1px solid rgba(0,0,0,0.2)',
    borderRadius: '2px',
    overflow: 'hidden',
    boxShadow: '0 3px 16px rgba(0,0,0,0.12)',
    position: 'relative',
  },
  burnEdge: {
    position: 'absolute', top: 0, right: 0, bottom: 0, width: '30px',
    background: 'linear-gradient(to left, rgba(80,50,20,0.15) 0%, transparent 100%)',
    pointerEvents: 'none',
  },
  waterDamage: {
    position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
    background: 'linear-gradient(to top, rgba(90,70,40,0.12) 0%, transparent 100%)',
    pointerEvents: 'none',
  },
  stain1: {
    position: 'absolute', top: '15%', left: '10%',
    width: '100px', height: '80px', borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(60,40,15,0.1) 20%, transparent 60%)',
    pointerEvents: 'none',
  },
  stain2: {
    position: 'absolute', top: '55%', right: '15%',
    width: '70px', height: '90px', borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(80,50,20,0.08) 25%, transparent 55%)',
    pointerEvents: 'none',
  },
  stain3: {
    position: 'absolute', top: '35%', left: '40%',
    width: '120px', height: '40px', borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(50,30,10,0.06) 30%, transparent 65%)',
    pointerEvents: 'none',
  },
  header: {
    padding: '8px clamp(16px, 4vw, 20px) 4px',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
    color: 'rgba(60,40,20,0.4)', letterSpacing: '0.04em', fontStyle: 'italic',
  },
  body: {
    padding: 'clamp(20px, 5vw, 32px) clamp(16px, 4vw, 28px)',
    position: 'relative',
  },
  line: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '17px', lineHeight: 1.85, color: '#3a2a15',
    display: 'block', marginBottom: '4px',
  },
  corrupted: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '13px', lineHeight: 1.7, color: '#3a2a15',
    display: 'block', marginBottom: '4px',
  },
  heavyRedact: {
    display: 'inline-block', background: '#2a1a08',
    borderRadius: '1px', height: '15px',
    verticalAlign: 'middle', margin: '0 2px',
  },
  blockChars: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '15px', lineHeight: 1.5,
    color: '#2a1a08', display: 'block',
    letterSpacing: '0.02em', marginBottom: '4px',
  },
  gap: { marginBottom: '24px' },
  note: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11px', lineHeight: 1.6, color: 'rgba(60,40,20,0.5)',
    fontStyle: 'italic', display: 'block', marginBottom: '4px',
  },
  paren: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '16px', lineHeight: 1.7, color: 'rgba(58,42,21,0.6)',
    fontStyle: 'italic', display: 'block', marginBottom: '4px',
  },
  panic: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '14px', lineHeight: 1.4, color: '#3a2a15',
    display: 'block', marginBottom: '4px',
    letterSpacing: '0.02em',
  },
  redactNote: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11px', lineHeight: 1.6, color: 'rgba(60,40,20,0.4)',
    fontStyle: 'italic', display: 'block',
    marginTop: '20px', marginBottom: '20px',
  },
  signalLost: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '16px', fontWeight: 700,
    color: '#6a2010', letterSpacing: '0.15em',
    textAlign: 'center', marginTop: '32px',
    display: 'block',
  },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '40px', paddingTop: '20px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  fnote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

export default function VoynichManuscript() {
  return (
    <div style={S.outer}>
      <div style={S.document}>
        <div style={S.burnEdge} />
        <div style={S.waterDamage} />
        <div style={S.stain1} />
        <div style={S.stain2} />
        <div style={S.stain3} />

        <div style={S.header}>Ophelia's Books, Seattle, WA — 2020</div>

        <div style={S.body}>
          <span style={S.line}>I was never here.</span>

          <div style={S.gap} />

          <span style={S.corrupted}>
            burning bright / <span style={{ ...S.heavyRedact, width: '50px' }}>&nbsp;</span> / someone was here / <span style={{ ...S.heavyRedact, width: '20px' }}>&nbsp;</span> too late to / remember
          </span>

          <div style={S.gap} />

          <span style={S.blockChars}>▓▓▓▓▓▓▓▓▓▓</span>
          <span style={S.blockChars}>██████████</span>

          <div style={S.gap} />

          <span style={S.note}>[unreadable text]</span>
          <span style={S.note}>[crossed out, pressure deep</span>
          <span style={S.note}>into the page]</span>

          <div style={S.gap} />

          <span style={S.corrupted}>error // cannot // restore // corrupted data</span>

          <span style={S.paren}>(a voice I almost recognized)</span>

          <div style={S.gap} />

          <span style={S.corrupted}>
            <span style={{ ...S.heavyRedact, width: '14px' }}>&nbsp;</span> seen through glass <span style={{ ...S.heavyRedact, width: '14px' }}>&nbsp;</span> fogged at the edges <span style={{ ...S.heavyRedact, width: '14px' }}>&nbsp;</span>
          </span>

          <span style={S.corrupted}>
            <span style={{ ...S.heavyRedact, width: '28px' }}>&nbsp;</span> glitch <span style={{ ...S.heavyRedact, width: '18px' }}>&nbsp;</span> ghost <span style={{ ...S.heavyRedact, width: '18px' }}>&nbsp;</span> forget <span style={{ ...S.heavyRedact, width: '18px' }}>&nbsp;</span> forget <span style={{ ...S.heavyRedact, width: '18px' }}>&nbsp;</span> forget
          </span>

          <div style={S.gap} />

          <span style={S.panic}>no no no no no no no no no no no</span>

          <span style={S.blockChars}>██████████████████</span>

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
