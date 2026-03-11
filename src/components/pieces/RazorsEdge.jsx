import React from 'react';

const S = {
  outer: { maxWidth: '660px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  notebook: {
    background: '#faf8f4', border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '2px', overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  nbHeader: {
    padding: '10px clamp(16px, 4vw, 24px) 6px',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    color: '#aaa', letterSpacing: '0.04em', fontStyle: 'italic',
    borderBottom: '1px solid rgba(0,0,0,0.04)',
  },
  body: {
    padding: 'clamp(20px, 4vw, 28px) clamp(16px, 5vw, 32px)',
  },
  stanza: { marginBottom: '24px' },
  line: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '17px', lineHeight: 1.85, color: '#2a2520', display: 'block',
  },
  subtitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '15px', fontStyle: 'italic', color: '#6a6050',
    display: 'block', marginBottom: '24px',
  },
  marginNote: {
    fontFamily: "'Caveat', cursive", fontSize: '15px',
    lineHeight: 1.5, color: '#7a6a50',
    marginLeft: 'clamp(12px, 5vw, 36px)', paddingLeft: '12px',
    borderLeft: '2px solid rgba(0,0,0,0.06)',
    marginTop: '10px', marginBottom: '14px',
  },
  strikethrough: {
    textDecoration: 'line-through', color: '#8a8070',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '16px', lineHeight: 1.85, display: 'block',
  },
  // ATM receipt
  receiptWrap: {
    marginTop: '32px', display: 'flex', justifyContent: 'flex-end',
  },
  receipt: {
    background: '#fefefa',
    border: '1px solid rgba(0,0,0,0.06)',
    borderRadius: '1px',
    padding: '14px 16px',
    maxWidth: '240px',
    width: '100%',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    transform: 'rotate(1.5deg)',
  },
  receiptHeader: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
    color: '#bbb', letterSpacing: '0.06em', textTransform: 'uppercase',
    marginBottom: '10px', textAlign: 'center',
    borderBottom: '1px dashed rgba(0,0,0,0.08)', paddingBottom: '8px',
  },
  receiptLine: {
    fontFamily: "'Caveat', cursive", fontSize: '14px',
    lineHeight: 1.6, color: '#4a4a4a', marginBottom: '2px',
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

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function RazorsEdge() {
  return (
    <div style={S.outer}>
      <div style={S.notebook}>
        <div style={S.nbHeader}>Ritual Coffee, Valencia St. — Feb 2015</div>

        <div style={S.body}>
          <div style={S.stanza}>
            <L>Night peels back like startup promises,</L>
            <L>layer by layer of venture capital dreams.</L>
            <L>Silence cuts deep in the Mission—</L>
            <L>a scalpel carving thought from noise,</L>
            <L>authentic from artificial,</L>
            <L>displacement from disruption.</L>
          </div>

          <div style={S.stanza}>
            <L>We build our lives on fictions</L>
            <L>(the city built on fault lines knows this).</L>
            <L>On borrowed truths and borrowed time,</L>
            <L>on words varnished smooth as iPhone glass,</L>
            <L>polished to hide the human grain beneath.</L>
            <L>But varnish cracks in the dark</L>
            <L>of boarded Mission storefronts.</L>
          </div>

          <div style={S.marginNote}>check B. re: simulation/simulacra</div>

          <div style={S.stanza}>
            <L>Scrape it away.</L>
            <L>The stories—</L>
            <L>about innovation,</L>
            <L>about progress,</L>
            <L>about changing the world</L>
            <L>one app at a time—</L>
            <L>cling like moss to Victorian stone.<Sup n="1" /></L>
            <L>You scratch at equity packages,</L>
            <L>you pull at stock options,</L>
            <L>and still they hold.</L>
          </div>

          <div style={S.stanza}>
            <L>Once, I built a website in high school.</L>
            <L>HTML scraped together like a mixtape,</L>
            <L>cursor blinking like a heartbeat.</L>
            <L>The code bent to my hands,</L>
            <L>a small, bright kingdom</L>
            <L>where nothing was for sale.</L>
          </div>

          <div style={S.stanza}>
            <L>I still remember an AIM chat—</L>
            <L>midnight, blue glow,</L>
            <L>a screen name I only knew as a voice in the dark.<Sup n="2" /></L>
            <L>No algorithms, no engagement metrics,</L>
            <L>just two ghosts typing toward morning,</L>
            <L>untethered, untracked, real.</L>
          </div>

          <div style={S.stanza}>
            <L>A summer night, dial-up humming,</L>
            <L>the modem speaking in static tongues.</L>
            <L>Outside, fireflies signaled to each other—</L>
            <L>bright, brief, unrepeatable.</L>
            <L>Inside, I wrote my first blog post,</L>
            <L>believing words could change something.</L>
            <L>I was wrong.</L>
          </div>

          <div style={S.stanza}>
            <L>The world is not what it seems</L>
            <L>(especially here, especially now).</L>
            <L>It hums with illusions:</L>
            <L>laws as fragile as terms of service,</L>
            <L>norms as fleeting as battery life.</L>
            <L>Beneath the IPOs and ICOs,</L>
            <L>you find nothing solid.</L>
          </div>

          <div style={S.marginNote}>Digital feudalism —</div>

          <div style={S.stanza}>
            <span style={S.strikethrough}>All empires fall the same way</span>
            <span style={S.strikethrough}>bytes to bits to nothing</span>
            <span style={S.strikethrough}>servers humming their own requiem</span>
          </div>

          <div style={S.marginNote}>Z's critique of ideology??</div>

          <div style={S.stanza}>
            <L>There is beauty in destruction—</L>
            <L>in watching unicorns fall,</L>
            <L>in terminal velocity,</L>
            <L>in the splinters and dust</L>
            <L>of disrupted expectations.</L>
          </div>

          <div style={S.stanza}>
            <L>The ruins of Web 2.0 whisper:</L>
            <L>all this was built to bind you.</L>
          </div>

          <div style={S.marginNote}>parallel w/ real estate?</div>

          <div style={S.stanza}>
            <L>Strip it all bare.</L>
            <L>You are left with weight:</L>
            <L>the heavy truth of irrelevance,</L>
            <L>the ache of obsolescence,</L>
            <L>the sharp clarity of</L>
            <L>how little your code controls.</L>
          </div>

          <div style={S.stanza}>
            <L>Only this remains:</L>
            <L>you are not free—</L>
            <L>but you could be.</L>
          </div>

          <div style={S.marginNote}>come back to systemic collapse</div>

          {/* ATM receipt */}
          <div style={S.receiptWrap}>
            <div style={S.receipt}>
              <div style={S.receiptHeader}>ATM receipt found tucked in notebook</div>
              <div style={S.receiptLine}>- automation -{'>'} alienation</div>
              <div style={S.receiptLine}>- check Baudrillard quote re: desert of the real</div>
              <div style={S.receiptLine}>- something about the ghost in the machine?</div>
              <div style={S.receiptLine}>- what happens when the servers go dark?</div>
            </div>
          </div>
        </div>
      </div>

      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> San Francisco's Mission District contains many Victorian-era buildings, now surrounded by rapid tech-driven change.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> AOL Instant Messenger (AIM) was a major platform for digital communication in the late 1990s and early 2000s.</p>
      </div>
    </div>
  );
}
