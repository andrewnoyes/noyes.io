import { Badge, Box, Group, NavLink } from '@mantine/core';
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
            description={
              note.tags?.length ? (
                <Group spacing={4}>
                  {note.tags.map((tag) => (
                    <Badge key={tag} size="xs" radius="sm">
                      {tag}
                    </Badge>
                  ))}
                </Group>
              ) : null
            }
            active={activeSlug === note.slug}
          />
        </Link>
      ))}
    </Box>
  );
};
