import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PIECES, PERIODS } from '../data/pieces.js';

/* ══════════════════════════════
   CONSTANTS
   ══════════════════════════════ */

const FILE_EXT = { poem: '.txt', found: '.doc', fragment: '.frag', capstone: '.sys' };

const BOOT_LINES = [
  'CORVIDS COLLECTIVE // RECOVERY SYSTEM v3.1',
  'Initializing archive protocol...',
  'Scanning archived media...',
  'Reconstructing file table...',
  PIECES.length + ' objects detected',
  PIECES.filter(p => p.status === 'live').length + ' recovered // ' + PIECES.filter(p => p.status !== 'live').length + ' pending reconstruction',
  '',
  'ARCHIVE READY',
];

const BOOT_DELAYS = [0, 800, 1800, 2800, 4000, 5000, 5800, 6400];

const DESC_SENTENCES = [
  'Recovered archive.',
  ' Poems, essays, fragments, and digital artifacts assembled by the Corvids Collective.',
  ' Some files are damaged. Some are incomplete.',
  ' All are preserved as found.',
  '\n\nOpen a directory below to browse the collection.',
];

/* ══════════════════════════════
   GLITCH SYSTEM
   ══════════════════════════════ */

// How aggressively to glitch filenames by period
const GLITCH_INTENSITY = {
  teenage: 0,
  early: 0,
  transitional: 0,
  mature: 0,
  prophetic: 0.18,
};

// Corrupted characters: broken letterforms, not blocks
const GLITCH_CHARS = ['¿', '×', '¤', '§', '¬', 'ƒ', '†', '‡', '∞', '≠', '∂', '√', '∑', 'Ω', '¶'];

function glitchText(text, period) {
  const intensity = GLITCH_INTENSITY[period] || 0;
  if (intensity === 0) return text;

  let seed = 0;
  for (let i = 0; i < text.length; i++) seed += text.charCodeAt(i);

  return text.split('').map((char, i) => {
    if (char === '.' || char === '/') return char;
    const pseudoRandom = ((seed * (i + 1) * 9301 + 49297) % 233280) / 233280;
    if (pseudoRandom > intensity) return char;
    const pick = GLITCH_CHARS[Math.floor(pseudoRandom * GLITCH_CHARS.length * 4) % GLITCH_CHARS.length];
    return pick;
  }).join('');
}

/* ══════════════════════════════
   FILE ENTRY
   ══════════════════════════════ */

function FileEntry({ piece, index }) {
  const isLive = piece.status === 'live';
  const ext = FILE_EXT[piece.treatment] || '.txt';
  const sizeRef = useRef((Math.random() * 14 + 1.5).toFixed(1) + ' KB');
  const [hovered, setHovered] = useState(false);

  const color = piece.treatment === 'capstone' ? '#ff4444'
    : piece.treatment === 'found' ? '#e8a030'
    : piece.treatment === 'fragment' ? '#50b080'
    : '#4a9eff';

  const fileName = glitchText(piece.id, piece.period) + ext;

  return (
    <a
      href={isLive ? '/' + piece.id : undefined}
      style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr 80px 100px 60px',
        padding: '4px 0',
        textDecoration: 'none',
        opacity: isLive ? 1 : 0.25,
        cursor: isLive ? 'pointer' : 'default',
        background: hovered && isLive ? 'rgba(74,158,255,0.06)' : 'transparent',
        transition: 'background 0.1s',
        borderBottom: '1px solid rgba(255,255,255,0.03)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.15)', textAlign: 'right', paddingRight: '12px' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span style={{ color: hovered && isLive ? '#4a9eff' : color, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {fileName}
      </span>
      <span style={{ color: 'rgba(255,255,255,0.2)', textAlign: 'right' }}>{sizeRef.current}</span>
      <span style={{ color: 'rgba(255,255,255,0.15)', textAlign: 'right' }}>{piece.year}</span>
      <span style={{ color: isLive ? '#39ff14' : 'rgba(255,255,255,0.15)', textAlign: 'right', fontSize: '11px' }}>
        {isLive ? 'OK' : '---'}
      </span>
    </a>
  );
}

/* ══════════════════════════════
   DIRECTORY BLOCK
   ══════════════════════════════ */

function DirectoryBlock({ period, pieces, startIndex }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: '24px' }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          cursor: 'pointer', padding: '6px 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '4px', userSelect: 'none',
        }}
      >
        <span style={{ color: '#4a9eff', fontSize: '12px', width: '14px' }}>{open ? 'v' : '>'}</span>
        <span style={{ color: period.color, fontSize: '12px' }}>/{period.id}/</span>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
          {period.label} ({period.years})
        </span>
        <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '11px', marginLeft: 'auto' }}>
          {pieces.length} items
        </span>
      </div>
      {open && (
        <div style={{ paddingLeft: '14px' }}>
          {pieces.map((p, i) => <FileEntry key={p.id} piece={p} index={startIndex + i} />)}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════
   BOOT SEQUENCE
   ══════════════════════════════ */

function BootSequence({ onComplete }) {
  const [lineCount, setLineCount] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    // Show title after 600ms
    const titleTimer = setTimeout(() => {
      if (mountedRef.current) setShowTitle(true);
    }, 600);

    // Schedule each boot line
    const lineTimers = BOOT_DELAYS.map((delay, i) =>
      setTimeout(() => {
        if (mountedRef.current) setLineCount(i + 1);
      }, delay)
    );

    // Transition to archive after last line
    const completeTimer = setTimeout(() => {
      if (mountedRef.current) onComplete();
    }, BOOT_DELAYS[BOOT_DELAYS.length - 1] + 1200);

    // Safety valve: force complete after 10s no matter what
    const safetyTimer = setTimeout(() => {
      if (mountedRef.current) onComplete();
    }, 10000);

    return () => {
      mountedRef.current = false;
      clearTimeout(titleTimer);
      clearTimeout(completeTimer);
      clearTimeout(safetyTimer);
      lineTimers.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '32px',
    }}>
      <div style={{
        fontFamily: "'Space Grotesk', Arial, sans-serif",
        fontSize: 'clamp(22px, 4vw, 34px)',
        fontWeight: 300,
        color: '#ffffff',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        textAlign: 'center',
        marginBottom: '48px',
        opacity: showTitle ? 1 : 0,
        transform: showTitle ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        The Collected Works of<br />
        <span style={{ fontWeight: 600 }}>Rowan Black</span>
      </div>

      <div style={{ maxWidth: '520px', width: '100%' }}>
        {BOOT_LINES.slice(0, lineCount).map((line, i) => (
          <div key={i} style={{
            fontSize: '12px',
            lineHeight: '2',
            color: line === 'ARCHIVE READY' ? '#39ff14' : 'rgba(255,255,255,0.5)',
            fontWeight: line === 'ARCHIVE READY' ? 500 : 300,
            letterSpacing: line === 'ARCHIVE READY' ? '0.12em' : '0.02em',
          }}>
            {line || '\u00A0'}
          </div>
        ))}
        <span style={{
          display: 'inline-block', width: '7px', height: '14px',
          background: 'rgba(255,255,255,0.5)',
          animation: 'cursor-blink 1s step-end infinite',
          verticalAlign: 'text-bottom', marginLeft: '2px',
        }} />
      </div>
    </div>
  );
}

/* ══════════════════════════════
   TERMINAL TEXT (letter by letter)
   ══════════════════════════════ */

function TerminalText({ skipAnimation }) {
  const fullText = DESC_SENTENCES.join('');
  const [charCount, setCharCount] = useState(skipAnimation ? fullText.length : 0);
  const mountedRef = useRef(true);

  const sentenceEnds = useRef((() => {
    const ends = [];
    let pos = 0;
    for (const s of DESC_SENTENCES) { pos += s.length; ends.push(pos); }
    return ends;
  })());

  useEffect(() => {
    if (skipAnimation) return;
    mountedRef.current = true;
    let idx = 0;
    let timer;

    function tick() {
      if (!mountedRef.current || idx >= fullText.length) return;
      idx++;
      setCharCount(idx);
      const isPause = sentenceEnds.current.includes(idx) && idx < fullText.length;
      timer = setTimeout(tick, isPause ? 400 : 25);
    }

    timer = setTimeout(tick, 500);
    return () => { mountedRef.current = false; clearTimeout(timer); };
  }, [skipAnimation]);

  const visible = fullText.slice(0, charCount);
  const parts = visible.split('\n\n');
  const main = parts[0] || '';
  const hint = parts[1] || '';
  const done = charCount >= fullText.length;

  return (
    <div style={{ marginBottom: '32px', maxWidth: '600px' }}>
      <div style={{ fontSize: '12px', lineHeight: 1.7, fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}>
        {main}
        {!hint && !done && <span style={{
          display: 'inline-block', width: '6px', height: '13px',
          background: 'rgba(255,255,255,0.4)',
          animation: 'cursor-blink 1s step-end infinite',
          verticalAlign: 'text-bottom', marginLeft: '1px',
        }} />}
      </div>
      {hint && (
        <div style={{ fontSize: '12px', lineHeight: 1.7, fontWeight: 300, color: '#4a9eff', opacity: 0.6, marginTop: '12px' }}>
          {hint}
          {!done && <span style={{
            display: 'inline-block', width: '6px', height: '13px',
            background: 'rgba(74,158,255,0.5)',
            animation: 'cursor-blink 1s step-end infinite',
            verticalAlign: 'text-bottom', marginLeft: '1px',
          }} />}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════
   ARCHIVE (main view)
   ══════════════════════════════ */

function Archive({ returning }) {
  let idx = 0;

  return (
    <div style={{ minHeight: '100vh', animation: 'fade-in 0.8s ease forwards' }}>
      <header style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 32px 0' }}>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', marginBottom: '20px' }}>
          corvids@archive:~$ ls -la /collected-works/rowan-black/
        </div>

        <h1 style={{
          fontFamily: "'Space Grotesk', Arial, sans-serif",
          fontSize: 'clamp(24px, 4.5vw, 38px)', fontWeight: 300,
          color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '12px',
        }}>
          The Collected Works of{' '}<span style={{ fontWeight: 600 }}>Rowan Black</span>
        </h1>

        <TerminalText skipAnimation={returning} />

        <div style={{
          display: 'grid', gridTemplateColumns: '32px 1fr 80px 100px 60px',
          padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '8px',
          fontSize: '9px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          <span style={{ textAlign: 'right', paddingRight: '12px' }}>#</span>
          <span>File</span>
          <span style={{ textAlign: 'right' }}>Size</span>
          <span style={{ textAlign: 'right' }}>Date</span>
          <span style={{ textAlign: 'right' }}>Status</span>
        </div>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 80px' }}>
        {PERIODS.map(period => {
          const pp = PIECES.filter(p => p.period === period.id);
          const block = <DirectoryBlock key={period.id} period={period} pieces={pp} startIndex={idx} />;
          idx += pp.length;
          return block;
        })}
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '24px 32px 48px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.12)' }}>
          corvids@archive:~$&nbsp;
          <span style={{ display: 'inline-block', width: '6px', height: '13px', background: 'rgba(255,255,255,0.2)', animation: 'cursor-blink 1s step-end infinite', verticalAlign: 'text-bottom' }} />
        </div>
      </footer>
    </div>
  );
}

/* ══════════════════════════════
   ROOT
   ══════════════════════════════ */

export default function HomeContent() {
  const [returning] = useState(() => {
    try { return sessionStorage.getItem('rb-booted') === '1'; } catch(e) { return false; }
  });
  const [booted, setBooted] = useState(returning);

  const handleComplete = useCallback(() => {
    try { sessionStorage.setItem('rb-booted', '1'); } catch(e) {}
    setBooted(true);
  }, []);

  return (
    <div style={{
      background: '#0a0a0c', minHeight: '100vh',
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      fontSize: '12px', color: '#cccccc',
    }}>
      {booted ? <Archive returning={returning} /> : <BootSequence onComplete={handleComplete} />}
    </div>
  );
}
