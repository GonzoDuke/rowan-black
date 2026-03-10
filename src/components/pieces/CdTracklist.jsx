import React from 'react';

const S = {
  outer: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '48px 32px 80px',
  },
  cdCase: {
    background: '#0d0d10',
    border: '1px solid rgba(200,200,208,0.08)',
    borderRadius: '2px',
    overflow: 'hidden',
    maxWidth: '520px',
    margin: '0 auto',
    position: 'relative',
  },
  insert: {
    background: 'linear-gradient(180deg, #131316 0%, #0f0f12 100%)',
    padding: '36px 32px 28px',
    borderBottom: '1px solid rgba(200,200,208,0.06)',
  },
  insertTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '18px',
    fontWeight: 400,
    color: '#c8c8d0',
    textAlign: 'center',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '24px',
    lineHeight: 1.4,
  },
  handwritten: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11.5px',
    lineHeight: 1.7,
    color: 'rgba(200,200,208,0.55)',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: '20px',
  },
  divider: {
    height: '1px',
    background: 'rgba(200,200,208,0.06)',
    margin: '16px 0',
  },
  trackList: {
    padding: '24px 32px 32px',
  },
  track: {
    display: 'flex',
    gap: '12px',
    padding: '6px 0',
    alignItems: 'baseline',
  },
  trackNum: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '10px',
    color: 'rgba(200,200,208,0.2)',
    width: '20px',
    textAlign: 'right',
    flexShrink: 0,
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '12.5px',
    color: '#d4d4dc',
    fontWeight: 400,
  },
  trackArtist: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11px',
    color: 'rgba(200,200,208,0.35)',
    fontWeight: 300,
  },
  gap: {
    height: '12px',
    borderBottom: '1px solid rgba(200,200,208,0.04)',
    marginBottom: '12px',
  },
  backCover: {
    borderTop: '1px solid rgba(200,200,208,0.06)',
    padding: '24px 32px',
    background: '#0c0c0f',
  },
  scrawl: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11px',
    color: 'rgba(200,200,208,0.3)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  annotation: {
    borderTop: '1px solid rgba(200,200,208,0.08)',
    marginTop: '48px',
    paddingTop: '24px',
  },
  annotationLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '9px',
    fontWeight: 500,
    color: 'rgba(200,200,208,0.3)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  note: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11.5px',
    lineHeight: '1.75',
    color: 'rgba(200,200,208,0.4)',
    fontStyle: 'italic',
    marginBottom: '8px',
  },
};

const Track = ({ num, title, artist }) => (
  <div style={S.track}>
    <span style={S.trackNum}>{num}.</span>
    <div style={S.trackInfo}>
      <span style={S.trackTitle}>{title}</span>
      {' '}<span style={S.trackArtist}>{artist}</span>
    </div>
  </div>
);

export default function CdTracklist() {
  return (
    <div style={S.outer}>
      <div style={S.cdCase}>
        {/* Inside cover */}
        <div style={S.insert}>
          <div style={S.insertTitle}>Songs for Cities<br/>That Don't Exist Yet</div>
          <div style={S.handwritten}>Summer - 2005</div>
          <div style={S.handwritten}>Don't shuffle. It only makes sense this way.</div>
          <div style={S.handwritten}>If you find this, it was meant for you.</div>
        </div>

        {/* Track listing */}
        <div style={S.trackList}>
          <Track num="1" title="Flim" artist="Aphex Twin" />
          <Track num="2" title="Svefn-g-englar" artist="Sigur R&oacute;s" />
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
          <Track num="17" title="All Is Full of Love" artist="Bj&ouml;rk" />
          <Track num="18" title="From the Morning" artist="Nick Drake" />
        </div>

        {/* Back of case */}
        <div style={S.backCover}>
          <div style={S.scrawl}>You can't fast-forward real life. I tried.</div>
        </div>
      </div>

      {/* Corvids Annotation */}
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotation</div>
        <p style={S.note}>The tracklist appears to be divided into three movements, separated by blank spaces on the original insert. The first eight tracks trend toward atmospheric introspection. The middle six shift between urgency and disorientation. The final four descend into dissolution and, possibly, acceptance. Full song details are available in the appendix.</p>
      </div>
    </div>
  );
}
