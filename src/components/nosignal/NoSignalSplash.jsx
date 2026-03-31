import React, { useState, useEffect, useRef } from 'react';

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

const GLITCH_CHARS = '¿×¤§¬ƒ†‡∞≠∂√∑Ω¶░▒▓█';
const TITLE = 'no_signal_found';

function glitchString(str) {
  return str.split('').map(ch => ch === ' ' ? ' ' : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]).join('');
}

function GlitchReveal({ text, revealed, num }) {
  const full = `${num} / ${text}`;
  const [display, setDisplay] = useState(glitchString(full));
  const intervalRef = useRef(null);
  const doneRef = useRef(false);

  useEffect(() => {
    if (revealed && !doneRef.current) {
      doneRef.current = true;
      clearInterval(intervalRef.current);
      const target = full.split('');
      let chars = glitchString(full).split('');
      let idx = 0;
      intervalRef.current = setInterval(() => {
        if (idx >= target.length) { clearInterval(intervalRef.current); setDisplay(full); return; }
        chars[idx] = target[idx];
        for (let j = idx + 1; j < target.length; j++) {
          chars[j] = target[j] === ' ' ? ' ' : (Math.random() > 0.5 ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)] : target[j]);
        }
        setDisplay(chars.join(''));
        idx++;
      }, 40);
      return () => clearInterval(intervalRef.current);
    }
    if (!revealed && !doneRef.current) {
      intervalRef.current = setInterval(() => setDisplay(glitchString(full)), 120);
      return () => clearInterval(intervalRef.current);
    }
  }, [revealed]);

  return <span>{display}</span>;
}

function triggerReboot() {
  const overlay = document.createElement('div');
  overlay.id = 'nsf-reboot';
  const lines = ['> signal_terminated','> flushing buffer...','> releasing session...','> restoring default state...','> reconnecting to archive...','','> done.'];
  overlay.innerHTML = '<style>#nsf-reboot{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;background:#0a0a0c;display:flex;flex-direction:column;justify-content:center;padding:0 clamp(24px,8vw,120px);font-family:IBM Plex Mono,monospace;font-size:13px;color:rgba(212,208,200,0.5);line-height:2.2}#nsf-reboot .line{opacity:0;animation:rl .15s ease-out forwards}#nsf-reboot .cur{display:inline-block;width:8px;height:14px;background:rgba(212,208,200,0.4);animation:rb .5s step-end infinite;vertical-align:text-bottom;margin-left:4px}#nsf-reboot .fo{animation:rf .6s ease-out forwards}@keyframes rl{to{opacity:1}}@keyframes rb{50%{opacity:0}}@keyframes rf{to{opacity:0}}</style><div id="rc"></div>';
  document.body.appendChild(overlay);
  const content = document.getElementById('rc');
  let i = 0;
  function go() {
    if (i >= lines.length) { setTimeout(() => { overlay.classList.add('fo'); setTimeout(() => window.location.href = '/', 600); }, 800); return; }
    const d = document.createElement('div'); d.className = 'line';
    if (lines[i] === '') d.innerHTML = '&nbsp;'; else d.textContent = lines[i];
    if (i === lines.length - 1) { const c = document.createElement('span'); c.className = 'cur'; d.appendChild(c); }
    content.appendChild(d); i++;
    setTimeout(go, lines[i-1] === '' ? 400 : 200 + Math.random() * 300);
  }
  setTimeout(go, 600);
}

export default function NoSignalSplash() {
  const [step, setStep] = useState(0);
  // 0 = cursor blinking (pre-type)
  // 1 = typing
  // 2 = cursor blinking (post-type)
  // 3 = toc building
  // 4 = toc resolving
  // 5 = done

  const [typed, setTyped] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [tocCount, setTocCount] = useState(0);
  const [tocResolved, setTocResolved] = useState(false);

  // Step 0: blink cursor 3 times (1.5s), then type
  useEffect(() => {
    if (step !== 0) return;
    const t = setTimeout(() => setStep(1), 1500);
    return () => clearTimeout(t);
  }, [step]);

  // Step 1: type the title
  useEffect(() => {
    if (step !== 1) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      if (i > TITLE.length) { clearInterval(t); setStep(2); return; }
      setTyped(TITLE.slice(0, i));
    }, 80);
    return () => clearInterval(t);
  }, [step]);

  // Step 2: blink cursor 3 more times (1.5s), then hide cursor and build TOC
  useEffect(() => {
    if (step !== 2) return;
    const t = setTimeout(() => { setCursorVisible(false); setStep(3); }, 1500);
    return () => clearTimeout(t);
  }, [step]);

  // Step 3: build TOC one item at a time
  useEffect(() => {
    if (step !== 3) return;
    let count = 0;
    const t = setInterval(() => {
      count++;
      setTocCount(count);
      if (count >= SECTIONS.length) { clearInterval(t); setTimeout(() => setStep(4), 600); }
    }, 300);
    return () => clearInterval(t);
  }, [step]);

  // Step 4: resolve glitch text
  useEffect(() => {
    if (step !== 4) return;
    setTocResolved(true);
    const t = setTimeout(() => setStep(5), 1000);
    return () => clearTimeout(t);
  }, [step]);

  const showButtons = step >= 5;

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Syne', sans-serif",
      padding: '60px 20px',
    }}>
      {/* Title */}
      <div style={{
        fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 400,
        letterSpacing: '0.06em', color: '#d4d0c8',
        marginBottom: '60px', textAlign: 'center', minHeight: '60px',
      }}>
        {typed}
        {cursorVisible && (
          <span style={{
            display: 'inline-block', width: '3px', height: '0.85em',
            background: '#d4d0c8', marginLeft: '4px',
            animation: 'blink 0.5s step-end infinite',
            verticalAlign: 'text-bottom',
          }} />
        )}
      </div>

      {/* TOC */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '12px',
        alignItems: 'center', marginBottom: '60px',
      }}>
        {SECTIONS.map((s, i) => {
          const vis = i < tocCount;
          const num = String(i + 1).padStart(2, '0');
          return (
            <a key={s.slug} href={'/no-signal-found/' + s.slug} style={{
              fontSize: '13px', fontFamily: "'IBM Plex Mono', monospace",
              color: tocResolved ? 'rgba(212,208,200,0.5)' : 'rgba(212,208,200,0.3)',
              letterSpacing: '0.04em',
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.4s ease, color 0.6s ease',
              textDecoration: 'none',
              cursor: showButtons ? 'pointer' : 'default',
              pointerEvents: showButtons ? 'auto' : 'none',
            }}
              onMouseEnter={e => { if (showButtons) e.target.style.color = '#d4d0c8'; }}
              onMouseLeave={e => { if (showButtons) e.target.style.color = 'rgba(212,208,200,0.5)'; }}
            >
              {vis && <GlitchReveal text={s.title} revealed={tocResolved} num={num} />}
            </a>
          );
        })}
      </div>

      {/* Begin */}
      <a href="/no-signal-found/incessant-mindlessness" style={{
        fontSize: '12px', fontFamily: "'IBM Plex Mono', monospace",
        color: '#8a8a8a', letterSpacing: '0.12em',
        textDecoration: 'none', padding: '10px 28px',
        border: '1px solid rgba(212,208,200,0.12)', borderRadius: '2px',
        opacity: showButtons ? 1 : 0,
        transition: 'opacity 0.6s ease, color 0.15s, border-color 0.15s',
        marginBottom: '40px',
      }}
        onMouseEnter={e => { e.target.style.color = '#d4d0c8'; e.target.style.borderColor = 'rgba(212,208,200,0.25)'; }}
        onMouseLeave={e => { e.target.style.color = '#8a8a8a'; e.target.style.borderColor = 'rgba(212,208,200,0.12)'; }}
      >[ begin transmission ]</a>

      {/* End */}
      <a href="/" onClick={e => { e.preventDefault(); triggerReboot(); }} style={{
        fontSize: '11px', fontFamily: "'IBM Plex Mono', monospace",
        color: 'rgba(212,208,200,0.15)', letterSpacing: '0.08em',
        textDecoration: 'none',
        opacity: showButtons ? 1 : 0,
        transition: 'opacity 0.6s ease 0.2s, color 0.2s',
      }}
        onMouseEnter={e => e.target.style.color = 'rgba(212,208,200,0.4)'}
        onMouseLeave={e => e.target.style.color = 'rgba(212,208,200,0.15)'}
      >[ end transmission ]</a>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}
