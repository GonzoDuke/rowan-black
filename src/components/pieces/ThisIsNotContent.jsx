import React from 'react';

const S = {
  container: {
    maxWidth: '680px', margin: '0 auto',
    padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)',
    fontFamily: "'Libre Baskerville', Georgia, serif",
    fontSize: '16px', lineHeight: 1.85, color: '#1a1d24',
  },
  sysTag: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.06em', color: '#9099a8',
    margin: '36px 0 16px', display: 'block',
  },
  user: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', fontWeight: 600,
    color: '#5a6070', margin: '28px 0 8px', display: 'block',
  },
  verse: {
    marginBottom: '24px',
  },
  line: {
    display: 'block',
  },
  thread: {
    marginLeft: '20px', padding: '12px 0',
    borderLeft: '2px solid rgba(0,0,0,0.06)',
    paddingLeft: '16px',
  },
  threadLine: {
    display: 'block', fontStyle: 'italic', fontSize: '13px',
    color: '#5a6070', lineHeight: 1.7, fontFamily: "'IBM Plex Mono', monospace",
  },
  screed: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', fontWeight: 600,
    lineHeight: 2.0, color: '#1a1d24', letterSpacing: '0.02em',
    margin: '16px 0 24px',
  },
  screedLine: {
    display: 'block',
  },
  recList: {
    marginLeft: '20px', padding: '12px 0',
    borderLeft: '2px solid rgba(0,0,0,0.06)',
    paddingLeft: '16px',
  },
  recItem: {
    display: 'block', fontStyle: 'italic', fontSize: '13px',
    color: '#5a6070', lineHeight: 2.0, fontFamily: "'IBM Plex Mono', monospace",
  },
  liveBlock: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px',
    color: '#5a6070', lineHeight: 1.8,
    margin: '8px 0 8px 20px', padding: '12px 16px',
    background: 'rgba(0,0,0,0.02)', borderRadius: '4px',
  },
  liveLine: { display: 'block' },
  liveMeta: { display: 'block', fontSize: '11px', color: '#9099a8', fontStyle: 'italic' },
  comment: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px',
    color: '#5a6070', fontStyle: 'italic',
    margin: '8px 0 8px 20px',
  },
};

const L = ({ children }) => <span style={S.line}>{children}</span>;
const SL = ({ children }) => <span style={S.screedLine}>{children}</span>;

export default function ThisIsNotContent() {
  return (
    <div style={S.container}>
      <span style={S.sysTag}>[LOADING // STATIC]</span>
      <div style={S.verse}>
        <L>there was a time when silence meant something. not absence. not lack. something else. potential, maybe. the breath before the world opened its mouth. now the mouth stays open.</L>
      </div>

      <span style={S.user}>[user48723]</span>
      <div style={S.verse}>
        <L>i'm so fucking tired of watching people watch other people do things.</L>
        <L>like.</L>
        <L>what are we doing.</L>
      </div>

      <span style={S.sysTag}>[THREAD SPLIT // DIVERGENCE DETECTED]</span>
      <div style={S.thread}>
        <span style={S.threadLine}>"yo he SNAPPED"</span>
        <span style={S.threadLine}>"this rant is giving REACT harder vibes"</span>
        <span style={S.threadLine}>"nah but he's lowkey right tho"</span>
        <span style={S.threadLine}>"based take, bad delivery"</span>
        <span style={S.threadLine}>"you mad bro?"</span>
        <span style={S.threadLine}>"this is actually a meta reaction post"</span>
        <span style={S.threadLine}>"ok boomer"</span>
        <span style={S.threadLine}>"this comment section is wild rn"</span>
      </div>

      <span style={S.sysTag}>[ECHO CHAMBER RECURSION]</span>
      <div style={S.verse}>
        <L>A laugh is now a signal.</L>
        <L>A scream becomes an asset.</L>
        <L>Nothing lands until someone else lands on it.</L>
      </div>

      <span style={S.sysTag}>[core memory corrupted]</span>
      <div style={S.verse}>
        <L>I remember when watching someone meant something.</L>
        <L>An old man painting on PBS.</L>
        <L>A kid landing a trick on a skateboard.</L>
        <L>A quiet video of someone playing Chopin in a subway.</L>
        <L>Not cut with your face in the corner.</L>
        <L>Not chopped into digestible bites with a "WHOA" and "YO NO WAY" reaction overlay.</L>
        <L>Not monetized.</L>
        <L>Just held.</L>
        <L>Just seen.</L>
      </div>

      <span style={S.sysTag}>[SYSTEM ALERT // ENGAGEMENT DROP DETECTED]</span>
      <div style={S.verse}>
        <L>Inject humor.</L>
        <L>Add jump cut.</L>
        <L>Insert disbelief face.</L>
        <L>Insert disbelief face.</L>
        <L>Insert disbelief face.</L>
        <L>Restart loop.</L>
      </div>

      <span style={S.sysTag}>[live stream excerpt, transcript auto-generated]</span>
      <div style={S.liveBlock}>
        <span style={S.liveLine}>"yo this guy is WILDING rn - like he's so mad mad</span>
        <span style={S.liveLine}>like damn bro just let people enjoy stuff</span>
        <span style={S.liveLine}>but fr tho i kinda feel him.</span>
        <span style={S.liveLine}>like why ARE we watching people eat cereal and cry??"</span>
        <span style={S.liveMeta}>[laughs]</span>
        <span style={S.liveMeta}>[reacts to own laugh]</span>
        <span style={S.liveMeta}>[chat exploding]</span>
        <span style={S.liveMeta}>[donation received: $5]</span>
        <span style={S.liveLine}>Message: "REACT TO THIS RANT"</span>
      </div>

      <span style={S.sysTag}>[screed mode activated]</span>
      <div style={S.screed}>
        <SL>DO SOMETHING.</SL>
        <SL>WRITE A SONG. BUILD A FUCKING CHAIR.</SL>
        <SL>CRY WITHOUT FILMING IT.</SL>
        <SL>LAUGH WITHOUT AUDIENCE RETENTION STRATEGY.</SL>
        <SL>GET LOST. BLEED ON PURPOSE.</SL>
        <SL>FUCK.</SL>
        <SL>WALK INTO THE OCEAN WITHOUT GOING LIVE.</SL>
        <SL>FEEL THINGS AND REFUSE TO SHARE THEM.</SL>
        <SL>THIS IS NOT ENLIGHTENMENT</SL>
        <SL>IT'S JUST THE LIGHT FROM THE SCREEN</SL>
        <SL>FRYING YOUR NERVOUS SYSTEM</SL>
        <SL>WHILE YOU NOD ALONG TO SOMEONE ELSE'S EMOTION</SL>
        <SL>LIKE A GOOD LITTLE MIRROR.</SL>
      </div>

      <span style={S.sysTag}>[RECOMMENDED FOR YOU]</span>
      <div style={S.recList}>
        <span style={S.recItem}>"Top 7 Reactors Reacting to Screeds"</span>
        <span style={S.recItem}>"Compilation: Guys Getting Mad at Culture"</span>
        <span style={S.recItem}>"Reacting to This Dude's Meltdown (He Has a Point Tho)"</span>
        <span style={S.recItem}>"Reactception: Reaction to Reaction to Reaction (INSANE)"</span>
        <span style={S.recItem}>"24-Hour Stream: Watching People Watch Stuff Until I Die"</span>
      </div>

      <span style={S.sysTag}>[COMMENT BENEATH ORIGINAL POST]</span>
      <div style={S.comment}>"yo this kinda goes hard tbh. someone should duet it."</div>

      <span style={S.sysTag}>[GLITCH RESOLUTION ATTEMPT FAILED]</span>
      <div style={S.verse}>
        <L>no one's watching</L>
        <L>they're watching you watch</L>
        <L>that's not the same thing</L>
      </div>

      <span style={S.sysTag}>[upload complete // reaction pending]</span>
    </div>
  );
}
