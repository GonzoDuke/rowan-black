import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  headnoteLabel: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em',
    textTransform: 'uppercase', marginBottom: '10px',
  },
  headnote: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
    lineHeight: 1.75, color: '#5a6070', marginBottom: '32px',
    paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  panelLabel: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    color: '#9099a8', letterSpacing: '0.06em', textTransform: 'uppercase',
    marginBottom: '14px', marginTop: '28px',
  },
  title: {
    fontFamily: "'Nothing You Could Do', cursive", fontSize: '28px',
    color: '#1a1d24', lineHeight: 1.2, marginBottom: '16px',
    textAlign: 'center',
  },
  inscription: {
    fontFamily: "'Nothing You Could Do', cursive", fontSize: '22px',
    color: '#5a6070', lineHeight: 1.4, textAlign: 'center',
    marginBottom: '6px',
  },
  inscriptionBlock: {
    marginBottom: '20px', paddingBottom: '16px',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  track: {
    display: 'flex', gap: '8px', padding: '3px 0', alignItems: 'baseline',
  },
  trackNum: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
    color: '#9099a8', width: '24px', textAlign: 'right', flexShrink: 0,
  },
  trackTitle: {
    fontFamily: "'Nothing You Could Do', cursive", fontSize: '22px',
    color: '#1a1d24',
  },
  trackArtist: {
    fontFamily: "'Nothing You Could Do', cursive", fontSize: '20px',
    color: '#5a6070',
  },
  divider: {
    height: '1px', background: 'rgba(0,0,0,0.06)',
    margin: '24px 0',
  },
  scrawl: {
    fontFamily: "'Nothing You Could Do', cursive", fontSize: '22px',
    color: '#5a6070', textAlign: 'center',
    marginTop: '24px', fontStyle: 'italic',
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
  return (
    <div style={S.outer}>
      <div style={S.headnoteLabel}>Digitized Object</div>
      <div style={S.headnote}>
        Insert recovered from a copy of Slaughterhouse-Five in the Princeton Public Library. The original has been laminated for preservation and is held in the Collective's physical archive. Transcription preserves original layout and handwriting as closely as possible.
      </div>

      <div style={S.panelLabel}>Front panel</div>

      <div style={S.title}>Songs for Cities<br />That Don't Exist Yet</div>

      <div style={S.inscriptionBlock}>
        <div style={S.inscription}>Summer - 2005</div>
        <div style={S.inscription}>Don't shuffle. It only makes sense this way.</div>
        <div style={S.inscription}>If you find this, it was meant for you.</div>
      </div>

      <Track num="1" title="Flim" artist="Aphex Twin" />
      <Track num="2" title="Svefn-g-englar" artist="Sigur Rós" />
      <Track num="3" title="This Place Is a Prison" artist="The Postal Service" />
      <Track num="4" title="Teardrop" artist="Massive Attack" />
      <Track num="5" title="Something About Us" artist="Daft Punk" />
      <Track num="6" title="Eye in the Sky" artist="The Alan Parsons Project" />
      <Track num="7" title="3 Libras" artist="A Perfect Circle" />
      <Track num="8" title="Maps" artist="Yeah Yeah Yeahs" />

      <div style={S.divider} />
      <div style={S.panelLabel}>Inside panel</div>

      <Track num="9" title="Somebody That I Used to Know" artist="Elliott Smith" />
      <Track num="10" title="Float On" artist="Modest Mouse" />
      <Track num="11" title="B.O.B." artist="OutKast" />
      <Track num="12" title="Aerials" artist="System of a Down" />
      <Track num="13" title="Roads" artist="Portishead" />
      <Track num="14" title="Munich" artist="Editors" />

      <div style={{ height: '12px' }} />

      <Track num="15" title="The Day the World Went Away" artist="Nine Inch Nails" />
      <Track num="16" title="How to Disappear Completely" artist="Radiohead" />
      <Track num="17" title="All Is Full of Love" artist="Björk" />
      <Track num="18" title="From the Morning" artist="Nick Drake" />

      <div style={S.scrawl}>
        You can't fast-forward real life. I tried.
      </div>
    </div>
  );
}
