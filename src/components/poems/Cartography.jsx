import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: '40px 36px 60px' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  spaced: { letterSpacing: '0.4em' },
  bracket: { color: '#7a8090' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  vertLine: { display: 'block', textAlign: 'center', lineHeight: 1.4 },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Br = ({ children }) => <span style={S.bracket}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function Cartography() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}>
          <L>We build our prisons pixel by pixel,</L>
          <L>each screen a glowing promise</L>
          <L>to be <span style={S.spaced}>everywhere</span>,</L>
          <L>showing us nothing real.</L>
        </div>
        <div style={S.stanza}>
          <L>Remember maps?</L>
          <L>Paper gods folded into glove compartments,</L>
          <L>their creases charting</L>
          <L>every road we might take.</L>
          <L>My father's atlas—still somewhere</L>
          <L>in an Ohio basement,</L>
          <L>pages marked with routes</L>
          <L>he planned but never drove.</L>
        </div>
        <div style={S.stanza}>
          <L>Sundays meant tracing highways</L>
          <L>to nowhere in particular,</L>
          <L>memorizing capitals</L>
          <L>and believing knowledge</L>
          <L>was something you could</L>
          <span style={S.vertLine}>h</span>
          <span style={S.vertLine}>o</span>
          <span style={S.vertLine}>l</span>
          <span style={S.vertLine}>d</span>
          <L><Sup n="1" /></L>
        </div>
        <div style={S.stanza}>
          <L>Now the world hums differently—</L>
          <L>a dial-up chorus of static and longing,</L>
          <L>handshakes between modems</L>
          <L>that speak in tongues of connection.</L>
          <L>The map on your desk</L>
          <L>fades beside a blinking cursor:</L>
          <L><Br>[ SEARCHING… ]</Br></L>
          <L><Br>[ LOADING… ]</Br></L>
          <L><Br>[ CONNECTION ESTABLISHED. ]</Br></L>
        </div>
        <div style={S.stanza}>
          <L>But every attempt at precision</L>
          <L>becomes another kind of lie.</L>
          <L>We measure distance in megabytes,</L>
          <L>forgetting the feel of miles</L>
          <L>beneath our feet.</L>
        </div>
        <div style={S.stanza}>
          <L>We've traded silence for signal,</L>
          <L>folded the analog sun into a screen</L>
          <L>we carry in our pockets,</L>
          <L>where AIM windows flash</L>
          <L>like neon prayers,</L>
          <L>and "away messages"</L>
          <L>stand in for presence.</L>
        </div>
        <div style={S.stanza}>
          <L>In coffee shops and food courts,</L>
          <L>we gather near power strips</L>
          <L>like modern pilgrims,</L>
          <L>plugging into</L>
          <L>a world we hope is waiting for us.</L>
          <L>Each "beep" of a Nokia</L>
          <L>or buzz of a pager</L>
          <L>is a lighthouse in the fog—</L>
          <L>a reminder that</L>
          <L>we're reachable but still drifting.</L>
        </div>
        <div style={S.stanza}>
          <L>I've started collecting blank pages,</L>
          <L>saving them like endangered species:</L>
          <L><Br>[]</Br></L>
          <L><Br>[]</Br></L>
          <L><Br>[]</Br></L>
          <L>^ These are the last wild places.</L>
        </div>
        <div style={S.stanza}>
          <L>In their absence, we expand:</L>
          <L>another photo shared</L>
          <L>in a camera phone's grainy memory,</L>
          <L>another moment reduced</L>
          <L>to 1.3 megapixels<Sup n="2" />.</L>
          <L>We trade touch for text,</L>
          <L>presence for pingbacks,</L>
          <L>quiet for the hum of processors.</L>
        </div>
        <div style={S.stanza}>
          <L>Remember silence?</L>
          <L>Not the absence of sound,</L>
          <L>but the presence of nothing</L>
          <L>demanding to be something?</L>
          <L>Now we fill every gap</L>
          <L>with notifications and ringtones,</L>
          <L>mistaking connection for communion.</L>
        </div>
        <div style={S.stanza}>
          <L>I lived there once—inside the screen.</L>
          <L>Built myself a home in forums and feeds,</L>
          <L>spent whole nights worshiping in the glow of a CRT temple.</L>
          <L>I spoke in usernames, measured worth in replies,</L>
          <L>thought a status update could hold a soul.</L>
        </div>
        <div style={S.stanza}>
          <L>I thought technology would save us.</L>
          <L>Believed in the prophets of Silicon Valley,</L>
          <L>in the gospel of fiber-optic redemption.</L>
          <L>They promised a map that would lead us to ourselves.</L>
          <L>But the map became the territory.</L>
          <L>The signal drowned the silence.</L>
          <L>And I learned too late—</L>
          <L>you can't navigate meaning with a blinking cursor.</L>
        </div>
        <div style={S.stanza}>
          <L>In corporate cubicles,</L>
          <L>prophets in polo shirts</L>
          <L>sell us salvation:</L>
          <L>better modems, faster processors,</L>
          <L>clearer screens.</L>
          <L>They promise us a map</L>
          <L>that will lead us</L>
          <L>to ourselves.</L>
        </div>
        <div style={S.stanza}>
          <L>I think about those maps</L>
          <L>that used to line gas station walls<Sup n="3" />,</L>
          <L>their folds forming constellations</L>
          <L>of possible journeys.</L>
        </div>
        <div style={S.stanza}>
          <L>Let the screens go dark.</L>
          <L>Let the modems fall silent.</L>
          <L>Let's refold the maps</L>
          <L>and trust the sun again.</L>
        </div>
        <div style={S.stanza}>
          <L>The real journey begins</L>
          <L>where the signal drops,</L>
          <L>where the path is written</L>
          <L>by footsteps, not code.</L>
        </div>
        <div style={S.stanza}>
          <L>Let's get lost.</L>
          <L>Let's make mistakes of navigation,</L>
          <L>trusting the compass</L>
          <L>of our bewildered hearts.</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Before the internet, information was accessed through tangible sources like books, maps, and encyclopedias.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Early mobile phone cameras had low resolution compared to modern standards. The first iPhone, released in 2007, had a 2-megapixel camera, while earlier phones had even lower resolutions.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> Before GPS, gas stations commonly sold and displayed road maps, which were essential for planning trips.</p>
      </div>
    </div>
  );
}
