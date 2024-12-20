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
import { IconList } from '@tabler/icons';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
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

export default function Notes(props: NotesProps) {
  const { notes, note } = props;
  const { classes } = useStyles();
  const pageTitle = getPageTitle([note?.title ?? '', 'Notes']);
  const mdxComponents = useMDXComponents({});
  const [notePanelOpen, { toggle: toggleNotePanel, close: closeNotePanel }] =
    useDisclosure(false);

  const showNotesList = (
    <ActionIcon
      onClick={toggleNotePanel}
      className={classes.hiddenDesktop}
      title="Show notes list"
      variant="transparent"
      sx={{
        left: 4,
        top: APP_HEADER_HEIGHT + 16,
        position: 'fixed',
      }}
    >
      <IconList />
    </ActionIcon>
  );

  return (
    <Container size="xl">
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>
      <Drawer
        className={classes.hiddenDesktop}
        opened={notePanelOpen}
        onClose={closeNotePanel}
        position="left"
        title={
          <Title order={2} size="h3">
            Notes
          </Title>
        }
        padding="sm"
        styles={{
          root: {
            top: APP_HEADER_HEIGHT,
          },
          drawer: {
            top: APP_HEADER_HEIGHT,
          },
        }}
      >
        <ScrollArea
          mx="-sm"
          sx={{ height: `calc(100vh - ${SCROLL_AREA_OFFSET}px)` }}
        >
          <NotesList notes={notes ?? []} activeSlug={note?.slug} />
        </ScrollArea>
      </Drawer>
      <Grid>
        <Grid.Col sm={3} className={classes.hiddenMobile}>
          <Title order={2} size="h3">
            Notes
          </Title>
          <NotesList notes={notes ?? []} activeSlug={note?.slug} />
        </Grid.Col>
        <Grid.Col sm={9}>
          {note ? (
            <div>
              <Box>
                {showNotesList}
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
                {note.created ? (
                  <Text c="dimmed" fz="sm">
                    {note.created}
                  </Text>
                ) : null}
              </Box>
              <Divider mb="sm" />
              <MDXRemote {...note.mdxContent} components={mdxComponents} />
            </div>
          ) : (
            <Box>
              {showNotesList}
              <NotesHome />
            </Box>
          )}
        </Grid.Col>
      </Grid>
    </Container>
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
