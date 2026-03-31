import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  headnote: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
    lineHeight: 1.75, color: '#5a6070', marginBottom: '32px',
    paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  headnoteLabel: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em',
    textTransform: 'uppercase', marginBottom: '10px',
  },
  text: {
    fontFamily: "'Nothing You Could Do', cursive", fontSize: '24px',
    lineHeight: 1.35, color: '#1a1d24', marginBottom: '14px',
  },
  listItem: {
    fontFamily: "'Nothing You Could Do', cursive", fontSize: '23px',
    lineHeight: 1.35, color: '#1a1d24', paddingLeft: '12px',
    marginBottom: '2px',
  },
  listBlock: { marginBottom: '14px' },
  loud: { fontWeight: 400, textDecoration: 'underline' },
  sectionHead: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px',
    fontWeight: 600, color: '#5a6070', letterSpacing: '0.04em',
    marginTop: '24px', marginBottom: '8px',
  },
  conditionNote: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px',
    color: '#9099a8', fontStyle: 'italic', marginBottom: '12px',
  },
  sup: { fontSize: '12px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '40px', paddingTop: '20px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function SpiralNotebook() {
  return (
    <div style={S.outer}>
      <div style={S.headnoteLabel}>Digitized Object</div>
      <div style={S.headnote}>
        Original recovered from a box of personal effects donated to a used bookstore in Columbus, OH. The page is heavily coffee-stained and has begun to yellow along the tear. Digitized to preserve legibility.
      </div>

      <p style={S.text}>Is Napster stealing?</p>
      <p style={S.text}>Mom says yes. Everything has a price. But what about the air we breathe? What about ideas?</p>
      <p style={S.text}>OK fine. It's stealing. I'll admit that. But maybe stealing isn't always wrong?</p>
      <p style={S.text}>Like Robin Hood maybe. These record execs living in mansions while kids at school can't afford to buy albums. They already have more money than anyone needs. More than they could spend in 100 lifetimes.</p>
      <p style={S.text}>When I download Metallica I'm not stealing from Lars.<Sup n="1" /> I'm liberating data. Breaking down the walls between art and people.</p>
      <p style={S.text}>The internet is like... a giant library. But instead of just books it's EVERYTHING. Music and movies and ideas all floating in the digital ether, waiting to be grabbed. They want to lock it all up behind plastic cases and price tags.</p>
      <p style={S.text}><span style={S.loud}>Music should be FREE. Ideas should be FREE.</span></p>
      <p style={S.text}>But what about smaller bands? The ones barely making rent? That's different. They're not the enemy. They're like us - trying to make something real in a world of plastic.</p>
      <p style={S.text}>Maybe that's the answer:</p>
      <div style={S.listBlock}>
        <div style={S.listItem}>- Steal from the rich (major labels, huge bands)</div>
        <div style={S.listItem}>- Support the poor (indie bands, garage bands)</div>
        <div style={S.listItem}>- Destroy the system that puts price tags on art</div>
      </div>
      <p style={S.text}>The suits say we're killing music. But we're just killing their control over it. Music survived before record labels. It'll survive after.</p>
      <p style={S.text}>Time to download the new Tool album.<br />Sorry Maynard.<Sup n="2" /></p>

      <div style={S.conditionNote}>[remainder of page is coffee-stained and illegible]</div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Lars Ulrich, drummer for Metallica, was one of the most vocal critics of Napster, leading the band's lawsuit against the service in 2000.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Maynard James Keenan, lead singer of Tool, whose band resisted digital sales for years, keeping their music off streaming services until 2019.</p>
      </div>
    </div>
  );
}
