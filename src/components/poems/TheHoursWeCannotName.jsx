import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: '40px 36px 60px' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  monthHead: { display: 'block', fontWeight: 600, letterSpacing: '0.06em', fontSize: '15px', marginBottom: '8px', marginTop: '32px', color: '#1a1d24', fontFamily: "'IBM Plex Mono', monospace" },
  redacted: { display: 'inline-block', background: '#1a1d24', borderRadius: '2px', height: '14px', margin: '0 3px', verticalAlign: 'middle' },
  code: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: '#5a6070' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const R = ({ width }) => <span style={{ ...S.redacted, width: width + 'px' }}>&nbsp;</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function TheHoursWeCannotName() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.monthHead}>MARCH</span>
        <div style={S.stanza}><L>Time splits into before and after</L><L>like cells dividing—</L><L>uncontrolled growth</L><L>of absence.</L></div>
        <div style={S.stanza}><L>In the space between heartbeats,</L><L>the world <R width={80} /></L><L><R width={80} /></L><L><R width={80} /></L><L>until nothing remains</L><L>but the sound of breathing,</L><L>carefully measured</L><L>six feet apart<Sup n="1" />.</L></div>

        <span style={S.monthHead}>APRIL</span>
        <div style={S.stanza}><L>The sky empties itself of planes.</L><L>Birds reclaim old territories,</L><L>their songs sharp as prophecy</L><L>in the new quiet.</L></div>
        <div style={S.stanza}><L>We count backwards from exposure:</L><L>fourteen days of maybe</L><L>fourteen days of what if</L><L>fourteen days of holding our breath<Sup n="2" /></L><L>until numbers lose meaning,</L><L>become pure abstraction,</L><L>like trying to comprehend</L><L>the space between stars.</L></div>

        <span style={S.monthHead}>MAY</span>
        <div style={S.stanza}><L>Spring arrives without witnesses.</L><L>Flowers bloom for security cameras.</L><L>Trees shed their pollen</L><L>on parked cars that forgot</L><L>how to migrate.</L></div>
        <div style={S.stanza}><L>In the spaces where people should be,</L><L>light pools like mercury—</L><L>toxic and beautiful</L><L>and impossible to hold.</L></div>

        <span style={S.monthHead}>JUNE / JULY / AUGUST</span>
        <div style={S.stanza}><L>Summer stretches elastic,</L><L>each day a mirror</L><L>of the day before:</L></div>
        <div style={S.stanza}><L>Dawn: Count the living</L><L>Noon: Count the dead</L><L>Dusk: Count the spaces</L><L>between each breath</L><L>Night: Count the hours</L><L>until we can stop</L><L>counting</L></div>
        <div style={S.stanza}><L>The heat ripples like fever</L><L>across empty playgrounds,</L><L>across boarded windows,</L><L>across faces half-hidden,</L><L>learning new ways to smile</L><L>with just our eyes.</L></div>

        <span style={S.monthHead}>SEPTEMBER</span>
        <div style={S.stanza}><L>Children return to screens,</L><L>their laughter compressed</L><L>into pixels, their futures</L><L><R width={80} /> by unstable</L><L>connections.</L></div>
        <div style={S.stanza}><L>We measure distance now</L><L>in bandwidth and buffer,</L><L>in the lag between</L><L>question and answer,</L><L>between reaching and touching,</L><L>between being and becoming.</L></div>

        <span style={S.monthHead}>OCTOBER</span>
        <div style={S.stanza}><L>The masks become chrysalides—</L><L>what will we be</L><L>when we finally emerge?</L><L>Who will recognize us</L><L>after so much transformation?</L></div>
        <div style={S.stanza}><L>The streetlights still change</L><L>for nonexistent traffic,</L><L>faithful as prayers</L><L>in abandoned churches.</L></div>

        <span style={S.monthHead}>NOVEMBER</span>
        <div style={S.stanza}><L>Memory comes in waves:</L><L>remember restaurants?</L><L>remember theaters?</L><L>remember touch?</L><L>Each one a stone dropped</L><L>into the dark well</L><L>of isolation,</L><L>ripples spreading outward</L><L>until they meet their own</L><L>reflection, interference patterns</L><L>of loss and longing.</L></div>

        <span style={S.monthHead}>DECEMBER</span>
        <div style={S.stanza}><L>Night arrives earlier now,</L><L>as if darkness too</L><L>has learned to quarantine.</L><L>In empty office buildings,</L><L>motion sensors still flip</L><L>lights on and off,</L><L>searching for bodies</L><L>that aren't there.</L></div>
        <div style={S.stanza}><L>We hang our hopes</L><L>on small numbers:</L><L>positivity rates,</L><L>ICU beds,</L><L>vaccine trials,</L><L>days until next year.</L></div>

        <span style={S.monthHead}>JANUARY</span>
        <div style={S.stanza}><L>The new year arrives</L><L>not with a bang</L><L>but with a buffer:</L><L><span style={S.code}>loading…</span></L><L><span style={S.code}>loading…</span></L><L><span style={S.code}>loading…</span></L></div>
        <div style={S.stanza}><L>Time refuses its old</L><L>linear habits, loops back</L><L>on itself like code</L><L>stuck in recursion:</L><L><span style={S.code}>{'if (pandemic) {'}</span></L><L><span style={S.code}>&nbsp;&nbsp;return to_start;</span></L><L><span style={S.code}>{'} else {'}</span></L><L><span style={S.code}>&nbsp;&nbsp;<R width={80} /></span></L><L><span style={S.code}>{'}'}</span></L></div>

        <span style={S.monthHead}>FEBRUARY</span>
        <div style={S.stanza}><L>Hope comes in small vials<Sup n="3" />,</L><L>precious as starlight,</L><L>fragile as trust.</L><L>But still the numbers climb:</L><L>variants multiplying</L><L>like anxiety dreams,</L><L>like conspiracy theories,</L><L>like doubt.</L></div>
        <div style={S.stanza}><L>We measure progress</L><L>in percentages,</L><L>in phases and tiers,</L><L>in the slow return</L><L>of background noise.</L></div>

        <span style={S.monthHead}>MARCH (AGAIN)</span>
        <div style={S.stanza}><L>A year circles back</L><L>to swallow its own tail.</L><L>What were we</L><L>before this began?</L><L>What are we now,</L><L>after so much subtraction?</L></div>
        <div style={S.stanza}><L>Some of us still dream</L><L>in mute buttons,</L><L>in bandwidth warnings,</L><L>in connection lost.</L></div>
        <div style={S.stanza}><L>Some of us carry</L><L>invisible ledgers:</L><L>the missing</L><L>the gone</L><L>the never-again</L></div>
        <div style={S.stanza}><L>Some of us emerge</L><L>blinking into light</L><L>that feels different—</L><L>or maybe we're different,</L><L>our eyes adapted</L><L>to seeing through screens,</L><L>through masks,</L><L>through distance.</L></div>
        <div style={S.stanza}><L>Time starts moving again,</L><L>but not like before—</L><L>more like water</L><L>finding new channels</L><L>after a flood,</L><L>more like healing</L><L>around shrapnel,</L><L>more like learning</L><L>to breathe</L><L>through scarred tissue.</L></div>
        <div style={S.stanza}><L>We step forward</L><L>into whatever comes next,</L><L>carrying our ghosts</L><L>like open browsers,</L><L>like background processes,</L><L>like muscle memory</L><L>of fear.</L></div>
        <div style={S.stanza}><L>Tell me:</L><L>how do you measure</L><L>the distance between</L><L>who we were</L><L>and who we had to become?</L></div>
        <div style={S.stanza}><L>How do you calculate</L><L>the half-life of normal?</L><L>How long until</L><L>we stop flinching</L><L>at closeness?</L></div>
        <div style={S.stanza}><L>The calendar says</L><L>we can begin again,</L><L>but time has learned</L><L>new mathematics,</L><L>new geometries</L><L>of loss and survival.</L></div>
        <div style={S.stanza}><L>We carry our dates</L><L>like coordinates</L><L>on a map</L><L>to a place</L><L>we can't return to:</L><L><R width={80} /></L><L><R width={80} /></L><L><R width={80} /></L><L><R width={80} /></L></div>
        <div style={S.stanza}><L>until all that remains</L><L>is the space</L><L>between then</L><L>and now,</L><L>vast as quarantine,</L><L>deep as memory,</L><L>quiet</L><L>as an empty city</L><L>at dawn.</L></div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> The standard norm for social distancing guidelines during COVID-19.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> The initial standard quarantine period for potential COVID exposure.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> On February 1, 2021, several U.S. states expanded vaccine eligibility to essential workers and people over 65.</p>
      </div>
    </div>
  );
}
