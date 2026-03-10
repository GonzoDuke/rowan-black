import React from 'react';

const S = {
  container: { maxWidth: '640px', margin: '0 auto', padding: 'clamp(24px, 5vw, 40px) clamp(16px, 5vw, 36px) clamp(40px, 8vw, 60px)' },
  poem: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '17px', lineHeight: 1.9, color: '#1a1d24' },
  stanza: { marginBottom: '28px' },
  line: { display: 'block' },
  subtitle: { display: 'block', fontStyle: 'italic', color: '#5a6070', marginBottom: '24px', fontSize: '15px' },
  sectionHead: { display: 'block', fontWeight: 600, fontSize: '18px', marginBottom: '12px', marginTop: '36px', color: '#1a1d24' },
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

export default function IronConfessional() {
  return (
    <div style={S.container}>
      <div style={S.poem}>
        <span style={S.subtitle}>(Visions on the 5:47)</span>

        <span style={S.sectionHead}>I. The Stations of the Poor</span>
        <div style={S.stanza}>
          <L>The iron serpent unhinges its jaw,</L>
          <L>swallowing souls at Penn Station<Sup n="1" />—</L>
          <L>pilgrims in pinstripes,</L>
          <L>prophets with briefcases,</L>
          <L>all of us riding the spine of America's dream.</L>
        </div>
        <div style={S.stanza}>
          <L>The industrial wastes form their own rosary:</L>
          <L>shipping containers genuflect in rust,</L>
          <L>scattered like fallen angels</L>
          <L>across New Jersey's scarred skin.</L>
          <L>Their graffiti speaks in tongues</L>
          <L>more honest than any sermon.</L>
        </div>
        <div style={S.stanza}>
          <L>Here, churches multiply like survival strategies,</L>
          <L>storefront salvation next to check-cashing temples<Sup n="2" />,</L>
          <L>neon crosses flickering like dying stars.</L>
          <L>"When all else fails, there's always God"—</L>
          <L>but God's response time varies by zip code,</L>
          <L>and miracles don't cover the rent.</L>
        </div>
        <div style={S.stanza}>
          <L>Every stop a different circle of purgatory:</L>
          <L>X souls ascend, Y descend</L>
          <L><P>(solve for salvation, show your work).</P></L>
          <L>The train moves like judgment</L>
          <L>through the veins of empire,</L>
          <L>express past stations where hope</L>
          <L>hangs by its fingernails.</L>
        </div>
        <div style={S.stanza}>
          <L>Prayer rises here like smoke</L>
          <L>from burning dreams,</L>
          <L>while corporate logos burn against the sky</L>
          <L>like false constellations</L>
          <L>no wise men follow.</L>
        </div>

        <span style={S.sectionHead}>II. The Gospel of Wealth</span>
        <div style={S.stanza}>
          <L>Two stops later, everything sanctified by money—</L>
          <L>golf courses spread like Eden franchised,</L>
          <L>each blade of grass tithing upward</L>
          <L>toward a corporate heaven.</L>
        </div>
        <div style={S.stanza}>
          <L>Here, mega-churches wear glass faces,</L>
          <L>prophets preach prosperity from pulpits of teak,</L>
          <L>while Tesla-driving apostles</L>
          <L>fill crystal parking lots.</L>
          <L>The communion wine is hundred-dollar scotch;</L>
          <L>the bread, gluten-free designer loaves.</L>
        </div>
        <div style={S.stanza}>
          <L>Private schools wear landscaping</L>
          <L>like papal robes.</L>
          <L>Their saints are hedge fund managers,</L>
          <L>their scripture written in stock tickers,</L>
          <L>their prayers answered in quarterly returns.</L>
        </div>
        <div style={S.stanza}>
          <L>White picket fences mark off</L>
          <L>promised lands in quarter-acre plots.</L>
          <L>Streets named like beatitudes:</L>
          <L>Pleasantview, Meadowbrook, Happiness Estates—</L>
          <L>each a different station</L>
          <L>on the cross of affluence.</L>
        </div>
        <div style={S.stanza}>
          <L>The mall rises</L>
          <L>like Solomon's temple reborn,</L>
          <L>where credit cards speak in tongues</L>
          <L>and each store window sells</L>
          <L>a different path to paradise<Sup n="3" />.</L>
        </div>

        <span style={S.sectionHead}>III. The Final Testament</span>
        <div style={S.stanza}>
          <L>Then reality's last revelation appears—</L>
          <L>where truth breaks through</L>
          <L>in Spanish, English, Black, White,</L>
          <L>all the tongues of babel</L>
          <L>speaking simultaneously<Sup n="4" />.</L>
        </div>
        <div style={S.stanza}>
          <L>Here, Colombian coffee shops</L>
          <L>serve communion next to Irish pubs,</L>
          <L>and God speaks without a broker,</L>
          <L>no middleman marking up grace.</L>
        </div>
        <div style={S.stanza}>
          <L>The water tower watches from its mountain</L>
          <L>like a concrete prophet,</L>
          <L>bearing witness to this daily pilgrimage</L>
          <L>of bodies seeking sanctuary</L>
          <L>in the spaces between wealth and want.</L>
        </div>
        <div style={S.stanza}>
          <L>The steel serpent winds empty now</L>
          <L>through its tree-cemetery</L>
          <L><P>(in the beginning was the word,</P></L>
          <L><P>but progress always eats the garden<Sup n="5" />).</P></L>
        </div>
        <div style={S.stanza}>
          <L>Tomorrow we'll join the ceremony again,</L>
          <L>this rolling revelation,</L>
          <L>this iron confessional</L>
          <L>where America whispers its sins</L>
          <L>to the hungry dark.</L>
        </div>
        <div style={S.stanza}>
          <L>Each night, somewhere between stations,</L>
          <L>in the space between heartbeats,</L>
          <L>the truth writes itself in rust and starlight:</L>
          <L>we're all just trying to get home,</L>
          <L>all riding this metal leviathan</L>
          <L>through the belly of the American dream,</L>
          <L>searching for an exit</L>
          <L>that might finally set us free.</L>
        </div>
        <div style={S.stanza}>
          <L>But there are no messiahs on this train,</L>
          <L>only passengers,</L>
          <L>each carrying their own cross</L>
          <L>of mortgage payments and MetroCards,</L>
          <L>all of us praying to different gods</L>
          <L>that speak the same language:</L>
          <L>tomorrow, tomorrow, tomorrow.</L>
        </div>
      </div>
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> Pennsylvania Station, located in New York City, is one of the busiest transit hubs in the United States.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A reference to the prevalence of payday loan businesses and check-cashing services in low-income neighborhoods, often located near churches.</p>
        <p style={S.note}><span style={S.noteNum}>3</span> Consumer culture is portrayed as a pseudo-religion, where personal fulfillment is marketed through products and branding.</p>
        <p style={S.note}><span style={S.noteNum}>4</span> A biblical reference to the Tower of Babel (Genesis 11), where language was divided.</p>
        <p style={S.note}><span style={S.noteNum}>5</span> A reinterpretation of John 1:1.</p>
      </div>
    </div>
  );
}
