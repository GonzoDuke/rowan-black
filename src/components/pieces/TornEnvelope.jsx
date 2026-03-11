import React from 'react';

const S = {
  outer: { maxWidth: '480px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  envelope: {
    background: '#f4f0e8',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    position: 'relative',
  },
  flap: {
    height: '48px',
    background: 'linear-gradient(170deg, #ece8de 50%, transparent 50.5%)',
    borderBottom: '1px solid rgba(0,0,0,0.04)',
    position: 'relative',
  },
  flapCrease: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    height: '1px', background: 'rgba(0,0,0,0.06)',
  },
  tornEdge: {
    position: 'absolute', right: '-2px', top: '30%', bottom: '10%',
    width: '4px',
    background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 5px, transparent 5px, transparent 8px)',
  },
  header: {
    padding: '8px clamp(16px, 4vw, 20px) 4px',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
    color: '#bbb', letterSpacing: '0.04em',
  },
  body: {
    padding: '8px clamp(16px, 4vw, 24px) clamp(24px, 5vw, 32px)',
  },
  poem: {
    fontFamily: "'Caveat', cursive",
    fontSize: '18px', lineHeight: 1.65, color: '#2a2520',
  },
  stanza: { marginBottom: '16px' },
  line: { display: 'block' },
  indent: { paddingLeft: '16px' },
  ending: {
    fontFamily: "'Caveat', cursive",
    fontSize: '16px', color: '#6a6050',
    marginTop: '20px',
  },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;

export default function TornEnvelope() {
  return (
    <div style={S.outer}>
      <div style={S.envelope}>
        <div style={S.flap}>
          <div style={S.flapCrease} />
        </div>
        <div style={S.tornEdge} />

        <div style={S.header}>Bicknell, UT — 2019</div>

        <div style={S.body}>
          <div style={S.poem}>
            <div style={S.stanza}>
              <L>i thought you were different —</L>
              <L>or maybe i just</L>
              <L>needed you to be.</L>
            </div>
            <div style={S.stanza}>
              <L>a small moment,</L>
              <L>a word,</L>
              <L>a look.</L>
              <L>a glint of decency</L>
              <L>in the gray.</L>
            </div>
            <div style={S.stanza}>
              <L>but you gave me the easiest thing.</L>
              <L>not honesty,</L>
              <L>not care,</L>
              <L>just —</L>
              <L>a shrug shaped like a sentence,</L>
              <L>a smirk</L>
              <L>I didn't see until it was too late.</L>
            </div>
            <div style={S.stanza}>
              <L>you let me hang there,</L>
              <L>arms outstretched,</L>
              <L>while you laughed at the way</L>
              <L>i trusted gravity.</L>
            </div>
            <div style={S.stanza}>
              <L>i want to call you out —</L>
              <L>to say,</L>
              <L style={S.indent}>look at what you did!</L>
              <L>but even here,</L>
              <L>even now,</L>
              <L>your voice</L>
              <L>still crowds mine.</L>
            </div>
            <div style={S.stanza}>
              <L>so i say nothing.</L>
              <L>not because i forgive,</L>
              <L>but because i can't bear</L>
              <L>to hear myself beg.</L>
            </div>
            <div style={S.ending}>
              hashtag:<br />unfriend.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
