import React from 'react';

const S = {
  container: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '48px 32px 80px',
  },
  poem: {
    fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
    fontSize: '13.5px',
    lineHeight: '1.8',
    color: '#d4d4dc',
    whiteSpace: 'pre-wrap',
  },
  stanza: {
    marginBottom: '28px',
  },
  line: {
    display: 'block',
  },
  indent: {
    paddingLeft: '24px',
  },
  loud: {
    fontWeight: 500,
    color: '#e8e8f0',
    letterSpacing: '0.04em',
  },
  paren: {
    color: 'rgba(200,200,208,0.45)',
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
  noteNumber: {
    fontStyle: 'normal',
    color: 'rgba(200,200,208,0.25)',
    fontSize: '10px',
    verticalAlign: 'super',
    marginRight: '4px',
  },
};

const Line = ({ children, style }) => (
  <span style={{ ...S.line, ...style }}>{children}</span>
);

const Loud = ({ children }) => (
  <span style={S.loud}>{children}</span>
);

const Paren = ({ children }) => (
  <span style={S.paren}>{children}</span>
);

const Sup = ({ n }) => (
  <span style={{ fontSize: '9px', color: 'rgba(200,200,208,0.3)', verticalAlign: 'super', marginLeft: '2px' }}>{n}</span>
);

export default function Towers() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        {/* Stanza 1 */}
        <div style={S.stanza}>
          <Line>mrs walker talking about algebra when</Line>
          <Line>jason kicks my chair & points at</Line>
          <Line>karen crying in the hallway holding</Line>
          <Line>a walkman radio<Sup n="1" /> to her ear</Line>
          <Line>something about a plane &</Line>
          <Line>new york &</Line>
          <Line>accident? &</Line>
          <Line>karen's cousin works in</Line>
        </div>

        {/* Stanza 2 */}
        <div style={S.stanza}>
          <Line>principal's voice</Line>
          <Line>crackling through speakers</Line>
          <Line>telling teachers to turn on TVs &</Line>
          <Line>suddenly math doesn't matter because</Line>
          <Line>sky is too blue on screen &</Line>
          <Line>smoke climbing like black snakes &</Line>
          <Line>newscaster's voice breaking like</Line>
          <Line>chalk when second plane hits &</Line>
        </div>

        {/* Stanza 3 */}
        <div style={S.stanza}>
          <Line><Paren>(not accident</Paren></Line>
          <Line><Paren>not accident)</Paren></Line>
        </div>

        {/* Stanza 4 */}
        <div style={S.stanza}>
          <Line><Loud>WHO DID THIS</Loud></Line>
          <Line><Loud>WHO DID</Loud></Line>
        </div>

        {/* Stanza 5 */}
        <div style={S.stanza}>
          <Line><Paren>(shut up shut up the tv won't</Paren></Line>
          <Line><Paren>shut up)</Paren></Line>
        </div>

        {/* Stanza 6 */}
        <div style={S.stanza}>
          <Line>watching it again & again &</Line>
          <Line>again &</Line>
          <Line>smoking tower</Line>
          <Line>smoking tower</Line>
          <Line>smoking</Line>
        </div>

        {/* Stanza 7 */}
        <div style={S.stanza}>
          <Line>plane disappears into building like magic</Line>
          <Line>but</Line>
          <Line>bad magic</Line>
          <Line>wrong magic</Line>
          <Line>black magic</Line>
        </div>

        {/* Stanza 8 */}
        <div style={S.stanza}>
          <Line>between classes everyone running to</Line>
          <Line>different rooms with TVs like maybe</Line>
          <Line>different channels will show</Line>
          <Line>different truth<Sup n="2" /></Line>
        </div>

        {/* Stanza 9 */}
        <div style={S.stanza}>
          <Line>jenny martinez puked in homeroom &</Line>
          <Line>mr collins just stared at the wall &</Line>
          <Line>someone laughed but then stopped &</Line>
        </div>

        {/* Stanza 10 */}
        <div style={S.stanza}>
          <Line><Loud>BREAKING NEWS</Loud></Line>
          <Line>everything is breaking</Line>
        </div>

        <div style={S.stanza}>
          <Line><Loud>BREAKING NEWS</Loud></Line>
        </div>

        <div style={S.stanza}>
          <Line style={{ textAlign: 'center', letterSpacing: '0.3em' }}><Loud>BREAKING</Loud></Line>
        </div>

        {/* Stanza 11 */}
        <div style={S.stanza}>
          <Line>mrs peterson calling our classroom</Line>
          <Line>voice shaking like</Line>
          <Line>earthquakes says</Line>
          <Line>pentagon hit</Line>
          <Line>pentagon hit &</Line>
          <Line>what's happening<Sup n="3" /></Line>
          <Line>what's</Line>
        </div>

        {/* Stanza 12 */}
        <div style={S.stanza}>
          <Line>second tower falling during history class<Sup n="4" /> &</Line>
        </div>

        <div style={S.stanza}>
          <Line><Loud>TIME</Loud></Line>
          <Line><Loud>SLOWS</Loud></Line>
          <Line style={{ textAlign: 'right' }}><Loud>DOWN</Loud></Line>
        </div>

        {/* Stanza 13 */}
        <div style={S.stanza}>
          <Line>people falling but don't look</Line>
          <Line style={S.indent}>don't</Line>
          <Line>look but I</Line>
          <Line>looked &</Line>
        </div>

        <div style={S.stanza}>
          <Line><Paren>(can't unwatched it now)</Paren></Line>
        </div>

        {/* Stanza 14 */}
        <div style={S.stanza}>
          <Line>dust clouds eating people on tv</Line>
          <Line>dust clouds eating buildings</Line>
          <Line>dust clouds eating new york &</Line>
          <Line>here in ohio the sky is so blue it hurts</Line>
        </div>

        {/* Stanza 15 */}
        <div style={S.stanza}>
          <Line>somewhere whispers about pennsylvania</Line>
          <Line>plane crash & plane crash & plane crash</Line>
          <Line>how many planes today</Line>
          <Line>how many</Line>
          <Line>are still up there</Line>
          <Line>still</Line>
        </div>

        {/* Stanza 16 */}
        <div style={S.stanza}>
          <Line>principal says stay calm but his voice</Line>
          <Line>sounds like</Line>
          <Line>static</Line>
          <Line>sounds like</Line>
          <Line>sirens sounds like everything breaking</Line>
        </div>

        <div style={S.stanza}>
          <Line><Loud>EVERYTHING IS BREAKING</Loud></Line>
        </div>

        {/* Stanza 17 */}
        <div style={S.stanza}>
          <Line>first tower won't stop burning &</Line>
          <Line>burning & burning &</Line>
          <Line>mrs walker crying now too &</Line>
          <Line>everything</Line>
          <Line>burning</Line>
        </div>

        {/* Stanza 18 */}
        <div style={S.stanza}>
          <Line>want to call mom but phones don't work</Line>
          <Line>circuits busy circuits busy</Line>
          <Line>everyone trying to reach</Line>
          <Line>someone</Line>
          <Line>somewhere</Line>
        </div>

        {/* Stanza 19 */}
        <div style={S.stanza}>
          <Line>counting seconds between</Line>
          <Line>heartbeats because numbers</Line>
          <Line>should still work should still</Line>
          <Line>mean something but</Line>
        </div>

        {/* Stanza 20 */}
        <div style={S.stanza}>
          <Line>snow in september but not snow</Line>
          <Line>ash papers fragments falling</Line>
          <Line><Paren>(on tv not here not here but</Paren></Line>
          <Line><Paren>feels here feels)</Paren></Line>
        </div>

        {/* Stanza 21 */}
        <div style={S.stanza}>
          <Line>tommy says we should bomb them but</Line>
          <Line>who is them & where is them &</Line>
          <Line>why is them & the questions taste like</Line>
          <Line>ashes in my mouth</Line>
        </div>

        {/* Stanza 22 */}
        <div style={S.stanza}>
          <Line>first tower falls between periods<Sup n="5" /> &</Line>
          <Line>library frozen &</Line>
          <Line>TV flickering too loud &</Line>
          <Line>someone whispers oh my god &</Line>
          <Line>no one turns the page</Line>
        </div>

        {/* Stanza 23 */}
        <div style={S.stanza}>
          <Line>mom comes to get me early like</Line>
          <Line>half the school parents</Line>
          <Line>running</Line>
          <Line>through halls like ghosts like</Line>
          <Line>someone's chasing them</Line>
        </div>

        {/* Stanza 24 */}
        <div style={S.stanza}>
          <Line>car ride home radio all static &</Line>
          <Line>mom's hands shaking on wheel &</Line>
          <Line>everything feels wrong like</Line>
          <Line>world tilted</Line>
          <Line style={{ textAlign: 'right' }}>sideways</Line>
        </div>

        {/* Stanza 25 */}
        <div style={S.stanza}>
          <Line>dad comes home weird tie crooked</Line>
          <Line>hair messy speaking words that don't</Line>
          <Line>connect like puzzle pieces scattered like</Line>
          <Line><Paren>(everything</Paren></Line>
          <Line><Paren>scattered)</Paren></Line>
        </div>

        {/* Stanza 26 */}
        <div style={S.stanza}>
          <Line><Loud>DEVELOPING STORY DEVELOPING</Loud></Line>
          <Line>but nothing develops just same</Line>
          <Line>footage loop loop loop loop &</Line>
          <Line>loop & loop & my head won't</Line>
        </div>

        {/* Stanza 27 */}
        <div style={S.stanza}>
          <Line>tonight's homework canceled because</Line>
          <Line>how do you subtract when</Line>
          <Line>everything's already been</Line>
          <Line>taken away</Line>
        </div>

        {/* Stanza 28 */}
        <div style={S.stanza}>
          <Line>sprinklers still tick tick ticking &</Line>
          <Line>grass still growing & sun still</Line>
          <Line>setting like it doesn't know</Line>
          <Line>like</Line>
          <Line>it doesn't care</Line>
          <Line>like</Line>
        </div>

        {/* Stanza 29 */}
        <div style={S.stanza}>
          <Line>static growing louder in my head like</Line>
          <Line>tv snow like radio fuzz like</Line>
          <Line>space between stations</Line>
          <Line>between</Line>
          <Line>thoughts between breathsbetweenwords</Line>
        </div>

        {/* Stanza 30 */}
        <div style={S.stanza}>
          <Line>in my head the towers fall &</Line>
          <Line>fall & fall & fall &</Line>
          <Line>never stop falling &</Line>
          <Line>we never stop</Line>
          <Line>watching &</Line>
        </div>

        {/* Stanza 31 */}
        <div style={S.stanza}>
          <Line>tomorrow feels like lying</Line>
          <Line>feels like</Line>
          <Line>something we tell ourselves when</Line>
          <Line>today won't end</Line>
          <Line>today won't</Line>
        </div>
      </div>

      {/* Corvids Annotations */}
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNumber}>1</span> Walkman radios were portable AM/FM radio players, common in the 1990s and early 2000s.</p>
        <p style={S.note}><span style={S.noteNumber}>2</span> Many schools turned on televisions in classrooms on September 11, 2001. Major news networks aired footage continuously.</p>
        <p style={S.note}><span style={S.noteNumber}>3</span> At 9:37 AM EDT, American Airlines Flight 77 crashed into the Pentagon.</p>
        <p style={S.note}><span style={S.noteNumber}>4</span> The South Tower collapsed at 9:59 AM EDT after burning for 56 minutes.</p>
        <p style={S.note}><span style={S.noteNumber}>5</span> The North Tower collapsed at 10:28 AM EDT after burning for 102 minutes.</p>
      </div>
    </div>
  );
}
