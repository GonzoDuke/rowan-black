import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  dedication: { display: 'block', fontStyle: 'italic', color: '#5a6070', marginBottom: '24px', fontSize: '15px' },
  paren: { color: '#7a8090' },
  loud: { fontWeight: 600, letterSpacing: '0.02em' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const P = ({ children }) => <span style={S.paren}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function Meaning() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.dedication}>(For the ghosts of empty buildings)</span>

        <div style={S.stanza}>
          <L>Cruising down dead boulevards,</L>
          <L>where neon burns holes in memory</L>
          <L>like cigarettes in yesterday's promises.</L>
          <L>The question comes again, persistent</L>
          <L>as unpaid bills in the drawer:</L>
          <L>What's it all mean, anyway?</L>
        </div>
        <div style={S.stanza}>
          <L>Some find it in glass towers,</L>
          <L>get high on fluorescent certainties,</L>
          <L>while Time ticks away in cubicles,</L>
          <L>another echo in the maze of routine.</L>
          <L>Others mainline pure emptiness,</L>
          <L>shooting up that sweet delusion</L>
          <L>where meaning used to live.</L>
        </div>
        <div style={S.stanza}>
          <L><P>(Do it again, baby, one more hit</P></L>
          <L><P>of that premium-grade nothing)</P></L>
        </div>
        <div style={S.stanza}>
          <L>Here I am, caught in the static,</L>
          <L>drinking burnt coffee with Kafka's ghost<Sup n="1" /></L>
          <L>at the All-Night Nothing Diner.</L>
          <L>He's telling me about freedom—</L>
          <L>that undelivered letter</L>
          <L>nobody wants to read.</L>
        </div>
        <div style={S.stanza}>
          <L>No referee but the broken clocks,</L>
          <L>cold as downtown winter,</L>
          <L>keeping score in languages</L>
          <L>we pretend to understand.</L>
        </div>
        <div style={S.stanza}>
          <L>I was raised on analog dreams,</L>
          <L>genuflecting to the beat</L>
          <L>of someone else's machinery<Sup n="2" />:</L>
          <L>Work. Sleep. Consume. Repeat.</L>
          <L>Faith hung like a vacant sign</L>
          <L>in a storefront window,</L>
          <L>price tag dangling from truth:</L>
          <L><span style={S.loud}>YOUR SOUL OR BEST OFFER.</span></L>
        </div>
        <div style={S.stanza}>
          <L>A street prophet with dog-eared Baudrillard</L>
          <L>and coffee-stained manifestos</L>
          <L>threw me a lifeline</L>
          <L>when I was drowning</L>
          <L>in artificial light,</L>
          <L>dropping wisdom like spare change:</L>
          <L>"They're selling truth in vending machines now,</L>
          <L>processed revelations in plastic wrappers.</L>
          <L>But never trust a system</L>
          <L>till you've seen its shadow."</L>
        </div>
        <div style={S.stanza}>
          <L>The question sprawls across city grids,</L>
          <L>bleeds through concrete,</L>
          <L>stains everything it touches.</L>
          <L>No answers in the employee handbook,</L>
          <L>just empty maps to places that don't exist</L>
          <L>and a bottle of vintage doubt</L>
          <L>I've been saving for the revolution.</L>
        </div>
        <div style={S.stanza}>
          <L>Found myself in Terminal Bar,</L>
          <L>where the regulars genuflect</L>
          <L>to bottles like stained glass saints.</L>
          <L>A man in a corporate tie</L>
          <L>spouts gospel from The Wall Street Journal:</L>
          <L>"Listen, the system works—"</L>
          <L>so I lay my offerings on the bar:</L>
          <L>timecard, keycard, student loans,</L>
          <L>my collection of minimum wage paystubs.</L>
          <L>"Here's your working man's rosary, brother.</L>
          <L>Tell me again how nothing means nothing."</L>
        </div>
        <div style={S.stanza}>
          <L>He backs away like I'm contagious,</L>
          <L>like doubt might catch in his throat</L>
          <L>and choke out all his certainties.</L>
        </div>
        <div style={S.stanza}>
          <L>Later, in the digital twilight,</L>
          <L>Ginsberg's ghost rides the subway,</L>
          <L>howling beat prophecies</L>
          <L>beneath the city.</L>
          <L>"The streets know," he says,</L>
          <L>"but they're not telling."</L>
          <L>Dylan's on the fire escape,</L>
          <L>cleaning his protest songs,</L>
          <L>muttering about truth and urban answers.</L>
        </div>
        <div style={S.stanza}>
          <L>The radio catches a signal—</L>
          <L>Lou Reed bleeding into Radiohead,</L>
          <L>time signatures complicated</L>
          <L>by original doubt.</L>
          <L>The city's rhythm is dealing</L>
          <L>some smooth devastation,</L>
          <L>while Money changes hands</L>
          <L>in the dark corners of existence.</L>
        </div>
        <div style={S.stanza}>
          <L>This ain't no straight path.</L>
          <L>No clear signs on this map.</L>
          <L>Every detour leads to</L>
          <L>another existential junction,</L>
          <L><P>(somewhere between now and never)</P></L>
          <L>where philosophers pump wisdom</L>
          <L>like vending machine coffee,</L>
          <L>and every bathroom mirror</L>
          <L>is a dissertation on being and nothingness.</L>
        </div>
        <div style={S.stanza}>
          <L>Sartre's teaching survival<Sup n="3" />,</L>
          <L>showing how to slice through</L>
          <L>the sweet meat of certainty.</L>
          <L>Kerouac's dealing freedom<Sup n="4" /></L>
          <L>like a card shark with worn cards.</L>
          <L>Foucault's in the corner,</L>
          <L>dismantling meanings<Sup n="5" /></L>
          <L>just to show us how they break.</L>
        </div>
        <div style={S.stanza}>
          <L>I can't sell you answers</L>
          <L>wrapped in tomorrow's headlines.</L>
          <L>This is just a dispatch</L>
          <L>from the frontlines of the search,</L>
          <L>filed under: URGENT—HANDLE WITH CARE</L>
          <L>meaning unstable, reality under revision.</L>
        </div>
        <div style={S.stanza}>
          <L>Take this streetmap, friend. The ink's faded but the roads still lead somewhere.</L>
          <L>Follow them past the security cameras,</L>
          <L>beyond the "No Loitering" signs</L>
          <L>where meaning prowls like a stray cat</L>
          <L>in the garbage of certainty.</L>
        </div>
        <div style={S.stanza}>
          <L>What's it all mean?</L>
          <L>No one knows, but maybe it's this:</L>
          <L>just keep moving through the dark,</L>
          <L>radio tuned to the static between stations,</L>
          <L>where sometimes, if you listen close,</L>
          <L>you can hear the city</L>
          <L>trying to tell us something,</L>
          <L>and it sounds almost like jazz.</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Franz Kafka (1883–1924), a writer known for themes of bureaucracy, alienation, and absurdity.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Echoes Marxist critiques of labor and the alienation of workers from their own lives.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> Jean-Paul Sartre (1905–1980), existentialist philosopher, focused on radical freedom.</p>
        <p style={S.note}><span style={S.noteNum}>4</span> Jack Kerouac (1922–1969), a central figure of the Beat Generation, known for On the Road and spontaneous prose that romanticized travel, rebellion, and the search for meaning.</p>
        <p style={S.note}><span style={S.noteNum}>5</span> Michel Foucault (1926–1984), a philosopher who explored power structures, discourse, and the fluidity of meaning, often deconstructing accepted truths to reveal their underlying mechanisms.</p>
      </div>
    </div>
  );
}
