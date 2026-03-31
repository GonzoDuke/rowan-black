import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  subtitle: { display: 'block', fontStyle: 'italic', color: '#5a6070', marginBottom: '24px', fontSize: '15px' },
  paren: { color: '#7a8090' },
  bracket: { color: '#7a8090' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;
const Br = ({ children }) => <span style={S.bracket}>{children}</span>;

export default function TextingTheRevolution() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.subtitle}>(January 20, 2009)<Sup n="1" /></span>

        <div style={S.stanza}>
          <L>today, hope weighs exactly</L>
          <L>as much as my phone—</L>
          <L>plastic warm from palms</L>
          <L>pressed against possibility.</L>
        </div>
        <div style={S.stanza}>
          <L>three hours of battery left</L>
          <L>to witness history.</L>
        </div>
        <div style={S.stanza}>
          <L>between my fingers,</L>
          <L>messages pulse like hearts:</L>
          <L>"u seeing this?"</L>
          <L>"i can't breathe"</L>
          <L>"everything everything everything"</L>
          <L>each text a prayer</L>
          <L>sent into static.</L>
        </div>
        <div style={S.stanza}>
          <L>on the cracked screen,</L>
          <L>history breaks into pieces:</L>
          <L>YES WE CAN<Sup n="2" /> becomes</L>
          <L>yes we & then</L>
          <L>just yes & then</L>
          <L>static eating words</L>
          <L>faster than we can save them.</L>
        </div>
        <div style={S.stanza}>
          <L>my cousin stands in the crowd,</L>
          <L>a pixel in the multitude,</L>
          <L>her message cuts through:</L>
          <L>"the air tastes like thunder</L>
          <L>& everyone's crying</L>
          <L>& i wish you were here</L>
          <L>& nothing will ever"</L>
          <L><Br>[message incomplete]</Br></L>
        </div>
        <div style={S.stanza}>
          <L>somewhere in Kansas</L>
          <L>a girl holds her phone to the sky</L>
          <L>like an antenna for change</L>
          <L>while her father says</L>
          <L>nothing really changes</L>
          <L>but her thumbs type:</L>
          <L>"can you feel it too?"</L>
        </div>
        <div style={S.stanza}>
          <L>we are all breaking</L>
          <L>into smaller pieces:</L>
          <L>160 characters<Sup n="3" /></L>
          <L>of revolution,</L>
          <L>of doubt,</L>
          <L>of wondering if hope</L>
          <L>loses something</L>
          <L>when compressed.</L>
        </div>
        <div style={S.stanza}>
          <L>in dark rooms across America</L>
          <L>we watch through screens</L>
          <L>within screens within screens:</L>
          <L>the oath, the speech,</L>
          <L>the roar that sounds</L>
          <L>like waves through tiny speakers</L>
          <L>while our phones buzz</L>
          <L>with fragments of becoming.</L>
        </div>
        <div style={S.stanza}>
          <L>at midnight,</L>
          <L>when the batteries die</L>
          <L>& the screens go dark,</L>
          <L>we'll hold these devices</L>
          <L>like spent wishes,</L>
          <L>wondering what part of history</L>
          <L>we actually held</L>
          <L>& what part just passed</L>
          <L>through us</L>
          <L>like light</L>
          <L>through glass.</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> The inauguration of Barack Obama as the 44th President of the United States took place on January 20, 2009.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A reference to Barack Obama's 2008 campaign slogan.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> The standard length of an SMS message. Longer messages were split into multiple texts, often arriving out of order, which contributed to fragmented conversations.</p>
      </div>
    </div>
  );
}
