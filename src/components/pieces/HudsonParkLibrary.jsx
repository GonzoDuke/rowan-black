import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  headnoteLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' },
  headnote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#5a6070', marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.06)' },
  text: { fontFamily: "'Nothing You Could Do', cursive", fontSize: '18px', lineHeight: 1.35, color: '#1a1d24', marginBottom: '14px' },
  penChange: { fontFamily: "'Nothing You Could Do', cursive", fontSize: '18px', lineHeight: 1.35, color: '#2a4a7a', marginBottom: '14px' },
  penLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#9099a8', fontStyle: 'italic', marginBottom: '8px', marginTop: '20px' },
  bullet: { fontFamily: "'Nothing You Could Do', cursive", fontSize: '17px', lineHeight: 1.35, color: '#1a1d24', paddingLeft: '14px', marginBottom: '3px' },
  bulletBlock: { marginBottom: '14px' },
  conditionNote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#9099a8', fontStyle: 'italic', marginBottom: '12px' },
  blurred: { fontFamily: "'Nothing You Could Do', cursive", fontSize: '18px', lineHeight: 1.35, color: 'rgba(26,29,36,0.3)', marginBottom: '14px' },
  hastyNote: { fontFamily: "'Nothing You Could Do', cursive", fontSize: '17px', lineHeight: 1.35, color: '#5a6070', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '14px', marginTop: '20px' },
  reminder: { fontFamily: "'Nothing You Could Do', cursive", fontSize: '16px', lineHeight: 1.35, color: '#9099a8', marginTop: '16px' },
  sup: { fontSize: '12px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '40px', paddingTop: '20px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function HudsonParkLibrary() {
  return (
    <div style={S.outer}>
      <div style={S.headnoteLabel}>Digitized Object</div>
      <div style={S.headnote}>Found tucked between the pages of a library discard in Greenwich Village. The original is written on both sides of a single sheet of loose-leaf paper in two different inks. Coffee damage has rendered portions of the text illegible. Digitized from high-resolution scan.</div>

      <p style={S.text}>Been thinking about gods lately. Not in the religious way exactly. More like… what we bow to now. There's something here about consumption and worship but it's not that simple. Not just "capitalism bad" — though yeah, obviously. But something deeper about how we construct divinity and then just… throw it away?</p>
      <p style={S.text}>Watching people at the Apple store yesterday. The way they touched the devices. Gentle. Reverent almost. Like ancient peoples might have touched sacred objects. But we're designed to abandon these things. Built to need the next version.</p>
      <p style={S.conditionNote}>[coffee ring stain]</p>
      <p style={S.text}>Baudrillard<Sup n="1" /> would probably have something insufferable to say about this. But he'd also probably be right.</p>
      <p style={S.text}>Need to explore:</p>
      <div style={S.bulletBlock}>
        <div style={S.bullet}>● how worship changes shape but not function?</div>
        <div style={S.bullet}>● connection between planned obsolescence and faith?</div>
        <div style={S.bullet}>● something about digital cargo cults maybe?<Sup n="2" /></div>
        <div style={S.bullet}>● landfills as future sacred sites??? (too on nose?)</div>
      </div>
      <p style={S.penLabel}>[later, different pen]</p>
      <p style={S.penChange}>Sitting here watching people pray to ATMs. That's not quite right but it FEELS right. The posture. The hope. The disappointment. The way they walk away changed.</p>
      <p style={S.penChange}>What does it mean that our gods have customer service numbers?</p>
      <p style={S.text}>Something here about how disposability becomes sacred. Not just objects but ideas, connections, beliefs. We make gods just to leave them. But why? And what happens to abandoned gods? Do they hang around like spiritual radiation?</p>
      <p style={S.conditionNote}>[spilled coffee, ink blurred]</p>
      <p style={S.blurred}>Keep coming back to landfills. Mountains we built to house our abandoned faiths. Every broken phone a little fallen angel. Too metaphorical? But there's something there about archaeology and future anthropologists.</p>
      <p style={S.text}>Brief thought: we didn't just monetize faith, we made faith disposable. Optional upgrade. Temporary as a software update.</p>
      <p style={S.text}>Maybe that's what separates us from ancient peoples - not that we worship different things, but that we built obsolescence into our gods from the start.</p>
      <p style={S.text}>Need to read more about:</p>
      <div style={S.bulletBlock}>
        <div style={S.bullet}>● digital temporality</div>
        <div style={S.bullet}>● consumer psychology</div>
        <div style={S.bullet}>● waste management??? (actually though)</div>
        <div style={S.bullet}>● pre-industrial concepts of permanence</div>
      </div>
      <div style={S.reminder}>Remember to get<br />phone screen fixed.<br />Irony noted.</div>
      <div style={S.hastyNote}>[hastily written at bottom:]<br /><br />Getting too academic.<br />The real thing is simpler maybe.<br />Watched a kid cry today when his tablet died.<br />Modern death of gods = battery percentage?</div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Jean Baudrillard (1929–2007), French philosopher known for his theories on hyperreality and simulacra.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Cargo cults were religious movements that emerged in the Pacific Islands, where indigenous groups ritually imitated Western technology in hopes of summoning material goods.</p>
      </div>
    </div>
  );
}
