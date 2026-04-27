import React, { useState, useEffect, useRef } from 'react';
import { PIECES, PERIODS } from '../data/pieces.js';

/* ── Responsive hook ── */
function useIsMobile(breakpoint = 640) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setMobile(mq.matches);
    const handler = (e) => setMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);
  return mobile;
}

/* ── Constants ── */
const FILE_EXT = { poem: '', found: '.doc', fragment: '.frag', capstone: '.×§∂' };
function getExt(t) { return t in FILE_EXT ? FILE_EXT[t] : ''; }

const BOOT_LINES = [
  'CORVIDS COLLECTIVE // RECOVERY SYSTEM v3.1',
  'Initializing archive protocol...',
  'Scanning archived media...',
  'Reconstructing file table...',
  PIECES.length + ' objects detected',
  PIECES.filter(p => p.status === 'live').length + ' recovered // ' + PIECES.filter(p => p.status !== 'live').length + ' pending reconstruction',
  'ARCHIVE READY',
];
const BOOT_DELAYS = [0, 600, 1200, 1800, 2600, 3400, 4200];

const DESC_SENTENCES = [
  'Recovered archive.',
  ' Poems, essays, fragments, and digital artifacts assembled by the Corvids Collective.',
  ' Some files are damaged. Some are incomplete.',
  ' All are preserved as found.',
  '\n\nOpen a directory below to browse the collection.',
];

/* ── Colors ── */
const C = {
  bg: '#dedad4',
  surface: '#e2e0db',
  text: '#1a1d24',
  dim: '#5a6070',
  ghost: '#9099a8',
  accent: '#2a6dd4',
  rule: 'rgba(0,0,0,0.08)',
  border: 'rgba(0,0,0,0.12)',
  green: '#2a8a40',
  hover: 'rgba(42,109,212,0.06)',
};

/* ── Glitch (hover only) ── */
const GLITCH_CHARS = ['¿','×','¤','§','¬','ƒ','†','‡','∞','≠','∂','√','∑','Ω','¶'];
function glitchText(text, intensity) {
  if (!intensity) return text;
  let seed = 0;
  for (let i = 0; i < text.length; i++) seed += text.charCodeAt(i);
  return text.split('').map((ch, i) => {
    if (ch === '.' || ch === '/') return ch;
    const r = ((seed * (i+1) * 9301 + 49297) % 233280) / 233280;
    if (r > intensity) return ch;
    return GLITCH_CHARS[Math.floor(r * GLITCH_CHARS.length * 4) % GLITCH_CHARS.length];
  }).join('');
}

/* ══════════════════════════════
   FILE ENTRY
   ══════════════════════════════ */

function FileEntry({ piece, index, mobile }) {
  const isLive = piece.status === 'live';
  const ext = getExt(piece.treatment);
  const sizeRef = useRef((Math.random() * 14 + 1.5).toFixed(1) + ' KB');
  const [hovered, setHovered] = useState(false);
  const isCapstone = piece.treatment === 'capstone';

  const color = isCapstone ? '#cc3333'
    : piece.treatment === 'found' ? '#8a6a20'
    : piece.treatment === 'fragment' ? '#2a7a50'
    : C.accent;

  const canGlitch = piece.period === 'prophetic';
  const baseName = piece.fileDisplay || piece.id;
  const displayName = canGlitch && hovered && isLive
    ? glitchText(baseName, 0.15) + ext
    : baseName + ext;

  const gridCols = mobile
    ? '28px 1fr 80px'
    : '36px 1fr 90px 110px 90px';

  const handleClick = (e) => {
    if (!isLive) return;
    if (!isCapstone) return;
    e.preventDefault();

    const allText = document.querySelectorAll('span, div, a');
    const glitchChars = '¿×¤§¬ƒ†‡∞≠∂√∑Ω¶░▒▓█';

    // Phase 1: Archive text scrambles on white (0-2s)
    let scrambleCount = 0;
    const scrambleInterval = setInterval(() => {
      const targets = Array.from(allText).filter(el => el.textContent.length > 2 && el.textContent.length < 40);
      if (targets.length === 0) return;
      const pick = targets[Math.floor(Math.random() * targets.length)];
      if (!pick.dataset.original) pick.dataset.original = pick.textContent;
      pick.textContent = pick.textContent.split('').map(c =>
        c === ' ' ? ' ' : Math.random() > 0.4 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : c
      ).join('');
      scrambleCount++;
      if (scrambleCount > 40) clearInterval(scrambleInterval);
    }, 50);

    // Phase 2: Visual distortion on white (1.2-2s)
    const body = document.body;
    setTimeout(() => { body.style.transition = 'none'; body.style.filter = 'hue-rotate(180deg) contrast(1.3)'; }, 1200);
    setTimeout(() => { body.style.filter = 'none'; body.style.transform = 'skewX(2deg) scaleY(1.01)'; }, 1500);
    setTimeout(() => { body.style.transform = 'skewX(-1deg) scaleY(0.99)'; }, 1700);
    setTimeout(() => { body.style.transform = 'none'; }, 1900);

    // Phase 3: Black screen
    setTimeout(() => {
      clearInterval(scrambleInterval);
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:#1a1a1e;';
      document.body.appendChild(overlay);
      body.style.filter = 'none';
      body.style.transform = 'none';
    }, 2000);

    // Phase 4: Navigate
    setTimeout(() => { window.location.href = '/no-signal-found'; }, 2800);
  };

  // Status display
  let statusText = isLive ? 'OK' : '---';
  let statusColor = isLive ? C.green : C.ghost;
  if (isCapstone) {
    statusText = hovered ? 'NOT OK' : 'OK';
    statusColor = hovered ? '#aa3333' : C.green;
  }
  if (piece.period === 'unconfirmed') {
    statusText = 'UNVERIFIED';
    statusColor = '#c06a1a';
  }

  return (
    <a
      href={isLive ? '/' + piece.id : undefined}
      onClick={handleClick}
      style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        padding: mobile ? '6px 4px' : '6px 10px',
        textDecoration: 'none',
        opacity: isLive ? 1 : 0.35,
        cursor: isLive ? 'pointer' : 'default',
        background: hovered && isLive ? C.hover : (index % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent'),
        transition: 'background 0.1s',
        borderRadius: '3px',
        fontSize: mobile ? '13px' : 'clamp(14px, 0.85vw + 2.5px, 17px)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ color: C.ghost, textAlign: 'right', paddingRight: mobile ? '8px' : '12px' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span style={{ color: hovered && isLive ? C.accent : color, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 400 }}>
        {displayName}
      </span>
      {!mobile && <span style={{ color: C.ghost, textAlign: 'right' }}>{sizeRef.current}</span>}
      {!mobile && <span style={{ color: C.ghost, textAlign: 'right' }}>{piece.year}</span>}
      <span style={{ color: statusColor, textAlign: 'right', fontSize: 'clamp(13px, 0.7vw + 2px, 15px)', fontWeight: 500, transition: 'color 0.15s' }}>
        {statusText}
      </span>
    </a>
  );
}

/* ══════════════════════════════
   DIRECTORY BLOCK
   ══════════════════════════════ */

function DirectoryBlock({ period, pieces, startIndex, mobile, open, onToggle, innerRef }) {
  return (
    <div ref={innerRef} style={{ marginBottom: mobile ? '12px' : '16px', scrollMarginTop: mobile ? '52px' : '24px' }}>
      <div
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: mobile ? '6px' : '8px',
          cursor: 'pointer', padding: mobile ? '8px 4px' : '8px 8px',
          background: open ? 'rgba(0,0,0,0.03)' : 'transparent',
          borderRadius: '4px',
          borderBottom: '1px solid ' + C.rule,
          userSelect: 'none',
          transition: 'background 0.1s',
        }}
      >
        <span style={{ color: C.accent, fontSize: '13px', width: '16px', fontWeight: 600 }}>{open ? '▼' : '▶'}</span>
        <span style={{ color: period.color, fontSize: mobile ? '14px' : 'clamp(15px, 0.9vw + 3px, 18px)', fontWeight: 600, WebkitFontSmoothing: 'auto', MozOsxFontSmoothing: 'auto' }}>/{period.id}/</span>
        {!mobile && (
          <span style={{ color: C.dim, fontSize: 'clamp(14px, 0.85vw + 2.5px, 17px)' }}>
            {period.label} ({period.years})
          </span>
        )}
        <span style={{ color: C.ghost, fontSize: '13px', marginLeft: 'auto' }}>
          {pieces.length} items
        </span>
      </div>
      {open && (
        <div style={{ padding: mobile ? '4px 0 8px 12px' : '4px 0 8px 22px' }}>
          {pieces.map((p, i) => <FileEntry key={p.id} piece={p} index={startIndex + i} mobile={mobile} />)}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════
   DESCRIPTION (typewriter)
   ══════════════════════════════ */

function Description({ returning }) {
  const fullText = DESC_SENTENCES.join('');
  const [charCount, setCharCount] = useState(returning ? fullText.length : 0);
  const mountedRef = useRef(true);

  const sentenceEnds = useRef((() => {
    const ends = []; let pos = 0;
    for (const s of DESC_SENTENCES) { pos += s.length; ends.push(pos); }
    return ends;
  })());

  useEffect(() => {
    if (returning) return;
    mountedRef.current = true;
    let idx = 0; let timer;
    function tick() {
      if (!mountedRef.current || idx >= fullText.length) return;
      idx++; setCharCount(idx);
      const isPause = sentenceEnds.current.includes(idx) && idx < fullText.length;
      timer = setTimeout(tick, isPause ? 400 : 25);
    }
    timer = setTimeout(tick, 300);
    return () => { mountedRef.current = false; clearTimeout(timer); };
  }, [returning]);

  const visible = fullText.slice(0, charCount);
  const parts = visible.split('\n\n');
  const main = parts[0] || '';
  const hint = parts[1] || '';
  const done = charCount >= fullText.length;
  const fullParts = fullText.split('\n\n');

  return (
    <div style={{ marginBottom: '28px', maxWidth: '720px', position: 'relative' }}>
      <div aria-hidden="true" style={{ visibility: 'hidden' }}>
        <div style={{ fontSize: 'clamp(15px, 0.9vw + 3px, 18px)', lineHeight: 1.75 }}>{fullParts[0]}</div>
        <div style={{ fontSize: 'clamp(15px, 0.9vw + 3px, 18px)', lineHeight: 1.75, marginTop: '8px' }}>{fullParts[1]}</div>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ fontSize: 'clamp(15px, 0.9vw + 3px, 18px)', lineHeight: 1.75, color: C.dim }}>
          {main}
          {!hint && !done && <span style={{
            display: 'inline-block', width: '6px', height: '13px',
            background: C.dim, animation: 'cursor-blink 1s step-end infinite',
            verticalAlign: 'text-bottom', marginLeft: '1px',
          }} />}
        </div>
        {hint && (
          <div style={{ fontSize: 'clamp(15px, 0.9vw + 3px, 18px)', lineHeight: 1.75, color: C.dim, fontWeight: 400, marginTop: '8px' }}>
            {hint}
            {!done && <span style={{
              display: 'inline-block', width: '6px', height: '13px',
              background: C.dim, opacity: 0.6, animation: 'cursor-blink 1s step-end infinite',
              verticalAlign: 'text-bottom', marginLeft: '1px',
            }} />}
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════
   BOOT PROMPT (footer area)
   ══════════════════════════════ */

function BootPrompt({ returning, mobile }) {
  const [lineIndex, setLineIndex] = useState(-1);
  const [done, setDone] = useState(returning);
  const mountedRef = useRef(true);

  useEffect(() => {
    if (returning) return;
    mountedRef.current = true;
    const timers = BOOT_DELAYS.map((d, i) =>
      setTimeout(() => { if (mountedRef.current) setLineIndex(i); }, d)
    );
    const doneTimer = setTimeout(() => {
      if (mountedRef.current) setDone(true);
    }, BOOT_DELAYS[BOOT_DELAYS.length - 1] + 1200);
    return () => {
      mountedRef.current = false;
      timers.forEach(clearTimeout);
      clearTimeout(doneTimer);
    };
  }, [returning]);

  const currentLine = lineIndex >= 0 && lineIndex < BOOT_LINES.length ? BOOT_LINES[lineIndex] : null;
  const isReady = currentLine === 'ARCHIVE READY';

  return (
    <div style={{
      borderTop: '1px solid ' + C.rule, padding: mobile ? '10px 16px' : '12px 36px',
      fontSize: mobile ? '12px' : '13px', color: C.ghost, minHeight: '40px',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
    }}>
      {done ? (
        <span>
          corvids@archive:~$&nbsp;
          <span style={{ display: 'inline-block', width: '7px', height: '13px', background: C.ghost, animation: 'cursor-blink 1s step-end infinite', verticalAlign: 'text-bottom' }} />
        </span>
      ) : currentLine !== null ? (
        <span style={{
          color: isReady ? C.green : C.ghost,
          fontWeight: isReady ? 600 : 400,
          letterSpacing: isReady ? '0.06em' : '0.02em',
        }}>
          {'> '}{currentLine}
          <span style={{ display: 'inline-block', width: '7px', height: '13px', background: isReady ? C.green : C.ghost, animation: 'cursor-blink 1s step-end infinite', verticalAlign: 'text-bottom', marginLeft: '4px' }} />
        </span>
      ) : (
        <span>
          <span style={{ display: 'inline-block', width: '7px', height: '13px', background: C.ghost, animation: 'cursor-blink 1s step-end infinite', verticalAlign: 'text-bottom' }} />
        </span>
      )}
    </div>
  );
}

/* ══════════════════════════════
   ARCHIVE (main view)
   ══════════════════════════════ */

function Archive({ returning, mobile }) {
  const [openDirs, setOpenDirs] = useState(() => {
    if (typeof window === 'undefined') return {};
    const targetId = window.location.hash.replace(/^#/, '');
    if (PERIODS.some(p => p.id === targetId)) return { [targetId]: true };
    return {};
  });
  const allOpen = PERIODS.every(p => openDirs[p.id]);
  const dirRefs = useRef({});

  const toggleDir = (id) => setOpenDirs(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleAll = () => {
    if (allOpen) {
      setOpenDirs({});
    } else {
      const all = {};
      PERIODS.forEach(p => { all[p.id] = true; });
      setOpenDirs(all);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const targetId = window.location.hash.replace(/^#/, '');
    if (!targetId) return;
    if (!PERIODS.some(p => p.id === targetId)) return;
    const el = dirRefs.current[targetId];
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  let idx = 0;
  const gridCols = mobile
    ? '28px 1fr 80px'
    : '36px 1fr 90px 110px 90px';

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{
        background: C.surface,
        border: mobile ? 'none' : '1px solid ' + C.border,
        borderRadius: mobile ? '0' : '8px',
        maxWidth: '1600px',
        margin: mobile ? '0' : '32px auto',
        boxShadow: mobile ? 'none' : '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        minHeight: mobile ? '100vh' : 'auto',
      }}>
        {/* Title bar */}
        <div style={{
          background: 'linear-gradient(180deg, #e6e7ec 0%, #d8dae2 100%)',
          borderBottom: '1px solid ' + C.border,
          padding: mobile ? '8px 12px' : '10px 16px',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: mobile ? '10px' : '12px', height: mobile ? '10px' : '12px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: mobile ? '10px' : '12px', height: mobile ? '10px' : '12px', borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: mobile ? '10px' : '12px', height: mobile ? '10px' : '12px', borderRadius: '50%', background: '#28c840' }} />
          </div>
          {!mobile && (
            <div style={{
              flex: 1, textAlign: 'center',
              fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
              color: C.ghost, fontWeight: 400,
            }}>
              corvids@archive: ~/collected-works/rowan-black
            </div>
          )}
        </div>

        {/* Content area */}
        <div style={{ padding: mobile ? '20px 16px 16px' : '32px 36px 24px' }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', Arial, sans-serif",
            fontSize: mobile ? '22px' : 'clamp(28px, 3.4vw, 48px)', fontWeight: 300,
            color: C.text, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            The Collected Works of{' '}<span style={{ fontWeight: 600 }}>Rowan Black</span>
          </h1>

          <Description returning={returning} />

          {/* About links */}
          <div style={{
            marginBottom: '24px',
            display: 'flex',
            flexDirection: mobile ? 'column' : 'row',
            alignItems: mobile ? 'flex-start' : 'flex-start',
            justifyContent: 'space-between',
            gap: mobile ? '4px' : '16px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="/who-is-rowan-black" style={{
                fontSize: 'clamp(15px, 0.9vw + 3px, 18px)', fontFamily: "'IBM Plex Mono', monospace",
                color: C.accent, textDecoration: 'none', fontWeight: 400,
              }}>Who is Rowan Black</a>
              <a href="/corvids-letter" style={{
                fontSize: 'clamp(15px, 0.9vw + 3px, 18px)', fontFamily: "'IBM Plex Mono', monospace",
                color: C.accent, textDecoration: 'none', fontWeight: 400,
              }}>A Letter from the Corvids Collective</a>
            </div>
            <a href="/working-notes/" style={{
              fontSize: 'clamp(15px, 0.9vw + 3px, 18px)', fontFamily: "'IBM Plex Mono', monospace",
              color: C.accent, textDecoration: 'none', fontWeight: 400,
              whiteSpace: 'nowrap',
            }}>Working Notes - Our Blog</a>
          </div>

          {/* Column headers */}
          <div style={{
            display: 'grid', gridTemplateColumns: gridCols,
            padding: mobile ? '6px 4px' : '8px 10px',
            borderBottom: '2px solid ' + C.rule, marginBottom: '6px',
            fontSize: '12px', color: C.ghost, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500,
          }}>
            <span style={{ textAlign: 'right', paddingRight: mobile ? '8px' : '12px' }}>#</span>
            <span>File</span>
            {!mobile && <span style={{ textAlign: 'right' }}>Size</span>}
            {!mobile && <span style={{ textAlign: 'right' }}>Date</span>}
            <span style={{ textAlign: 'right' }}>Status</span>
          </div>

          {/* Expand/collapse all */}
          <div style={{
            display: 'flex', justifyContent: 'flex-start', marginBottom: '8px',
          }}>
            <span
              onClick={toggleAll}
              style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: 'clamp(13px, 0.8vw + 2px, 16px)',
                color: C.accent, cursor: 'pointer', userSelect: 'none',
                padding: '2px 0',
              }}
            >
              {allOpen ? '[ collapse all ]' : '[ expand all ]'}
            </span>
          </div>

          {PERIODS.map(period => {
            const pp = PIECES.filter(p => p.period === period.id);
            const block = (
              <DirectoryBlock
                key={period.id}
                period={period}
                pieces={pp}
                startIndex={idx}
                mobile={mobile}
                open={!!openDirs[period.id]}
                onToggle={() => toggleDir(period.id)}
                innerRef={(el) => { dirRefs.current[period.id] = el; }}
              />
            );
            idx += pp.length;
            return block;
          })}
        </div>

        {/* Submissions */}
        <div style={{
          padding: mobile ? '12px 16px' : '14px 36px',
          borderTop: '1px solid ' + C.rule,
          fontSize: 'clamp(12px, 0.7vw + 2px, 15px)', color: C.ghost, lineHeight: 1.6,
        }}>
          If you believe you've encountered writing by Rowan Black, please contact{' '}
          <a href="mailto:submissions@whoisrowanblack.com" style={{ color: C.accent, textDecoration: 'none' }}>
            submissions@whoisrowanblack.com
          </a>
          <div style={{ marginTop: '6px' }}>
            Follow via RSS:{' '}
            <a href="/rss.xml" style={{ color: C.accent, textDecoration: 'none' }}>
              /rss.xml
            </a>
          </div>
        </div>

        <BootPrompt returning={returning} mobile={mobile} />
      </div>
    </div>
  );
}

/* ══════════════════════════════
   ROOT
   ══════════════════════════════ */

export default function HomeContent() {
  const mobile = useIsMobile();
  const [returning] = useState(() => {
    try { return sessionStorage.getItem('rb-booted') === '1'; } catch(e) { return false; }
  });

  useEffect(() => {
    try { sessionStorage.setItem('rb-booted', '1'); } catch(e) {}
  }, []);

  return (
    <div style={{
      background: C.bg, minHeight: '100vh',
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      fontSize: '14px', color: C.text,
      padding: mobile ? '0' : '0 16px',
    }}>
      <Archive returning={returning} mobile={mobile} />
    </div>
  );
}
