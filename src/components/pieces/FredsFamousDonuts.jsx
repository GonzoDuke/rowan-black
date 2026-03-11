import React from 'react';

const S = {
  outer: { maxWidth: '560px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  placemat: {
    background: '#ffffff',
    border: '2px solid #ddd',
    borderRadius: '0',
    overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    position: 'relative',
  },
  innerBorder: {
    border: '1px solid #eee',
    margin: '8px',
    padding: 'clamp(20px, 5vw, 32px) clamp(16px, 4vw, 24px)',
  },
  dinerName: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px',
    fontWeight: 600, color: '#cc6633', letterSpacing: '0.1em',
    textTransform: 'uppercase', textAlign: 'center',
    marginBottom: '4px',
  },
  dinerLocation: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
    color: '#bbb', letterSpacing: '0.06em',
    textAlign: 'center', marginBottom: '24px',
  },
  poem: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '17px', lineHeight: 1.9, color: '#1a1d24',
  },
  stanza: { marginBottom: '24px' },
  line: { display: 'block' },
};

const L = ({ children }) => <span style={S.line}>{children}</span>;

export default function FredsFamousDonuts() {
  return (
    <div style={S.outer}>
      <div style={S.placemat}>
        <div style={S.innerBorder}>
          <div style={S.dinerName}>Fred's Famous Donuts</div>
          <div style={S.dinerLocation}>Tannersville, NY — 2016</div>
          <div style={S.poem}>
            <div style={S.stanza}><L>Ancient stone meets festival flesh —</L><L>the mountain doesn't care about</L><L>your Coachella-north aesthetic,</L><L>your carefully curated wildness.</L></div>
            <div style={S.stanza}><L>Time moves in geological sighs here,</L><L>each ridge a sentence written in bedrock,</L><L>while below, the tattooed tribes</L><L>chase chemical enlightenment,</L><L>their phones raised like totems</L><L>toward uncaring skies.</L></div>
            <div style={S.stanza}><L>The valley drowns in bass waves</L><L>but watch —</L><L>each tree still dances its own silence,</L><L>each shadow still tells</L><L>its million-year story.</L></div>
            <div style={S.stanza}><L>I sit here, somewhere between</L><L>eras, between beats,</L><L>watching light write psalms across the ridgeline</L><L>while humanity builds its temporary temples below.</L></div>
            <div style={S.stanza}><L>What are they seeking</L><L>in their synthetic ceremonies,</L><L>these pilgrims of the present tense?</L><L>The same peace I chase perhaps,</L><L>but through different smoke.</L></div>
            <div style={S.stanza}><L>The mountain knows —</L><L>we're all just passing through,</L><L>all searching for something</L><L>that was here before us,</L><L>will remain after</L><L>our festivals fade.</L></div>
            <div style={S.stanza}><L>Time moves in geological sighs.</L><L>The rocks remember nothing</L><L>of our neon dreams.</L></div>
          </div>
        </div>
      </div>
    </div>
  );
}
