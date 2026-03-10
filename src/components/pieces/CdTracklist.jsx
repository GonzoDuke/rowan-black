import React from 'react';

const S = {
  outer: { maxWidth: '680px', margin: '0 auto', padding: '40px 36px 60px' },
  cdCase: {
    background: '#f5f2ed', border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '4px', overflow: 'hidden', maxWidth: '480px', margin: '0 auto',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  insert: {
    background: '#f0ece4', padding: '32px 28px 24px',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
  },
  insertTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '20px', fontWeight: 500,
    color: '#2a2520', textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase',
    marginBottom: '20px', lineHeight: 1.35,
  },
  handwritten: {
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '14px', lineHeight: 1.6,
    color: '#5a5040', fontStyle: 'italic', textAlign: 'center', marginBottom: '8px',
  },
  trackList: { padding: '20px 28px 28px', background: '#f5f2ed' },
  track: { display: 'flex', gap: '12px', padding: '5px 0', alignItems: 'baseline' },
  trackNum: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#a09888',
    width: '22px', textAlign: 'right', flexShrink: 0,
  },
  trackTitle: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#2a2520' },
  trackArtist: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#8a8070' },
  gap: { height: '10px', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '10px' },
  backCover: {
    borderTop: '1px solid rgba(0,0,0,0.08)', padding: '20px 28px', background: '#ece8e0',
  },
  scrawl: {
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '13px',
    color: '#6a6050', fontStyle: 'italic', textAlign: 'center',
  },
};

const Track = ({ num, title, artist }) => (
  <div style={S.track}>
    <span style={S.trackNum}>{num}.</span>
    <div><span style={S.trackTitle}>{title}</span>{' '}<span style={S.trackArtist}>{artist}</span></div>
  </div>
);

export default function CdTracklist() {
  return (
    <div style={S.outer}>
      <div style={S.cdCase}>
        <div style={S.insert}>
          <div style={S.insertTitle}>Songs for Cities<br/>That Don't Exist Yet</div>
          <div style={S.handwritten}>Summer - 2005</div>
          <div style={S.handwritten}>Don't shuffle. It only makes sense this way.</div>
          <div style={S.handwritten}>If you find this, it was meant for you.</div>
        </div>
        <div style={S.trackList}>
          <Track num="1" title="Flim" artist="Aphex Twin" />
          <Track num="2" title="Svefn-g-englar" artist="Sigur Rós" />
          <Track num="3" title="This Place Is a Prison" artist="The Postal Service" />
          <Track num="4" title="Teardrop" artist="Massive Attack" />
          <Track num="5" title="Something About Us" artist="Daft Punk" />
          <Track num="6" title="Eye in the Sky" artist="The Alan Parsons Project" />
          <Track num="7" title="3 Libras" artist="A Perfect Circle" />
          <Track num="8" title="Maps" artist="Yeah Yeah Yeahs" />
          <div style={S.gap} />
          <Track num="9" title="Somebody That I Used to Know" artist="Elliott Smith" />
          <Track num="10" title="Float On" artist="Modest Mouse" />
          <Track num="11" title="B.O.B." artist="OutKast" />
          <Track num="12" title="Aerials" artist="System of a Down" />
          <Track num="13" title="Roads" artist="Portishead" />
          <Track num="14" title="Munich" artist="Editors" />
          <div style={S.gap} />
          <Track num="15" title="The Day the World Went Away" artist="Nine Inch Nails" />
          <Track num="16" title="How to Disappear Completely" artist="Radiohead" />
          <Track num="17" title="All Is Full of Love" artist="Björk" />
          <Track num="18" title="From the Morning" artist="Nick Drake" />
        </div>
        <div style={S.backCover}>
          <div style={S.scrawl}>You can't fast-forward real life. I tried.</div>
        </div>
      </div>
    </div>
  );
}
