import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  essay: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '18px', lineHeight: 2, color: '#1a1d24',
  },
  epigraph: {
    borderLeft: '2px solid rgba(0,0,0,0.08)',
    paddingLeft: '20px', marginBottom: '32px',
  },
  epigraphText: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '16px', lineHeight: 1.7, color: '#5a6070',
    fontStyle: 'italic', display: 'block',
  },
  epigraphSource: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px',
    color: '#9099a8', marginTop: '8px', display: 'block',
  },
  para: { marginBottom: '20px' },
  closing: {
    marginTop: '36px', textAlign: 'left',
  },
  closingLine: {
    display: 'block', fontWeight: 500,
  },
  sup: { fontSize: '12px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
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

export default function ReYouMightBeTheGhost() {
  return (
    <div style={S.outer}>
      <div style={S.essay}>
        <p style={S.para}>Someone quoted me today.</p>

        <div style={S.epigraph}>
          <span style={S.epigraphText}>"You realize: You might be the ghost."</span>
          <span style={S.epigraphSource}>— City of Ghosts (2012, draft)</span>
        </div>

        <p style={S.para}>They posted it like wisdom, like revelation wrapped in neon melancholy. A line I scribbled in a notebook, unfinished, never meant to be scripture. It wasn't even the final draft. I left margin notes. I almost changed it. But that's the version they found.<Sup n="1" /></p>

        <p style={S.para}>The comments filled in the blanks:</p>

        <p style={S.para}>"God, same."<br />"This hit too hard."<br />"I feel so fucking unseen."</p>

        <p style={S.para}>Unseen. That's the part they latched onto. Like I was writing about loneliness. Like I meant invisibility when I wrote ghost.</p>

        <p style={S.para}>But ghosts leave traces. That was always the horror of it. A handprint on fogged glass. A name carved under a school desk. A song stuck in someone's head, years after they forgot your voice. The flicker of streetlights that has nothing to do with you — but tell me it doesn't feel that way.</p>

        <p style={S.para}>A ghost is not someone forgotten. A ghost is someone remembered too well.</p>

        <p style={S.para}>And cities don't forget. They don't forgive, either. They just wait.</p>

        <p style={S.para}>You leave thinking you're free, but try coming back. Try walking old streets without feeling something slip between your ribs. Try passing places that should mean nothing, only to find they still remember you.</p>

        <p style={S.para}>Because here's the thing: ghosts don't haunt places. Places haunt ghosts.</p>

        <p style={S.para}>Cities keep the echoes of your footsteps, the ghosts of your younger selves. They store your mistakes in the bones of buildings. They trap your laughter between subway tiles. They hold your absence like a grudge.</p>

        <p style={S.para}>You don't drift through them unseen. You don't disappear. You just become part of the architecture, a presence woven into the streets.</p>

        <p style={S.para}>And maybe I'm wrong about all of this. Maybe someone will quote this in ten years, misread it, make it mean something I never intended. Maybe I'll wake up in a decade and hate every word of it. Maybe I'm still getting it wrong.</p>

        <div style={S.closing}>
          <p style={S.para}>But I know this much —</p>
          <p style={S.para}>
            <span style={S.closingLine}>You are not invisible.</span>
            <span style={S.closingLine}>You are not a ghost.</span>
            <span style={S.closingLine}>You are residual.</span>
          </p>
        </div>
      </div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Indicates multiple drafts exist, perhaps with variations in tone or meaning.</p>
      </div>
    </div>
  );
}
