import React from 'react';

const S = {
  container: { maxWidth: '680px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  sectionHead: { display: 'block', fontWeight: 600, fontSize: '18px', marginBottom: '12px', marginTop: '36px', color: '#1a1d24' },
  sup: { fontSize: '11px', color: '#9099a8', verticalAlign: 'super', marginLeft: '2px' },
  annotation: { borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '48px', paddingTop: '24px' },
  annotationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', fontWeight: 600, color: '#9099a8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' },
  note: { fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 1.75, color: '#6a7080', marginBottom: '8px' },
  noteNum: { color: '#9099a8', fontSize: '10px', verticalAlign: 'super', marginRight: '4px' },
};

const L = ({ children }) => <span style={S.line}>{children}</span>;
const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

export default function DigitalWake() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.sectionHead}>I. The Feed</span>
        <div style={S.stanza}><L>At 3 AM, the algorithms know us better than any god we've prayed to—</L><L>our hungers raw and unfiltered in the phosphorescent glow of endless content,</L><L>each scroll a confession we'd never speak in daylight, each click a communion.</L></div>
        <div style={S.stanza}><L>Tonight, they're sharing black squares and filtered grief like digital communion wafers,</L><L>their empathy scheduled and optimized for maximum engagement across time zones,</L><L>hashtagged solidarity spreading like a virus through the corpus of our collective consciousness.</L></div>
        <div style={S.stanza}><L>The blue light burns against our retinas like truth serum, like revelation, like judgment,</L><L>every pixel a mirror reflecting what we've become: hungry ghosts in the machine<Sup n="1" />,</L><L>digital pilgrims searching for salvation in the endless scroll of someone else's pain.</L></div>
        <div style={S.stanza}><L>We watch them perform their prescribed rituals of caring, their choreographed concern,</L><L>each post calibrated for maximum impact, minimum risk, optimal reach—</L><L>the perfect balance of outrage and optimism to keep the metrics climbing.</L></div>

        <span style={S.sectionHead}>II. The Performance</span>
        <div style={S.stanza}><L>In the fluorescent cathedral of the timeline, the faithful gather to perform their devotions:</L><L>copy, paste, repeat—their fingers spreading packaged pain across cold glass</L><L>like children finger-painting with someone else's blood, someone else's story, someone else's war.</L></div>
        <div style={S.stanza}><L>The machine logs their concern with algorithmic precision, measures virtue in metrics,</L><L>converts their clicks to currency, their shares to social capital, their comments to credentials</L><L>while the real fires burn unfiltered, uncaptioned, unnamed in the world beyond the screen.</L></div>
        <div style={S.stanza}><L>Watch how they curate their consciousness, edit their empathy for mass consumption,</L><L>package their politics in perfectly portable pieces, ready for instant digestion—</L><L>revolution reduced to retweets, rebellion formatted to fit your feed.</L></div>
        <div style={S.stanza}><L>In the comments, they perform elaborate rituals of purification and punishment<Sup n="2" />,</L><L>their righteousness measured in character counts, their activism a carefully constructed</L><L>collection of approved phrases, sanctioned hashtags, and properly attributed quotes.</L></div>

        <span style={S.sectionHead}>III. The Marketplace</span>
        <div style={S.stanza}><L>Here's what breaks you: not the emptiness that echoes through the digital halls,</L><L>but the perfect choreography of caring, the seamless simulation of human connection</L><L>mass-produced and marketed like designer drugs for our starving souls.</L></div>
        <div style={S.stanza}><L>Their grief is seamless, their outrage curated, their trauma neatly cropped to fit the frame,</L><L>every raw emotion processed and packaged for easy consumption, quick digestion,</L><L>served with a side of sponsored content and suggested accounts you might like.</L></div>
        <div style={S.stanza}><L>We've built cathedrals of code where prophets post in promoted tweets,</L><L>where revolutionaries pause their livestreams to thank their subscribers,</L><L>where every authentic moment is immediately converted into content.</L></div>
        <div style={S.stanza}><L>The algorithm feeds on authenticity like a vampire, drains it of its blood,</L><L>processes it through filters and frameworks, analytics and engagement metrics,</L><L>sells it back to us with better lighting and a link to purchase similar experiences.</L></div>

        <span style={S.sectionHead}>IV. The Machine Beneath</span>
        <div style={S.stanza}><L>Sometimes in the dead hours between one crisis and the next, between one wave</L><L>of synchronized sharing and another tide of collective grieving, the signal stutters—</L><L>a glitch in the matrix, a tear in the digital veil, a glimpse behind the curtain.</L></div>
        <div style={S.stanza}><L>For a moment, you see the machinery beneath: the cold equations of engagement,</L><L>the automated systems parsing human pain into profitable parcels,</L><L>the vast networks converting consciousness into commodity, experience into executable code.</L></div>
        <div style={S.stanza}><L>Their compassion is quantified in clicks, their solidarity monetized in shares,</L><L>their awareness analyzed for optimal distribution across multiple platforms—</L><L>every genuine impulse processed through the profit machine.</L></div>
        <div style={S.stanza}><L>The horror isn't the performance (we've always been performers, haven't we?),</L><L>but how perfectly it works, how seamlessly we've adapted to the new parameters,</L><L>how easily we mistake the menu for the meal, the map for the territory, the share for the struggle.</L></div>

        <span style={S.sectionHead}>V. The Spectacle</span>
        <div style={S.stanza}><L>Watch them compete in the Olympics of empathy, their perfectly crafted captions</L><L>vying for the gold medal in virtual virtue, their profile pictures updated with approved</L><L>filters to show they're on the right side of history, at least for this news cycle.</L></div>
        <div style={S.stanza}><L>In the marketplace of morality, they trade in futures of fictional righteousness,</L><L>hedge their bets with carefully worded disclaimers, invest in the stock of sanctimony—</L><L>their portfolios diversified across multiple causes, multiple crises, multiple crusades.</L></div>
        <div style={S.stanza}><L>The machine learning algorithms track their patterns of protest and prediction,</L><L>calculate the probable trajectory of their principles, the half-life of their hashtag heroics,</L><L>the decay rate of their digital devotions to each passing cause.</L></div>
        <div style={S.stanza}><L>In this economy of ethics, authenticity is the most valuable currency and therefore the most counterfeited—</L><L>watch how they mint new moments of meaning, stamp them with seals of sincerity,</L><L>circulate them through the networks of noble noise.</L></div>

        <span style={S.sectionHead}>VI. The Wake</span>
        <div style={S.stanza}><L>Dawn breaks in binary across the digital horizon, another night lost to the infinite scroll,</L><L>another vigil held in the virtual void, another wake for something we can't quite name.</L></div>
        <div style={S.stanza}><L>They'll rise slowly from their screens, check their metrics, count their impact in hearts and shares,</L><L>measure their worth in retweets and reactions, their value in views and validations.</L></div>
        <div style={S.stanza}><L>But what are we really mourning in these midnight marathons of mediated meaning?</L><L>The death of distance? The commodification of care? The automation of empathy?</L><L>Or something older—the moment we first mistook the map for the territory,</L><L>the hashtag for the revolution, the screenshot for the scream, the filter for the feeling,</L><L>the performance for the pain, the simulation for the soul<Sup n="3" />?</L></div>
        <div style={S.stanza}><L>The screen dims. The algorithm sleeps. The metrics reset for another cycle.</L><L>But somewhere beyond the reach of their devices, unmarked, uncaptured, uncurated,</L><L>the real world burns in resolutions too raw for their carefully calibrated displays.</L></div>
        <div style={S.stanza}><L>And in this artificial twilight, between one crisis and the next,</L><L>between one performance and another, between signal and silence,</L><L>I watch them worship at their digital altars, and I can't help but wonder:</L><L>when did we start mistaking the glow of our screens for the light of revelation?</L><L>When did we begin believing that sharing was the same as caring,</L><L>that posting was the same as protesting, that clicking was the same as changing?</L></div>
        <div style={S.stanza}><L>The machine hums its perpetual lullaby, promising connection, promising meaning,</L><L>promising that somewhere in this labyrinth of likes and links and lost attention,</L><L>we might find something real, something true, something worth saving.</L></div>
        <div style={S.stanza}><L>But morning comes in ones and zeros, and we are left with nothing but receipts</L><L>for our digital devotions, notifications of our virtual vigils, metrics of our monitored</L><L>mourning—ghosts in the machine, haunting the halls of our own elaborate emptiness.</L></div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> A fusion of Buddhist mythology (hungry ghosts representing insatiable desires) and the concept of "ghosts in the machine" (human consciousness lost in technology).</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A nod to cancel culture and public call-out rituals.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> Again, referencing Baudrillard.</p>
      </div>
    </div>
  );
}
