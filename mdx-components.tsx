import {
  ActionIcon,
  Anchor,
  Blockquote,
  Checkbox,
  Code,
  CopyButton,
  Group,
  Image,
  List,
  Stack,
  Text,
  Title,
  TitleProps,
  useMantineTheme,
} from '@mantine/core';
import { Prism } from '@mantine/prism';
import {
  IconCheck,
  IconChevronRight,
  IconLink,
  IconQuote,
} from '@tabler/icons';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { MouseEvent, ReactNode, useState } from 'react';
import { getTextFromChildren, slugify, windowOrNull } from './utils';

const TitleWithLink = ({
  children,
  titleProps,
}: {
  children: ReactNode;
  titleProps?: TitleProps;
}) => {
  const id = slugify(getTextFromChildren(children));
  const origin = windowOrNull()?.location.origin ?? '';
  const pathname = windowOrNull()?.location.pathname ?? '';
  const pathnameWithId = `${pathname}#${id}`;
  const href = `${origin}${pathnameWithId}`;
  const title = 'Copy header link to clipboard';

  return (
    <Link
      href={pathnameWithId}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Group id={id} spacing={4} my="xs" noWrap>
        <CopyButton value={href}>
          {({ copied, copy }) => (
            <ActionIcon
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                copy();
              }}
              aria-label={title}
              title={title}
            >
              {copied ? (
                <IconCheck size={16} aria-hidden />
              ) : (
                <IconLink size={16} aria-hidden />
              )}
            </ActionIcon>
          )}
        </CopyButton>

        <Title {...titleProps}>{children}</Title>
      </Group>
    </Link>
  );
};

const checkboxRegex = /^(\[(x|X|\s)\])/gm;

const ListItem = ({ children }: { children: ReactNode }) => {
  const theme = useMantineTheme();
  const stringValue = getTextFromChildren(children);
  // TODO: pair with unique ID and this value could be saved to localStorage
  // which would be cool for recipes!
  const [checked, setChecked] = useState(
    stringValue.toLocaleLowerCase().indexOf('[x]') === 0,
  );

  if (!checkboxRegex.test(stringValue)) {
    return <List.Item>{children}</List.Item>;
  }

  return (
    <li style={{ listStyle: 'none' }}>
      <Checkbox
        label={<>{stringValue.replace(checkboxRegex, '')}</>}
        checked={checked}
        styles={{
          label: {
            fontSize: theme.fontSizes.md,
          },
        }}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
    </li>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const theme = useMantineTheme();

  return {
    a: ({ children, href }) => {
      // hacky for now, but dont want local pdf assets opening as
      // a local route, they should still be treated as external
      const isLocalPdf = href?.endsWith('pdf');
      const isLocalPath = href && !href.startsWith('http');

      if (isLocalPath && !isLocalPdf) {
        return (
          <Link
            href={href}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Anchor component="span">{children}</Anchor>
          </Link>
        );
      }

      return (
        <Anchor href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Anchor>
      );
    },
    h1: ({ children }) => (
      <TitleWithLink titleProps={{ order: 1 }}>{children}</TitleWithLink>
    ),
    h2: ({ children }) => (
      <TitleWithLink titleProps={{ order: 2 }}>{children}</TitleWithLink>
    ),
    h3: ({ children }) => (
      <TitleWithLink titleProps={{ order: 3 }}>{children}</TitleWithLink>
    ),
    h4: ({ children }) => (
      <TitleWithLink titleProps={{ order: 4 }}>{children}</TitleWithLink>
    ),
    h5: ({ children }) => (
      <TitleWithLink titleProps={{ order: 5 }}>{children}</TitleWithLink>
    ),
    ul: ({ children }) => (
      <List
        type="unordered"
        icon={<IconChevronRight size={14} color={theme.colors.yellow[7]} />}
      >
        {children}
      </List>
    ),
    ol: ({ children }) => <List type="ordered">{children}</List>,
    li: ({ children }) => <ListItem>{children}</ListItem>,
    p: ({ children }) => <Text my={4}>{children}</Text>,
    code: ({ children, className }) => {
      const language = className?.split('language-')[1] ?? null;

      if (language) {
        return <Prism language={language as any}>{children as string}</Prism>;
      }

      return <Code>{children}</Code>;
    },
    blockquote: ({ children }) => (
      <Blockquote
        color="yellow"
        icon={<IconQuote size={18} style={{ transform: 'rotate(180deg)' }} />}
        sx={{
          fontSize: 'inherit',
          padding: 8,
        }}
        styles={{
          icon: {
            marginRight: 8,
            marginTop: 6,
          },
        }}
      >
        {children}
      </Blockquote>
    ),
    Image: ({ alt, height, width, ...rest }) => (
      <Image alt={alt} fit="contain" height={height ?? 300} {...rest} />
    ),
    Stack,
    ...components,
  };
}
