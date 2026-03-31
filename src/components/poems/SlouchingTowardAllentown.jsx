import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  paren: { color: '#7a8090' },
  bullet: { paddingLeft: '20px', display: 'block' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function SlouchingTowardAllentown() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}><L>The highway stretches long and mean,</L><L>spooled out like old cassette tape,</L><L>cracked and unraveling, a recording of a country</L><L>that once believed itself permanent.</L></div>
        <div style={S.stanza}><L>The billboards have nothing left to sell but ghosts:</L><L>half-peeled ads for malls that don't exist,</L><L>smiling families in colors the sun has leeched hollow,</L><L>a phone number for salvation that no longer connects.</L></div>
        <div style={S.stanza}><L>The exit sign approaches slow as an afterthought.</L><L>Gas. Food. Jesus.</L><L>Milemarker 55.90.</L></div>
        <div style={S.stanza}><L>The sign for the rest stop says Allentown.</L><L>It's not, really.</L><L>It's in that gray liminal zone where the map stops caring—</L><L>Wescosville? Cetronia<Sup n="1" />?</L><L>Maybe both. Maybe neither.</L></div>
        <div style={S.stanza}><L>I check my phone—</L><L>3:17 AM, October 2017.</L><L>The battery's at 11%.</L></div>
        <div style={S.stanza}><L>I pull off, the asphalt shifting beneath me,</L><L>the roadwork signs long abandoned,</L><L>cones scattered like loose teeth.</L><L>The overpass above is thick with weeds,</L><L>roots breaking concrete, proof that even</L><L>the American Dream can be reclaimed</L><L>by something older, hungrier.</L></div>
        <div style={S.stanza}><L>Then, the glow—</L><L>fluorescent, sodium vapor, buzzing.</L><L>The rest stop rises from the dark,</L><L>a lonely island in a sea of broken things,</L><L>half oasis, half mausoleum.</L><L>Behind it, the last gasps of a steel town,</L><L>the factories stilled, their windows blind,</L><L>their skeletons rusting under a sky</L><L>too big to give a damn.</L></div>
        <div style={S.stanza}><L>Inside, the hum of a refrigeration unit fills the air,</L><L>a low, steady drone, the sound of something</L><L>waiting to fail. The coffee station</L><L>is a shrine of burnt offerings,</L><L>yesterday's drip thick as motor oil.</L></div>
        <div style={S.stanza}><L>And they are here.</L><L>Of course they are.</L><L>They arrive in caravans,</L><L>their trucks wrapped in flags,</L><L>like bandages on a body too ruined to heal.</L><L>Somewhere, a man in a golden tower<Sup n="2" /></L><L>counts the offering plate.</L></div>
        <div style={S.stanza}><L>The gas station hums beneath fluorescent haloes,</L><L>a holy stop on the pilgrimage between</L><L>Fox News and foreclosure.</L><L>Diesel pumps work overtime,</L><L>long past when the grid was supposed to fail.</L></div>
        <div style={S.stanza}><L>A screen above the register flickers—</L><L>muted news loops through cracked subtitles:</L><L>—The deal was bad. We made it great.</L><L>—FBI traitor removed. America safe again.</L><L>—Historic profits for the faithful.</L><L>—more after the break—</L></div>
        <div style={S.stanza}><L>The cashier keeps a list of their revelations,</L><L>each bullet point a prophecy delivered</L><L>between Marlboro purchases and scratch-off prayers:</L><L style={S.bullet}>● How the deep state hides in microwave ovens.</L><L style={S.bullet}>● Why JFK Jr. is living in a truck stop bathroom.</L><L style={S.bullet}>● The secret messages coded in Big Pharma receipts.</L><L style={S.bullet}>● What's really in the tax bill they cheered for.</L><L style={S.bullet}>● Which saints own condos in Dubai.</L><L style={S.bullet}>● Why no one gets rich selling the gospel—</L><L style={S.bullet}>unless they own the church.</L></div>
        <div style={S.stanza}><L>They sip burnt coffee, faces blue-lit</L><L>by the scripture of their phones,</L><L>reading verses in comment sections</L><L>where their prophets type in all caps.</L><L>Their communion is processed sugar,</L><L>their catechism, a livestream.</L></div>
        <div style={S.stanza}><L>And I watch them—</L><L>not with contempt,</L><L>but with the quiet horror of knowing</L><L>they were born into a rigged game,</L><L>told by men who never prayed</L><L>that God only helps those who help themselves.</L></div>
        <div style={S.stanza}><L>Their leader threw paper towels</L><L>at the starving and called it a blessing.</L><L>Their bishops hoard fortunes in blind trusts</L><L>while preaching sacrifice.</L><L>Their kingdom of heaven</L><L>comes with an IPO and a monthly fee.</L></div>
        <div style={S.stanza}><L>Lisa, the cashier, drops my change</L><L>onto the counter like an offering.</L><L>I ask if she thinks they believe it all.</L><L>She exhales, slow: "They believe it enough to be afraid."</L></div>
        <div style={S.stanza}><L>Outside, the taillights burn red as revelation,</L><L>glowing on roads paved with borrowed time.</L><L>They disappear into the night, still tithing</L><L>to men who drink from golden chalices.</L><L>And somewhere, a man in a golden tower laughs,</L><L>as the faithful keep the engines running.</L></div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Unincorporated communities outside Allentown, Pennsylvania, existing in the ambiguous space between city and rural decay.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Donald Trump.</p>
      </div>
    </div>
  );
}
