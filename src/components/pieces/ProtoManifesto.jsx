import React from 'react';

const S = {
  outer: { maxWidth: '680px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  fileChrome: {
    background: '#ffffff', border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: '6px', overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  titleBar: {
    background: 'linear-gradient(180deg, #f0f1f5 0%, #e4e5ea 100%)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  titleBarLeft: { display: 'flex', alignItems: 'center', gap: '10px' },
  docIcon: {
    width: '16px', height: '20px', background: '#2b5797', borderRadius: '2px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '8px', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: '#fff',
  },
  fileName: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#5a6070' },
  dots: { display: 'flex', gap: '6px' },
  dot: (c) => ({ width: '12px', height: '12px', borderRadius: '50%', background: c }),
  toolbar: {
    background: '#f8f9fb', borderBottom: '1px solid rgba(0,0,0,0.06)',
    padding: '5px 14px', display: 'flex', gap: '12px', flexWrap: 'wrap',
  },
  toolbarItem: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#9099a8' },
  docBody: { padding: 'clamp(20px, 5vw, 36px) clamp(20px, 5vw, 44px)', background: '#ffffff' },
  section: { marginBottom: '28px' },
  sectionNum: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
    color: '#9099a8', marginBottom: '10px', display: 'block',
  },
  line: {
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '16px',
    lineHeight: 1.85, color: '#1a1d24', display: 'block',
  },
  dim: { color: '#9099a8' },
  fileInfo: {
    borderTop: '1px solid rgba(0,0,0,0.06)', padding: '10px 14px',
    display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px',
    background: '#f8f9fb',
  },
  fileMeta: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: '#9099a8' },
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
const Dim = ({ children }) => <span style={S.dim}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;
const Section = ({ num, children }) => (
  <div style={S.section}><span style={S.sectionNum}>{num}.</span>{children}</div>
);

export default function ProtoManifesto() {
  return (
    <div style={S.outer}>
      <div style={S.fileChrome}>
        <div style={S.titleBar}>
          <div style={S.titleBarLeft}>
            <div style={S.docIcon}>W</div>
            <span style={S.fileName}>proto_manifesto_v2.docx</span>
          </div>
          <div style={S.dots}>
            <div style={S.dot('#ff5f57')} /><div style={S.dot('#febc2e')} /><div style={S.dot('#28c840')} />
          </div>
        </div>
        <div style={S.toolbar}>
          {['File','Edit','View','Insert','Format','Tools','Help'].map(t =>
            <span key={t} style={S.toolbarItem}>{t}</span>
          )}
        </div>
        <div style={S.docBody}>
          <Section num="1">
            <L>my computer makes these sounds at 3AM</L><L>like it's trying to tell me something</L><L>important</L>
            <L>about how lonely satellites must be</L><L>always orbiting</L><L>never touching</L><L>just like us in the suburbs</L>
            <L>&nbsp;</L>
            <L>sometimes i think the dial-up noise</L><L>is actually the sound of machines</L><L>trying to remember how to cry</L>
          </Section>
          <Section num="2">
            <L>in the mall food court everyone's face</L><L>is lit up blue from their nokia screens</L><L>like they're drowning in digital oceans</L>
            <L>&nbsp;</L><L style={{ letterSpacing: '0.6em', textAlign: 'center', display: 'block' }}>s i n k i n g</L><L>&nbsp;</L>
            <L>slower than the loading bar</L><L>on my gateway 2k<Sup n="1" /></L><L>when i try to download</L><L>happiness.exe</L>
            <L><Dim>[file not found]</Dim></L>
          </Section>
          <Section num="3">
            <L>dear AIM buddy list<Sup n="2" />:</L><L>i am always "away"</L><L>even when i'm here</L><L>because here isn't</L><L>anywhere anymore</L>
            <L>&nbsp;</L><L>status: contemplating how</L><L>the Best Buy sign</L><L>looks like god's</L><L>blue tears at 2AM</L>
            <L>when ohio feels</L><L>like a loading screen</L><L>that never finishes</L>
          </Section>
          <Section num="4">
            <L>hey mrs henderson:</L><L>sorry this isn't a normal poem</L><L>with trees and flowers and stuff</L>
            <L>but have you noticed how</L><L>the computer lab feels more alive</L><L>than the actual world sometimes?</L>
            <L>like maybe we're all just</L><L>background processes</L><L>running in the suburbs</L>
            <L>waiting for something</L><L>to ctrl+alt+delete us</L><L>into real life</L>
          </Section>
          <Section num="5">
            <L>my friend marcus says</L><L>this is just teen angst</L><L>but i think it's more like</L>
            <L>system32.dll<Sup n="3" /> is corrupted</L><L>and nobody knows how to</L><L>fix what's breaking</L>
            <L>inside the machine</L><L>inside my head</L><L>inside america</L>
          </Section>
          <Section num="6">
            <L>every night i watch</L><L>the cursor blink</L><L>like a digital heartbeat</L>
            <L>wondering if computers</L><L>dream of electric kids<Sup n="4" /></L><L>sitting in dark rooms</L>
            <L>trying to write their way</L><L>out of suburban firewalls</L>
          </Section>
          <Section num="7">
            <L>mom keeps asking why</L><L>i can't write "normal" things</L><L>like the other kids</L>
            <L>but normal broke</L><L>when the millennium bug<Sup n="5" /></L><L>didn't end the world</L>
            <L>and we all had to keep</L><L>pretending everything</L><L>was still working</L>
          </Section>
          <Section num="8">
            <L>this is what it feels like:</L><L>static in my veins</L><L>code in my dreams</L><L>error messages</L>
            <L>where my thoughts</L><L>should be</L><L>&nbsp;</L><L>and maybe that's okay</L><L>maybe we're all just</L>
            <L>learning to speak</L><L>in ones and zeros</L><L>because human languages</L><L>can't contain what it means</L><L>to grow up digital</L>
          </Section>
          <Section num="9">
            <L>so yeah this is why</L><L>i write like this</L><L>all fragmented and weird</L><L>because that's how</L>
            <L>the world comes in now:</L><L>through screens</L><L>through wires</L><L>through the gaps</L>
            <L>between real</L><L>and virtual</L>
          </Section>
          <Section num="10">
            <L>p.s. to whoever finds this</L><L>on the school network:</L><L>please don't tell</L><L>mrs henderson</L>
            <L>that instead of</L><L>analyzing poetry</L><L>i've been trying</L><L>to debug my soul</L>
            <L>&nbsp;</L><L><Dim>[END OF FILE]</Dim></L><L><Dim>[Last modified: 08/15/2001 2:37 AM]</Dim></L><L><Dim>[File size: 2.3 KB]</Dim></L>
          </Section>
        </div>
        <div style={S.fileInfo}>
          <span style={S.fileMeta}>proto_manifesto_v2.docx</span>
          <span style={S.fileMeta}>Last saved: 08/15/2001 02:37 AM</span>
          <span style={S.fileMeta}>2.3 KB</span>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Gateway 2000 was a major computer manufacturer in the 1990s and early 2000s, recognizable for its black-and-white cow-print branding.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A popular messaging platform in the late 1990s and early 2000s. Users could set an "away message" to indicate they weren't at their computer.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> A critical Windows system file. If corrupted or deleted, the operating system may become unstable or fail to boot.</p>
        <p style={S.note}><span style={S.noteNum}>4</span> Reference to Philip K. Dick's 1968 novel Do Androids Dream of Electric Sheep?, later adapted into Blade Runner.</p>
        <p style={S.note}><span style={S.noteNum}>5</span> A widespread fear that older computer systems would fail when the year changed from 1999 to 2000.</p>
      </div>
    </div>
  );
}
