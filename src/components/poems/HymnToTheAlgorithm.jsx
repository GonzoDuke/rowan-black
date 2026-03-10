import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  paren: { color: '#7a8090' },
  mono: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: '#5a6070' },
  indent: { paddingLeft: '24px' },
  loud: { fontWeight: 600, letterSpacing: '0.02em' },
  code: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: '#1a1d24' },
  bullet: { paddingLeft: '20px', display: 'block', fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: '#5a6070' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const P = ({ children }) => <span style={S.paren}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;
const M = ({ children }) => <span style={S.mono}>{children}</span>;

export default function HymnToTheAlgorithm() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}>
          <L><M>Input. Process. Output.</M></L>
          <L>You wake, sync, connect.</L>
          <L>The morning sequence runs</L>
          <L>like code we didn't write:</L>
          <L><M>Coffee black (no sugar),</M></L>
          <L><M>Breakfast skipped (hunger as feature),</M></L>
          <L><M>Commute (37 minutes, optimized).</M></L>
        </div>
        <div style={S.stanza}>
          <L>The city hums in electric veins,</L>
          <L>each Muni car a capsule of waiting,</L>
          <L>each rider:</L>
          <L style={S.indent}>a data point</L>
          <L style={S.indent}>a profile</L>
          <L style={S.indent}>a possible startup founder</L>
          <L style={S.indent}>a target demographic.</L>
        </div>
        <div style={S.stanza}>
          <L><M>Tick-tick-tick-tick-tick…</M></L>
          <L>The system counts you in.</L>
        </div>
        <div style={S.stanza}>
          <L>We are the children of screens,</L>
          <L>eating ramen in shared apartments,</L>
          <L>praying to Y Combinator<Sup n="1" />.</L>
          <L>We bow before the Algorithm,</L>
          <L>angel investor of moments,</L>
          <L>venture capitalist of souls.</L>
          <L>It watches our metrics</L>
          <L>through PRISM's glass<Sup n="2" />,</L>
          <L>unseen. unfailing.</L>
          <L><P>(Snowden warned us,</P></L>
          <L><P>but we're still logging in.)</P></L>
        </div>
        <div style={S.stanza}>
          <L>Blessed be the notification.</L>
          <L>Sacred be the five-star review.</L>
          <L>We sing:</L>
          <L>Available now, forever now,</L>
          <L>writing psalms in acceptance rates</L>
          <L>while Zuckerberg's empire</L>
          <L>grows fat on our confessions.</L>
        </div>
        <div style={S.stanza}>
          <L>Midday:</L>
          <L>Lunch: thirty minutes in an artisanal coffee shop.</L>
          <L>The menu offers:</L>
          <L><M>A. Synthetic purpose ($6.75)</M></L>
          <L><M>B. Artificial joy (locally sourced)</M></L>
          <L><M>C. Processed calm (free-range)</M></L>
          <L>You choose D: None of the above.</L>
          <L>The ache in your stomach feels</L>
          <L>more honest than the ache</L>
          <L>in your gentrified soul.</L>
        </div>
        <div style={S.stanza}>
          <L>Afternoon demands optimization.</L>
          <L>Streamline. Synergize. Monetize.</L>
          <L><P>(Did you hear Instagram sold?</P></L>
          <L><P>A billion for our filtered lives<Sup n="3" />.)</P></L>
          <L>You are:</L>
          <L style={S.indent}>a node in the network</L>
          <L style={S.indent}>a cog in the wheel</L>
          <L style={S.indent}>a startup about to pivot</L>
          <L><M>Input. Process. Output.</M></L>
        </div>
        <div style={S.stanza}>
          <L>But somewhere in the monotony,</L>
          <L>between Mission and Market<Sup n="4" />,</L>
          <L>a glitch:</L>
          <L>Seven years old,</L>
          <L>grass underfoot,</L>
          <L>skinned knees,</L>
          <L>life before timelines.</L>
          <L>The memory rises unbidden,</L>
          <L>analog in a digital world.</L>
          <L>Then it's gone.</L>
          <L>Suppressed.</L>
          <L>Forgotten.</L>
          <L>Uploaded.</L>
        </div>
        <div style={S.stanza}>
          <L>We gather in open-plan offices,</L>
          <L>the new churches of SOMA<Sup n="5" />.</L>
          <L>We offer our privacy to the cloud,</L>
          <L>the omniscient server.</L>
          <L>Lord, hear our ping.</L>
          <L><M>Your free trial has expired.</M></L>
          <L><M>Please upgrade to continue.</M></L>
        </div>
        <div style={S.stanza}>
          <L>Five minutes of sacred rest</L>
          <L>between agile scrums.</L>
          <L>We glimpse each other in passing:</L>
          <L>Fellow disruptors.</L>
          <L>Shadows in LCD light.</L>
          <L>All wearing the same startup shirt.</L>
          <L>All pitching the same dream.</L>
        </div>
        <div style={S.stanza}>
          <L>At the hour of rebellion,</L>
          <L>in your hot desk corner</L>
          <L>of a WeWork cathedral,</L>
          <L>you pause, MacBook humming:</L>
          <L>"I AM NOT A DATAPOINT,"</L>
          <L>you type.</L>
          <L><M>Command-S. Command-S. Command-S.</M></L>
        </div>
        <div style={S.stanza}>
          <L>Until the words become a loop,</L>
          <L>until meaning breaks like bad code:</L>
          <L><M>I_AM_NOT_A_DATAPOINT</M></L>
          <L><M>IAM_NOT_ADATAPOINT</M></L>
          <L><M>IAMNOTADATAPOINT</M></L>
          <L><M>NULL_AND_VOID</M><Sup n="6" /></L>
        </div>
        <div style={S.stanza}>
          <L>Night falls.</L>
          <L>You stand before BART<Sup n="7" /> windows,</L>
          <L>watching trains pulse like packets</L>
          <L>through the city's tired veins.</L>
          <L>Moths spiral around LED signs</L>
          <L>advertising freedom in monthly payments.</L>
        </div>
        <div style={S.stanza}>
          <L>For one glorious moment,</L>
          <L>you log out.</L>
          <L>Delete cookies. Clear history.</L>
          <L>Human.</L>
        </div>
        <div style={S.stanza}>
          <L>But morning comes, glowing with silicon.</L>
          <L>The push notification calls.</L>
          <L>You swipe right once more.</L>
          <L>Sprint planning to attend.</L>
          <L>Stand-ups to complete.</L>
          <L>Your rebellion: a bug to be patched.</L>
        </div>
        <div style={S.stanza}>
          <L>And yet…</L>
          <L>a memory persists.</L>
          <L>We who are always online,</L>
          <L>we who are ever connected,</L>
          <L>carry this cache:</L>
          <L>a longing for static,</L>
          <L>for untracked footsteps,</L>
          <L>for unlogged moments.</L>
        </div>
        <div style={S.stanza}>
          <L><M>Final Commit:</M></L>
          <span style={S.bullet}>● Sprint velocity: immeasurable</span>
          <span style={S.bullet}>● Disruption: pending</span>
          <span style={S.bullet}>● Humanity: deprecated but running</span>
          <span style={S.bullet}>● Status: 404_SOUL_NOT_FOUND</span>
        </div>
        <div style={S.stanza}>
          <L>We push to production again,</L>
          <L>but now, beneath the tick-tick-tick,</L>
          <L>a human heartbeat rises,</L>
          <L>a song the Algorithm can't index.</L>
        </div>
        <div style={S.stanza}>
          <L>World without end.</L>
          <L><M>Git commit -m "still alive"</M></L>
          <L>Amen.</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> A Silicon Valley startup accelerator known for funding and launching major tech companies, including Dropbox, Airbnb, and Reddit.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A classified NSA surveillance program revealed by whistleblower Edward Snowden in 2013 that allowed the U.S. government to collect data from major tech companies.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> Facebook acquired Instagram for $1 billion in 2012.</p>
        <p style={S.note}><span style={S.noteNum}>4</span> Mission Street and Market Street are major roads in San Francisco.</p>
        <p style={S.note}><span style={S.noteNum}>5</span> South of Market (SOMA) is a district in San Francisco known for its concentration of tech offices and coworking spaces.</p>
        <p style={S.note}><span style={S.noteNum}>6</span> In programming, NULL represents an absence of value, and "null and void" is a legal phrase denoting something as invalid.</p>
        <p style={S.note}><span style={S.noteNum}>7</span> Bay Area Rapid Transit, a metro-area commuter rail service.</p>
      </div>
    </div>
  );
}
