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
  bg: '#eef0f4',
  surface: '#ffffff',
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

  const color = piece.treatment === 'capstone' ? '#cc3333'
    : piece.treatment === 'found' ? '#8a6a20'
    : piece.treatment === 'fragment' ? '#2a7a50'
    : C.accent;

  const canGlitch = piece.period === 'prophetic';
  const displayName = canGlitch && hovered && isLive
    ? glitchText(piece.id, 0.15) + ext
    : piece.id + ext;

  const gridCols = mobile
    ? '24px 1fr 44px'
    : '32px 1fr 80px 100px 60px';

  return (
    <a
      href={isLive ? '/' + piece.id : undefined}
      style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        padding: mobile ? '6px 4px' : '5px 8px',
        textDecoration: 'none',
        opacity: isLive ? 1 : 0.35,
        cursor: isLive ? 'pointer' : 'default',
        background: hovered && isLive ? C.hover : (index % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent'),
        transition: 'background 0.1s',
        borderRadius: '3px',
        fontSize: mobile ? '11px' : '12px',
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
      <span style={{ color: isLive ? C.green : C.ghost, textAlign: 'right', fontSize: '11px', fontWeight: 500 }}>
        {isLive ? 'OK' : '---'}
      </span>
    </a>
  );
}

/* ══════════════════════════════
   DIRECTORY BLOCK
   ══════════════════════════════ */

function DirectoryBlock({ period, pieces, startIndex, mobile }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: mobile ? '12px' : '16px' }}>
      <div
        onClick={() => setOpen(o => !o)}
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
        <span style={{ color: C.accent, fontSize: '11px', width: '14px', fontWeight: 600 }}>{open ? '▼' : '▶'}</span>
        <span style={{ color: period.color, fontSize: mobile ? '12px' : '13px', fontWeight: 600 }}>/{period.id}/</span>
        {!mobile && (
          <span style={{ color: C.dim, fontSize: '12px' }}>
            {period.label} ({period.years})
          </span>
        )}
        <span style={{ color: C.ghost, fontSize: '11px', marginLeft: 'auto' }}>
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
    <div style={{ marginBottom: '28px', maxWidth: '620px', position: 'relative' }}>
      <div aria-hidden="true" style={{ visibility: 'hidden' }}>
        <div style={{ fontSize: '13px', lineHeight: 1.75 }}>{fullParts[0]}</div>
        <div style={{ fontSize: '13px', lineHeight: 1.75, marginTop: '8px' }}>{fullParts[1]}</div>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ fontSize: '13px', lineHeight: 1.75, color: C.dim }}>
          {main}
          {!hint && !done && <span style={{
            display: 'inline-block', width: '6px', height: '13px',
            background: C.dim, animation: 'cursor-blink 1s step-end infinite',
            verticalAlign: 'text-bottom', marginLeft: '1px',
          }} />}
        </div>
        {hint && (
          <div style={{ fontSize: '13px', lineHeight: 1.75, color: C.accent, fontWeight: 400, marginTop: '8px' }}>
            {hint}
            {!done && <span style={{
              display: 'inline-block', width: '6px', height: '13px',
              background: C.accent, opacity: 0.6, animation: 'cursor-blink 1s step-end infinite',
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
      fontSize: mobile ? '10px' : '11px', color: C.ghost, minHeight: '40px',
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
  let idx = 0;
  const gridCols = mobile
    ? '24px 1fr 44px'
    : '32px 1fr 80px 100px 60px';

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{
        background: C.surface,
        border: mobile ? 'none' : '1px solid ' + C.border,
        borderRadius: mobile ? '0' : '8px',
        maxWidth: '940px',
        margin: mobile ? '0' : '32px auto',
        boxShadow: mobile ? 'none' : '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        minHeight: mobile ? '100vh' : 'auto',
      }}>
        {/* Title bar */}
        <div style={{
          background: 'linear-gradient(180deg, #f0f1f5 0%, #e4e5ea 100%)',
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
              fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px',
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
            fontSize: mobile ? '22px' : 'clamp(24px, 4.5vw, 36px)', fontWeight: 300,
            color: C.text, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            The Collected Works of{' '}<span style={{ fontWeight: 600 }}>Rowan Black</span>
          </h1>

          <Description returning={returning} />

          {/* Column headers */}
          <div style={{
            display: 'grid', gridTemplateColumns: gridCols,
            padding: mobile ? '6px 4px' : '6px 8px',
            borderBottom: '2px solid ' + C.rule, marginBottom: '6px',
            fontSize: '10px', color: C.ghost, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500,
          }}>
            <span style={{ textAlign: 'right', paddingRight: mobile ? '8px' : '12px' }}>#</span>
            <span>File</span>
            {!mobile && <span style={{ textAlign: 'right' }}>Size</span>}
            {!mobile && <span style={{ textAlign: 'right' }}>Date</span>}
            <span style={{ textAlign: 'right' }}>Status</span>
          </div>

          {PERIODS.map(period => {
            const pp = PIECES.filter(p => p.period === period.id);
            const block = <DirectoryBlock key={period.id} period={period} pieces={pp} startIndex={idx} mobile={mobile} />;
            idx += pp.length;
            return block;
          })}
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
      fontSize: '12px', color: C.text,
      padding: mobile ? '0' : '0 16px',
    }}>
      <Archive returning={returning} mobile={mobile} />
    </div>
  );
}
