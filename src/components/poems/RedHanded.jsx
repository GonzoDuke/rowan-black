import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: '40px 36px 60px' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  paren: { color: '#7a8090' },
  loud: { fontWeight: 600, letterSpacing: '0.02em' },
  label: { fontWeight: 600, letterSpacing: '0.03em', fontSize: '16px' },
  bullet: { paddingLeft: '20px', display: 'block' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const P = ({ children }) => <span style={S.paren}>{children}</span>;

export default function RedHanded() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}><L>3 AM: The witching hour</L><L>for those of us running from ourselves.</L></div>
        <div style={S.stanza}><L>The phone won't stop ringing.</L><L>The caller ID shows your own number,</L><L>but that's impossible—</L><L>you ripped the cord out weeks ago,</L><L>somewhere between the second breakdown</L><L>and the third revelation.</L></div>
        <div style={S.stanza}><L>There are footsteps in the attic</L><L>of your mind. Listen—</L><L>they sound exactly like yours,</L><L>that slight drag on the left heel,</L><L>the way you walk when you think</L><L>no one's watching. But someone's</L><L>always watching, aren't they?</L><L>Even with the cameras disabled,</L><L>the mirrors covered,</L><L>the reflective surfaces smeared with soap.</L></div>
        <div style={S.stanza}><L><P>(Pro tip: soap works better than sheets.</P></L><L><P>Learned that in a motel outside Vegas</P></L><L><P>during a particularly bad episode</P></L><L><P>of running from myself.</P></L><L><P>The sheets always fall down eventually.</P></L><L><P>The soap stays until you're ready</P></L><L><P>to face whatever's really there.)</P></L></div>
        <div style={S.stanza}><L>That shadow on the wall?</L><L>Your shape, your stance,</L><L>your hands raised in question</L><L>or surrender—hard to tell</L><L>the difference these days.</L><L>It follows you room to room,</L><L>getting sharper as the sun sets,</L><L>until it's clearer than you are.</L></div>
        <div style={S.stanza}><L>You've tried outlasting it,</L><L>staying up for days</L><L>under brutal fluorescent lights,</L><L>but even they cast shadows,</L><L>and all of them look like you.</L></div>
        <div style={S.stanza}><L>The voice that keeps you awake,</L><L>whispering blame through the heating vents:</L><L>you know its timbre, its tone,</L><L>the way it breaks on certain words</L><L><P>(just like yours does).</P></L><L>It knows all your stories,</L><L>even the ones you never told anyone,</L><L>even the ones you never wrote down,</L><L>even the ones you've been drinking</L><L>to forget. Especially those.</L></div>
        <div style={S.stanza}><L><span style={S.label}>FACT:</span> Every mirror in this house</L><L>shows the same intruder.</L><L><span style={S.label}>FACT:</span> Every window reflects</L><L>the same ghost.</L><L><span style={S.label}>FACT:</span> Every door opens</L><L>to your own face,</L><L>wearing that expression</L><L>you've been practicing all your life—</L><L>the one that says I'm fine, I'm fine, I'm fine</L><L>until the words lose all meaning</L><L>and become just noise,</L><L>like static on an empty channel,</L><L>like a heart monitor flatlined,</L><L>like truth trying to bore its way</L><L>through your skull.</L></div>
        <div style={S.stanza}><L>You've changed the locks</L><L>three times this year,</L><L>but still the culprit enters,</L><L>leaving fingerprints that match</L><L>your own, DNA evidence</L><L>that points nowhere but home.</L></div>
        <div style={S.stanza}><L>The security cameras catch nothing</L><L>but you, pacing room to room,</L><L>talking to yourself in languages</L><L>you didn't know you knew,</L><L>drawing maps on the walls</L><L>to places you can't escape.</L></div>
        <div style={S.stanza}><L><span style={S.label}>NOTICE:</span> The call is coming</L><L>from inside your head—</L><L>ring, ring, ring</L><L>like temple bells,</L><L>like warning signs,</L><L>like the alarm you keep hitting snooze on</L><L>because you're not ready</L><L>for this particular awakening.</L></div>
        <div style={S.stanza}><L><P>(Nobody ever is, kid.</P></L><L><P>That's why they call it a wake-up call</P></L><L><P>and not a gentle suggestion.)</P></L></div>
        <div style={S.stanza}><L>The operator won't help.</L><L>The police can't trace this one.</L><L>The FBI's got better things to do</L><L>than track down the ghost</L><L>that's been wearing your face</L><L>like a cheap Halloween mask.</L><L>Besides, we both know</L><L>this is strictly an inside job.</L></div>
        <div style={S.stanza}><L><span style={S.label}>EVIDENCE COLLECTED FROM THE SCENE:</span></L><L style={S.bullet}>● One mirror, cracked from impact</L><L style={S.bullet}><P>(knuckles or forehead? The report is unclear)</P></L><L style={S.bullet}>● Seven empty coffee cups</L><L style={S.bullet}><P>(running from yourself requires stimulants)</P></L><L style={S.bullet}>● Twelve pages of handwritten confessions</L><L style={S.bullet}><P>(all in your handwriting, all saying the same thing)</P></L><L style={S.bullet}>● One phone, cord still swinging</L><L style={S.bullet}><P>(but somehow, still ringing)</P></L></div>
        <div style={S.stanza}><L>You are the footsteps.</L><L>You are the shadow.</L><L>You are the voice</L><L>in the heating vents.</L><L>You are the ghost</L><L>in every mirror,</L><L>the intruder</L><L>with the perfect key,</L><L>the caller</L><L>who won't hang up</L><L>until you finally</L><L>answer.</L></div>
        <div style={S.stanza}><L><span style={S.label}>FINAL REPORT:</span></L><L>No signs of forced entry</L><L>because you've been here</L><L>all along.</L><L>No suspects but the obvious.</L><L>No escape route needed—</L><L>you're already inside</L><L>the house, the head,</L><L>the truth you've been running from.</L></div>
        <div style={S.stanza}><L>The call is still coming.</L><L>The phone is still ringing.</L><L>Your number keeps flashing</L><L>on every screen,</L><L>every surface,</L><L>every mirror you haven't covered yet.</L></div>
        <div style={S.stanza}><L>Maybe it's time to pick up.</L><L>Maybe it's time to answer.</L><L>Maybe it's time to admit</L><L>that every horror story</L><L>about the killer being inside the house</L><L>was really just a metaphor</L><L>for this moment,</L><L>when you finally realize</L><L>the person you've been running from</L><L>has your face, your hands,</L><L>your fingerprints,</L><L>your terrible laugh,</L><L>your particular way of saying sorry</L><L>like you don't quite mean it.</L></div>
        <div style={S.stanza}><L>The call is coming from inside the house.</L><L>The house is inside your head.</L><L>Your head is in your hands.</L><L>Your hands are shaking,</L><L>but they're still yours.</L><L>They've always been yours.</L></div>
        <div style={S.stanza}><L>Pick up the phone.</L><L>We need to talk.</L></div>
      </div>
    </div>
  );
}
