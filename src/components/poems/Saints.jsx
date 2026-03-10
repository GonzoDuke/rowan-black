import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: '40px 36px 60px' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  subtitle: { display: 'block', fontStyle: 'italic', color: '#5a6070', marginBottom: '24px', fontSize: '15px' },
  partHead: { display: 'block', fontWeight: 600, letterSpacing: '0.03em', marginBottom: '8px', fontSize: '14px', color: '#1a1d24', fontFamily: "'IBM Plex Mono', monospace" },
  paren: { color: '#7a8090' },
  bullet: { paddingLeft: '20px', display: 'block' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  hashmarks: { display: 'block', letterSpacing: '0.15em', color: '#5a6070', marginBottom: '8px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const P = ({ children }) => <span style={S.paren}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function Saints() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.subtitle}>(documented under fluorescent prophecies)</span>

        <div style={S.stanza}>
          <span style={S.partHead}>PART_01: THE CONGREGATION</span>
          <L>we drove circles through dead streets—</L>
          <L>half-asleep</L>
          <L>half-screaming</L>
          <L>half something else</L>
          <L><P>(never could get the math right</P></L>
          <L><P>never needed to)</P></L>
        </div>

        <div style={S.stanza}>
          <span style={S.partHead}>PART_02: WORSHIP</span>
          <L>every night: new sermons delivered from:</L>
          <L style={S.bullet}>car windows into empty air</L>
          <L style={S.bullet}>basement corners to broken ceiling tiles</L>
          <L style={S.bullet}>parking lot prayers to chain-link congregation<Sup n="1" /></L>
        </div>
        <div style={S.stanza}>
          <L>confessions muttered into:</L>
          <L>shirt sleeves</L>
          <L>steering wheels</L>
          <L>midnight air</L>
          <L>nowhere in particular</L>
          <L><P>(no one listening)</P></L>
          <L><P>(no one needed to)</P></L>
        </div>

        <div style={S.stanza}>
          <span style={S.partHead}>PART_03: SANCTIFICATION</span>
          <L>we made ourselves holy through:</L>
          <L>speed & noise & nothingness</L>
          <L>blessed by:</L>
          <L>streetlights & cigarette smoke &</L>
          <L>the desperate need to be</L>
          <L>something more than suburban decay</L>
        </div>

        <div style={S.stanza}>
          <span style={S.partHead}>PART_04: HAUNTING</span>
          <L>theory: we were already ghosts</L>
          <L>before we knew what that meant</L>
          <L>proof: the way light passed through us</L>
          <L>how nothing felt real past 2AM</L>
          <L>the empty spaces we left behind</L>
        </div>

        <div style={S.stanza}>
          <span style={S.partHead}>PART_05: REMEMBRANCE</span>
          <L>I see us sometimes through:</L>
          <L>summer haze</L>
          <L>memory</L>
          <L>darkness</L>
          <L>burning too bright for</L>
          <L>a town that never learned</L>
          <L>how to shine</L>
        </div>

        <div style={S.stanza}>
          <span style={S.hashmarks}>#######</span>
          <L><P>(they tell me these mark sacred things now</P></L>
          <L><P>like modern day crosses</P></L>
          <L><P>so here: seven of them</P></L>
          <L><P>one for each deadly sin</P></L>
          <L><P>we made holy)</P></L>
        </div>
      </div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> The imagery of a congregation suggests that parking lots and abandoned places became makeshift sanctuaries for Black and his peers. This echoes themes of misplaced spirituality, as seen in Iron Confessional: A Triptych (2009) and Slouching Toward Allentown (2017) among other works.</p>
      </div>
    </div>
  );
}
