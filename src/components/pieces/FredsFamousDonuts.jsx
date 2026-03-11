import React from 'react';

const S = {
  outer: { maxWidth: '560px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  placemat: {
    background: '#f5f0e6',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '2px', overflow: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
    position: 'relative',
  },
  header: {
    padding: '12px clamp(16px, 4vw, 24px) 6px',
    borderBottom: '1px solid rgba(0,0,0,0.04)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    flexWrap: 'wrap', gap: '8px',
  },
  dinerName: {
    fontFamily: "'Caveat', cursive", fontSize: '14px',
    fontWeight: 600, color: '#8a7a60',
  },
  location: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
    color: '#aaa', letterSpacing: '0.04em',
  },
  grease: {
    position: 'absolute', top: '60px', right: '40px',
    width: '30px', height: '30px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(160,130,70,0.05) 40%, transparent 65%)',
    pointerEvents: 'none',
  },
  body: {
    padding: 'clamp(20px, 5vw, 32px) clamp(16px, 4vw, 24px)',
  },
  poem: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '17px', lineHeight: 1.9, color: '#2a2520',
  },
  stanza: { marginBottom: '24px' },
  line: { display: 'block' },
};

const L = ({ children }) => <span style={S.line}>{children}</span>;

export default function FredsFamousDonuts() {
  return (
    <div style={S.outer}>
      <div style={S.placemat}>
        <div style={S.grease} />

        <div style={S.header}>
          <span style={S.dinerName}>Fred's Famous Donuts</span>
          <span style={S.location}>Tannersville, NY — 2016</span>
        </div>

        <div style={S.body}>
          <div style={S.poem}>
            <div style={S.stanza}>
              <L>Ancient stone meets festival flesh —</L>
              <L>the mountain doesn't care about</L>
              <L>your Coachella-north aesthetic,</L>
              <L>your carefully curated wildness.</L>
            </div>
            <div style={S.stanza}>
              <L>Time moves in geological sighs here,</L>
              <L>each ridge a sentence written in bedrock,</L>
              <L>while below, the tattooed tribes</L>
              <L>chase chemical enlightenment,</L>
              <L>their phones raised like totems</L>
              <L>toward uncaring skies.</L>
            </div>
            <div style={S.stanza}>
              <L>The valley drowns in bass waves</L>
              <L>but watch —</L>
              <L>each tree still dances its own silence,</L>
              <L>each shadow still tells</L>
              <L>its million-year story.</L>
            </div>
            <div style={S.stanza}>
              <L>I sit here, somewhere between</L>
              <L>eras, between beats,</L>
              <L>watching light write psalms across the ridgeline</L>
              <L>while humanity builds its temporary temples below.</L>
            </div>
            <div style={S.stanza}>
              <L>What are they seeking</L>
              <L>in their synthetic ceremonies,</L>
              <L>these pilgrims of the present tense?</L>
              <L>The same peace I chase perhaps,</L>
              <L>but through different smoke.</L>
            </div>
            <div style={S.stanza}>
              <L>The mountain knows —</L>
              <L>we're all just passing through,</L>
              <L>all searching for something</L>
              <L>that was here before us,</L>
              <L>will remain after</L>
              <L>our festivals fade.</L>
            </div>
            <div style={S.stanza}>
              <L>Time moves in geological sighs.</L>
              <L>The rocks remember nothing</L>
              <L>of our neon dreams.</L>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
