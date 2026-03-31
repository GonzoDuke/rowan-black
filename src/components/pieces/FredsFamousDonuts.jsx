import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  headnoteLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' },
  headnote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#5a6070', marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.06)' },
  stanza: { marginBottom: '24px' },
  line: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '17px', lineHeight: 1.85, color: '#1a1d24', display: 'block' },
};

const L = ({ children }) => <span style={S.line}>{children}</span>;

export default function FredsFamousDonuts() {
  return (
    <div style={S.outer}>
      <div style={S.headnoteLabel}>Digitized Object</div>
      <div style={S.headnote}>Written on the back of a paper placemat from Fred's Famous Donuts, Tannersville, NY. Recovered by a Collective member who found it left on a table. The original is grease-stained and has begun to tear along the folds. Transcribed in full.</div>

      <div style={S.stanza}><L>Ancient stone meets festival flesh —</L><L>the mountain doesn't care about</L><L>your Coachella-north aesthetic,</L><L>your carefully curated wildness.</L></div>
      <div style={S.stanza}><L>Time moves in geological sighs here,</L><L>each ridge a sentence written in bedrock,</L><L>while below, the tattooed tribes</L><L>chase chemical enlightenment,</L><L>their phones raised like totems</L><L>toward uncaring skies.</L></div>
      <div style={S.stanza}><L>The valley drowns in bass waves</L><L>but watch —</L><L>each tree still dances its own silence,</L><L>each shadow still tells</L><L>its million-year story.</L></div>
      <div style={S.stanza}><L>I sit here, somewhere between</L><L>eras, between beats,</L><L>watching light write psalms across the ridgeline</L><L>while humanity builds its temporary temples below.</L></div>
      <div style={S.stanza}><L>What are they seeking</L><L>in their synthetic ceremonies,</L><L>these pilgrims of the present tense?</L><L>The same peace I chase perhaps,</L><L>but through different smoke.</L></div>
      <div style={S.stanza}><L>The mountain knows —</L><L>we're all just passing through,</L><L>all searching for something</L><L>that was here before us,</L><L>will remain after</L><L>our festivals fade.</L></div>
      <div style={S.stanza}><L>Time moves in geological sighs.</L><L>The rocks remember nothing</L><L>of our neon dreams.</L></div>
    </div>
  );
}
