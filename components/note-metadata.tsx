import { Text } from '@mantine/core';
import { Note } from '../utils';

export const NoteMetadata = ({ note }: { note: Note }) => {
  const created = `created: ${note.created}`;
  const updated = note.updated ? `updated: ${note.updated}` : '';

  const title = [updated, created].filter(Boolean).join(' • ');

  return (
    <Text c="dimmed" ff="monospace" size="xs" mt={2} title={title}>
      {updated || created}
    </Text>
  );
};
