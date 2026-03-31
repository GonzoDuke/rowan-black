import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  headnoteLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' },
  headnote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#5a6070', marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.06)' },
  line: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '17px', lineHeight: 1.85, color: '#1a1d24', display: 'block', marginBottom: '4px' },
  corrupted: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', lineHeight: 1.7, color: '#1a1d24', display: 'block', marginBottom: '4px' },
  redacted: { display: 'inline-block', background: '#1a1d24', borderRadius: '1px', height: '14px', verticalAlign: 'middle', margin: '0 2px' },
  blockChars: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', lineHeight: 1.5, color: '#1a1d24', display: 'block', letterSpacing: '0.02em', marginBottom: '4px' },
  gap: { marginBottom: '24px' },
  conditionNote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#9099a8', fontStyle: 'italic', display: 'block', marginBottom: '4px' },
  paren: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '16px', lineHeight: 1.7, color: '#5a6070', fontStyle: 'italic', display: 'block', marginBottom: '4px' },
  panic: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', lineHeight: 1.4, color: '#1a1d24', display: 'block', marginBottom: '4px' },
  redactNote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', lineHeight: 1.6, color: '#9099a8', fontStyle: 'italic', display: 'block', marginTop: '20px', marginBottom: '20px' },
  signalLost: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '16px', fontWeight: 700, color: '#993333', letterSpacing: '0.15em', textAlign: 'center', marginTop: '32px', display: 'block' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '40px', paddingTop: '20px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

export default function VoynichManuscript() {
  return (
    <div style={S.outer}>
      <div style={S.headnoteLabel}>Digitized Object</div>
      <div style={S.headnote}>Found inside a hollowed-out copy of a Voynich Manuscript facsimile at Ophelia's Books, Seattle. The document shows signs of extensive deliberate damage. Large sections have been redacted by hand with heavy ink. What remains has been transcribed as found. Significant portions are unrecoverable.</div>

      <span style={S.line}>I was never here.</span>
      <div style={S.gap} />
      <span style={S.corrupted}>burning bright / <span style={{ ...S.redacted, width: '50px' }}>&nbsp;</span> / someone was here / <span style={{ ...S.redacted, width: '20px' }}>&nbsp;</span> too late to / remember</span>
      <div style={S.gap} />
      <span style={S.blockChars}>▓▓▓▓▓▓▓▓▓▓</span>
      <span style={S.blockChars}>██████████</span>
      <div style={S.gap} />
      <span style={S.conditionNote}>[unreadable text]</span>
      <span style={S.conditionNote}>[crossed out, pressure deep</span>
      <span style={S.conditionNote}>into the page]</span>
      <div style={S.gap} />
      <span style={S.corrupted}>error // cannot // restore // corrupted data</span>
      <span style={S.paren}>(a voice I almost recognized)</span>
      <div style={S.gap} />
      <span style={S.corrupted}><span style={{ ...S.redacted, width: '14px' }}>&nbsp;</span> seen through glass <span style={{ ...S.redacted, width: '14px' }}>&nbsp;</span> fogged at the edges <span style={{ ...S.redacted, width: '14px' }}>&nbsp;</span></span>
      <span style={S.corrupted}><span style={{ ...S.redacted, width: '28px' }}>&nbsp;</span> glitch <span style={{ ...S.redacted, width: '18px' }}>&nbsp;</span> ghost <span style={{ ...S.redacted, width: '18px' }}>&nbsp;</span> forget <span style={{ ...S.redacted, width: '18px' }}>&nbsp;</span> forget <span style={{ ...S.redacted, width: '18px' }}>&nbsp;</span> forget</span>
      <div style={S.gap} />
      <span style={S.panic}>no no no no no no no no no no no</span>
      <span style={S.blockChars}>██████████████████</span>
      <div style={S.redactNote}>[entire line redacted with<br />heavy ink, repeated strokes,<br />pressed hard enough to dent<br />the page.]</div>
      <span style={S.signalLost}>SIGNAL LOST</span>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> The Voynich Manuscript is a 15th-century book written in an unknown script and language, often cited as one of history's greatest cryptographic mysteries.</p>
      </div>
    </div>
  );
}
