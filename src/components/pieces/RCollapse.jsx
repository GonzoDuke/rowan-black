import React from 'react';

const S = {
  outer: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '48px 32px 80px',
  },
  reddit: {
    background: '#1a1a1b',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  subredditBar: {
    background: '#1e1e1f',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  subredditIcon: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    color: '#ff4500',
    fontWeight: 700,
  },
  subredditName: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '12px',
    fontWeight: 500,
    color: '#d7dadc',
  },
  postContainer: {
    display: 'flex',
  },
  voteColumn: {
    width: '40px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px 0',
    gap: '4px',
  },
  voteArrow: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.15)',
    cursor: 'default',
    lineHeight: 1,
  },
  voteCount: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11px',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.4)',
  },
  postBody: {
    flex: 1,
    padding: '12px 16px 24px 4px',
  },
  postMeta: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '10px',
    color: 'rgba(255,255,255,0.3)',
    marginBottom: '8px',
  },
  postTitle: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '16px',
    fontWeight: 500,
    color: '#d7dadc',
    lineHeight: 1.3,
    marginBottom: '16px',
  },
  text: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '13px',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '16px',
  },
  bold: {
    color: '#d7dadc',
    fontWeight: 500,
  },
  bullet: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '12.5px',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.65)',
    paddingLeft: '20px',
    position: 'relative',
    marginBottom: '4px',
  },
  bulletDot: {
    position: 'absolute',
    left: '4px',
    color: '#ff4500',
  },
  bulletList: {
    marginBottom: '16px',
  },
  actionBar: {
    borderTop: '1px solid rgba(255,255,255,0.04)',
    padding: '8px 0',
    display: 'flex',
    gap: '16px',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '10px',
    color: 'rgba(255,255,255,0.2)',
    fontWeight: 500,
    letterSpacing: '0.02em',
  },
  annotation: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    marginTop: '48px',
    paddingTop: '24px',
  },
  annotationLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '9px',
    fontWeight: 500,
    color: 'rgba(255,255,255,0.25)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  note: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '11.5px',
    lineHeight: '1.75',
    color: 'rgba(255,255,255,0.4)',
    fontStyle: 'italic',
    marginBottom: '8px',
  },
  noteNum: {
    fontStyle: 'normal',
    color: 'rgba(255,255,255,0.25)',
    fontSize: '10px',
    verticalAlign: 'super',
    marginRight: '4px',
  },
  sup: {
    fontSize: '9px',
    color: 'rgba(255,255,255,0.3)',
    verticalAlign: 'super',
    marginLeft: '2px',
  },
};

const Sup = ({ n }) => <span style={S.sup}>{n}</span>;

const Bullet = ({ children }) => (
  <div style={S.bullet}>
    <span style={S.bulletDot}>●</span>
    {children}
  </div>
);

export default function RCollapse() {
  return (
    <div style={S.outer}>
      <div style={S.reddit}>
        {/* Subreddit bar */}
        <div style={S.subredditBar}>
          <div style={S.subredditIcon}>r/</div>
          <span style={S.subredditName}>r/collapse</span>
        </div>

        <div style={S.postContainer}>
          {/* Vote column */}
          <div style={S.voteColumn}>
            <span style={S.voteArrow}>▲</span>
            <span style={S.voteCount}>847</span>
            <span style={S.voteArrow}>▼</span>
          </div>

          {/* Post body */}
          <div style={S.postBody}>
            <div style={S.postMeta}>
              Posted by u/rowanblack_signal · 2019
            </div>

            <div style={S.postTitle}>
              You're not just being fed disinformation. You're being emotionally farmed.
            </div>

            <div style={S.text}>
              I've spent the last decade watching how technology shapes emotion. First from inside the machine - working at startups, building the very systems I'm about to criticize - and now from the outside, watching how our digital architecture is being weaponized against us. What I've seen in the past year has kept me awake at night, and it's time we talk about it.
            </div>

            <div style={S.text}>
              <span style={S.bold}>You're not just being fed disinformation. You're being emotionally farmed.</span>
            </div>

            <div style={S.text}>
              Let me break this down with a story: Last year, a video went viral showing a feminist pouring bleach on subway manspreaders. Millions of views. Countless angry comments. Subreddits erupted. The culture war got fresh ammunition. Except it was staged by RT (Russia Today), deliberately crafted to trigger exactly that response.<Sup n="1" />
            </div>

            <div style={S.text}>
              Here's what should terrify you: That video was just one tiny harvest in a massive emotional farming operation.
            </div>

            <div style={S.text}>
              <span style={S.bold}>The numbers are staggering:</span>
            </div>

            <div style={S.bulletList}>
              <Bullet>Russian networks reach 140 million Americans monthly</Bullet>
              <Bullet>Their troll farms operate 24/7 in 12-hour shifts</Bullet>
              <Bullet>Each troll has a quota of 135 comments daily</Bullet>
              <Bullet>Platforms catch only 1% of these fake accounts</Bullet>
              <Bullet>By 2020, the most engaged Facebook pages for multiple American demographics were run by Eastern European troll farms</Bullet>
            </div>

            <div style={S.text}>
              But here's what keeps me up at night: They're not just spreading lies. They're cultivating emotional responses. Engineering viral anger. Manufacturing digital depression. And they're getting better at it.
            </div>

            <div style={S.text}>
              This isn't traditional propaganda. They don't need you to believe specific facts. They just need you feeling specific things: Hopeless. Angry. Divided. Alone.
            </div>

            <div style={S.text}>
              The strategy is brilliantly simple: Find society's existing fault lines - gender, race, religion, politics - and apply pressure. Amplify the most extreme voices. Make moderate positions seem naive. Turn every conversation into a war zone. Create an environment where truth feels impossible and trust feels foolish.
            </div>

            <div style={S.text}>
              The platforms know this is happening. But engagement is engagement, whether driven by joy or rage. And rage is easier to monetize. I recently stumbled across Robert Proctor's work on agnotology - the strategic cultivation of ignorance.<Sup n="2" /> He was studying how tobacco companies deliberately manufactured doubt about cancer research, but he might as well have been describing our current digital landscape. These influence networks aren't just spreading misinformation; they're creating an environment where truth feels impossible to grasp. It's not just lies - it's the industrialized production of confusion and doubt. This is what hit me: We're living through something beyond what even Proctor envisioned. These networks aren't just manufacturing ignorance - they're manufacturing emotional states that make knowledge feel pointless. Why bother seeking truth when everything feels like it could be a lie? Why trust anything when doubt is the only rational response?
            </div>

            <div style={S.text}>
              What can we do? The usual advice about fact-checking misses the point. This is psychological warfare operating at a deeper level than facts. We need a new kind of digital emotional literacy. We need to question not just what we believe, but how our beliefs are being shaped by these emotional farming operations. The most effective form of modern propaganda isn't controlling what you think - it's controlling how you feel.
            </div>

            <div style={S.text}>
              And right now, we're all part of a massive emotional farming operation designed to harvest our worst impulses.
            </div>

            {/* Action bar */}
            <div style={S.actionBar}>
              <span>💬 312 Comments</span>
              <span>↗ Share</span>
              <span>⚑ Save</span>
              <span>···</span>
            </div>
          </div>
        </div>
      </div>

      {/* Annotations */}
      <div style={S.annotation}>
        <div style={S.annotationLabel}>Annotations</div>
        <p style={S.note}><span style={S.noteNum}>1</span> The 2018 video, widely shared as an example of radical feminism, was later revealed to be staged by Russian operatives to inflame social tensions.</p>
        <p style={S.note}><span style={S.noteNum}>2</span> A concept developed by historian Robert Proctor, initially applied to Big Tobacco's efforts to spread doubt about smoking's health risks. It now applies to the deliberate spread of misinformation in political and digital spaces.</p>
      </div>
    </div>
  );
}
