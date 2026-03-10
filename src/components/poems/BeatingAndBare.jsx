import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: '40px 36px 60px' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  paren: { color: '#7a8090' },
  sectionNum: { display: 'block', fontWeight: 600, fontSize: '18px', marginBottom: '12px', marginTop: '36px', color: '#1a1d24' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const P = ({ children }) => <span style={S.paren}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function BeatingAndBare() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.sectionNum}>I.</span>
        <div style={S.stanza}><L>Morning writes itself in bruises—</L><L>copper light splits the blinds</L><L>like brass knuckles,</L><L>like truth,</L><L>like every promise</L><L>we couldn't keep.</L></div>
        <div style={S.stanza}><L>The city peels back my skin</L><L>with mechanical precision,</L><L>the way mothers once peeled oranges,</L><L>the way lovers once peeled away pretense,</L><L>the way I can't stop peeling</L><L>at the edges of what's left.</L></div>
        <div style={S.stanza}><L>Bitter coffee holes through my chest</L><L><P>(the way your absence did,</P></L><L><P>the way democracy did,</P></L><L><P>the way faith did)</P></L><L>until there's nothing left</L><L>but nerve endings and nicotine,</L><L>raw wires sparking in dead air.</L></div>

        <span style={S.sectionNum}>II.</span>
        <div style={S.stanza}><L>I've stopped wearing masks.</L><L>Let them see the teeth marks,</L><L>the missing pieces,</L><L>the way morning light</L><L>makes a prison of my bones.</L><L>Let them see how flesh fails</L><L>against the machinery of hours.</L></div>
        <div style={S.stanza}><L>You were right about the sweetness—</L><L>how it numbs,</L><L>how it lies,</L><L>how it makes you forget</L><L>the taste of your own blood.</L><L>But I'm done with sugar.</L><L>Done with soft landings.</L><L>Done with the myth</L><L>that anything survives intact.</L></div>
        <div style={S.stanza}><L>The train screams past, steel on steel,</L><L>a sound like history eating itself alive.</L><L>I press my palm against the window,</L><L>feel the ghost of motion rattle through my marrow.</L></div>
        <div style={S.stanza}><L>And then, out of nowhere—</L><L>Hocus pocus alimagocus.</L><L>I stop breathing. What the fuck.</L><L>Where did that come from?</L><L>Why does my brain still have that file?</L></div>
        <div style={S.stanza}><L>I haven't thought about Today's Special in twenty years,</L><L>but suddenly, it's all there—</L><L>the escalators humming, the empty store at night,</L><L>Jeff the mannequin, frozen, waiting,</L><L>only real when someone says the words.<Sup n="1" /></L></div>
        <div style={S.stanza}><L>And fuck—wasn't Jeff trapped?</L><L>Alive only when the lights were out?</L><L>Bound by some bullshit magic spell?</L><L>Is that what this is?</L><L>The city grinding on,</L><L>and me, just another mannequin</L><L>waiting for someone to say the words?</L></div>

        <span style={S.sectionNum}>III.</span>
        <div style={S.stanza}><L>Each step a confession:</L><L>I am here</L><L>I am here</L><L>I am here</L><L>until the concrete writes it</L><L>into my bones.</L></div>
        <div style={S.stanza}><L>Time's teeth find purchase</L><L>in the soft parts,</L><L>in the spaces between</L><L>heartbeats,</L><L>in the silence after</L><L>I stop pretending</L><L>that any of this</L><L>makes sense.</L></div>
        <div style={S.stanza}><L>But there's savage grace</L><L>in the stumble,</L><L>in the way we fall</L><L>toward something</L><L>like truth,</L><L>like mercy,</L><L>like the laugh that comes</L><L>when you realize</L><L>there's nothing left to lose</L><L>but the fiction</L><L>of losing itself.</L></div>

        <span style={S.sectionNum}>IV.</span>
        <div style={S.stanza}><L>Remember when we thought</L><L>pain had a purpose?</L><L>That suffering was a door</L><L>that opened somewhere?</L><L>Now I know better—</L><L>pain is just the body's way</L><L>of recording what breaks,</L><L>a ledger of collapse</L><L>written in nerve and sinew.</L></div>
        <div style={S.stanza}><L>I walk these streets</L><L>like a man counting tombstones,</L><L>each step an epitaph</L><L>for something we lost</L><L>without noticing:</L><L>here lies certainty</L><L>here lies connection</L><L>here lies the myth</L><L>of solid ground.</L></div>
        <div style={S.stanza}><L>The morning crowd rushes past,</L><L>each face a mirror</L><L>of carefully crafted absence,</L><L>each smile a defense</L><L>against what we've become.</L><L>I want to grab them,</L><L>shake them awake,</L><L>scream: don't you feel it?</L><L>The way everything's coming undone?</L><L>The way we're all just meat</L><L>and memory and motion,</L><L>beating and bare against</L><L>the machinery of days?</L></div>

        <span style={S.sectionNum}>V.</span>
        <div style={S.stanza}><L>Stand in the bewilderness—</L><L>let it strip you</L><L>to sinew and spark.</L><L>Let it make of your body</L><L>a new language</L><L>for what breaks</L><L>and keeps breaking</L><L>and somehow</L><L>keeps breathing.</L></div>
        <div style={S.stanza}><L>This is everything.</L><L>This is nothing.</L><L>This is the fire</L><L>that burns away</L><L>every story</L><L>but the one</L><L>written in flesh</L><L>and bone</L><L>and bare</L><L>electric</L><L>now.</L></div>

        <span style={S.sectionNum}>VI.</span>
        <div style={S.stanza}><L>In the end, it comes to this:</L><L>the raw math of survival,</L><L>the calculus of breath</L><L>against void,</L><L>the way light breaks</L><L>against skin</L><L>like waves</L><L>against ruins.</L></div>
        <div style={S.stanza}><L>I've stopped trying to make</L><L>sense of the fragments.</L><L>Let them scatter</L><L>like teeth,</L><L>like stars,</L><L>like all the promises</L><L>we thought would save us.</L></div>
        <div style={S.stanza}><L>There's something holy</L><L>in this stripped-down truth,</L><L>this bone-deep knowing:</L><L>we are here</L><L>we are now</L><L>we are nothing</L><L>but nerve and pulse</L><L>and the endless falling</L><L>forward</L><L>into whatever comes next.</L></div>
        <div style={S.stanza}><L>The city grinds its gears,</L><L>a machine eating its own heart,</L><L>and still we rise,</L><L>still we walk,</L><L>still we laugh</L><L>into the face</L><L>of all this beautiful</L><L>terrible</L><L>breaking.</L></div>
        <div style={S.stanza}><L>Because what else is there?</L><L>What else but this—</L><L>this brutal gift</L><L>of being alive</L><L>in a world</L><L>that demands everything</L><L>and promises nothing</L><L>but the next breath,</L><L>the next step,</L><L>the next moment</L><L>of beating</L><L>and bare</L><L>bewilderness.</L></div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> A deep-cut reference to an 80s children's show where a mannequin came to life under specific conditions.</p>
      </div>
    </div>
  );
}
