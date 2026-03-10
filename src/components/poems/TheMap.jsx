import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: '40px 36px 60px' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  epigraph: { display: 'block', fontStyle: 'italic', color: '#5a6070', fontSize: '15px' },
  epigraphBlock: { marginBottom: '28px', paddingLeft: '20px', borderLeft: '2px solid rgba(0,0,0,0.06)' },
  spaced: { letterSpacing: '0.3em' },
  loud: { fontWeight: 600 },
  vertLine: { display: 'block', textAlign: 'center', lineHeight: 1.4 },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function TheMap() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.epigraphBlock}>
          <span style={S.epigraph}>In that empire, the Cartographers Guilds</span>
          <span style={S.epigraph}>struck a Map of the Empire</span>
          <span style={S.epigraph}>whose size was that of the Empire,</span>
          <span style={S.epigraph}>coinciding point for point with it<Sup n="1" /></span>
        </div>
        <div style={S.stanza}>
          <L>The map unfolds <span style={S.spaced}>endlessly</span></L>
          <L>a paper realm as vast</L>
          <L>as the world it claims to represent<Sup n="2" /></L>
          <L>You trace phantom routes</L>
          <L>with trembling fingers</L>
          <L>hoping for revelation</L>
          <L>But even perfection is imperfect</L>
          <L>The 1:1 scale obscures</L>
          <L>as much as it reveals</L>
        </div>
        <div style={S.stanza}>
          <L>Cities shift like mirages</L>
          <L>rivers flow backward</L>
          <L>mountains</L>
          <span style={S.vertLine}>c</span><span style={S.vertLine}>r</span><span style={S.vertLine}>u</span>
          <span style={S.vertLine}>m</span><span style={S.vertLine}>b</span><span style={S.vertLine}>l</span>
          <span style={S.vertLine}>e</span><span style={S.vertLine}>t</span><span style={S.vertLine}>o</span>
          <span style={S.vertLine}>s</span><span style={S.vertLine}>a</span><span style={S.vertLine}>n</span>
          <span style={S.vertLine}>d</span><L><Sup n="3" /></L>
        </div>
        <div style={S.stanza}>
          <L>North becomes a concept</L>
          <L>fluid as mercury</L>
          <L>slipping through your grasp</L>
          <L>East</L>
          <L style={{ textAlign: 'right' }}>West</L>
          <L style={{ textAlign: 'center' }}><span style={S.spaced}>collide</span></L>
          <L>a temporal car crash</L>
          <L>of "what was" and "might be"</L>
        </div>
        <div style={S.stanza}>
          <L>The legend offers no key</L>
          <L>only riddles in fading ink:</L>
          <L>"Here be dragons<Sup n="4" />," it whispers</L>
          <L>But even monsters would be</L>
          <L>a comfort in this</L>
          <L>cartographer's nightmare</L>
        </div>
        <div style={S.stanza}>
          <L>You long for dragons now</L>
          <L>for something solid to fear</L>
          <L>something to navigate around</L>
          <L>Instead the blankness spreads</L>
          <L>a cartographic cancer</L>
          <L>eating away at certainty</L>
        </div>
        <div style={S.stanza}>
          <span style={S.epigraph}>In the Deserts of the West, still today</span>
          <span style={S.epigraph}>there are Tattered Ruins</span>
          <span style={S.epigraph}>of that Map<Sup n="5" /></span>
        </div>
        <div style={S.stanza}>
          <L>You wander these ruins</L>
          <L>searching for fragments of meaning</L>
          <L>in the tatters of representation</L>
          <L>The map fights back</L>
          <L>paper cuts slicing deep—</L>
          <L>your blood the only real landmark now</L>
        </div>
        <div style={S.stanza}>
          <L>"I am here," you say</L>
          <L>pointing to a spot that vanishes</L>
          <L>the moment you touch it</L>
        </div>
        <div style={S.stanza}>
          <L>The map laughs a rustle of paper</L>
          <L>mocking your need for placement</L>
          <L>in a world too vast to be contained</L>
        </div>
        <div style={S.stanza}>
          <L>A memory surfaces:</L>
          <L>Your father's weathered atlas</L>
          <L>Tracing routes on rainy Sundays</L>
          <L>The world seemed so orderly then</L>
          <L>But now—</L>
        </div>
        <div style={S.stanza}>
          <span style={S.epigraph}>Successive Generations with less homage</span>
          <span style={S.epigraph}>to the Map, saw its vast bulk as Useless</span>
          <span style={S.epigraph}>and delivered it up to the Inclemencies</span>
          <span style={S.epigraph}>of Sun and Winters<Sup n="6" /></span>
        </div>
        <div style={S.stanza}>
          <L><span style={S.loud}>PANIC RISES</span></L>
          <L>The familiar contours dissolve</L>
          <L>Reality unravels with the map</L>
        </div>
        <div style={S.stanza}>
          <L>In frustration you ball it up</L>
          <L>this useless guide</L>
          <L>this liar's tool</L>
          <L>But as it crumples you realize—</L>
          <L>The creases and tears</L>
          <L>the folds and stains</L>
          <L>the very destruction of the map</L>
          <L>has become the only true reflection</L>
          <L>of your journey</L>
        </div>
        <div style={S.stanza}>
          <L>You smooth it out once more</L>
          <L>this record of attempts</L>
          <L>each failure a step</L>
          <L>on a path that exists</L>
          <L>only in the walking</L>
        </div>
        <div style={S.stanza}>
          <L>The map burns away to ash</L>
          <L>carried off by winds</L>
          <L>that smell of elsewhere</L>
          <L>You stand in the unmarked territory</L>
          <L>of your own bewilderness</L>
          <L>No guide no compass no star to follow</L>
          <L>Just the raw truth of lostness</L>
          <L>and the realization that every step</L>
          <L>draws a new map— ephemeral, but honest</L>
        </div>
        <div style={S.stanza}>
          <span style={S.epigraph}>In the Disciplines of Geography no History of Cartography</span>
          <span style={S.epigraph}>retains mention of that Useless Map</span>
          <span style={S.epigraph}>except as reminder of Extravagance and Folly<Sup n="7" /></span>
        </div>
        <div style={S.stanza}>
          <L>This is the truest navigation—</L>
          <L>to walk without knowing</L>
          <L>to be the map that isn't there</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> The opening lines paraphrase On Exactitude in Science, a one-paragraph short story by Jorge Luis Borges (1946), which describes a 1:1 scale map so detailed that it becomes indistinguishable from the territory it represents.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A reference to hyperreal representations, where the simulation of reality overtakes the real itself, as explored in Baudrillard's Simulacra and Simulation (1981).</p>
        <p style={S.note}><span style={S.noteNum}>3</span> Cartographic inaccuracies and geographical shifts occur over time; old maps often become unreliable as landscapes erode, borders change, and settlements vanish.</p>
        <p style={S.note}><span style={S.noteNum}>4</span> A phrase historically (but inaccurately) believed to be used on medieval maps to mark unknown or dangerous regions.</p>
        <p style={S.note}><span style={S.noteNum}>5</span> Another direct reference to Borges' On Exactitude in Science, where remnants of the massive map still exist, abandoned and useless.</p>
        <p style={S.note}><span style={S.noteNum}>6</span> Suggests that later generations no longer valued the physical map, leaving it to decay.</p>
        <p style={S.note}><span style={S.noteNum}>7</span> A comment on how knowledge, once deemed essential, can be erased or forgotten.</p>
      </div>
    </div>
  );
}
