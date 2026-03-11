import React, { useState, useEffect } from 'react';

function useIsMobile(bp = 640) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${bp}px)`);
    setM(mq.matches);
    const h = (e) => setM(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, [bp]);
  return m;
}

const RULED_BG = `repeating-linear-gradient(
  to bottom,
  transparent 0px,
  transparent 19px,
  rgba(160,190,220,0.25) 19px,
  rgba(160,190,220,0.25) 20px
)`;

const S = {
  outer: { maxWidth: '760px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(8px, 3vw, 24px) clamp(40px, 8vw, 60px)' },
  insert: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: '2px',
    overflow: 'hidden',
    boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
    maxWidth: '762px',
    margin: '0 auto',
  },
  panel: {
    flex: '1 1 320px',
    aspectRatio: '1 / 1',
    maxWidth: '380px',
    background: RULED_BG + ', #f9f9f7',
    padding: '20px 18px 16px',
    position: 'relative',
    backgroundPosition: '0 10px',
    overflow: 'hidden',
  },
  panelDivider: {
    flex: '0 0 1px',
    background: 'rgba(0,0,0,0.08)',
    alignSelf: 'stretch',
  },
  hw: {
    fontFamily: "'Reenie Beanie', cursive",
  },
  title: {
    fontFamily: "'Reenie Beanie', cursive",
    fontSize: '22px',
    fontWeight: 700,
    color: '#1a1d24',
    lineHeight: 1.2,
    marginBottom: '12px',
    textAlign: 'center',
  },
  note: {
    fontFamily: "'Reenie Beanie', cursive",
    fontSize: '15px',
    color: '#4a4a4a',
    lineHeight: 1.4,
    textAlign: 'center',
    marginBottom: '4px',
  },
  noteBlock: {
    marginBottom: '14px',
    paddingBottom: '10px',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  track: {
    display: 'flex',
    gap: '6px',
    padding: '1px 0',
    alignItems: 'baseline',
  },
  trackNum: {
    fontFamily: "'Reenie Beanie', cursive",
    fontSize: '14px',
    color: '#888',
    width: '22px',
    textAlign: 'right',
    flexShrink: 0,
  },
  trackTitle: {
    fontFamily: "'Reenie Beanie', cursive",
    fontSize: '16px',
    color: '#1a1d24',
    fontWeight: 500,
  },
  trackArtist: {
    fontFamily: "'Reenie Beanie', cursive",
    fontSize: '14px',
    color: '#6a6a6a',
  },
  gap: {
    height: '8px',
  },
  scrawl: {
    fontFamily: "'Reenie Beanie', cursive",
    fontSize: '15px',
    color: '#6a6a6a',
    textAlign: 'center',
    marginTop: 'auto',
    paddingTop: '12px',
    fontStyle: 'italic',
  },
  foldCrease: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '1px',
    right: 0,
    background: 'rgba(0,0,0,0.04)',
  },
};

const Track = ({ num, title, artist }) => (
  <div style={S.track}>
    <span style={S.trackNum}>{num}.</span>
    <div>
      <span style={S.trackTitle}>{title}</span>
      {' '}
      <span style={S.trackArtist}>- {artist}</span>
    </div>
  </div>
);

export default function CdTracklist() {
  const mobile = useIsMobile();
  const panelStyle = {
    ...S.panel,
    aspectRatio: mobile ? 'auto' : '1 / 1',
    maxWidth: mobile ? '100%' : '380px',
    flex: mobile ? '1 1 100%' : '1 1 320px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={S.outer}>
      <div style={S.insert}>
        {/* Left panel — front cover */}
        <div style={panelStyle}>
          <div style={S.title}>
            Songs for Cities<br />That Don't Exist Yet
          </div>
          <div style={S.noteBlock}>
            <div style={S.note}>Summer - 2005</div>
            <div style={S.note}>Don't shuffle. It only makes sense this way.</div>
            <div style={S.note}>If you find this, it was meant for you.</div>
          </div>
          <Track num="1" title="Flim" artist="Aphex Twin" />
          <Track num="2" title="Svefn-g-englar" artist="Sigur Rós" />
          <Track num="3" title="This Place Is a Prison" artist="The Postal Service" />
          <Track num="4" title="Teardrop" artist="Massive Attack" />
          <Track num="5" title="Something About Us" artist="Daft Punk" />
          <Track num="6" title="Eye in the Sky" artist="The Alan Parsons Project" />
          <Track num="7" title="3 Libras" artist="A Perfect Circle" />
          <Track num="8" title="Maps" artist="Yeah Yeah Yeahs" />
          <div style={S.foldCrease} />
        </div>

        {/* Divider */}
        <div style={S.panelDivider} />

        {/* Right panel — inside */}
        <div style={panelStyle}>
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
          <div style={S.scrawl}>
            You can't fast-forward real life. I tried.
          </div>
        </div>
      </div>
    </div>
  );
}
