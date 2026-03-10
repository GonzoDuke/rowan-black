import React, { useState } from 'react';
import { PIECES, PERIODS } from '../data/pieces.js';

const SORT_MODES = [
  { id: 'collection', label: 'Collection' },
  { id: 'chronological', label: 'Oldest' },
  { id: 'reverse', label: 'Newest' },
];

const periodColors = {
  teenage: '#39ff14',
  early: '#d4a843',
  transitional: '#4a7aaa',
  mature: '#aa4a4a',
  prophetic: '#4a9eff',
};

const treatmentLabels = {
  poem: null,
  found: 'FOUND',
  fragment: 'FRGMT',
  capstone: 'SIGNAL',
};

function PieceCard({ piece }) {
  const color = periodColors[piece.period] || '#4a9eff';
  const badge = treatmentLabels[piece.treatment];
  const isLive = piece.status === 'live';

  return (
    <a
      href={isLive ? `/${piece.id}` : undefined}
      style={{
        display: 'block',
        background: '#111114',
        border: '1px solid rgba(200,200,208,0.06)',
        borderLeft: `2px solid ${color}`,
        borderRadius: '2px',
        padding: '16px 20px',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        opacity: isLive ? 1 : 0.4,
        cursor: isLive ? 'pointer' : 'default',
        position: 'relative',
      }}
      onMouseEnter={e => {
        if (isLive) {
          e.currentTarget.style.background = '#161619';
          e.currentTarget.style.borderColor = 'rgba(200,200,208,0.12)';
          e.currentTarget.style.borderLeftColor = color;
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#111114';
        e.currentTarget.style.borderColor = 'rgba(200,200,208,0.06)';
        e.currentTarget.style.borderLeftColor = color;
      }}
    >
      {badge && (
        <span style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '8px',
          fontWeight: 500,
          letterSpacing: '0.12em',
          color: piece.treatment === 'capstone' ? '#ff4a4a' : 'rgba(200,200,208,0.3)',
          textTransform: 'uppercase',
          background: piece.treatment === 'capstone' ? 'rgba(255,74,74,0.08)' : 'rgba(200,200,208,0.04)',
          padding: '2px 6px',
          borderRadius: '1px',
        }}>{badge}</span>
      )}

      <div style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '16px',
        fontWeight: 400,
        color: '#e8e8f0',
        lineHeight: 1.25,
        marginBottom: '6px',
        paddingRight: badge ? '48px' : 0,
      }}>{piece.title}</div>

      {piece.subtitle && (
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '13px',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'rgba(200,200,208,0.45)',
          lineHeight: 1.3,
          marginBottom: '6px',
        }}>{piece.subtitle}</div>
      )}

      <div style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '10px',
        color: 'rgba(200,200,208,0.25)',
        letterSpacing: '0.02em',
      }}>
        {piece.form} &middot; {piece.year}
      </div>
    </a>
  );
}

function PeriodGroup({ period, pieces }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px',
        paddingBottom: '10px',
        borderBottom: `1px solid rgba(200,200,208,0.06)`,
      }}>
        <span style={{
          display: 'inline-block',
          width: '6px',
          height: '6px',
          borderRadius: '1px',
          background: period.color,
          opacity: 0.8,
        }} />
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '10px',
          fontWeight: 500,
          color: period.color,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          opacity: 0.8,
        }}>{period.label}</span>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '10px',
          color: 'rgba(200,200,208,0.2)',
          letterSpacing: '0.04em',
        }}>{period.years}</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '8px',
      }}>
        {pieces.map(p => <PieceCard key={p.id} piece={p} />)}
      </div>
    </div>
  );
}

export default function HomeContent() {
  const [sort, setSort] = useState('collection');

  const livePieces = PIECES.filter(p => p.status !== 'hidden');

  const sortedPieces = [...livePieces].sort((a, b) => {
    if (sort === 'chronological') return a.sortKey - b.sortKey;
    if (sort === 'reverse') return b.sortKey - a.sortKey;
    return 0; // collection order = array order
  });

  const grouped = sort === 'collection';

  return (
    <div style={{
      background: 'var(--bg)',
      minHeight: '100vh',
      color: 'var(--text)',
    }}>
      {/* Header */}
      <header style={{
        maxWidth: '880px',
        margin: '0 auto',
        padding: '80px 32px 48px',
      }}>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '9px',
          fontWeight: 500,
          color: 'rgba(200,200,208,0.25)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>Corvids Collective // Archive</div>

        <h1 style={{
          fontFamily: "'Space Grotesk', Arial, sans-serif",
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: 300,
          color: '#e8e8f0',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '16px',
        }}>
          The Collected Works of<br />
          <span style={{ fontWeight: 500 }}>Rowan Black</span>
        </h1>

        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '12.5px',
          lineHeight: 1.7,
          color: 'rgba(200,200,208,0.5)',
          maxWidth: '560px',
          fontWeight: 300,
        }}>
          Poems, essays, fragments, and digital artifacts recovered from the scattered archive of Rowan Black. Assembled and annotated by the Corvids Collective.
        </p>

        <div style={{ height: '1px', background: 'var(--rule)', marginTop: '32px' }} />
      </header>

      {/* Controls */}
      <div style={{
        maxWidth: '880px',
        margin: '0 auto',
        padding: '0 32px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '10px',
          color: 'rgba(200,200,208,0.3)',
        }}>
          {livePieces.filter(p => p.status === 'live').length} of {livePieces.length} works available
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          {SORT_MODES.map(mode => (
            <button
              key={mode.id}
              onClick={() => setSort(mode.id)}
              style={{
                background: sort === mode.id ? 'rgba(200,200,208,0.08)' : 'none',
                border: '1px solid',
                borderColor: sort === mode.id ? 'rgba(200,200,208,0.15)' : 'rgba(200,200,208,0.08)',
                borderRadius: '2px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '10px',
                color: sort === mode.id ? '#c8c8d0' : 'rgba(200,200,208,0.35)',
                padding: '5px 12px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                letterSpacing: '0.04em',
              }}
            >{mode.label}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main style={{
        maxWidth: '880px',
        margin: '0 auto',
        padding: '0 32px 120px',
      }}>
        {grouped ? (
          PERIODS.map(period => {
            const periodPieces = sortedPieces.filter(p => p.period === period.id);
            if (periodPieces.length === 0) return null;
            return <PeriodGroup key={period.id} period={period} pieces={periodPieces} />;
          })
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '8px',
          }}>
            {sortedPieces.map(p => <PieceCard key={p.id} piece={p} />)}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--rule)',
        padding: '32px',
        textAlign: 'center',
      }}>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '10px',
          color: 'rgba(200,200,208,0.2)',
          letterSpacing: '0.04em',
        }}>Corvids Collective &middot; The Collected Works of Rowan Black</span>
      </footer>
    </div>
  );
}
