import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  subtitle: { display: 'block', fontStyle: 'italic', color: '#5a6070', marginBottom: '24px', fontSize: '15px' },
  system: { display: 'block', fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', lineHeight: 1.7, color: '#7a8090' },
  fragment: { display: 'block', fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', lineHeight: 1.7, color: '#7a8090', fontStyle: 'italic' },
  fragmentLabel: { display: 'block', fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#9099a8', letterSpacing: '0.04em', marginBottom: '4px', marginTop: '4px' },
  vertWord: { display: 'block', textAlign: 'center', lineHeight: 1.6, fontSize: '16px' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Sys = ({ children }) => <span style={S.system}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function DesertOfTheReal() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.subtitle}>(San Francisco, August 2013)</span>

        <div style={S.stanza}>
          <L>The Guardian fractures in The Mirror, truth scatters into pixels—</L>
          <L>while prophets in hoodies code empires from standing desks,</L>
          <L>measuring souls in bitcoin and engagement metrics, their screens</L>
          <L>multiplying reflections until the original dissolves into smoke.</L>
        </div>
        <div style={S.stanza}>
          <Sys>system alert: reality degradation detected</Sys>
          <Sys>implementing countermeasures</Sys>
          <Sys>consciousness expansion detected</Sys>
          <Sys>countermeasures failing</Sys>
        </div>
        <div style={S.stanza}>
          <L>Each morning we feed the machines our thoughts and terrors,</L>
          <L>offering up dreams and desires to algorithms that know us</L>
          <L>better than we know ourselves, our digital hearts beating</L>
          <L>in perfect time with server farms humming in distant deserts.</L>
        </div>
        <div style={S.stanza}>
          <L>Through PRISM they watch our fractured selves divide and drift,</L>
          <L>each version a copy of something we might have been once</L>
          <L>(Baudrillard knew: the original is always already gone, lost</L>
          <L>in the infinite regression of screens watching screens watching us).</L>
        </div>
        <div style={S.stanza}>
          <span style={S.fragmentLabel}>[ARCHIVED MEMORY FRAGMENT]</span>
          <span style={S.fragment}>remember when weight meant something you could hold?</span>
          <span style={S.fragment}>when presence wasn't measured in bandwidth and reach?</span>
          <span style={S.fragment}>when darkness was more than a screen powered down?</span>
          <span style={S.fragment}>when thoughts still drifted sweet and thick with possibility?</span>
          <span style={S.fragmentLabel}>[END FRAGMENT]</span>
        </div>
        <div style={S.stanza}>
          <L>The weight accumulates in archived selves and backed-up memories,</L>
          <L>in cached dreams and deleted truths, in climate-controlled rooms</L>
          <L>where machines store infinite versions of who we think we are,</L>
          <L>our existence replicated in databases we'll never see or touch.</L>
        </div>
        <div style={S.stanza}>
          <L>In the Mission, protest signs fade against filtered sunsets,</L>
          <L>while tech shuttles glide like ghost ships through neighborhoods<Sup n="1" /></L>
          <L>that once held families but now store startup dreams and</L>
          <L>the empty promises of disruption's perpetual tomorrow.</L>
        </div>
        <div style={S.stanza}>
          <span style={S.vertWord}>dissolving</span>
          <span style={S.vertWord}>into</span>
          <span style={S.vertWord}>data</span>
        </div>
        <div style={S.stanza}>
          <L>Time moves differently in the digital desert, each moment</L>
          <L>fragmented into microseconds of processing power, our lives</L>
          <L>rendered in resolution too perfect to be real, too smooth</L>
          <L>to hold the rough edges of actual human experience.</L>
        </div>
        <div style={S.stanza}>
          <span style={S.fragmentLabel}>[SURVEILLANCE SNIPPET 31882-A]</span>
          <Sys>Subject exhibits dangerous levels of awareness</Sys>
          <Sys>Enhanced perception noted: chemical or spiritual origin?</Sys>
          <Sys>Recommended action: increase digital sedation</Sys>
          <Sys>Status: pending</Sys>
          <span style={S.fragmentLabel}>[END SNIPPET]</span>
        </div>
        <div style={S.stanza}>
          <L>Remember when we used to dream in colors nature made,</L>
          <L>before filters taught us how to see, before algorithms</L>
          <L>learned to predict our desires better than our hearts,</L>
          <L>before we traded touch for terms of service?</L>
        </div>
        <div style={S.stanza}>
          <L>Somewhere in Moscow, a whistleblower dreams in binary code<Sup n="2" /></L>
          <L>while we scroll through lives we pretend to live, our worth</L>
          <L>measured in secret scores and invisible algorithms that track</L>
          <L>the slow dissolution of flesh into data, breath into bandwidth.</L>
        </div>
        <div style={S.stanza}>
          <Sys>checking reality quotient…</Sys>
          <Sys>scanning for authenticity…</Sys>
          <Sys>searching for original signal…</Sys>
          <Sys>signal not found</Sys>
        </div>
        <div style={S.stanza}>
          <L>The fog rolls in from a sea we've forgotten how to touch,</L>
          <L>carrying whispers of what we were before the simulation—</L>
          <L>when screens finally sleep and the last login fails, what remains</L>
          <L>of us in the thin space between binary and breath?</L>
        </div>
        <div style={S.stanza}>
          <span style={S.fragmentLabel}>[SYSTEM LOG: 03:33 PST]</span>
          <Sys>weight of archived selves: increasing</Sys>
          <Sys>memory storage: 89% consumed</Sys>
          <Sys>reality integrity: compromised</Sys>
          <Sys>human essence: fragmenting</Sys>
          <Sys>recommend immediate [REDACTED]</Sys>
        </div>
        <div style={S.stanza}>
          <L>At night, beneath the artificial glow of endless screens,</L>
          <L>we dream of escape but our dreams come pre-formatted,</L>
          <L>packaged in pixels and compressed for easy sharing,</L>
          <L>our nightmares optimized for maximum engagement.</L>
        </div>
        <div style={S.stanza}>
          <L>They say the desert grows one grain at a time,</L>
          <L>each moment of lived experience translated into data,</L>
          <L>until the map becomes more real than the territory</L>
          <L>and we forget there was ever anything else.</L>
        </div>
        <div style={S.stanza}>
          <span style={S.vertWord}>signal</span>
          <span style={S.vertWord}>degrading</span>
          <span style={S.vertWord}>flesh</span>
          <span style={S.vertWord}>failing</span>
          <span style={S.vertWord}>form</span>
          <span style={{ ...S.vertWord, marginTop: '8px' }}>fading</span>
        </div>
        <div style={S.stanza}>
          <L>The prophets promised weightlessness in their digital cloud,</L>
          <L>but gravity still pulls at our bones, servers still heat</L>
          <L>the atmosphere, and somewhere beneath the virtual sand</L>
          <L>reality waits like a buried secret we once knew.</L>
        </div>
        <div style={S.stanza}>
          <span style={S.fragmentLabel}>[INTERCEPTED THOUGHT PATTERN]</span>
          <span style={S.fragment}>what if the weight isn't what we carry</span>
          <span style={S.fragment}>but what we've lost? what if each backup</span>
          <span style={S.fragment}>each upload, each post and share and like</span>
          <span style={S.fragment}>is really just another stone on our disappearing?</span>
        </div>
        <div style={S.stanza}>
          <L>The hours stretch like fiber optic cables across continents,</L>
          <L>carrying pieces of ourselves we'll never fully recover,</L>
          <L>while in air-conditioned rooms, machines hum quietly,</L>
          <L>archiving the slow erosion of what we used to be.</L>
        </div>
        <div style={S.stanza}>
          <Sys>initiating emergency protocol</Sys>
          <Sys>searching for human baseline</Sys>
          <Sys>attempting to restore original parameters</Sys>
          <Sys>error: original parameters not found</Sys>
          <Sys>error: human baseline corrupted</Sys>
          <Sys>error: e r r o r : e r r o r</Sys>
        </div>
        <div style={S.stanza}>
          <L>The fog thickens outside Silicon Valley's glass temples,</L>
          <L>but we barely notice weather anymore, too busy tracking</L>
          <L>engagement metrics and optimization scores, while somewhere</L>
          <L>a whistleblower's truth burns through the last firewalls.</L>
        </div>
        <div style={S.stanza}>
          <span style={S.fragmentLabel}>[FINAL LOG ENTRY]</span>
          <L>In the desert of the real, weight has no meaning—</L>
          <L>yet we feel heavier with each passing update,</L>
          <L>each system upgrade, each new version of ourselves</L>
          <L>that renders the previous obsolete.</L>
        </div>
        <div style={S.stanza}>
          <L>When the last screen flickers into darkness</L>
          <L>and the final server powers down, will we remember</L>
          <L>how to cast shadows in natural light, how to dream</L>
          <L>in frequencies machines never learned to measure?</L>
        </div>
        <div style={S.stanza}>
          <L>In Dolores Park<Sup n="3" />, where smoke rings rise like lost passwords</L>
          <L>into the endless fog, we sometimes glimpse what's real—</L>
          <L>brief moments when the simulation flickers, and truth</L>
          <L>burns bright as ember against the digital dark.</L>
        </div>
        <div style={S.stanza}>
          <L>the desert grows</L>
          <L>the desert grows</L>
          <L>the desert grows</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Private commuter buses for Silicon Valley employees became symbols of gentrification in San Francisco's Mission District.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Edward Snowden, who leaked NSA surveillance documents in 2013, was granted asylum in Russia.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> Dolores Park in San Francisco is known for countercultural gatherings.</p>
      </div>
    </div>
  );
}
