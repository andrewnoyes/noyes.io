import {
  Box,
  createStyles,
  NavLink,
  Select,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import { Note } from '../utils';
import { BadgeList } from './badge-list';

const useStyles = createStyles((theme) => ({
  tagSelect: {
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    [theme.fn.smallerThan('sm')]: {
      marginTop: 0,
      marginLeft: theme.spacing.xs,
      marginRight: theme.spacing.xs,
    },
  },
}));

export interface NotesListProps {
  notes: Note[];
  uniqueTags: string[];
  selectedTag: string | null;
  onSelectedTag: (value: string | null) => void;
  activeSlug?: string;
  onSelect?: (note: Note) => void;
}

export const NotesList = (props: NotesListProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const {
    notes,
    uniqueTags,
    selectedTag,
    onSelectedTag,
    activeSlug,
    onSelect,
  } = props;

  return (
    <Box>
      <Select
        clearable
        searchable
        aria-label="Filter by tag"
        placeholder="Filter by tag"
        clearButtonLabel="Clear selected tags"
        data={uniqueTags}
        className={classes.tagSelect}
        value={selectedTag}
        onChange={onSelectedTag}
        styles={{
          item: {
            fontFamily: 'monospace',
            fontSize: theme.fontSizes.xs,
          },

          label: {
            backgroundColor: theme.colors.violet,
            fontFamily: 'monospace',
            fontSize: 11,
            borderRadius: theme.radius.xs,
            fontWeight: 700,
          },
        }}
      />
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
            description={<BadgeList items={note.tags ?? []} spacing={4} />}
            active={activeSlug === note.slug}
          />
        </Link>
      ))}
    </Box>
  );
};
