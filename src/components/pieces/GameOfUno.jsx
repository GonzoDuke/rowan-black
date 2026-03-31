import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  headnoteLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' },
  headnote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#5a6070', marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.06)' },
  prose: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', lineHeight: 1.8, color: '#1a1d24', marginBottom: '16px' },
  inset: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', lineHeight: 1.75, color: '#3a3a3a', marginLeft: 'clamp(8px, 3vw, 20px)', marginBottom: '16px' },
  marginNote: { fontFamily: "'Nothing You Could Do', cursive", fontSize: '16px', lineHeight: 1.35, color: '#5a6070', paddingRight: '12px', borderRight: '2px solid rgba(0,0,0,0.06)', textAlign: 'right', marginTop: '10px', marginBottom: '16px' },
  sup: { fontSize: '10px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '40px', paddingTop: '20px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function GameOfUno() {
  return (
    <div style={S.outer}>
      <div style={S.headnoteLabel}>Digitized Object</div>
      <div style={S.headnote}>Found folded inside a Game of Uno box at a thrift store in Salt Lake City. Written on a paper napkin from the Rose Establishment. The original is too fragile to handle without further deterioration. Transcribed from photographs taken at the time of recovery.</div>

      <p style={S.prose}>37 million secrets just became data.<Sup n="1" /> Been sitting with that number all morning. Not focusing on the obvious - the relationships, betrayals, tabloid headlines - but on the sheer weight of all that hidden wanting transformed into spreadsheets. Each username a person who thought they'd found a safe place to be their unsafe self.</p>
      <div style={S.inset}>When I was in SF, J. used to talk about "frictionless relationships" like it was the next great disruption waiting to happen. Silicon Valley promises: making human connection scalable, optimizable, clean. Now I'm watching 37 million optimized connections turn to weapons. Every profile a perfect artifact of how we thought technology could solve loneliness.</div>
      <div style={S.marginNote}>look up Bauman's "Liquid Love" something there about digital bonds?</div>
      <p style={S.prose}>"Data breach" sounds too sterile. Should be a better term for this mass exposure of midnight decisions, carefully crafted profiles, secrets people tested out like new clothes. All those digital speakeasies where people thought they could try on different versions of themselves - now just columns in someone else's database.</p>
      <div style={S.marginNote}>parallel between database structures and confession structures?</div>
      <div style={S.inset}>Not interested in the morality. Or not just the morality. There's something deeper here about promises - what we thought technology could promise us. Anonymity and connection. The dream of being known and unknown in exactly the right proportions. Each profile a carefully curated ratio of truth and need.</div>
      <p style={S.prose}>What happens to all those digital ghosts now? Not the real people (though yes, them too), but all those versions of ourselves we thought we could safely contain in passwords and usernames? Every leaked account is someone's alternate reality colliding with their actual one. The fantasy of frictionless intimacy meeting the friction of real lives.</p>
      <p style={S.prose}>37 million people thought they'd found a place to be safely unsafe. Turns out nowhere is friction-free after all. Maybe that's what Silicon Valley never understood - human connection isn't something you can optimize. The mess isn't a bug in the system. The mess is the point.</p>
      <div style={S.marginNote}>consider - digital intimacy vs physical intimacy: one can be lost without being touched</div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> In the 2015 Ashley Madison data breach, hackers leaked the personal information of approximately 37 million users of the dating website known for facilitating extramarital affairs.</p>
      </div>
    </div>
  );
}
