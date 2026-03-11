import React from 'react';

const S = {
  outer: { maxWidth: '680px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  surface: {
    background: '#f7f4ee', border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '2px', overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    position: 'relative',
  },
  coffeeRing: {
    position: 'absolute', top: '20px', right: '24px',
    width: '72px', height: '72px', borderRadius: '50%',
    border: '2px solid rgba(120,90,50,0.06)',
    background: 'radial-gradient(circle, rgba(120,90,50,0.02) 60%, transparent 70%)',
    pointerEvents: 'none',
  },
  header: {
    padding: '16px clamp(16px, 4vw, 24px) 8px',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    color: '#9099a8', letterSpacing: '0.04em', fontStyle: 'italic',
  },
  body: {
    padding: '8px clamp(16px, 4vw, 24px) clamp(20px, 4vw, 28px)',
    position: 'relative',
  },
  prose: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '16px', lineHeight: 1.85, color: '#2a2520',
    marginBottom: '16px',
  },
  marginNote: {
    fontFamily: "'Caveat', cursive", fontSize: '15px',
    lineHeight: 1.5, color: '#7a6a50',
    marginLeft: 'clamp(12px, 5vw, 40px)', paddingLeft: '12px',
    borderLeft: '2px solid rgba(0,0,0,0.06)',
    marginTop: '12px', marginBottom: '16px',
  },
  insetBlock: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '15px', lineHeight: 1.75, color: '#4a4030',
    marginLeft: 'clamp(12px, 4vw, 28px)',
    marginBottom: '16px',
  },
  sup: { fontSize: '10px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '40px', paddingTop: '20px' },
  annotationLabel: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600,
    color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px',
  },
  note: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75,
    color: '#6a7080', marginBottom: '8px',
  },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function GameOfUno() {
  return (
    <div style={S.outer}>
      <div style={S.surface}>
        <div style={S.coffeeRing} />

        <div style={S.header}>
          The Rose Establishment, Salt Lake City, UT — 2015
        </div>

        <div style={S.body}>
          <p style={S.prose}>37 million secrets just became data.<Sup n="1" /> Been sitting with that number all morning. Not focusing on the obvious - the relationships, betrayals, tabloid headlines - but on the sheer weight of all that hidden wanting transformed into spreadsheets. Each username a person who thought they'd found a safe place to be their unsafe self.</p>

          <div style={S.insetBlock}>
            When I was in SF, J. used to talk about "frictionless relationships" like it was the next great disruption waiting to happen. Silicon Valley promises: making human connection scalable, optimizable, clean. Now I'm watching 37 million optimized connections turn to weapons. Every profile a perfect artifact of how we thought technology could solve loneliness.
          </div>

          <div style={S.marginNote}>
            look up Bauman's<br />
            "Liquid Love" something there<br />
            about digital bonds?
          </div>

          <p style={S.prose}>"Data breach" sounds too sterile. Should be a better term for this mass exposure of midnight decisions, carefully crafted profiles, secrets people tested out like new clothes. All those digital speakeasies where people thought they could try on different versions of themselves - now just columns in someone else's database.</p>

          <div style={S.marginNote}>
            parallel<br />
            between<br />
            database<br />
            structures and<br />
            confession<br />
            structures?
          </div>

          <div style={S.insetBlock}>
            Not interested in the morality. Or not just the morality. There's something deeper here about promises - what we thought technology could promise us. Anonymity and connection. The dream of being known and unknown in exactly the right proportions. Each profile a carefully curated ratio of truth and need.
          </div>

          <p style={S.prose}>What happens to all those digital ghosts now? Not the real people (though yes, them too), but all those versions of ourselves we thought we could safely contain in passwords and usernames? Every leaked account is someone's alternate reality colliding with their actual one. The fantasy of frictionless intimacy meeting the friction of real lives.</p>

          <p style={S.prose}>37 million people thought they'd found a place to be safely unsafe. Turns out nowhere is friction-free after all. Maybe that's what Silicon Valley never understood - human connection isn't something you can optimize. The mess isn't a bug in the system. The mess is the point.</p>

          <div style={S.marginNote}>
            consider - digital intimacy vs physical intimacy: one can be lost without being touched
          </div>
        </div>
      </div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> In the 2015 Ashley Madison data breach, hackers leaked the personal information of approximately 37 million users of the dating website known for facilitating extramarital affairs. The breach exposed not only names but also messages, preferences, and personal details.</p>
      </div>
    </div>
  );
}
