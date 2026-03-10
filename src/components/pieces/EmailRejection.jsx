import React from 'react';

const S = {
  outer: {
    maxWidth: '680px',
    margin: '0 auto',
    padding: '48px 32px 80px',
  },
  emailChrome: {
    background: '#12141a',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  toolbar: {
    background: '#181b22',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  toolbarDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  headerArea: {
    padding: '20px 24px',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
  },
  headerRow: {
    display: 'flex',
    gap: '12px',
    marginBottom: '8px',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11px',
    lineHeight: 1.6,
  },
  headerLabel: {
    color: 'rgba(255,255,255,0.25)',
    width: '60px',
    flexShrink: 0,
  },
  headerValue: {
    color: 'rgba(255,255,255,0.6)',
  },
  body: {
    padding: '32px 24px 40px',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '13px',
    lineHeight: 1.9,
    color: 'rgba(255,255,255,0.7)',
  },
  redacted: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.08)',
    color: 'transparent',
    borderRadius: '1px',
    userSelect: 'none',
  },
  salutation: {
    marginBottom: '20px',
  },
  closing: {
    marginTop: '24px',
  },
  signature: {
    marginTop: '4px',
    color: 'rgba(255,255,255,0.5)',
  },
  finalRedact: {
    display: 'block',
    marginTop: '16px',
  },
};

const R = ({ width }) => (
  <span style={{ ...S.redacted, width: width + 'px', height: '14px', margin: '0 3px' }}>&nbsp;</span>
);

export default function EmailRejection() {
  return (
    <div style={S.outer}>
      <div style={S.emailChrome}>
        {/* Window dots */}
        <div style={S.toolbar}>
          <div style={{ ...S.toolbarDot, background: 'rgba(255,80,80,0.6)' }} />
          <div style={{ ...S.toolbarDot, background: 'rgba(255,180,50,0.5)' }} />
          <div style={{ ...S.toolbarDot, background: 'rgba(80,200,80,0.4)' }} />
        </div>

        {/* Email header */}
        <div style={S.headerArea}>
          <div style={S.headerRow}>
            <span style={S.headerLabel}>Time</span>
            <span style={S.headerValue}>2:14 AM</span>
          </div>
          <div style={S.headerRow}>
            <span style={S.headerLabel}>Subject</span>
            <span style={S.headerValue}>Re: Submission Status</span>
          </div>
        </div>

        {/* Email body */}
        <div style={S.body}>
          <div style={S.salutation}>Dear Mr. Black,</div>

          <div style={{ marginBottom: '16px' }}>
            <R width={120} /> your work <R width={60} /> <R width={60} />. <R width={180} /> it's
            not quite <R width={60} /> right <R width={60} />.
          </div>

          <div style={{ marginBottom: '16px' }}>
            <R width={60} /> we found <R width={60} /> your piece<R width={180} /> does not
            <R width={180} /> <R width={60} /> seem like a <R width={60} />.
          </div>

          <div style={{ marginBottom: '16px' }}>
            <R width={180} />poem <R width={120} /> to be published in the future.
          </div>

          <div style={S.closing}>Sincerely,</div>
          <div style={S.signature}>The Editors</div>
          <div style={S.finalRedact}><R width={120} /></div>
        </div>
      </div>
    </div>
  );
}
