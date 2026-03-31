import React from 'react';

const S = {
  outer: { maxWidth: '680px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  blog: {
    background: '#e2e0db', border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '6px', overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  header: {
    background: '#e8e0d8',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    padding: '14px 20px',
  },
  blogTitle: {
    fontFamily: "'Nothing You Could Do', cursive", fontSize: '18px', fontWeight: 600,
    color: '#4a4040', marginBottom: '2px',
  },
  blogSubtitle: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    color: '#8a7a70', letterSpacing: '0.04em',
  },
  nav: {
    background: '#f0ebe4', borderBottom: '1px solid rgba(0,0,0,0.06)',
    padding: '6px 20px', display: 'flex', gap: '16px', flexWrap: 'wrap',
  },
  navItem: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    color: '#8a7a70', textDecoration: 'underline', cursor: 'default',
  },
  entry: { padding: 'clamp(16px, 4vw, 28px) clamp(16px, 4vw, 24px)' },
  meta: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px',
    color: '#9099a8', marginBottom: '16px', lineHeight: 1.6,
  },
  metaLabel: { color: '#aaa', marginRight: '4px' },
  subject: {
    fontFamily: "'Libre Baskerville', Georgia, serif",
    fontSize: '20px', fontWeight: 500, color: '#1a1d24',
    marginBottom: '16px',
  },
  text: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px',
    lineHeight: 1.8, color: '#2a2a2a', marginBottom: '14px',
  },
  bullet: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px',
    lineHeight: 1.7, color: '#2a2a2a', paddingLeft: '16px',
    marginBottom: '4px',
  },
  bulletList: { marginBottom: '14px' },
  sectionHead: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
    fontWeight: 600, color: '#1a1d24', letterSpacing: '0.04em',
    marginTop: '20px', marginBottom: '8px',
  },
  footer: {
    borderTop: '1px solid rgba(0,0,0,0.06)', padding: '10px 20px',
    background: '#f8f5f0', display: 'flex', gap: '16px', flexWrap: 'wrap',
  },
  footerItem: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    color: '#aaa', cursor: 'default',
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
const B = ({ children }) => <div style={S.bullet}>● {children}</div>;

export default function LateNightNotes() {
  return (
    <div style={S.outer}>
      <div style={S.blog}>
        <div style={S.header}>
          <div style={S.blogTitle}>signal_and_noise</div>
          <div style={S.blogSubtitle}>just frequencies and static</div>
        </div>
        <div style={S.nav}>
          <span style={S.navItem}>recent entries</span>
          <span style={S.navItem}>archive</span>
          <span style={S.navItem}>friends</span>
          <span style={S.navItem}>profile</span>
        </div>

        <div style={S.entry}>
          <div style={S.meta}>
            <span style={S.metaLabel}>date:</span> sometime, 3am-ish<br />
            <span style={S.metaLabel}>mood:</span> frequencies<br />
            <span style={S.metaLabel}>music:</span> static between stations
          </div>

          <div style={S.subject}>(written during insomnia, watching shadows move)</div>

          <p style={S.text}>Night feels different when you're the only one awake. Suburbs get weird after 3AM everything too quiet but also too loud somehow. The humming from the power lines sounds like voices.<Sup n="1" /> The gaps between streetlights feel like they mean something.</p>

          <p style={S.text}>Mrs. XXXXXX says I need to write about "real things." Nature. Emotions. Whatever. But real isn't what it used to be. Real is:</p>
          <div style={S.bulletList}>
            <B>empty parking lots at midnight</B>
            <B>the way Circuit City's windows reflect moonlight<Sup n="2" /></B>
            <B>how silence changes when the power goes out</B>
            <B>what happens in the spaces between AM stations<Sup n="3" /></B>
          </div>

          <p style={S.text}>Notes keep piling up under my bed. Mom "organizes" my room, throws away anything too dark. Says she's worried. But she doesn't get it - none of this is dark. It's just what happens when you pay attention.</p>

          <p style={S.text}>Sometimes I try writing like those Beat poets I found in the library's forgotten corners - Ginsberg's cosmic consciousness stuff but filtered through CPU architecture. Or I'll attempt Pynchon's paranoid systems theory but end up with fragments about how instant messaging is actually a form of technological glossolalia<Sup n="4" /> (look it up).</p>

          <div style={S.sectionHead}>OBSERVATION LOG:</div>

          <div style={S.sectionHead}>1. THE QUIET SPOTS</div>
          <p style={S.text}>Found places where sound doesn't work right:</p>
          <div style={S.bulletList}>
            <B>behind the abandoned Blockbuster<Sup n="5" /></B>
            <B>under the train bridge at dawn</B>
            <B>that corner of the library nobody visits</B>
            <B>the middle of empty baseball fields at night</B>
            <B>anywhere during power outages</B>
          </div>

          <div style={S.sectionHead}>2. THE GAPS</div>
          <p style={S.text}>Things nobody else notices:</p>
          <div style={S.bulletList}>
            <B>dead air between radio stations</B>
            <B>spaces between fence posts</B>
            <B>missing seconds between traffic light changes</B>
            <B>whatever lives in defunct payphones</B>
            <B>the nothing that fills empty stores</B>
          </div>

          <div style={S.sectionHead}>3. THE CHANGES</div>
          <p style={S.text}>Everything's shifting when we're not looking:</p>
          <p style={S.text}>Malls dying<br />Phone booths vanishing<br />New towers rising<br />Screens everywhere</p>
          <p style={S.text}>(nobody else seems concerned about this)</p>

          <div style={S.sectionHead}>4. THE CONSTANTS</div>
          <p style={S.text}>Some things stay:</p>
          <p style={S.text}>Stars<br />Crickets<br />Power line hum<br />Distant trains<br />The way night feels endless at fifteen</p>

          <div style={S.sectionHead}>5. QUESTIONS WITHOUT ANSWERS</div>
          <div style={S.bulletList}>
            <B>Why do dead stores still glow?<Sup n="6" /></B>
            <B>Where do radio signals really go?</B>
            <B>What happens to lost satellite broadcasts?</B>
            <B>Who remembers old frequencies?</B>
            <B>How many empty spaces until everything's empty?</B>
          </div>

          <p style={S.text}>I know this isn't normal poetry. But normal stopped making sense somewhere between midnight and dawn. This is just how my brain works now. Everything's connected but nothing touches. Like those weird quantum physics books in the library - everything's both there and not there at the same time.</p>
        </div>

        <div style={S.footer}>
          <span style={S.footerItem}>0 comments</span>
          <span style={S.footerItem}>|</span>
          <span style={S.footerItem}>leave a comment</span>
          <span style={S.footerItem}>|</span>
          <span style={S.footerItem}>add to memories</span>
        </div>
      </div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Electrical power lines emit a low-frequency hum due to electromagnetic vibrations.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Circuit City was a major electronics retailer that went bankrupt in 2008. The reference places this note in the early 2000s, when many locations were still open.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> AM radio, especially at night, can have long stretches of static between stations.</p>
        <p style={S.note}><span style={S.noteNum}>4</span> Glossolalia, or "speaking in tongues," is often associated with religious trance states.</p>
        <p style={S.note}><span style={S.noteNum}>5</span> Blockbuster was a video rental chain that declined in the late 2000s due to digital streaming.</p>
        <p style={S.note}><span style={S.noteNum}>6</span> Many abandoned stores leave their signage illuminated long after closing. The eerie persistence of artificial light is a recurring image in Black's later works.</p>
      </div>
    </div>
  );
}
