import {
  ActionIcon,
  ActionIconProps,
  Box,
  Container,
  createStyles,
  Divider,
  Drawer,
  Grid,
  Group,
  ScrollArea,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  SpotlightAction,
  SpotlightProvider,
  useSpotlight,
} from '@mantine/spotlight';
import { IconList } from '@tabler/icons-react';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import path from 'path';
import { BadgeList, NotesList } from '../../components';
import NotesHome from '../../components/notes-home.mdx';
import { useMDXComponents } from '../../mdx-components';
import { APP_HEADER_HEIGHT, getPageTitle, Note } from '../../utils';

const ShowNotesSearchButton = (props?: ActionIconProps) => {
  const spotlight = useSpotlight();

  const handleShowNotes = () => {
    spotlight.openSpotlight();
  };

  return (
    <ActionIcon
      aria-label="Show notes search"
      title="Show notes search (ctrl+k)"
      onClick={handleShowNotes}
      {...props}
    >
      <span role="img">🧐</span>
    </ActionIcon>
  );
};

const getNoteDescription = (note: Note) => {
  const tags = note.tags?.join(', ') ?? '';
  const updated = note.updated ? `updated: ${note.updated}` : '';
  const created = note.created ? `created: ${note.created}` : '';

  return [tags, updated || created].filter(Boolean).join(' - ');
};

const useStyles = createStyles((theme) => ({
  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

type NoteWithMdxContent = Note & {
  mdxContent: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

interface NotesProps {
  notes: Note[];
  note?: NoteWithMdxContent;
}

const SCROLL_AREA_OFFSET = 16 + 31 + 16; // padding-top + height of header + margin-bottom

const SHOW_NOTES_OFFSET = APP_HEADER_HEIGHT + 14;

export default function Notes({ notes, note }: NotesProps) {
  const router = useRouter();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mdxComponents = useMDXComponents({});
  const [notePanelOpen, { toggle: toggleNotePanel, close: closeNotePanel }] =
    useDisclosure(false);

  const pageTitle = getPageTitle([note?.title ?? '', 'Notes']);

  const mobileButtons = (
    <Stack
      sx={{ left: 0, top: SHOW_NOTES_OFFSET, position: 'fixed' }}
      spacing="sm"
      className={classes.hiddenDesktop}
    >
      <ActionIcon
        onClick={toggleNotePanel}
        title="Show notes list"
        aria-label="Show notes list"
        variant="light"
        color="violet"
        size="lg"
        sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <IconList />
      </ActionIcon>
      <ShowNotesSearchButton
        variant="light"
        size="lg"
        color="violet"
        sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      />
    </Stack>
  );

  const notesListTitle = (
    <Link
      href="/notes"
      style={{ textDecoration: 'none', color: 'inherit' }}
      onClick={closeNotePanel}
    >
      <Title order={2} size="h3">
        Notes
      </Title>
    </Link>
  );

  const notesListTitleWithSearch = (
    <Group position="apart">
      {notesListTitle}
      <ShowNotesSearchButton />
    </Group>
  );

  const spotlightActions: SpotlightAction[] = [
    {
      id: 'index',
      title: 'Notes index',
      description: '🏠',
      onTrigger: () => router.push('./'),
    },
    ...notes.map((note) => ({
      id: note.slug,
      title: note.title,
      description: getNoteDescription(note),
      onTrigger: () => router.push(`./${note.slug}`),
    })),
  ];

  return (
    <SpotlightProvider
      actions={spotlightActions}
      nothingFoundMessage={`Nothing found 😭`}
      searchPlaceholder="Search for a note"
      highlightQuery
      overlayColor={theme.colors.violet[7]}
    >
      <Container size="xl" pl="xl" pr="sm">
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} key="title" />
        </Head>
        <Drawer
          className={classes.hiddenDesktop}
          opened={notePanelOpen}
          onClose={closeNotePanel}
          position="left"
          title={notesListTitle}
          padding="sm"
        >
          <ScrollArea
            mx="-sm"
            sx={{ height: `calc(100vh - ${SCROLL_AREA_OFFSET}px)` }}
          >
            <NotesList
              notes={notes ?? []}
              activeSlug={note?.slug}
              onSelect={closeNotePanel}
            />
          </ScrollArea>
        </Drawer>
        <Grid>
          <Grid.Col sm={3} className={classes.hiddenMobile}>
            {notesListTitleWithSearch}
            <NotesList notes={notes ?? []} activeSlug={note?.slug} />
          </Grid.Col>
          <Grid.Col sm={9} pl="md">
            {note ? (
              <div>
                <Box>
                  {mobileButtons}
                  {/* {showNotesListMobile}
                  {showNotesSearchMobile} */}
                  <Title>{note.title}</Title>
                  <BadgeList
                    items={note.tags ?? []}
                    spacing={4}
                    badgeProps={{ size: 'xs' }}
                  />
                  <Group spacing="xs">
                    {note.updated && (
                      <Text c="dimmed" fz="sm">
                        updated: {note.updated}
                      </Text>
                    )}
                    {note.created && (
                      <Text c="dimmed" fz="sm">
                        created: {note.created}
                      </Text>
                    )}
                  </Group>
                </Box>
                <Divider mb="sm" />
                <MDXRemote {...note.mdxContent} components={mdxComponents} />
              </div>
            ) : (
              <Box>
                {mobileButtons}

                <NotesHome />
              </Box>
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </SpotlightProvider>
  );
}

const NOTES_DIR = path.join(process.cwd(), 'notes');

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = readdirSync(NOTES_DIR);

  const paths = filenames.map((filename) => ({
    params: {
      slug: [filename.replace(/\.mdx$/, '')],
    },
  }));

  paths.push({ params: { slug: [] } });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<NotesProps> = async ({
  params,
}) => {
  const filenames = readdirSync(NOTES_DIR);

  const notes = filenames.map((filename) => {
    const filePath = path.join(NOTES_DIR, filename);
    const fileContent = readFileSync(filePath, 'utf8');

    const { data } = matter(fileContent);
    const { tags, ...rest } = data;

    return {
      slug: filename.replace(/\.mdx$/, ''),
      tags: tags ? tags.split(',') : [],
      ...rest,
    } as Note;
  });

  if (!params?.slug) {
    return { props: { notes } };
  }

  const { slug } = params;
  const filePath = path.join(NOTES_DIR, `${slug}.mdx`);
  const fileContent = readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);
  const mdxContent = await serialize(content);
  const { tags, ...rest } = data;

  const note = {
    slug: Array.isArray(slug) ? slug[slug.length - 1] : slug,
    content,
    mdxContent,
    tags: tags ? tags.split(',') : [],
    ...rest,
  } as NoteWithMdxContent;

  return {
    props: {
      notes,
      note,
    },
  };
};
