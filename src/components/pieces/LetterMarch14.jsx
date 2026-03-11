import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  letter: {
    background: '#faf8f4', border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '2px', overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    position: 'relative',
  },
  foldLine: {
    position: 'absolute', left: 0, right: 0,
    height: '1px', background: 'rgba(0,0,0,0.03)',
    top: '33%',
  },
  foldLine2: {
    position: 'absolute', left: 0, right: 0,
    height: '1px', background: 'rgba(0,0,0,0.03)',
    top: '66%',
  },
  address: {
    padding: '28px clamp(20px, 5vw, 36px) 0',
    fontFamily: "'Caveat', cursive", fontSize: '15px',
    color: '#5a5040', lineHeight: 1.5,
  },
  body: {
    padding: 'clamp(16px, 4vw, 24px) clamp(20px, 5vw, 36px)',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '16px', lineHeight: 1.85, color: '#2a2520',
  },
  salutation: { marginBottom: '16px' },
  para: { marginBottom: '14px', textIndent: '24px' },
  paraFirst: { marginBottom: '14px' },
  closing: { marginTop: '24px' },
  signature: {
    fontFamily: "'Caveat', cursive", fontSize: '20px',
    color: '#2a2520', marginTop: '4px',
  },
  // Reply
  replyContainer: {
    marginTop: '24px',
    background: '#f5f2ec', border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '2px', overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    position: 'relative',
  },
  staple: {
    position: 'absolute', top: '-4px', left: '40px',
    width: '16px', height: '8px',
    borderBottom: '2px solid #999',
    borderLeft: '1px solid #aaa',
    borderRight: '1px solid #aaa',
    borderRadius: '0 0 3px 3px',
  },
  replyLabel: {
    padding: '16px clamp(20px, 5vw, 32px) 0',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    color: '#9099a8', letterSpacing: '0.06em', textTransform: 'uppercase',
  },
  replyBody: {
    padding: '12px clamp(20px, 5vw, 32px) clamp(20px, 4vw, 28px)',
    fontFamily: "'Caveat', cursive",
    fontSize: '17px', lineHeight: 1.7, color: '#3a3530',
  },
  scribbledName: {
    display: 'inline-block', background: '#2a2520',
    borderRadius: '1px', height: '12px', width: '80px',
    verticalAlign: 'middle', margin: '0 4px',
  },
  // Annotations
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

export default function LetterMarch14() {
  return (
    <div style={S.outer}>
      {/* The letter */}
      <div style={S.letter}>
        <div style={S.foldLine} />
        <div style={S.foldLine2} />

        <div style={S.address}>
          119 Macdougal Street, NYC<br />
          March 14, 2011
        </div>

        <div style={S.body}>
          <div style={S.salutation}>Dear Mr. XXXXX,</div>

          <p style={S.paraFirst}>I doubt you'll remember me right away, but maybe the memory of that junior-year essay — the one you wrote "provocative but directionless" on — will jog something loose. I'm writing now because your words have been circling my mind like crows over some roadkill truth. You were right, back then, about the ways society isolates us. How the screens and systems draw us into echo chambers of self, cutting us off from the tactile world and each other. But you didn't push far enough, did you? You framed it like an unfortunate byproduct of progress — a glitch in the machine. I'm starting to think the glitch is the machine.</p>

          <p style={S.para}>Take this: I just read that Anonymous claims to have internal Bank of America documents<Sup n="1" /> — proof of fraud, corruption, all the things we always suspected but never had the guts to fully face. The news barely registered in the media. It's like even the most brazen truths get reduced to background noise in the digital din. You told us once that sunlight is the best disinfectant.<Sup n="2" /> But what happens when no one's looking? What happens when the systems designed to expose the truth also numb us to its impact?</p>

          <p style={S.para}>I see it now in everything. Social media feeds that pretend to connect us but only sharpen the ache of comparison. The algorithms that mold our choices before we even know we've made them. I hear it in the hollow ping of a notification, a sound that promises significance but delivers only distraction. You told us to resist these traps, to find the human thread in the digital weave, but you didn't tell us that the thread might be too tangled to follow.</p>

          <p style={S.para}>Still, your lessons stick. You made me love words, even if I hated the rules around them. You talked about "the great conversation" — that dialogue across centuries that connects us to something larger. I believed you then. I still want to. But how does one join a conversation when every voice feels drowned out by the ceaseless hum of machines?</p>

          <p style={S.para}>I don't blame you for not seeing this all the way through. We were on the cusp of it back then, weren't we? MySpace had just taught us how to curate versions of ourselves<Sup n="3" />, but we hadn't yet surrendered our every waking moment to the algorithm. I wonder, if you'd known how deep the rot goes, would you have taught differently? Would you have fought harder?</p>

          <p style={S.para}>There's one thing you said, though, that I still hold close: "The fight for authenticity starts with yourself." I've been trying to take that seriously. Writing helps, though I'm not sure it's authenticity I'm chasing anymore — maybe just clarity. Maybe just a way to shout back at the digital abyss before it swallows us whole.</p>

          <p style={S.para}>I wonder what you'd say to me now, reading this. Maybe you'd say I've finally earned that "provocative" you wrote about, though I doubt you'd let me get away with feeling so smug about it.</p>

          <div style={S.closing}>Thank you for everything,</div>
          <div style={S.signature}>Rowan Black</div>
        </div>
      </div>

      {/* The reply, stapled to the original */}
      <div style={S.replyContainer}>
        <div style={S.staple} />
        <div style={S.replyLabel}>Reply found stapled to original</div>
        <div style={S.replyBody}>
          You assume I didn't push harder because I didn't see the cracks. But I did. I just learned to live with them. You talk about the glitch being the machine like you discovered something new. We knew this already. The problem isn't seeing it — it's figuring out what to do once you do.
          <div style={{ marginTop: '16px' }}>
            — <span style={S.scribbledName}>&nbsp;</span>
          </div>
        </div>
      </div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> A 2011 leak by the hacktivist group Anonymous allegedly contained evidence of fraud at Bank of America.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A phrase attributed to U.S. Supreme Court Justice Louis Brandeis, who argued that transparency is the best way to prevent corruption.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> MySpace, which peaked in the mid-2000s, was one of the first major social media platforms where users could heavily customize profiles, influencing later digital identity construction.</p>
      </div>
    </div>
  );
}
