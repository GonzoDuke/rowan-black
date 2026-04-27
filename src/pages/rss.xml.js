import rss from '@astrojs/rss';
import { PIECES } from '../data/pieces.js';
import { WORKING_NOTES } from '../data/workingNotes.js';

export const prerender = true;

const SITE_TITLE = 'The Collected Works of Rowan Black';
const SITE_DESCRIPTION =
  'A recovered archive of poems, essays, fragments, and digital artifacts. Curated by the Corvids Collective.';

function pubDateFromSortKey(sortKey) {
  const year = Math.floor(sortKey);
  const monthIndex = Math.min(11, Math.max(0, Math.round((sortKey - year) * 100) - 1));
  return new Date(Date.UTC(year, monthIndex, 1));
}

export function GET(context) {
  const pieceItems = PIECES
    .filter((p) => p.status === 'live')
    .map((p) => ({
      title: p.title,
      description: p.corvidsNote || p.subtitle || '',
      link: `/${p.id}/`,
      pubDate: pubDateFromSortKey(p.sortKey),
    }));

  const noteItems = WORKING_NOTES.map((n) => ({
    title: `Working Notes: ${n.title}`,
    description: n.excerpt || '',
    link: `/working-notes/${n.id}/`,
    pubDate: new Date(n.date + 'T00:00:00Z'),
  }));

  const items = [...pieceItems, ...noteItems]
    .sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    stylesheet: '/rss.xsl',
    items,
    customData: '<language>en-us</language>',
  });
}
