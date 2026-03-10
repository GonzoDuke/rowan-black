import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: '40px 36px 60px' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  sectionNum: { display: 'block', fontWeight: 600, fontSize: '15px', marginBottom: '8px', marginTop: '32px', color: '#1a1d24' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function TheShapeOfLeaving() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.sectionNum}>i.</span>
        <div style={S.stanza}><L>Jack<Sup n="1" />—</L><L>or not Jack,</L><L>not anyone, but still—</L><L>I know the curve</L><L>of your leaving,</L><L>the sharpness of it,</L><L>how it cuts through space like</L><L>a line drawn too fast.</L></div>
        <div style={S.stanza}><L>There are ghosts here,</L><L>but none of us are dead<Sup n="2" />.</L><L>We're</L><L>shadows on cabin walls,</L><L>reflections in cracked mirrors,</L><L>cinders waiting for wind.</L></div>
        <div style={S.stanza}><L>Who am I?</L><L>Who are we?</L><L>Did I invent us,</L><L>or were we carved from the same</L><L>sparked bone,</L><L>lit for a moment</L><L>before we burned the page?</L></div>

        <span style={S.sectionNum}>ii.</span>
        <div style={S.stanza}><L>It's the sky tonight, Jack,</L><L>torn open and pouring</L><L>its soft metals into my head.</L><L>Stars dissolve into wires</L><L>and the wires hum:</L><L>we are</L><L>we are</L><L>we are</L><L>until I can't tell if it's me thinking</L><L>or the sky speaking.</L></div>
        <div style={S.stanza}><L>Your voice is here somewhere,</L><L>a filament of sound stretched too thin.</L><L>It catches on my breath—</L><L>does it mean something?</L><L>I listen.</L></div>

        <span style={S.sectionNum}>iii.</span>
        <div style={S.stanza}><L>Sweet gods, you said,</L><L>but the gods are a joke we told ourselves</L><L>to feel bigger than the dirt.</L><L>And yet</L><L>I see your laugh spiraling out—</L><L>somewhere between starlight and neon—</L><L>so bright it blinds me</L><L>to the fact of my own edges.</L></div>
        <div style={S.stanza}><L>I can't love this world anymore, Jack,</L><L>but I love you for loving it</L><L>when you shouldn't.</L></div>

        <span style={S.sectionNum}>iv.</span>
        <div style={S.stanza}><L>And if we die tonight,</L><L>Jack,</L><L>it will be under this silence:</L><L>the moon holding its breath,</L><L>the mountains folding their shadows.</L></div>
        <div style={S.stanza}><L>We are—</L><L>whole only in the fragments,</L><L>a moment's signal</L><L>in the static's roar.</L></div>
        <div style={S.stanza}><L>You and I,</L><L>thriving on nothing but</L><L>the echo of a soul</L><L>that never quite fit.</L></div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Perhaps another reference to Jack Kerouac, or a reference to an unknown figure.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A common motif in Rowan Black's work, where ghosts symbolize emotional remnants rather than literal spirits. Similar themes appear in City of Ghosts (2012) and others.</p>
      </div>
    </div>
  );
}
