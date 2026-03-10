import React from 'react';

const S = {
  outer: { maxWidth: '620px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  emailChrome: {
    background: '#ffffff', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '6px',
    overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  toolbar: {
    background: 'linear-gradient(180deg, #f0f1f5 0%, #e4e5ea 100%)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '6px',
  },
  dot: (c) => ({ width: '12px', height: '12px', borderRadius: '50%', background: c }),
  headerArea: { padding: '16px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)' },
  headerRow: {
    display: 'flex', gap: '12px', marginBottom: '6px',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.6,
  },
  headerLabel: { color: '#9099a8', width: '60px', flexShrink: 0, fontWeight: 500 },
  headerValue: { color: '#1a1d24' },
  body: {
    padding: 'clamp(20px, 5vw, 28px) clamp(16px, 4vw, 24px) clamp(24px, 5vw, 36px)', fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '16px', lineHeight: 1.85, color: '#1a1d24',
  },
  redacted: {
    display: 'inline-block', background: '#1a1d24', borderRadius: '2px',
    height: '14px', margin: '0 3px', verticalAlign: 'middle', maxWidth: '30vw',
  },
  salutation: { marginBottom: '18px' },
  closing: { marginTop: '22px' },
  signature: { marginTop: '4px', color: '#5a6070' },
};

const R = ({ width }) => <span style={{ ...S.redacted, width: width + 'px' }}>&nbsp;</span>;

export default function EmailRejection() {
  return (
    <div style={S.outer}>
      <div style={S.emailChrome}>
        <div style={S.toolbar}>
          <div style={S.dot('#ff5f57')} /><div style={S.dot('#febc2e')} /><div style={S.dot('#28c840')} />
        </div>
        <div style={S.headerArea}>
          <div style={S.headerRow}><span style={S.headerLabel}>Time</span><span style={S.headerValue}>2:14 AM</span></div>
          <div style={S.headerRow}><span style={S.headerLabel}>Subject</span><span style={S.headerValue}>Re: Submission Status</span></div>
        </div>
        <div style={S.body}>
          <div style={S.salutation}>Dear Mr. Black,</div>
          <div style={{ marginBottom: '14px' }}>
            <R width={110} /> your work <R width={55} /> <R width={55} />. <R width={160} /> it's not quite <R width={55} /> right <R width={55} />.
          </div>
          <div style={{ marginBottom: '14px' }}>
            <R width={55} /> we found <R width={55} /> your piece<R width={160} /> does not <R width={160} /> <R width={55} /> seem like a <R width={55} />.
          </div>
          <div style={{ marginBottom: '14px' }}>
            <R width={160} />poem <R width={110} /> to be published in the future.
          </div>
          <div style={S.closing}>Sincerely,</div>
          <div style={S.signature}>The Editors</div>
          <div style={{ marginTop: '14px' }}><R width={110} /></div>
        </div>
      </div>
    </div>
  );
}
