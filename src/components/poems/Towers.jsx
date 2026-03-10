import React from 'react';

const S = {
  container: {
    maxWidth: '640px',
    margin: '0 auto',
    padding: '40px 36px 60px',
  },
  poem: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '17px',
    lineHeight: 1.9,
    color: '#1a1d24',
  },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  indent: { paddingLeft: '24px' },
  loud: { fontWeight: 600, letterSpacing: '0.03em' },
  paren: { color: '#7a8090' },
  annotation: {
    borderTop: '1px solid rgba(0,0,0,0.08)',
    marginTop: '48px',
    paddingTop: '24px',
  },
  annotationLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '10px', fontWeight: 600,
    color: '#9099a8', letterSpacing: '0.08em',
    textTransform: 'uppercase', marginBottom: '12px',
  },
  note: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '12px', lineHeight: 1.75,
    color: '#6a7080', marginBottom: '8px',
  },
  noteNum: {
    color: '#9099a8', fontSize: '10px',
    verticalAlign: 'super', marginRight: '4px',
  },
  sup: {
    fontSize: '11px', color: '#9099a8',
    verticalAlign: 'super', marginLeft: '2px',
  },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Loud = ({ children }) => <span style={S.loud}>{children}</span>;
const Paren = ({ children }) => <span style={S.paren}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function Towers() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}>
          <L>mrs walker talking about algebra when</L>
          <L>jason kicks my chair & points at</L>
          <L>karen crying in the hallway holding</L>
          <L>a walkman radio<Sup n="1" /> to her ear</L>
          <L>something about a plane &</L>
          <L>new york &</L>
          <L>accident? &</L>
          <L>karen's cousin works in</L>
        </div>
        <div style={S.stanza}>
          <L>principal's voice</L>
          <L>crackling through speakers</L>
          <L>telling teachers to turn on TVs &</L>
          <L>suddenly math doesn't matter because</L>
          <L>sky is too blue on screen &</L>
          <L>smoke climbing like black snakes &</L>
          <L>newscaster's voice breaking like</L>
          <L>chalk when second plane hits &</L>
        </div>
        <div style={S.stanza}>
          <L><Paren>(not accident</Paren></L>
          <L><Paren>not accident)</Paren></L>
        </div>
        <div style={S.stanza}>
          <L><Loud>WHO DID THIS</Loud></L>
          <L><Loud>WHO DID</Loud></L>
        </div>
        <div style={S.stanza}>
          <L><Paren>(shut up shut up the tv won't</Paren></L>
          <L><Paren>shut up)</Paren></L>
        </div>
        <div style={S.stanza}>
          <L>watching it again & again &</L>
          <L>again &</L>
          <L>smoking tower</L>
          <L>smoking tower</L>
          <L>smoking</L>
        </div>
        <div style={S.stanza}>
          <L>plane disappears into building like magic</L>
          <L>but</L>
          <L>bad magic</L>
          <L>wrong magic</L>
          <L>black magic</L>
        </div>
        <div style={S.stanza}>
          <L>between classes everyone running to</L>
          <L>different rooms with TVs like maybe</L>
          <L>different channels will show</L>
          <L>different truth<Sup n="2" /></L>
        </div>
        <div style={S.stanza}>
          <L>jenny martinez puked in homeroom &</L>
          <L>mr collins just stared at the wall &</L>
          <L>someone laughed but then stopped &</L>
        </div>
        <div style={S.stanza}>
          <L><Loud>BREAKING NEWS</Loud></L>
          <L>everything is breaking</L>
        </div>
        <div style={S.stanza}><L><Loud>BREAKING NEWS</Loud></L></div>
        <div style={S.stanza}><L style={{ textAlign: 'center', letterSpacing: '0.3em' }}><Loud>BREAKING</Loud></L></div>
        <div style={S.stanza}>
          <L>mrs peterson calling our classroom</L>
          <L>voice shaking like</L>
          <L>earthquakes says</L>
          <L>pentagon hit</L>
          <L>pentagon hit &</L>
          <L>what's happening<Sup n="3" /></L>
          <L>what's</L>
        </div>
        <div style={S.stanza}><L>second tower falling during history class<Sup n="4" /> &</L></div>
        <div style={S.stanza}>
          <L><Loud>TIME</Loud></L>
          <L><Loud>SLOWS</Loud></L>
          <L style={{ textAlign: 'right' }}><Loud>DOWN</Loud></L>
        </div>
        <div style={S.stanza}>
          <L>people falling but don't look</L>
          <L style={S.indent}>don't</L>
          <L>look but I</L>
          <L>looked &</L>
        </div>
        <div style={S.stanza}><L><Paren>(can't unwatched it now)</Paren></L></div>
        <div style={S.stanza}>
          <L>dust clouds eating people on tv</L>
          <L>dust clouds eating buildings</L>
          <L>dust clouds eating new york &</L>
          <L>here in ohio the sky is so blue it hurts</L>
        </div>
        <div style={S.stanza}>
          <L>somewhere whispers about pennsylvania</L>
          <L>plane crash & plane crash & plane crash</L>
          <L>how many planes today</L>
          <L>how many</L>
          <L>are still up there</L>
          <L>still</L>
        </div>
        <div style={S.stanza}>
          <L>principal says stay calm but his voice</L>
          <L>sounds like</L>
          <L>static</L>
          <L>sounds like</L>
          <L>sirens sounds like everything breaking</L>
        </div>
        <div style={S.stanza}><L><Loud>EVERYTHING IS BREAKING</Loud></L></div>
        <div style={S.stanza}>
          <L>first tower won't stop burning &</L>
          <L>burning & burning &</L>
          <L>mrs walker crying now too &</L>
          <L>everything</L>
          <L>burning</L>
        </div>
        <div style={S.stanza}>
          <L>want to call mom but phones don't work</L>
          <L>circuits busy circuits busy</L>
          <L>everyone trying to reach</L>
          <L>someone</L>
          <L>somewhere</L>
        </div>
        <div style={S.stanza}>
          <L>counting seconds between</L>
          <L>heartbeats because numbers</L>
          <L>should still work should still</L>
          <L>mean something but</L>
        </div>
        <div style={S.stanza}>
          <L>snow in september but not snow</L>
          <L>ash papers fragments falling</L>
          <L><Paren>(on tv not here not here but</Paren></L>
          <L><Paren>feels here feels)</Paren></L>
        </div>
        <div style={S.stanza}>
          <L>tommy says we should bomb them but</L>
          <L>who is them & where is them &</L>
          <L>why is them & the questions taste like</L>
          <L>ashes in my mouth</L>
        </div>
        <div style={S.stanza}>
          <L>first tower falls between periods<Sup n="5" /> &</L>
          <L>library frozen &</L>
          <L>TV flickering too loud &</L>
          <L>someone whispers oh my god &</L>
          <L>no one turns the page</L>
        </div>
        <div style={S.stanza}>
          <L>mom comes to get me early like</L>
          <L>half the school parents</L>
          <L>running</L>
          <L>through halls like ghosts like</L>
          <L>someone's chasing them</L>
        </div>
        <div style={S.stanza}>
          <L>car ride home radio all static &</L>
          <L>mom's hands shaking on wheel &</L>
          <L>everything feels wrong like</L>
          <L>world tilted</L>
          <L style={{ textAlign: 'right' }}>sideways</L>
        </div>
        <div style={S.stanza}>
          <L>dad comes home weird tie crooked</L>
          <L>hair messy speaking words that don't</L>
          <L>connect like puzzle pieces scattered like</L>
          <L><Paren>(everything</Paren></L>
          <L><Paren>scattered)</Paren></L>
        </div>
        <div style={S.stanza}>
          <L><Loud>DEVELOPING STORY DEVELOPING</Loud></L>
          <L>but nothing develops just same</L>
          <L>footage loop loop loop loop &</L>
          <L>loop & loop & my head won't</L>
        </div>
        <div style={S.stanza}>
          <L>tonight's homework canceled because</L>
          <L>how do you subtract when</L>
          <L>everything's already been</L>
          <L>taken away</L>
        </div>
        <div style={S.stanza}>
          <L>sprinklers still tick tick ticking &</L>
          <L>grass still growing & sun still</L>
          <L>setting like it doesn't know</L>
          <L>like</L>
          <L>it doesn't care</L>
          <L>like</L>
        </div>
        <div style={S.stanza}>
          <L>static growing louder in my head like</L>
          <L>tv snow like radio fuzz like</L>
          <L>space between stations</L>
          <L>between</L>
          <L>thoughts between breathsbetweenwords</L>
        </div>
        <div style={S.stanza}>
          <L>in my head the towers fall &</L>
          <L>fall & fall & fall &</L>
          <L>never stop falling &</L>
          <L>we never stop</L>
          <L>watching &</L>
        </div>
        <div style={S.stanza}>
          <L>tomorrow feels like lying</L>
          <L>feels like</L>
          <L>something we tell ourselves when</L>
          <L>today won't end</L>
          <L>today won't</L>
        </div>
      </div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Walkman radios were portable AM/FM radio players, common in the 1990s and early 2000s.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Many schools turned on televisions in classrooms on September 11, 2001. Major news networks aired footage continuously.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> At 9:37 AM EDT, American Airlines Flight 77 crashed into the Pentagon.</p>
        <p style={S.note}><span style={S.noteNum}>4</span> The South Tower collapsed at 9:59 AM EDT after burning for 56 minutes.</p>
        <p style={S.note}><span style={S.noteNum}>5</span> The North Tower collapsed at 10:28 AM EDT after burning for 102 minutes.</p>
      </div>
    </div>
  );
}
