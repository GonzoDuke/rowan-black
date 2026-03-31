import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  paren: { color: '#7a8090' },
  loud: { fontWeight: 600, letterSpacing: '0.02em' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const P = ({ children }) => <span style={S.paren}>{children}</span>;

export default function NightWeDeleteOurMaps() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}><L>Descend.</L><L>Plunge.</L><L>Fall.</L></div>
        <div style={S.stanza}><L>while the world burns outside</L><L>screens flicker with endless feeds</L><L>of grief and rage</L></div>
        <div style={S.stanza}><L>Into the wilderness within—</L><L>a tangled forest of synapses firing</L><L>misfiring</L><L>thoughts like wild vines strangling reason</L><L>through the mask of isolation</L><L>through the fog of uncertainty</L></div>
        <div style={S.stanza}><L>The mind: a vast, untamed territory</L><L>unmapped</L><L>uncharted</L><L>unknown</L><L>even to its inhabitant</L><L><P>(you? me? who's steering this ship anyway</P></L><L><P>when all the compasses spin wildly</P></L><L><P>and every map burns to ash?)</P></L></div>
        <div style={S.stanza}><L>Memories lurk in shadowy groves</L><L>half-forgotten</L><L>half-imagined</L><L>of a time when we touched without fear</L><L>when breath wasn't measured</L><L>in droplets of dread</L></div>
        <div style={S.stanza}><L>Dreams nest in the canopy, taking flight</L><L>at the slightest disturbance—</L><L>scattered by sirens</L><L>and notification pings</L><L>that signal another ending</L></div>
        <div style={S.stanza}><L><span style={S.loud}>SNAP</span></L><L>A twig breaks underfoot</L><L>Yellow eyes gleam in the darkness</L><L>Something is hunting you</L><L><P>(or is it hunting all of us</P></L><L><P>while forests burn</P></L><L><P>and cities choke</P></L><L><P>and truth gasps its last breath?)</P></L></div>
        <div style={S.stanza}><L>Pulse quickens</L><L>Breath catches</L><L>Fight or flight?</L><L>But how do you run</L><L>when the danger is everywhere</L><L>and nowhere</L><L>pixelated and viral</L></div>
        <div style={S.stanza}><L>Navigate this landscape? Impossible.</L><L>No compass points true here</L><L>No map can capture this shifting terrain</L><L>where geology compresses into tweets</L><L>centuries of rage erupt through screens</L><L>and democracy wheezes on ventilators</L></div>
        <div style={S.stanza}><L>The wild heart beats a rhythm older than language</L><L>a song of blood and bone</L><L>a primal blues that echoes through</L><L>empty streets and Zoom rooms</L><L>where we perform normalcy</L><L>in Brady Bunch boxes</L></div>
        <div style={S.stanza}><L>Dive deeper.</L><L>The underground river of the subconscious</L><L>swift</L><L>dark</L><L>dangerous</L><L>carries us through caverns of collective grief</L><L>where trauma flows like mercury</L><L>poisoning the groundwater of generations</L></div>
        <div style={S.stanza}><L>Let it carry you through</L><L>Let it wash away the sediment</L><L>of what we once called normal</L><L>Let it erode the walls</L><L>between private apocalypse</L><L>and public collapse</L></div>
        <div style={S.stanza}><L>You emerge, gasping,</L><L>into a sunlit glade of</L><L>self –</L><L>awareness</L><L>but even this is fleeting</L><L>as notifications pull you back</L><L>into the endless scroll</L></div>
        <div style={S.stanza}><L>Who are you in this untamed place?</L><L>Strip away the masks</L><L><P>(fabric, digital, metaphorical)</P></L><L>What beast emerges</L><L>when all pretense burns away</L><L>in the fever of transformation?</L></div>
        <div style={S.stanza}><L>The wilderness shifts:</L><L>Higher walls</L><L>Deeper divisions</L><L>Wider chasms</L><L>between what we were</L><L>and what we're becoming</L></div>
        <div style={S.stanza}><L>Delete your maps</L><L>They don't work here</L><L>in this territory of ghosts</L><L>where algorithms chart our course</L><L>through forests of binary code</L><L>and each refresh brings new ruins</L></div>
        <div style={S.stanza}><L>For in this wilderness</L><L>you are</L><L>bare</L><L>beating</L><L>against the vastness</L><L>of an uncharted future</L><L>where the path ahead</L><L>is obscured by smoke</L><L>from bridges burning</L><L>behind us</L></div>
        <div style={S.stanza}><L>Open another tab</L><L>Start another stream</L><L>Let your fingers dance</L><L>across keyboards searching</L><L>for a way back</L><L>to somewhere that feels like truth</L><L>But every URL leads deeper</L><L>into the labyrinth</L></div>
        <div style={S.stanza}><L>This internal wilderness—</L><L>Your truest home</L><L>Your deepest exile</L><L>Your self</L><L>Unbound</L><L>In a world</L><L>Coming undone</L></div>
        <div style={S.stanza}><L>Here at the edge</L><L>of all our maps</L><L>where the legends fail</L><L>and the coordinates blur</L><L>we learn to navigate</L><L>by the light</L><L>of burning certainties</L></div>
      </div>
    </div>
  );
}
