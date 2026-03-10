import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: '40px 36px 60px' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function CasualArson() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}>
          <L>We gathered like spectators at an execution,</L>
          <L>eyes wide, breath held, warmed by someone else's ending.</L>
        </div>
        <div style={S.stanza}>
          <L>The house burned like a signal flare in the dark,</L>
          <L>announcing catastrophe to the neighborhood.</L>
          <L>The flames licked skyward, hungry,</L>
          <L>pulling pieces of a life into the air—</L>
          <L>a chair leg, a child's drawing,</L>
          <L>someone's wedding dress curling into black lace.</L>
        </div>
        <div style={S.stanza}>
          <L>The family stood barefoot on the curb,</L>
          <L>wrapped in blankets that couldn't hold back the cold.</L>
          <L>The mother's voice cracked as she begged the phone</L>
          <L>for a voice that wouldn't come.</L>
          <L>The father clutched his knees, rocking,</L>
          <L>as if grief could be folded into something smaller.</L>
          <L>The children said nothing—</L>
          <L>just watched their childhood turn to cinder.</L>
        </div>
        <div style={S.stanza}>
          <L>I was there.</L>
          <L>Close enough to see their breath rising like ghosts.</L>
          <L>Close enough to feel the heat against my skin.</L>
          <L>Close enough to do something—</L>
          <L>but didn't.</L>
        </div>
        <div style={S.stanza}>
          <L>None of us did.</L>
        </div>
        <div style={S.stanza}>
          <L>The crowd swayed like wheat in the firelight,</L>
          <L>eyes catching flickers of something primal, electric.</L>
          <L>A man murmured, "Damn shame,"</L>
          <L>but didn't look away.</L>
          <L>A woman clutched her chest like she was watching</L>
          <L>a movie that moved her just enough</L>
          <L>but not too much.</L>
        </div>
        <div style={S.stanza}>
          <L>And then there were the ones recording.</L>
          <L>The ones angling for the best shot,</L>
          <L>the perfect moment where tragedy met composition.</L>
          <L>A burning house, framed just so.</L>
          <L>History turned into content.</L>
        </div>
        <div style={S.stanza}>
          <L>I watched them watching.</L>
          <L>Felt the sick little thrill of being close to ruin,</L>
          <L>of witnessing something raw and unfiltered.</L>
          <L>Did they feel it too? That pulse of schadenfreude<Sup n="1" />,</L>
          <L>that whisper of at least it's not me?</L>
        </div>
        <div style={S.stanza}>
          <L>The fire took its time.</L>
          <L>It hollowed out the walls,</L>
          <L>swallowed their names, their histories, their proofs of existence.</L>
          <L>Someone whispered, how awful.</L>
          <L>Someone else said, Jesus, it's beautiful.</L>
        </div>
        <div style={S.stanza}>
          <L>And I—</L>
          <L>I did nothing but remember.</L>
          <L>Because maybe memory is the only currency that matters.</L>
          <L>Or maybe it's just another way of stealing.</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> A German term meaning "pleasure derived from another's misfortune." Used here to suggest a voyeuristic thrill in witnessing destruction.</p>
      </div>
    </div>
  );
}
