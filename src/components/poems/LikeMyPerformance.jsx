import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  subtitle: { display: 'block', fontStyle: 'italic', color: '#5a6070', marginBottom: '24px', fontSize: '15px' },
  sectionHead: { display: 'block', fontWeight: 600, fontSize: '15px', marginBottom: '8px', marginTop: '32px', color: '#1a1d24', fontFamily: "'IBM Plex Mono', monospace", fontStyle: 'italic' },
  paren: { color: '#7a8090' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children, style }) => <span style={{ ...S.line, ...style }}>{children}</span>;
const P = ({ children }) => <span style={S.paren}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function LikeMyPerformance() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.subtitle}>(broadcast from the collective void)</span>

        <span style={S.sectionHead}>I. spotlight syndrome</span>
        <div style={S.stanza}><L>Warhol said everyone gets fifteen minutes—</L><L>we traded ours for fifteen filters,</L><L>each one promising authenticity</L><L>through carefully crafted artifice.</L></div>
        <div style={S.stanza}><L>The stage lights glare like interrogation,</L><L>bright enough to whitewash</L><L>the jagged edges we're too scared to keep,</L><L>the parts of ourselves that won't compress</L><L>into shareable moments.</L></div>
        <div style={S.stanza}><L>step right up:</L><L>watch me thread my need</L><L>through the eye of a pixel,</L><L>turn my flaws into a feed-worthy highlight reel,</L><L>package my pain for mass consumption,</L><L>serve it with the right filter</L><L>to make the darkness palatable.</L></div>
        <div style={S.stanza}><L>you like me better in halves:</L><L>authentic enough to sell,</L><L>damaged just right to buy,</L><L>a product optimized for maximum engagement,</L><L>minimum truth.</L></div>
        <div style={S.stanza}><L>McLuhan knew<Sup n="1" />:</L><L>the screen doesn't just frame us,</L><L>it remakes us—pixel by pixel,</L><L>a collage of selves optimized for engagement,</L><L>each version more real</L><L>than the last real version</L><L>until reality becomes just another setting</L><L>we can adjust.</L></div>
        <div style={S.stanza}><L>swipe.</L><L>scroll.</L><L>perform.</L><L>repeat until numb.</L></div>
        <div style={S.stanza}><L>the applause is silent,</L><L>but it counts,</L><L>or at least we pretend it does</L><L>as we feed ourselves to the void.</L></div>

        <span style={S.sectionHead}>II. glitch confessionals</span>
        <div style={S.stanza}><L>this is how you pray now—</L><L>face lit by blue light,</L><L>hands clasped around a device</L><L>that knows you better than your God does,</L><L>better than you know yourself,</L><L>better than you want to know yourself.</L></div>
        <div style={S.stanza}><L>you refresh the page, hoping for grace,</L><L>but all you get is latency</L><L>and a chorus of strangers' approval,</L><L>each like a tiny dopamine hit,</L><L>each share a temporary salvation,</L><L>each comment a communion</L><L>with the digital divine.</L></div>
        <div style={S.stanza}><L>I know this because I'm there too,</L><L>another ghost in the machine,</L><L>another signal in the noise,</L><L>broadcasting my emptiness</L><L>into the collective void.</L></div>
        <div style={S.stanza}><L>Baudrillard whispers<Sup n="2" />:</L><L>the real you is already gone,</L><L>replaced by your reflection's reflection,</L><L>a copy of a copy of a copy</L><L>until the original is just a myth</L><L>we tell ourselves existed.</L></div>
        <div style={S.stanza}><L>we're all spinning</L><L>in this centrifuge of curated selves,</L><L>each of us hoping</L><L>to land close enough to real</L><L>to fool ourselves,</L><L>if not others,</L><L>each rotation taking us further</L><L>from the center we can't remember.</L></div>

        <span style={S.sectionHead}>III. terms and conditions apply</span>
        <div style={S.stanza}><L>Bowie played Ziggy Stardust;</L><L>we play ourselves,</L><L>hoping the algorithm crowns us</L><L>worthy of trending,</L><L>desperate to be verified</L><L>in a world of deep fakes.</L></div>
        <div style={S.stanza}><L>Musk bought Twitter for forty-four billion<Sup n="3" />—</L><L>as if owning the void</L><L>could make it less hollow,</L><L>as if purchasing silence</L><L>could make it speak truth.</L></div>
        <div style={S.stanza}><L>we watched him throw up polls</L><L>like prophets in hoodies:</L><L>"do you want free speech,</L><L>or just another filter?"</L><L>as if freedom could be measured</L><L>in retweets and ratios.</L></div>
        <div style={S.stanza}><L>there was a time when a face was just a face,</L><L>not an interface,</L><L>when a life wasn't a brand,</L><L>when the metrics of worth</L><L>weren't stamped in hearts and shares,</L><L>when validation came from touch</L><L>not clicks.</L></div>
        <div style={S.stanza}><L>now, we've signed away the weight of presence</L><L>for the ease of being perceived,</L><L>traded depth for reach,</L><L>wisdom for virality.</L><L>every confession becomes a caption,</L><L>every thought collapses into a hashtag,</L><L>every moment of genuine feeling</L><L>becomes content to be consumed.</L></div>
        <div style={S.stanza}><L>McLuhan said the medium is the message.</L><L>what does that make us,</L><L>broadcasting ourselves into oblivion?</L><L>our words dissolve into noise—</L><L>signals bouncing endlessly</L><L>between mirrors,</L><L>until the origin forgets itself,</L><L>until we forget ourselves.</L></div>

        <span style={S.sectionHead}>IV. performance notes</span>
        <div style={S.stanza}><L>Warhol's ghost circles the room,</L><L>painting Campbell's cans</L><L>on the walls of my mind,</L><L>mass-producing authenticity</L><L>until the very concept breaks down.</L></div>
        <div style={S.stanza}><L>I ask him if he's proud—</L><L>he shrugs,</L><L>because it's all about the pose,</L><L>all about the packaging,</L><L>all about the perfect angle</L><L>to sell emptiness back to the empty.</L></div>
        <div style={S.stanza}><L>Bowie would tell me to lean in,</L><L>sell my contradictions,</L><L>call it art,</L><L>and watch them buy it,</L><L>because even manufactured truth</L><L>is better than honest confusion.</L></div>
        <div style={S.stanza}><L>meanwhile, I stare at my phone's reflection,</L><L>a hall of mirrors in my pocket,</L><L>a rabbit hole of other people's lives</L><L>where I sometimes mistake myself for someone,</L><L>where identity becomes fluid,</L><L>and reality becomes optional.</L></div>

        <span style={S.sectionHead}>V. final transmission</span>
        <div style={S.stanza}><L>if you're hearing this,</L><L>you've already been sold,</L><L>already been bought,</L><L>already been processed</L><L>into digestible content.</L></div>
        <div style={S.stanza}><L>we're all here,</L><L>reflected in the same shattered glass:</L><L>each shard a separate version of us,</L><L>sharp enough to cut,</L><L>too thin to hold,</L><L>too fragmented to make whole.</L></div>
        <div style={S.stanza}><L>what if McLuhan was wrong,</L><L>and it's not the medium that matters</L><L>but the silence it erases?</L><L>the spaces between posts,</L><L>the moments we don't share,</L><L>the truths too raw for filters.</L></div>
        <div style={S.stanza}><L>one day we might stop.</L><L>log off.</L><L>touch grass.</L><L>look up.</L><L>remember what it means</L><L>to exist unobserved.</L></div>
        <div style={S.stanza}><L>but tonight, just tonight,</L><L>let's confess it together:</L><L>we need the void to see us,</L><L>to name us,</L><L>to hold its cold mirror up</L><L>and say: you're here,</L><L>even if here is nowhere,</L><L>even if we're just signals</L><L>in the dark.</L></div>
        <div style={S.stanza}><L>like this signal.</L><L>share this signal.</L><L>validate this signal.</L></div>
        <div style={S.stanza}><L><P>(the broadcast ends,</P></L><L><P>but the hunger persists.</P></L><L><P>it always does.</P></L><L><P>and somewhere in the static,</P></L><L><P>a real voice tries to speak,</P></L><L><P>but we've forgotten how to listen</P></L><L><P>to anything that isn't trending.)</P></L></div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Marshall McLuhan, media theorist, argued that new media technologies do not merely transmit content but fundamentally alter human perception and identity.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> Another reference to Baudrillard.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> Elon Musk's acquisition of Twitter in 2022 was framed as a bid to restore "free speech," but it also underscored the power of billionaires to shape digital public spaces.</p>
      </div>
    </div>
  );
}
