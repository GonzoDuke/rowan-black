import React from 'react';

const S = {
  outer: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  form: {
    background: '#ffffff', border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: '2px', overflow: 'hidden',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
  },
  formHeader: {
    background: '#f0f0ee', borderBottom: '2px solid #1a1d24',
    padding: '16px clamp(16px, 4vw, 24px)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
    flexWrap: 'wrap', gap: '8px',
  },
  formTitle: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px',
    fontWeight: 600, color: '#1a1d24', letterSpacing: '0.02em',
  },
  formMeta: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
    color: '#888', letterSpacing: '0.04em', textAlign: 'right',
  },
  body: { padding: 'clamp(16px, 4vw, 24px)' },
  fieldGroup: { marginBottom: '20px' },
  fieldLabel: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    fontWeight: 600, color: '#1a1d24', letterSpacing: '0.08em',
    textTransform: 'uppercase', marginBottom: '8px',
    borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '4px',
  },
  fieldValue: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '16px', lineHeight: 1.75, color: '#2a2520',
    paddingLeft: '8px', marginBottom: '4px',
  },
  redacted: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px',
    color: '#999', letterSpacing: '0.02em', paddingLeft: '8px',
    marginBottom: '4px',
  },
  blacked: {
    display: 'inline-block', background: '#1a1d24', borderRadius: '1px',
    height: '13px', margin: '0 2px', verticalAlign: 'middle',
  },
  checkbox: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px',
    color: '#2a2520', paddingLeft: '8px', marginBottom: '6px',
    lineHeight: 1.6,
  },
  checkboxChecked: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px',
    color: '#2a2520', paddingLeft: '8px', marginBottom: '6px',
    lineHeight: 1.6, fontWeight: 500,
  },
  handwritten: {
    fontFamily: "'Caveat', cursive", fontSize: '16px',
    color: '#3a3530', paddingLeft: '20px', lineHeight: 1.5,
  },
  bullet: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '15px', lineHeight: 1.75, color: '#2a2520',
    paddingLeft: '20px', marginBottom: '4px',
  },
  sectionLabel: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    fontWeight: 600, color: '#888', letterSpacing: '0.06em',
    textTransform: 'uppercase', marginTop: '24px', marginBottom: '10px',
    borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '12px',
  },
  error: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
    color: '#993333', lineHeight: 1.7, paddingLeft: '8px',
    marginBottom: '4px',
  },
  automated: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px',
    color: '#999', lineHeight: 1.7, paddingLeft: '8px',
    marginBottom: '4px', fontStyle: 'italic',
  },
  closing: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '16px', lineHeight: 1.85, color: '#2a2520',
    marginTop: '16px', paddingLeft: '8px',
  },
};

export default function CensusOfTheGone() {
  return (
    <div style={S.outer}>
      <div style={S.form}>
        <div style={S.formHeader}>
          <div>
            <div style={S.formTitle}>Census of the Gone</div>
          </div>
          <div style={S.formMeta}>
            Form 27B-6<br />
            Revised 2024<br />
            For Official Use Only
          </div>
        </div>

        <div style={S.body}>
          <div style={S.fieldGroup}>
            <div style={S.fieldLabel}>Name</div>
            <div style={S.redacted}>[REDACTED]</div>
            <div style={S.fieldValue}>Carla Espinoza</div>
            <div style={S.fieldValue}>Nathaniel "Nate" L. Owens</div>
            <div style={S.fieldValue}>Eleanor Finch (nee ??)</div>
            <div style={S.fieldValue}>Unknown, but we called her Birdie</div>
          </div>

          <div style={S.fieldGroup}>
            <div style={S.fieldLabel}>Date of Birth</div>
            <div style={S.fieldValue}>05/17/1989</div>
            <div style={S.fieldValue}>11/03/1972</div>
            <div style={S.fieldValue}><span style={S.blacked}>&nbsp;</span><span style={{ width: '16px' }}> </span>/<span style={S.blacked}>&nbsp;</span>/<span style={S.blacked}>&nbsp;&nbsp;</span></div>
            <div style={S.fieldValue}>Spring, maybe. When the lilacs bloom.</div>
            <div style={S.fieldValue}>Before the war. Before the flood. Before we knew what losing meant.</div>
          </div>

          <div style={S.fieldGroup}>
            <div style={S.fieldLabel}>Last Known Address</div>
            <div style={S.fieldValue}>442 Maple Ave, Chicago, IL</div>
            <div style={S.fieldValue}>Somewhere off I-90, heading west</div>
            <div style={S.fieldValue}>A basement apartment with bad wiring, always cold</div>
            <div style={S.fieldValue}>PO Box 314 — letters returned unopened</div>
            <div style={S.fieldValue}>The house isn't there anymore</div>
          </div>

          <div style={S.fieldGroup}>
            <div style={S.fieldLabel}>Date Missing</div>
            <div style={S.fieldValue}>02/19/2019</div>
            <div style={S.fieldValue}>01/01/2021</div>
            <div style={S.fieldValue}>We don't know. He stopped answering.</div>
            <div style={S.fieldValue}>They were never here long enough to say.</div>
            <div style={S.fieldValue}>What date do you list for someone who faded, instead of vanished?</div>
          </div>

          <div style={S.fieldGroup}>
            <div style={S.fieldLabel}>Status</div>
            <div style={S.checkbox}>☐ Missing, presumed alive</div>
            <div style={S.checkbox}>☐ Missing, presumed deceased</div>
            <div style={S.checkbox}>☐ Missing, but no one is looking anymore</div>
            <div style={S.checkboxChecked}>☒ <span style={S.handwritten}>What does "presumed" mean when we are wrong so often?</span></div>
          </div>

          <div style={S.fieldGroup}>
            <div style={S.fieldLabel}>Additional Information (If Known)</div>
            <div style={S.bullet}>● She left a voicemail the night before. Said she'd call again soon. She never did.</div>
            <div style={S.bullet}>● His car was found in the long-term parking lot of LAX. The ticket was dated two years ago.</div>
            <div style={S.bullet}>● Last seen wearing a green jacket, a backpack, a look of quiet resignation.</div>
            <div style={S.bullet}>● If you find him, tell him to come home.</div>
            <div style={S.bullet}>● If you find her, ask her why she left.</div>
          </div>

          <div style={S.sectionLabel}>For Internal Review Only</div>
          <div style={S.automated}>(Automated response: Do not process incomplete data. Do not accept entries without verifiable details.)</div>
          <div style={S.error}>(Error: Field "Where do they go?" is not recognized.)</div>
          <div style={S.error}>(Error: Field "Did they mean to leave?" is not recognized.)</div>
          <div style={S.error}>(Error: Field "Does absence have a shape?" is not recognized.)</div>

          <div style={S.closing}>
            At some point, the forms stop following protocol. The census workers try to make sense of the wreckage, but the system doesn't allow for entries that simply read: "She was here. Then she wasn't. What else is there to say?"
          </div>
        </div>
      </div>
    </div>
  );
}
