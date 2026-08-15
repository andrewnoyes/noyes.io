import {
  ActionIcon,
  Badge,
  Box,
  Container,
  createStyles,
  Divider,
  Drawer,
  Grid,
  Group,
  ScrollArea,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
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
import { NotesList } from '../../components';
import NotesHome from '../../components/notes-home.mdx';
import { useMDXComponents } from '../../mdx-components';
import { APP_HEADER_HEIGHT, getPageTitle, Note } from '../../utils';

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

export default function Notes({ notes, note }: NotesProps) {
  const router = useRouter();
  const { classes } = useStyles();
  const mdxComponents = useMDXComponents({});
  const [notePanelOpen, { toggle: toggleNotePanel, close: closeNotePanel }] =
    useDisclosure(false);

  const pageTitle = getPageTitle([note?.title ?? '', 'Notes']);

  const showNotesListButton = (
    <ActionIcon
      onClick={toggleNotePanel}
      className={classes.hiddenDesktop}
      title="Show notes list"
      aria-label="Show notes list"
      variant="filled"
      color="violet"
      size="lg"
      sx={{
        left: 0,
        top: APP_HEADER_HEIGHT + 14,
        position: 'fixed',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}
    >
      <IconList />
    </ActionIcon>
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
      description: note.tags?.join(', ') ?? '',
      onTrigger: () => router.push(`./${note.slug}`),
    })),
  ];

  return (
    <SpotlightProvider
      actions={spotlightActions}
      nothingFoundMessage={`Nothing found 😭`}
      highlightQuery
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
            {notesListTitle}
            <NotesList notes={notes ?? []} activeSlug={note?.slug} />
          </Grid.Col>
          <Grid.Col sm={9} pl="md">
            {note ? (
              <div>
                <Box>
                  {showNotesListButton}
                  <Title>{note.title}</Title>
                  {note.tags?.length ? (
                    <Group spacing={4} mb={4}>
                      {note.tags.map((tag) => (
                        <Badge key={tag} size="xs" radius="sm">
                          {tag}
                        </Badge>
                      ))}
                    </Group>
                  ) : null}
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
                {showNotesListButton}
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

    const { data, content } = matter(fileContent);
    const { tags, ...rest } = data;

    return {
      slug: filename.replace(/\.mdx$/, ''),
      tags: tags ? tags.split(',') : [],
      content,
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
