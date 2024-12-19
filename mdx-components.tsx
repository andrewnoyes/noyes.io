import { Blockquote, Code, List, Text, Title } from '@mantine/core';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <Title order={2}>{children}</Title>,
    h3: ({ children }) => <Title order={3}>{children}</Title>,
    h4: ({ children }) => <Title order={4}>{children}</Title>,
    h5: ({ children }) => <Title order={5}>{children}</Title>,
    ul: ({ children }) => <List type="unordered">{children}</List>,
    ol: ({ children }) => <List type="ordered">{children}</List>,
    li: ({ children }) => <List.Item>{children}</List.Item>,
    p: ({ children }) => <Text my={4}>{children}</Text>,
    code: ({ children }) => <Code>{children}</Code>,
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
    ...components,
  };
}
