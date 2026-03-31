import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  sectionHead: { display: 'block', fontWeight: 600, letterSpacing: '0.03em', marginBottom: '8px', fontSize: '15px', color: '#1a1d24' },
  paren: { color: '#7a8090' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const P = ({ children }) => <span style={S.paren}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;
const Head = ({ children }) => <span style={S.sectionHead}>{children}</span>;

export default function FieldNotes() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}>
          <Head>OBSERVATION SET ONE: FRAGILE STATES</Head>
          <L>mind like late-night radio waves:</L>
          <L>picking up signals it shouldn't</L>
          <L>catching fragments of truth</L>
          <L>translating static into prophecy</L>
          <L>and so: existing</L>
          <L>knowing</L>
          <L>always knowing</L>
          <L><P>(the curse of permanent awareness)</P><Sup n="1" /></L>
        </div>
        <div style={S.stanza}>
          <L>used to believe in temporary fixes:</L>
          <L>sleep between frequencies</L>
          <L>dreams in dead spaces</L>
          <L>chemical alterations of consciousness</L>
          <L>but even oblivion expires</L>
          <L>no other solutions found</L>
          <L>between empty bottles and</L>
          <L>emptier prayers</L>
          <L><P>(file under: stories that haunt)</P></L>
        </div>
        <div style={S.stanza}>
          <Head>OBSERVATION SET TWO: GHOST FREQUENCIES</Head>
          <L>time passes through:</L>
          <L>empty rooms</L>
          <L>vacant lots</L>
          <L>dead malls<Sup n="2" /></L>
          <L>spaces between streetlights</L>
          <L>where memory fails</L>
          <L>but guilt persists</L>
        </div>
        <div style={S.stanza}>
          <L><P>(thought it was harmless)</P></L>
          <L><P>(nothing ever is)</P></L>
        </div>
        <div style={S.stanza}>
          <L>echoes bounce between:</L>
          <L>moments I half-remember</L>
          <L>places I never fully inhabited</L>
          <L>happiness viewed through</L>
          <L>rain-streaked windows at midnight</L>
          <L>while signals fade to nothing</L>
        </div>
        <div style={S.stanza}>
          <Head>OBSERVATION SET THREE: LIMINAL STATES</Head>
          <L>when normalcy feels like science fiction</L>
          <L>and mediocrity feels like salvation</L>
          <L>something always breaks through—</L>
          <L>ruins the careful architecture of coping</L>
        </div>
        <div style={S.stanza}>
          <L>two years of:</L>
          <L>blank spaces</L>
          <L>white noise</L>
          <L>dead air</L>
          <L>failed transmissions</L>
        </div>
        <div style={S.stanza}>
          <L>back in the same empty parking lot</L>
          <L>where freedom meant:</L>
          <L>chemical forgetting</L>
          <L>borrowed oblivion</L>
          <L>temporary grace</L>
          <L><P>(nothing lasted)</P></L>
          <L><P>(nothing ever does)</P></L>
        </div>
        <div style={S.stanza}>
          <Head>OBSERVATION SET FOUR: LOST STATIONS</Head>
          <L>what remains when everything circles back?</L>
          <L>pulling meaning from:</L>
          <L>empty air</L>
          <L>dead frequencies</L>
          <L>static between stations</L>
          <L>midnight confessions</L>
          <L>to disconnected payphones<Sup n="3" /></L>
        </div>
        <div style={S.stanza}>
          <L>no profound revelations here</L>
          <L>just the same thoughts</L>
          <L>cycling through</L>
          <L>until even certainty</L>
          <L>starts to fade</L>
        </div>
        <div style={S.stanza}>
          <L>watching from above:</L>
          <L>past bleeds into present</L>
          <L>future dissolves into static</L>
          <L>time loses meaning</L>
          <L>in the spaces between</L>
          <L>what was</L>
          <L>what is</L>
          <L>what never will be</L>
        </div>
        <div style={S.stanza}>
          <Head>OBSERVATION SET FIVE: DECAY PATTERNS</Head>
          <L>mapping the geography of loss:</L>
          <L>each missed connection</L>
          <L>each failed attempt</L>
          <L>each moment of almost</L>
          <L>creates new topographies of regret</L>
        </div>
        <div style={S.stanza}>
          <L>standing at intersections where:</L>
          <L>light meets dark</L>
          <L>noise meets silence</L>
          <L>memory meets forgetting</L>
          <L><P>(Frost would probably have opinions)</P></L>
          <L><P>(Frost can fuck off)</P></L>
        </div>
        <div style={S.stanza}>
          <L>immobilized by:</L>
          <L>fear wrapped in static</L>
          <L>rage dressed as silence</L>
          <L>jealousy masked as indifference</L>
        </div>
        <div style={S.stanza}>
          <L>while overhead:</L>
          <L>stars fade</L>
          <L>signals die</L>
          <L>time passes</L>
          <L>nothing changes</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Refers to an overactive mind, a common theme in Black's work. Similar phrasing appears in The Hours We Cannot Name (2021).</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A term for abandoned or declining shopping malls, particularly in the U.S. due to the rise of ecommerce. The decline of malls is a recurring image in Black's work, appearing in The Cartography of Losing Ourselves (2011).</p>
        <p style={S.note}><span style={S.noteNum}>3</span> By the early 2000s, payphones were rapidly disappearing due to the prevalence of cell phones.</p>
      </div>
    </div>
  );
}
