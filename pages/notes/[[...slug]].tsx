import {
  Badge,
  Container,
  Divider,
  Grid,
  Group,
  Text,
  Title,
} from '@mantine/core';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import path from 'path';
import { NotesList } from '../../components';
import NotesHome from '../../components/notes-home.mdx';
import { getPageTitle, Note } from '../../utils';

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

export default function Notes(props: NotesProps) {
  const { notes, note } = props;
  const pageTitle = getPageTitle([note?.title ?? '', 'Notes']);

  return (
    <Container size="xl" pt="xs">
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>
      <Grid>
        <Grid.Col sm={3}>
          <Title order={2} size="h3">
            Notes
          </Title>
          <NotesList notes={notes ?? []} activeSlug={note?.slug} />
        </Grid.Col>
        <Grid.Col sm={9}>
          {note ? (
            <div>
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
              <Divider />
              <MDXRemote {...note.mdxContent} />
            </div>
          ) : (
            <NotesHome />
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

  return {
    paths,
    fallback: true, // Enable fallback for new pages that aren't generated yet
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
