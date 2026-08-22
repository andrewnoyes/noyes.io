import {
  ActionIcon,
  Box,
  Divider,
  Input,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconCircleMinus, IconCirclePlus } from '@tabler/icons-react';
import { ChangeEvent, ReactNode, useState } from 'react';

export interface DiscussionTopicProps {
  id: string;
  topic: ReactNode;
  created: Date;
}

export const DiscussionTopic = (props: DiscussionTopicProps) => {
  const { id, topic, created } = props;
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useLocalStorage<string[]>({
    key: id,
    serialize: (value: string[]) => JSON.stringify(value),
    deserialize: (value?: string) => {
      try {
        return value ? JSON.parse(value) : [];
      } catch {
        return [];
      }
    },
    defaultValue: [],
  });

  const handleNoteUpdated = (index: number, updated: string) => {
    const copy = [...notes];

    copy[index] = updated;

    setNotes(copy);
  };

  const handleNoteDeleted = (indexToDelete: number) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  const handleAddNote = () => {
    const trimmed = newNote.trim();
    if (!trimmed) {
      return;
    }

    setNotes([...notes, newNote]);
    setNewNote('');
  };

  return (
    <Paper withBorder p="sm" my="xs">
      <Stack justify="space-between" spacing="xs">
        <Box>
          <Title order={5}>{topic}</Title>
          <Text size="xs" c="dimmed">
            topic created on {created.toLocaleDateString()}
          </Text>
        </Box>
        {notes.map((note, index) => (
          <Input
            key={`${id}-${index}`}
            size="sm"
            title={note}
            value={note}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const updatedValue = e.target.value;
              if (!updatedValue) {
                handleNoteDeleted(index);
              } else {
                handleNoteUpdated(index, updatedValue);
              }
            }}
            rightSection={
              <ActionIcon
                title="delete note"
                aria-label="delete note"
                onClick={() => {
                  handleNoteDeleted(index);
                }}
                color="red"
                size="sm"
              >
                <IconCircleMinus />
              </ActionIcon>
            }
          />
        ))}
        <Divider />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddNote();
          }}
        >
          <Input
            title="Add a note"
            placeholder="Add a note"
            size="sm"
            value={newNote}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setNewNote(e.target.value);
            }}
            rightSection={
              <ActionIcon
                title="add note"
                aria-label="add note"
                type="submit"
                color="violet"
                size="sm"
              >
                <IconCirclePlus />
              </ActionIcon>
            }
          />
        </form>
      </Stack>
    </Paper>
  );
};
