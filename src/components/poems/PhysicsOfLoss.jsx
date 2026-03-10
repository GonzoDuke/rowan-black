import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  paren: { color: '#7a8090' },
  spaced: { letterSpacing: '0.4em' },
  vertLine: { display: 'block', textAlign: 'center', lineHeight: 1.4 },
  italic: { fontStyle: 'italic' },
  slashed: { color: '#7a8090', fontStyle: 'italic' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const P = ({ children }) => <span style={S.paren}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;
const V = ({ children }) => <span style={S.vertLine}>{children}</span>;

export default function PhysicsOfLoss() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}>
          <L>from the fire tower</L>
        </div>
        <div style={S.stanza}>
          <L>june's darkness <span style={S.spaced}>pools</span></L>
        </div>
        <div style={S.stanza}>
          <L>somewhere music still</L>
          <L>plays against empty air</L>
          <L><P>(heartbeats</P></L>
          <L><P>dissolving into static)</P></L>
        </div>
        <div style={S.stanza}>
          <L>I've been counting:</L>
          <L>yours</L>
          <L><P>(<span style={S.spaced}>fading</span>)</P></L>
          <L>mine</L>
          <L><P>(<span style={S.spaced}>insistent</span>)</P></L>
          <L>theirs</L>
          <L><P>(<span style={S.spaced}>stopped</span>)</P></L>
          <L>time</L>
          <L><P>(<span style={S.spaced}>stuttering</span>)</P></L>
        </div>
        <div style={S.stanza}>
          <L>acceleration = mass × grief ÷ altitude<Sup n="1" /></L>
          <L>love = vulnerability²</L>
          <L>distance = the space between</L>
          <L>your last goodbye</L>
          <L>and this</L>
          <L>endless</L>
          <V>f</V><V>a</V><V>l</V><V>l</V><V>i</V><V>n</V><V>g</V>
        </div>
        <div style={S.stanza}>
          <L>the news reaches even here where</L>
          <L>eagles</L><L>drift</L><L>below</L><L>my</L><L>feet like</L>
          <L>lost</L>
          <V>p</V><V>r</V><V>a</V><V>y</V><V>e</V><V>r</V><V>s</V>
        </div>
        <div style={S.stanza}>
          <L>sanctuary dissolves in june's hot mouth:</L>
          <L>your garden</L>
          <L>their dance floor</L>
          <L>my tower</L>
          <L>all our temporary temples</L>
          <L>built against</L>
          <L>the vast</L>
          <L>indifferent</L>
          <V>d</V><V>a</V><V>r</V><V>k</V>
        </div>
        <div style={S.stanza}>
          <L>remember how you said</L>
          <L>&nbsp;</L>
          <L style={S.italic}>some souls are rivers?</L>
          <L>&nbsp;</L>
          <L>yours still moves through me.</L>
          <L>your voice still catches in my ribs—</L>
          <L>that stupid half-snort laugh,</L>
          <L>the way you always typed in lowercase</L>
          <L>as if capital letters were too formal</L>
          <L>for someone who never planned to leave.</L>
          <L>your hoodie still thrown over my chair,</L>
          <L>still smelling like you.</L>
        </div>
        <div style={S.stanza}>
          <L>I've become state changes:</L>
          <L>liquid to vapor</L>
          <L>flesh to ghost</L>
          <L>presence to</L>
          <L>memory to</L>
          <L>???</L>
        </div>
        <div style={S.stanza}>
          <L>in thin air</L>
          <L>matter</L>
          <L>energy</L>
          <L>time</L>
          <L>space</L>
        </div>
        <div style={S.stanza}>
          <L>physics rewrites itself:</L>
          <L><span style={S.slashed}>/doesnt/</span></L>
          <L><span style={S.slashed}>/matter/</span></L>
          <L><span style={S.slashed}>/unmatter/</span></L>
          <L><span style={S.slashed}>/transmatter/</span></L>
          <L><span style={S.slashed}>/antimatter/</span></L>
        </div>
        <div style={S.stanza}>
          <L>what remains:</L>
          <L>coffee steam</L>
          <L><P>(rising)</P></L>
          <L>mountain light</L>
          <L><P>(breaking)</P></L>
          <L>forty-nine pulses <P>(echoing)</P></L>
          <L>all these hearts <P>(beating)</P></L>
          <L>against</L>
          <L>probability &</L>
          <L>hatred &</L>
          <L>endings &</L>
          <L>silence &</L>
          <L>time</L>
        </div>
        <div style={S.stanza}>
          <L>watch: the fire below remakes the forest floor</L>
          <L><P>(the way love</P></L>
          <L><P>remakes what it touches)</P></L>
          <L><P>(the way loss remakes who we are)</P></L>
          <L><P>(the way night remakes itself to dawn)</P></L>
        </div>
        <div style={S.stanza}>
          <L>between tower & wind</L>
          <L>between earth & air</L>
          <L>between staying & leaving</L>
          <L>between loving & losing</L>
          <L>between being & becoming</L>
          <L>there is always</L>
          <L>this space</L>
        </div>
        <div style={S.stanza}>
          <L>I dream in quantum entanglements<Sup n="2" />:</L>
          <L>your hands still mapping my spine</L>
          <L>their last dance still in motion</L>
          <L>my heart still learning to beat</L>
          <L>alone</L>
          <V>a</V><V>l</V><V>o</V><V>n</V><V>e</V><V>?</V>
        </div>
        <div style={S.stanza}>
          <L>but solitude is also</L>
          <L>a kind of</L>
          <L>sanctuary</L>
          <L>& even empty rooms</L>
          <L>remember their music</L>
          <L>like bones</L>
          <L>remember</L>
          <L>love</L>
        </div>
        <div style={S.stanza}>
          <L><P>(somewhere a dharma bum<Sup n="3" /></P></L>
          <L><P>watches his shadow</P></L>
          <L><P>stretch across</P></L>
          <L><P>desolation</P></L>
          <L><P>& calls it</P></L>
          <L><P>home)</P></L>
        </div>
        <div style={S.stanza}>
          <L>june spreads its shadows across these mountains like ink</L>
          <L>like smoke</L>
          <L>across these valleys like time</L>
          <L>like love</L>
          <L>across these memories like light</L>
          <L>becoming</L>
          <L>light</L>
        </div>
        <div style={S.stanza}>
          <L>somewhere between</L>
          <L>particle & wave</L>
          <L>memory & moment</L>
          <L>loss & transformation</L>
          <L>we learn to</L>
          <L>exist</L>
          <L>in multiple</L>
          <L>states</L>
        </div>
        <div style={S.stanza}>
          <L>watch how the night sky</L>
          <L>holds both</L>
          <L>darkness</L>
          <L>&</L>
          <L>stars</L>
          <L>how even emptiness</L>
          <L>contains</L>
          <L>everything</L>
          <L>we've lost</L>
          <L>&</L>
          <L>might</L>
          <L>become</L>
        </div>
        <div style={S.stanza}>
          <L><P>(this too is physics:</P></L>
          <L><P>how love persists</P></L>
          <L><P>in the space</P></L>
          <L><P>between</P></L>
          <L><P>heartbeats)</P></L>
        </div>
        <div style={S.stanza}>
          <L>I am learning to be</L>
          <L>both</L>
          <L>observatory</L>
          <L>& observed</L>
          <L>while somewhere</L>
          <L>music still plays</L>
          <L>in empty rooms</L>
          <L>& hearts still dare</L>
          <L>to beat</L>
          <L>beat</L>
          <L>beat</L>
          <L>against the vast</L>
          <L>perfect</L>
          <L>indifferent</L>
          <L>blue</L>
        </div>
        <div style={S.stanza}>
          <L>here at the edge</L>
          <L>of altitude</L>
          <L>& understanding</L>
          <L>where even</L>
          <L>gravity</L>
          <L><span style={S.spaced}>becomes</span></L>
          <L>optional</L>
          <L>& all the desolation angels<Sup n="4" /></L>
          <L>circle these peaks</L>
          <L>whispering:</L>
          <L>even emptiness</L>
          <L>is holy</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> A play on Newtonian physics, equating emotional weight with physical forces.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Quantum entanglement describes particles remaining connected across distances.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> The Dharma Bums (1958) by Jack Kerouac, a novel about seeking meaning through solitude and wanderlust.</p>
        <p style={S.note}><span style={S.noteNum}>4</span> Desolation Angels (1965) by Jack Kerouac explores themes of solitude, enlightenment, and disillusionment.</p>
      </div>
    </div>
  );
}
