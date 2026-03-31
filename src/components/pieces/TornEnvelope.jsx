import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  headnoteLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' },
  headnote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#5a6070', marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.06)' },
  stanza: { marginBottom: '20px' },
  line: { fontFamily: "'Nothing You Could Do', cursive", fontSize: '16px', lineHeight: 1.35, color: '#1a1d24', display: 'block' },
  indent: { paddingLeft: '16px' },
  ending: { fontFamily: "'Nothing You Could Do', cursive", fontSize: '16px', color: '#1a1d24', marginTop: '28px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;

export default function TornEnvelope() {
  return (
    <div style={S.outer}>
      <div style={S.headnoteLabel}>Digitized Object</div>
      <div style={S.headnote}>Found on the back of a torn envelope in a free library box in Bicknell, UT. The envelope's original addressee and return address are missing. The text is written in ballpoint pen. The original is held in the Collective's physical archive.</div>

      <div style={S.stanza}><L>i thought you were different —</L><L>or maybe i just</L><L>needed you to be.</L></div>
      <div style={S.stanza}><L>a small moment,</L><L>a word,</L><L>a look.</L><L>a glint of decency</L><L>in the gray.</L></div>
      <div style={S.stanza}><L>but you gave me the easiest thing.</L><L>not honesty,</L><L>not care,</L><L>just —</L><L>a shrug shaped like a sentence,</L><L>a smirk</L><L>I didn't see until it was too late.</L></div>
      <div style={S.stanza}><L>you let me hang there,</L><L>arms outstretched,</L><L>while you laughed at the way</L><L>i trusted gravity.</L></div>
      <div style={S.stanza}><L>i want to call you out —</L><L>to say,</L><L style={S.indent}>look at what you did!</L><L>but even here,</L><L>even now,</L><L>your voice</L><L>still crowds mine.</L></div>
      <div style={S.stanza}><L>so i say nothing.</L><L>not because i forgive,</L><L>but because i can't bear</L><L>to hear myself beg.</L></div>
      <div style={S.ending}>hashtag:<br />unfriend.</div>
    </div>
  );
}
