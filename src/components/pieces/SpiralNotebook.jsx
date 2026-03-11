import React from 'react';

const RULED_BG = `repeating-linear-gradient(
  to bottom,
  transparent 0px,
  transparent 25px,
  rgba(80,120,200,0.18) 25px,
  rgba(80,120,200,0.18) 26px
)`;

const MARGIN_LINE = `linear-gradient(
  to right,
  transparent 46px,
  rgba(210,60,60,0.22) 46px,
  rgba(210,60,60,0.22) 47px,
  transparent 47px
)`;

const S = {
  outer: { maxWidth: '600px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  page: {
    background: RULED_BG + ',' + MARGIN_LINE + ', #ffffff',
    backgroundPosition: '0 14px, 0 0',
    border: '1px solid rgba(0,0,0,0.1)',
    borderLeft: '3px solid rgba(0,0,0,0.06)',
    borderRadius: '1px 3px 3px 1px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    position: 'relative',
  },
  holes: {
    position: 'absolute', left: '10px', top: 0, bottom: 0,
    display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly',
    pointerEvents: 'none',
  },
  hole: {
    width: '10px', height: '10px', borderRadius: '50%',
    background: '#eef0f4', border: '1px solid rgba(0,0,0,0.08)',
  },
  coffeeStain: {
    position: 'absolute', bottom: '30px', right: '20px',
    width: '80px', height: '75px', borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(140,100,50,0.06) 40%, rgba(140,100,50,0.09) 60%, transparent 72%)',
    pointerEvents: 'none',
  },
  body: {
    padding: 'clamp(20px, 4vw, 28px) clamp(20px, 5vw, 32px) clamp(20px, 4vw, 28px) clamp(56px, 10vw, 64px)',
  },
  text: {
    fontFamily: "'Caveat', cursive", fontSize: '18px',
    lineHeight: 1.65, color: '#1a1d24', marginBottom: '14px',
  },
  listItem: {
    fontFamily: "'Caveat', cursive", fontSize: '17px',
    lineHeight: 1.6, color: '#1a1d24', paddingLeft: '12px', marginBottom: '2px',
  },
  listBlock: { marginBottom: '14px' },
  loud: { fontWeight: 600 },
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
      <div style={S.page}>
        <div style={S.holes}><div style={S.hole} /><div style={S.hole} /><div style={S.hole} /></div>
        <div style={S.coffeeStain} />
        <div style={S.body}>
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
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Lars Ulrich, drummer for Metallica, was one of the most vocal critics of Napster, leading the band's lawsuit against the service in 2000.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Maynard James Keenan, lead singer of Tool, whose band resisted digital sales for years, keeping their music off streaming services until 2019.</p>
      </div>
    </div>
  );
}
