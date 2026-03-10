import React, { useState, useEffect } from 'react';
import { PIECES, PERIODS } from '../data/pieces.js';

const treatmentExt = {
  poem: '.txt',
  found: '.doc',
  fragment: '.frag',
  capstone: '.sys',
};

const treatmentSize = {
  poem: () => `${(Math.random() * 12 + 2).toFixed(1)} KB`,
  found: () => `${(Math.random() * 24 + 4).toFixed(1)} KB`,
  fragment: () => `${(Math.random() * 3 + 0.4).toFixed(1)} KB`,
  capstone: () => `${(Math.random() * 80 + 40).toFixed(1)} KB`,
};

function FileEntry({ piece, index }) {
  const isLive = piece.status === 'live';
  const ext = treatmentExt[piece.treatment] || '.txt';
  const [size] = useState(() => treatmentSize[piece.treatment]?.() || '2.0 KB');
  const [hovered, setHovered] = useState(false);

  const color = piece.treatment === 'capstone' ? '#ff4a4a'
    : piece.treatment === 'found' ? '#d4a843'
    : piece.treatment === 'fragment' ? '#6a8a6a'
    : '#c8c8d0';

  const fileName = piece.id + ext;

  return (
    <a
      href={isLive ? `/${piece.id}` : undefined}
      style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr 80px 100px 60px',
        gap: '0',
        alignItems: 'baseline',
        padding: '4px 0',
        textDecoration: 'none',
        opacity: isLive ? 1 : 0.25,
        cursor: isLive ? 'pointer' : 'default',
        background: hovered && isLive ? 'rgba(74,158,255,0.06)' : 'transparent',
        transition: 'background 0.1s',
        borderBottom: '1px solid rgba(200,200,208,0.03)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontFamily: 'inherit', fontSize: '12px', color: 'rgba(200,200,208,0.15)', textAlign: 'right', paddingRight: '12px' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span style={{ color: hovered && isLive ? '#4a9eff' : color, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {fileName}
      </span>
      <span style={{ color: 'rgba(200,200,208,0.2)', textAlign: 'right' }}>{size}</span>
      <span style={{ color: 'rgba(200,200,208,0.15)', textAlign: 'right' }}>{piece.year}</span>
      <span style={{
        color: isLive ? '#39ff14' : 'rgba(200,200,208,0.15)',
        textAlign: 'right',
        fontSize: '11px',
      }}>
        {isLive ? 'OK' : '---'}
      </span>
    </a>
  );
}

function DirectoryBlock({ period, pieces, startIndex }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: '24px' }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          padding: '6px 0',
          borderBottom: '1px solid rgba(200,200,208,0.06)',
          marginBottom: '4px',
          userSelect: 'none',
        }}
      >
        <span style={{ color: '#4a9eff', fontSize: '12px', width: '14px' }}>{open ? 'v' : '>'}</span>
        <span style={{ color: period.color, fontSize: '12px' }}>/{period.id}/</span>
        <span style={{ color: 'rgba(200,200,208,0.2)', fontSize: '11px' }}>
          {period.label} ({period.years})
        </span>
        <span style={{ color: 'rgba(200,200,208,0.12)', fontSize: '11px', marginLeft: 'auto' }}>
          {pieces.length} items
        </span>
      </div>
      {open && (
        <div style={{ paddingLeft: '14px' }}>
          {pieces.map((p, i) => (
            <FileEntry key={p.id} piece={p} index={startIndex + i} />
          ))}
        </div>
      )}
    </div>
  );
}

function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const bootLines = [
    { text: 'CORVIDS COLLECTIVE // RECOVERY SYSTEM v3.1', delay: 0 },
    { text: 'Initializing archive protocol...', delay: 600 },
    { text: 'Scanning archived media...', delay: 1400 },
    { text: 'Reconstructing file table...', delay: 2400 },
    { text: `${PIECES.length} objects detected`, delay: 3600 },
    { text: `${PIECES.filter(p => p.status === "live").length} recovered // ${PIECES.filter(p => p.status !== "live").length} pending reconstruction`, delay: 4600 },
    { text: '', delay: 5400 },
    { text: 'ARCHIVE READY', delay: 6000 },
  ];

  useEffect(() => {
    const titleTimeout = setTimeout(() => setShowTitle(true), 800);
    const timeouts = bootLines.map((line, i) =>
      setTimeout(() => {
        setLines(prev => [...prev, line.text]);
        if (i === bootLines.length - 1) {
          setTimeout(onComplete, 1200);
        }
      }, line.delay)
    );
    return () => {
      clearTimeout(titleTimeout);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px',
    }}>
      {/* Bold title */}
      <div style={{
        fontFamily: "'Space Grotesk', Arial, sans-serif",
        fontSize: 'clamp(22px, 4vw, 34px)',
        fontWeight: 300,
        color: '#e8e8f0',
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

      {/* Boot log */}
      <div style={{ maxWidth: '520px', width: '100%' }}>
        {lines.map((line, i) => (
          <div key={i} style={{
            fontSize: '12px',
            lineHeight: '2',
            color: i === lines.length - 1 && line === 'ARCHIVE READY' ? '#39ff14' : 'rgba(200,200,208,0.5)',
            fontWeight: line === 'ARCHIVE READY' ? 500 : 300,
            letterSpacing: line === 'ARCHIVE READY' ? '0.12em' : '0.02em',
          }}>
            {line || '\u00A0'}
          </div>
        ))}
        <span style={{
          display: 'inline-block',
          width: '7px',
          height: '14px',
          background: 'rgba(200,200,208,0.5)',
          animation: 'cursor-blink 1s step-end infinite',
          verticalAlign: 'text-bottom',
          marginLeft: '2px',
        }} />
      </div>
    </div>
  );
}

function TerminalText() {
  const [visibleLines, setVisibleLines] = useState(0);
  const lines = [
    'Recovered archive.',
    'Poems, essays, fragments, and digital artifacts assembled by the Corvids Collective.',
    'Some files are damaged. Some are incomplete.',
    'All are preserved as found.',
    '',
    'Open a directory below to browse the collection.',
  ];

  useEffect(() => {
    const timeouts = lines.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), 300 + i * 500)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ marginBottom: '32px', maxWidth: '600px' }}>
      {lines.slice(0, visibleLines).map((line, i) => (
        <span key={i} style={{
          display: i === 4 ? 'block' : 'inline',
          fontSize: '12px',
          lineHeight: 1.7,
          fontWeight: 300,
          color: i === lines.length - 1 ? 'rgba(74,158,255,0.5)' : 'rgba(200,200,208,0.35)',
          height: i === 4 ? '12px' : 'auto',
        }}>
          {line}{i < 4 && i !== 3 ? ' ' : ''}
        </span>
      ))}
    </div>
  );
}

function Archive() {
  let runningIndex = 0;

  return (
    <div style={{
      minHeight: '100vh',
      animation: 'fade-in 0.8s ease forwards',
    }}>
      {/* Header */}
      <header style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '48px 32px 0',
      }}>
        <div style={{
          fontSize: '10px',
          color: 'rgba(200,200,208,0.2)',
          letterSpacing: '0.08em',
          marginBottom: '20px',
        }}>
          corvids@archive:~$ ls -la /collected-works/rowan-black/
        </div>

        <h1 style={{
          fontFamily: "'Space Grotesk', Arial, sans-serif",
          fontSize: 'clamp(24px, 4.5vw, 38px)',
          fontWeight: 300,
          color: '#e8e8f0',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          The Collected Works of{' '}
          <span style={{ fontWeight: 600 }}>Rowan Black</span>
        </h1>

        <TerminalText />

        {/* Column headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '32px 1fr 80px 100px 60px',
          padding: '6px 0',
          borderBottom: '1px solid rgba(200,200,208,0.1)',
          marginBottom: '8px',
          fontSize: '9px',
          color: 'rgba(200,200,208,0.2)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          <span style={{ textAlign: 'right', paddingRight: '12px' }}>#</span>
          <span>File</span>
          <span style={{ textAlign: 'right' }}>Size</span>
          <span style={{ textAlign: 'right' }}>Date</span>
          <span style={{ textAlign: 'right' }}>Status</span>
        </div>
      </header>

      {/* File listing */}
      <main style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 32px 80px',
      }}>
        {PERIODS.map(period => {
          const periodPieces = PIECES.filter(p => p.period === period.id);
          const block = (
            <DirectoryBlock
              key={period.id}
              period={period}
              pieces={periodPieces}
              startIndex={runningIndex}
            />
          );
          runningIndex += periodPieces.length;
          return block;
        })}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(200,200,208,0.04)',
        padding: '24px 32px 48px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <div style={{
          fontSize: '10px',
          color: 'rgba(200,200,208,0.12)',
        }}>
          corvids@archive:~$&nbsp;<span style={{ display: 'inline-block', width: '6px', height: '13px', background: 'rgba(200,200,208,0.2)', animation: 'cursor-blink 1s step-end infinite', verticalAlign: 'text-bottom' }} />
        </div>
      </footer>
    </div>
  );
}

export default function HomeContent() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('rb-booted')) {
        setBooted(true);
      }
    } catch(e) {
      setBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    try { sessionStorage.setItem('rb-booted', '1'); } catch(e) {}
    setBooted(true);
  };

  return (
    <div style={{
      background: '#0a0a0c',
      minHeight: '100vh',
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      fontSize: '12px',
      color: '#c8c8d0',
    }}>
      {booted ? <Archive /> : <BootSequence onComplete={handleBootComplete} />}
    </div>
  );
}
