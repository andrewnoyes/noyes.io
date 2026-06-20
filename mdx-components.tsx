import {
  Anchor,
  Blockquote,
  Checkbox,
  Code,
  List,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { Prism } from '@mantine/prism';
import { IconChevronRight, IconQuote } from '@tabler/icons';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { Children, isValidElement, ReactElement, ReactNode } from 'react';

const checkboxRegex = /^(\[(x|X|\s)\])/gm;

const getTextFromChildren = (children: ReactNode | ReactNode[]): string => {
  return Children.toArray(children)
    .map((child) => getTextFromChild(child))
    .join('');
};

const getTextFromChild = (child: ReactNode): string => {
  if (hasChildren(child)) {
    return getTextFromChildren(child.props.children);
  }

  if (isValidElement(child)) {
    return '';
  }

  return childToString(child);
};

const childToString = (child?: ReactNode): string => child?.toString() ?? '';

const hasChildren = (
  element: ReactNode,
): element is ReactElement<{ children: ReactNode | ReactNode[] }> =>
  isValidElement<{ children?: ReactNode[] }>(element) &&
  Boolean(element.props.children);

const slugify = (value: ReactNode) =>
  getTextFromChildren(value).toLowerCase().replace(' ', '-').trim();

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
    h1: ({ children }) => <Title id={slugify(children)}>{children}</Title>,
    h2: ({ children }) => (
      <Title id={slugify(children)} order={2}>
        {children}
      </Title>
    ),
    h3: ({ children }) => (
      <Title id={slugify(children)} order={3}>
        {children}
      </Title>
    ),
    h4: ({ children }) => (
      <Title id={slugify(children)} order={4}>
        {children}
      </Title>
    ),
    h5: ({ children }) => (
      <Title id={slugify(children)} order={5}>
        {children}
      </Title>
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
    li: ({ children }) => {
      const stringValue = getTextFromChildren(children);
      if (checkboxRegex.test(stringValue)) {
        return (
          <li style={{ listStyle: 'none' }}>
            <Checkbox
              label={<>{stringValue.replace(checkboxRegex, '')}</>}
              checked={stringValue.toLocaleLowerCase().indexOf('[x]') === 0}
              styles={{
                label: {
                  fontSize: theme.fontSizes.md,
                },
              }}
              onChange={() => {}}
            />
          </li>
        );
      }

      return <List.Item>{children}</List.Item>;
    },
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
    ...components,
  };
}
