import React from 'react';

const SECURITY_PATTERN = `repeating-linear-gradient(
  45deg,
  transparent 0px,
  transparent 3px,
  rgba(80,100,160,0.04) 3px,
  rgba(80,100,160,0.04) 4px,
  transparent 4px,
  transparent 7px
)`;

const S = {
  outer: { maxWidth: '460px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  envelope: {
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '1px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    position: 'relative',
  },
  flap: {
    height: '44px',
    background: 'linear-gradient(168deg, #f8f8f6 48%, transparent 48.5%)',
    borderBottom: '1px solid rgba(0,0,0,0.04)',
    position: 'relative',
  },
  securityLining: {
    position: 'absolute', right: '-2px', top: '30%', bottom: '5%',
    width: '12px',
    background: SECURITY_PATTERN,
    opacity: 0.6,
    pointerEvents: 'none',
  },
  tearStrip: {
    position: 'absolute', right: 0, top: '25%', bottom: '10%',
    width: '3px',
    background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
    pointerEvents: 'none',
  },
  header: {
    padding: '6px clamp(16px, 4vw, 20px) 2px',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
    color: '#bbb', letterSpacing: '0.04em',
  },
  body: {
    padding: '8px clamp(16px, 4vw, 24px) clamp(24px, 5vw, 28px)',
  },
  poem: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '17px', lineHeight: 1.85, color: '#1a1d24',
    fontStyle: 'italic',
  },
  stanza: { marginBottom: '18px' },
  line: { display: 'block' },
  indent: { paddingLeft: '16px' },
  ending: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '13px', color: '#5a6070',
    marginTop: '24px', fontStyle: 'normal',
  },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;

export default function TornEnvelope() {
  return (
    <div style={S.outer}>
      <div style={S.envelope}>
        <div style={S.flap} />
        <div style={S.securityLining} />
        <div style={S.tearStrip} />
        <div style={S.header}>Bicknell, UT — 2019</div>
        <div style={S.body}>
          <div style={S.poem}>
            <div style={S.stanza}><L>i thought you were different —</L><L>or maybe i just</L><L>needed you to be.</L></div>
            <div style={S.stanza}><L>a small moment,</L><L>a word,</L><L>a look.</L><L>a glint of decency</L><L>in the gray.</L></div>
            <div style={S.stanza}><L>but you gave me the easiest thing.</L><L>not honesty,</L><L>not care,</L><L>just —</L><L>a shrug shaped like a sentence,</L><L>a smirk</L><L>I didn't see until it was too late.</L></div>
            <div style={S.stanza}><L>you let me hang there,</L><L>arms outstretched,</L><L>while you laughed at the way</L><L>i trusted gravity.</L></div>
            <div style={S.stanza}><L>i want to call you out —</L><L>to say,</L><L style={S.indent}>look at what you did!</L><L>but even here,</L><L>even now,</L><L>your voice</L><L>still crowds mine.</L></div>
            <div style={S.stanza}><L>so i say nothing.</L><L>not because i forgive,</L><L>but because i can't bear</L><L>to hear myself beg.</L></div>
          </div>
          <div style={S.ending}>hashtag:<br />unfriend.</div>
        </div>
      </div>
    </div>
  );
}
