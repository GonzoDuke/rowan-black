import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: '40px 36px 60px' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  roomHead: { display: 'block', fontWeight: 600, fontSize: '18px', marginBottom: '12px', marginTop: '40px', color: '#1a1d24' },
  plaque: { display: 'block', fontWeight: 600, letterSpacing: '0.04em', fontSize: '15px' },
  quoted: { fontStyle: 'italic' },
  dim: { color: '#7a8090', fontStyle: 'italic' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const Q = ({ children }) => <span style={S.quoted}>{children}</span>;

export default function TheArchiveOfAlmost() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <div style={S.stanza}><L>It was never on any map.</L><L>No directions, no signposts—</L><L>just something you find when you're already lost.</L></div>
        <div style={S.stanza}><L>The doors open as if expecting me.</L><L>Not automatic, not ancient—just aware.</L><L>Inside, the floor hums beneath my feet,</L><L>polished marble veined with something</L><L>that looks like history but feels like hesitation.</L></div>
        <div style={S.stanza}><L>A plaque by the entrance:</L><L><span style={S.plaque}>WELCOME TO THE ARCHIVE OF ALMOST.</span></L><L>Below it, a smaller sign:</L><L><Q>Please keep your voice down.</Q></L></div>

        <span style={S.roomHead}>The Hall of Unsent Messages</span>
        <div style={S.stanza}><L>The screens flicker before I touch them.</L><L>Soft blue, amber, white—</L><L>pulse points of a body I don't recognize.</L></div>
        <div style={S.stanza}><L><Q>"Are you awake?"</Q></L><L><Q>"I didn't mean it."</Q></L><L><Q>"I miss you."</Q></L></div>
        <div style={S.stanza}><L>Some messages tremble with urgency,</L><L>shaking in their suspension:</L><L><Q>"Please just call me, please just—"</Q></L></div>
        <div style={S.stanza}><L>Others are precise, sharp as a pin:</L><L><Q>"Don't."</Q></L></div>
        <div style={S.stanza}><L>Each one caught mid-collapse—</L><L>the moment when fingers hesitate,</L><L>the moment when silence wins.</L></div>
        <div style={S.stanza}><L>At the center of the room, a single phone sits under glass.</L><L>The screen glows, waiting,</L><L>a message unsent:</L><L><Q>"If I say this, everything changes."</Q></L><L>It pulses like a held breath.</L></div>

        <span style={S.roomHead}>The Room of Unspoken Words</span>
        <div style={S.stanza}><L>The air shifts. Thickens.</L><L>Not heavy, not stifling—just full.</L></div>
        <div style={S.stanza}><L>The shelves are filled, but they do not hold books.</L><L>Only single sheets of paper, carefully placed.</L><L>Some are yellowed at the edges,</L><L>folded and refolded.</L><L>Some are crisp, ink drying in silence.</L></div>
        <div style={S.stanza}><L>A velvet tray beneath glass.</L><L>One letter, the ink slightly smudged,</L><L>like someone hesitated before sealing it away.</L><L><Q>"I forgive you."</Q></L></div>
        <div style={S.stanza}><L>Another, written in a steadier hand:</L><L><Q>"If you ever think of me, know that I still think of you."</Q></L></div>
        <div style={S.stanza}><L>A desk stands at the center.</L><L>A single envelope sits there, sealed, nameless.</L><L>Waiting.</L></div>

        <span style={S.roomHead}>The Archive of Last Words</span>
        <div style={S.stanza}><L>This room is smaller. Circular.</L><L>The walls lined with drawers,</L><L>stretching from floor to ceiling.</L><L>Each one labeled with a name.</L></div>
        <div style={S.stanza}><L>Some are faded,</L><L>worn down by time or memory.</L><L>Others are newly carved,</L><L>edges sharp enough to still be real.</L></div>
        <div style={S.stanza}><L>At the center of the room, a wooden desk.</L><L>One drawer is slightly open, as if someone left in a hurry.</L><L>Inside, a slip of paper, handwritten.</L><L>Edges soft, letters careful.</L><L><Q>"Tell them I wasn't afraid."</Q></L></div>
        <div style={S.stanza}><L>I close the drawer.</L></div>
        <div style={S.stanza}><L>Some drawers are locked.</L><L>Some have been forced open.</L><L>Some are gone entirely, as if they were never here at all.</L></div>
        <div style={S.stanza}><L>A glass case in the corner fogs at the edges,</L><L>as if someone just breathed against it.</L><L>Inside, the words no one heard in time flicker,</L><L>trying to hold their shape.</L></div>
        <div style={S.stanza}><L>Some are love.</L><L>Some are apology.</L><L>Some are unfinished.</L></div>
        <div style={S.stanza}><L>This room is not heavy.</L><L>Not sorrowful.</L><L>Just… final.</L></div>

        <span style={S.roomHead}>The Argument Exhibit</span>
        <div style={S.stanza}><L>A corridor unspools ahead,</L><L>like it was waiting for me to take the next step.</L></div>
        <div style={S.stanza}><L>This silence is different.</L><L>Not regret. Not loss.</L><L>This silence is waiting to be answered.</L></div>
        <div style={S.stanza}><L>Glass cases stretch in long rows,</L><L>each one holding the shape of a fight</L><L>that never left the tongue.</L><L>Inside, the arguments sit frozen in midair—</L><L>sentences cut off at the moment of hesitation,</L><L>anger suspended like breath held too long.</L></div>
        <div style={S.stanza}><L>Some words hang in glowing script,</L><L>typed into existence but never spoken aloud.</L><L>Others are just indentations—</L><L>the ghost-pressure of things nearly said,</L><L>a presence without a sound.</L></div>
        <div style={S.stanza}><L>A display nearest to me flickers:</L><L><Q>"That's not what I—"</Q></L><L><Q>"If you'd just listen—"</Q></L><L><Q>"You don't even care, do you?"</Q></L></div>
        <div style={S.stanza}><L>A panel beside the case reads:</L><L><span style={S.dim}>Words withheld to keep the peace.</span></L><L><span style={S.dim}>Words withheld that would have shattered it.</span></L></div>
        <div style={S.stanza}><L>Further in, the cases shift from bright, stinging sentences</L><L>to something heavier. Slower.</L><L>The kind of arguments that don't spark, but sink.</L></div>
        <div style={S.stanza}><L>A single exhibit holds only silence.</L><L>No text, no voice—</L><L>just the weight of a fight that should have happened, but never did.</L></div>
        <div style={S.stanza}><L>The glass is fogged,</L><L>as if someone once stood too close,</L><L>breathing through everything they never said.</L></div>
        <div style={S.stanza}><L>A plaque near the exit. I swear it wasn't there a moment ago.</L><L><span style={S.plaque}>HERE LIE THE WORDS THAT NEVER LEARNED TO LEAVE THE BODY.</span></L></div>
        <div style={S.stanza}><L>Somewhere behind me, a case shifts,</L><L>just slightly—</L><L>as if something inside is still waiting.</L></div>

        <span style={S.roomHead}>Exit</span>
        <div style={S.stanza}><L>The marble floor returns beneath my feet.</L><L>The chandelier sways slightly,</L><L>as if it never stopped.</L></div>
        <div style={S.stanza}><L>The grand doors stand before me.</L><L>The ledger at the reception desk is still open.</L><L>The indentations on the pages haven't faded.</L></div>
        <div style={S.stanza}><L>I don't write anything.</L></div>
        <div style={S.stanza}><L>No one stops me as I step outside,</L><L>but the doors don't close behind me.</L><L>They stay open, waiting.</L><L>As if they expect me to return.</L></div>
        <div style={S.stanza}><L>A breeze moves through the street.</L><L>I could swear it's whispering.</L></div>
      </div>
    </div>
  );
}
