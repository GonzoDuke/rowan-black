import React from 'react';

const S = {
  outer: { maxWidth: '700px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(12px, 4vw, 36px) clamp(40px, 8vw, 60px)' },
  moleskine: {
    background: '#2a2a2a',
    border: '1px solid rgba(0,0,0,0.3)',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    padding: '6px',
  },
  elastic: {
    height: '2px', background: '#444', borderRadius: '1px',
    margin: '0 20%', marginBottom: '6px',
  },
  pages: {
    background: '#faf6ee',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  nbHeader: {
    padding: '10px clamp(16px, 4vw, 20px) 6px',
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px',
    color: '#8a8070', letterSpacing: '0.04em', fontStyle: 'italic',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  body: { padding: 'clamp(24px, 5vw, 32px) clamp(16px, 5vw, 36px)' },
  line: {
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px',
    lineHeight: 1.85, color: '#2a2520', display: 'block',
  },
  stanza: { marginBottom: '24px' },
  marginNote: {
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '15px',
    lineHeight: 1.7, color: '#2a2520',
    marginLeft: 'clamp(12px, 5vw, 40px)', paddingLeft: '14px',
    borderLeft: '2px solid rgba(0,0,0,0.08)',
    marginTop: '12px', marginBottom: '12px',
    fontStyle: 'italic',
  },
  indent: { paddingLeft: '24px' },
  whisper: { fontStyle: 'italic' },
  social: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px',
    color: '#5a5040', display: 'block', lineHeight: 1.7,
  },
  braces: { color: '#8a8070' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;

export default function CityOfGhosts() {
  return (
    <div style={S.outer}>
      <div style={S.moleskine}>
        <div style={S.elastic} />
        <div style={S.pages}>
          <div style={S.nbHeader}>
            Moleskine notebook — unfinished draft — no final version confirmed
          </div>
          <div style={S.body}>
            <div style={S.stanza}>
              <L>The city wakes. Alarms pierce the pre-dawn gloom.</L>
              <L>Figures shuffle from sleep to shower to street,</L>
              <L>a choreography of the half-alive.</L>
              <L>You watch from your window, a ghost among ghosts,</L>
              <L>as the great machine of urbanity groans into motion.</L>
              <L>Gears of glass and steel grind against the sky.</L>
            </div>
            <div style={S.stanza}>
              <L>The city inhales.</L>
              <L>In…</L><L style={S.indent}>Exhaust fumes and stale dreams</L>
              <L>out…</L><L style={S.indent}>Hope dissipates like morning mist</L>
            </div>
            <div style={S.stanza}>
              <L>Sirens wail their urgent song.</L><L>Horns blare a cacophonous chorus.</L>
              <L>Beneath it all, a hum—</L><L>the endless drone of lives lived in parallel,</L><L>never touching.</L>
            </div>
            <div style={S.stanza}>
              <L>Whispers float on currents of static:</L>
              <L style={S.whisper}>"You are here"</L><L>(but where is here?)</L>
              <L style={S.whisper}>"You are one of us"</L><L>(but who are we?)</L>
              <L style={S.whisper}>"You are alive"</L><L>(but what is life?)</L>
            </div>
            <div style={S.marginNote}>
              something about the BART's rhythm here:<br/>
              the city's pulse beneath our feet<br/>
              stations like pressure points<br/>
              acupuncture in concre<br/>
              that's shit--don't bother
            </div>
            <div style={S.stanza}>
              <L>Glass towers pierce the sky,</L><L>mirrors upon mirrors.</L>
              <L>Your face in every pane,</L><L>a thousand yous</L>
              <L>All empty</L><L>All searching</L><L>for something real</L>
            </div>
            <div style={S.stanza}>
              <L>Cold glass against your palm,</L><L>your warmth leaving no trace.</L>
              <L>You realize: You might be the ghost.</L>
            </div>
            <div style={S.stanza}>
              <L>Neon dreams flicker in shop windows.</L><L>Mannequins wear your face,</L>
              <L>peddling authenticity at discount prices.</L><L>You window-shop for a self,</L>
              <L>but every option feels</L><L>secondhand,</L><L>pre-worn,</L><L>Hollow.</L>
            </div>
            <div style={S.marginNote}>
              too on-nose?<br/>rework The metaphor.<br/>
              Something about startup pitch<br/>decks selling dreams instead?
            </div>
            <div style={S.stanza}>
              <L>The city's siren song echoes:</L>
              <L style={S.whisper}>"Be yourself" (in our incubator)</L>
              <L style={S.whisper}>"Find yourself" (in our API)</L>
              <L style={S.whisper}>"Love yourself" (through our platform)</L>
              <L style={S.whisper}>"Free yourself" (with our chains)</L>
            </div>
            <div style={S.stanza}>
              <L>Wireless signals weave an invisible web.</L><L>Data flows like lifeblood,</L>
              <L>bits and bytes the new currency of existence.</L>
              <L>You reach out, touch a screen, feel nothing.</L><L>Are you transmitting or receiving?</L>
            </div>
            <div style={S.marginNote}>
              insert section on social media alienation?<br/>
              the dopamine hits of notifications,<br/>
              the endless scroll of other people's happiness,<br/>
              curated feeds of artificial joy
            </div>
            <div style={S.stanza}>
              <span style={S.social}>@everyone @no one</span>
              <span style={S.social}>#trending #forgotten</span>
              <span style={S.social}>[LIKE] [DISLIKE]</span>
              <span style={S.social}>{'{SHARE}'} {'{ISOLATE}'}</span>
            </div>
            <div style={S.stanza}>
              <L>Steel bones rise from concrete wombs.</L><L>Each new tower a monument to ambition,</L>
              <L>each demolished building a grave for forgotten dreams.</L>
              <L>You watch the skyline shift, wondering</L><L>which part of you is being rebuilt,</L><L>which part torn down.</L>
            </div>
            <div style={S.marginNote}>
              too bitter?<br/>No, fuck these venture<br/>capitalists turning the<br/>Mission into their<br/>playground
            </div>
            <div style={S.stanza}>
              <L>The city evolves:</L>
              <L>Higher</L><L><span style={S.braces}>{'{emptier}'}</span></L>
              <L>Faster</L><L><span style={S.braces}>{'{lonelier}'}</span></L>
              <L>Brighter</L><L><span style={S.braces}>{'{blinder}'}</span></L>
            </div>
            <div style={S.marginNote}>
              This city is eating itself<br/>and calling it disruption.
            </div>
            <div style={S.stanza}>
              <L>Shadows of the past cling to crumbling corners,</L><L>history paved over for progress.</L>
              <L>You reach for memories, but they slip through your fingers</L><L>like smoke,</L><L>like time,</L>
            </div>
            <div style={S.stanza}>
              <L>In the Mission, abuelas still sweep their steps</L><L>like purpose.</L>
              <L>while coders queue for four-dollar toast</L>
            </div>
            <div style={S.stanza}>
              <L>In basement hackerspaces</L><L>anarchists dream of liberation</L><L>through lines of code</L>
              <L>but even revolution</L><L>has been monetized</L><L>disruption packaged</L>
              <L>and sold back to us</L><L>in monthly subscriptions</L>
            </div>
            <div style={S.marginNote}>
              history erased by the stroke<br/>of a venture capitalist's pen
            </div>
            <div style={S.stanza}>
              <L>In SOMA, tent cities huddle</L><L>in the shadows of unicorn startups</L>
              <L>dreams and nightmares</L><L>sharing the same blocked IP address</L>
            </div>
            <div style={S.stanza}>
              <L>Night falls. Lights flicker out one by one,</L><L>a reverse constellation.</L>
              <L>In dark apartments, souls curl around their solitude,</L><L>dreaming of connection.</L>
              <L>You lie awake, listening to the city's heartbeat,</L>
              <L>a rhythm just out of sync with your own.</L><L>The dissonance aches in your bones.</L>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
