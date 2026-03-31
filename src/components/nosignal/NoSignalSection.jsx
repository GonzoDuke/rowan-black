import React, { useState, useEffect, useRef } from 'react';

function useIsMobile(bp = 768) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${bp}px)`);
    setM(mq.matches);
    const h = (e) => setM(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, [bp]);
  return m;
}

const SECTIONS = [
  { slug: 'incessant-mindlessness', title: 'Incessant Mindlessness' },
  { slug: 'willful-ignorance', title: 'Willful Ignorance' },
  { slug: 'antagonistic-bigotry', title: 'Antagonistic Bigotry' },
  { slug: 'ideological-fanaticism', title: 'Ideological Fanaticism' },
  { slug: 'fabricated-hypersensitivity', title: 'Fabricated Hypersensitivity' },
  { slug: 'egocentric-rapacity', title: 'Egocentric Rapacity' },
  { slug: 'denial-of-sonder', title: 'Denial of Sonder' },
  { slug: 'postscript', title: 'Postscript' },
];

const GLITCH_CHARS = '¿×¤§¬ƒ†‡∞≠∂√∑Ω¶░▒▓';

/* ══════════════════════════════ WORD GLITCH ══════════════════════════════ */
function useWordGlitch(containerRef, active) {
  const timersRef = useRef([]);
  function glitchRandomWord() {
    const container = containerRef.current;
    if (!container) return;
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent.trim().length > 3) textNodes.push(node);
    }
    if (textNodes.length === 0) return;
    const targetNode = textNodes[Math.floor(Math.random() * textNodes.length)];
    const words = targetNode.textContent.split(' ');
    const realWords = words.filter(w => w.length > 2);
    if (realWords.length === 0) return;
    const targetWord = realWords[Math.floor(Math.random() * realWords.length)];
    const wordIdx = words.indexOf(targetWord);
    if (wordIdx === -1) return;
    const original = words[wordIdx];
    let glitched = '';
    for (let i = 0; i < original.length; i++) {
      glitched += Math.random() > 0.3 ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)] : original[i];
    }
    words[wordIdx] = glitched;
    targetNode.textContent = words.join(' ');
    setTimeout(() => { words[wordIdx] = original; targetNode.textContent = words.join(' '); }, 140 + Math.random() * 60);
  }
  useEffect(() => {
    if (!active) return;
    const burstDelay = 3000 + Math.random() * 5000;
    const burstTimer = setTimeout(() => {
      const burstCount = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < burstCount; i++) setTimeout(() => glitchRandomWord(), i * (200 + Math.random() * 200));
    }, burstDelay);
    timersRef.current.push(burstTimer);
    function scheduleNext() {
      const delay = 8000 + Math.random() * 10000;
      const timer = setTimeout(() => {
        glitchRandomWord();
        if (Math.random() < 0.2) setTimeout(() => glitchRandomWord(), 250 + Math.random() * 200);
        scheduleNext();
      }, delay);
      timersRef.current.push(timer);
    }
    const startTimer = setTimeout(() => scheduleNext(), 10000 + Math.random() * 4000);
    timersRef.current.push(startTimer);
    return () => timersRef.current.forEach(clearTimeout);
  }, [active]);
}

/* ══════════════════════════════ SCREEN FLICKER ══════════════════════════════ */
function useScreenFlicker() {
  const [flicker, setFlicker] = useState(false);
  useEffect(() => {
    const timers = [];
    function schedule() {
      const delay = 15000 + Math.random() * 20000;
      const timer = setTimeout(() => {
        const p = Math.random();
        if (p < 0.4) { setFlicker(true); setTimeout(() => setFlicker(false), 50 + Math.random() * 30); }
        else if (p < 0.8) { setFlicker(true); setTimeout(() => setFlicker(false), 50); setTimeout(() => setFlicker(true), 100); setTimeout(() => setFlicker(false), 160); }
        else { setFlicker(true); setTimeout(() => setFlicker(false), 40); setTimeout(() => setFlicker(true), 90); setTimeout(() => setFlicker(false), 130); setTimeout(() => setFlicker(true), 200); setTimeout(() => setFlicker(false), 240); }
        schedule();
      }, delay);
      timers.push(timer);
    }
    schedule();
    return () => timers.forEach(clearTimeout);
  }, []);
  return flicker;
}

/* ══════════════════════════════ HORIZONTAL TEAR ══════════════════════════════ */
function useHorizontalTear() {
  const [tear, setTear] = useState(null);
  useEffect(() => {
    const timers = [];
    function schedule() {
      const delay = 10000 + Math.random() * 15000;
      const timer = setTimeout(() => {
        const y = 8 + Math.random() * 84;
        const h = 2 + Math.random() * 10;
        const shift = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 5);
        setTear({ y, h, shift });
        setTimeout(() => setTear(null), 80 + Math.random() * 100);
        if (Math.random() < 0.15) {
          setTimeout(() => {
            setTear({ y: y + (Math.random() > 0.5 ? 1 : -1) * (5 + Math.random() * 15), h: 2 + Math.random() * 4, shift: -shift * 0.7 });
            setTimeout(() => setTear(null), 60 + Math.random() * 60);
          }, 150);
        }
        schedule();
      }, delay);
      timers.push(timer);
    }
    schedule();
    return () => timers.forEach(clearTimeout);
  }, []);
  return tear;
}

/* ══════════════════════════════ CONTENT JITTER ══════════════════════════════ */
function useContentJitter() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const timers = [];
    function schedule() {
      const delay = 16000 + Math.random() * 24000;
      const timer = setTimeout(() => {
        const x = (Math.random() > 0.5 ? 1 : -1) * (1 + Math.random() * 1.5);
        const y = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 0.8;
        setOffset({ x, y });
        setTimeout(() => setOffset({ x: 0, y: 0 }), 60 + Math.random() * 40);
        schedule();
      }, delay);
      timers.push(timer);
    }
    schedule();
    return () => timers.forEach(clearTimeout);
  }, []);
  return offset;
}

/* ══════════════════════════════ SCAN SWEEP ══════════════════════════════ */
function useScanSweep() {
  const [scanY, setScanY] = useState(-5);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const timers = [];
    function schedule() {
      const delay = 20000 + Math.random() * 30000;
      const timer = setTimeout(() => {
        setActive(true); setScanY(-5);
        let y = -5;
        const speed = 1.2 + Math.random() * 0.8;
        const frame = setInterval(() => { y += speed; setScanY(y); if (y > 105) { clearInterval(frame); setActive(false); } }, 16);
        schedule();
      }, delay);
      timers.push(timer);
    }
    const first = setTimeout(() => {
      setActive(true); setScanY(-5);
      let y = -5;
      const frame = setInterval(() => { y += 1.5; setScanY(y); if (y > 105) { clearInterval(frame); setActive(false); } }, 16);
      schedule();
    }, 6000 + Math.random() * 6000);
    timers.push(first);
    return () => timers.forEach(clearTimeout);
  }, []);
  return { scanY, active };
}

/* ══════════════════════════════ SECTION ══════════════════════════════ */
export default function NoSignalSection({ sectionSlug, children }) {
  const idx = SECTIONS.findIndex(s => s.slug === sectionSlug);
  const section = SECTIONS[idx];
  const prev = idx > 0 ? SECTIONS[idx - 1] : null;
  const next = idx < SECTIONS.length - 1 ? SECTIONS[idx + 1] : null;
  const num = String(idx + 1).padStart(2, '0');

  const contentRef = useRef(null);
  const mobile = useIsMobile();
  useWordGlitch(contentRef, true);
  const flicker = useScreenFlicker();
  const tear = useHorizontalTear();
  const jitter = useContentJitter();
  const scan = useScanSweep();

  const linkStyle = { color: '#8a8a8a', textDecoration: 'none', transition: 'color 0.15s' };

  return (
    <div style={{
      minHeight: '100vh',
      padding: 'clamp(40px, 8vw, 80px) 20px clamp(60px, 10vw, 120px)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      position: 'relative',
      opacity: flicker ? 0.65 : 1,
      transition: 'opacity 0.02s',
    }}>
      {/* Animated grain */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: 'none', zIndex: 8, opacity: 0.5,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        animation: 'nsf-grain 0.4s steps(5) infinite',
      }} />

      {/* CRT vignette */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: 'none', zIndex: 9,
        background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.35) 100%)',
      }} />

      {/* Scan sweep */}
      {scan.active && (
        <div style={{
          position: 'fixed', left: 0, right: 0, zIndex: 15,
          top: `${scan.scanY}%`, height: '3px',
          background: 'linear-gradient(to bottom, transparent, rgba(212,208,200,0.05), transparent)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Horizontal tear */}
      {tear && (
        <div style={{
          position: 'fixed', left: 0, right: 0, zIndex: 20,
          top: `${tear.y}%`, height: `${tear.h}px`,
          transform: `translateX(${tear.shift}px)`,
          background: 'rgba(212,208,200,0.04)',
          pointerEvents: 'none', mixBlendMode: 'screen',
        }} />
      )}

      {/* Content */}
      <div style={{
        transform: `translate(${jitter.x}px, ${jitter.y}px)`,
        transition: jitter.x === 0 ? 'transform 0.06s' : 'none',
        width: '100%', maxWidth: mobile ? '100%' : '1100px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px',
          color: 'rgba(212,208,200,0.3)', letterSpacing: '0.12em',
          marginBottom: '12px',
        }}>
          {num} / {String(SECTIONS.length).padStart(2, '0')}
        </div>

        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 500,
          color: '#d4d0c8', letterSpacing: '0.02em',
          marginBottom: 'clamp(40px, 6vw, 60px)',
          textAlign: 'center',
        }}>
          {section.title}
        </h2>

        <div style={{ width: '100%' }}>
          <div ref={contentRef}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(15px, 2.2vw, 17px)', lineHeight: 1.85,
              color: '#d4d0c8',
              columnCount: mobile ? 1 : 2,
              columnGap: '48px',
              columnRule: '1px solid rgba(212,208,200,0.06)',
            }}>
              {children}
            </div>
          </div>

          {/* Section navigation */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginTop: '60px', paddingTop: '24px',
            borderTop: '1px solid rgba(212,208,200,0.06)',
            fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px',
            flexWrap: 'wrap', gap: '12px',
          }}>
            <div style={{ width: '140px' }}>
              {prev && <a href={`/no-signal-found/${prev.slug}`} style={linkStyle}>← previous</a>}
            </div>
            <a href="/no-signal-found" style={{ color: 'rgba(212,208,200,0.3)', textDecoration: 'none', letterSpacing: '0.06em' }}>
              [ return to signal ]
            </a>
            <div style={{ width: '140px', textAlign: 'right' }}>
              {next && <a href={`/no-signal-found/${next.slug}`} style={linkStyle}>next →</a>}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes nsf-grain {
          0% { background-position: 0 0; }
          20% { background-position: -40px 20px; }
          40% { background-position: 30px -25px; }
          60% { background-position: -15px 35px; }
          80% { background-position: 25px -10px; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </div>
  );
}
