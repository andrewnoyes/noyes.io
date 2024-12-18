import { Box, NavLink } from '@mantine/core';
import Link from 'next/link';
import { Note } from '../utils';

export const NotesList = ({
  notes,
  activeSlug,
}: {
  notes: Note[];
  activeSlug?: string;
}) => {
  return (
    <Box>
      {notes.map((note) => (
        <Link
          key={note.slug}
          href={note.slug}
          style={{ textDecoration: 'none' }}
        >
          <NavLink
            key={note.slug}
            label={note.title}
            active={activeSlug === note.slug}
          />
        </Link>
      ))}
    </Box>
  );
};
