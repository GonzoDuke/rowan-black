export const WORKING_NOTES = [
  {
    id: 'on-the-increasing-difficulty-of-verification',
    title: 'On the Increasing Difficulty of Verification',
    date: '2026-04-01',
    dateDisplay: 'April 2026',
    excerpt:
      'A note on the shift from stylistic authentication to provenance, and the limits of recognizing a voice when the voice can be convincingly imitated.',
  },
];

export function sortedNotes() {
  return [...WORKING_NOTES].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function findNoteIndex(id) {
  const list = sortedNotes();
  return list.findIndex((n) => n.id === id);
}

export function siblingNotes(id) {
  const list = sortedNotes();
  const i = list.findIndex((n) => n.id === id);
  if (i === -1) return { newer: null, older: null, list };
  return {
    newer: i > 0 ? list[i - 1] : null,
    older: i < list.length - 1 ? list[i + 1] : null,
    list,
  };
}
