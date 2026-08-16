import { Box, NavLink } from '@mantine/core';
import Link from 'next/link';
import { Note } from '../utils';
import { BadgeList } from './badge-list';

export const NotesList = ({
  notes,
  activeSlug,
  onSelect,
}: {
  notes: Note[];
  activeSlug?: string;
  onSelect?: (note: Note) => void;
}) => {
  return (
    <Box>
      {notes.map((note) => (
        <Link
          key={note.slug}
          href={note.slug}
          style={{ textDecoration: 'none' }}
          onClick={() => {
            if (onSelect) {
              onSelect(note);
            }
          }}
        >
          <NavLink
            key={note.slug}
            label={note.title}
            description={
              <BadgeList
                items={note.tags ?? []}
                spacing={4}
                badgeProps={{ size: 'xs' }}
              />
            }
            active={activeSlug === note.slug}
          />
        </Link>
      ))}
    </Box>
  );
};
