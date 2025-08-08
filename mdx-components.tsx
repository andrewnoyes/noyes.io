import {
  ActionIcon,
  Blockquote,
  Checkbox,
  Code,
  CopyButton,
  Flex,
  List,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons';
import type { MDXComponents } from 'mdx/types';

const checkboxRegex = /^(\[(x|\s)\])/gm;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <Title order={2}>{children}</Title>,
    h3: ({ children }) => <Title order={3}>{children}</Title>,
    h4: ({ children }) => <Title order={4}>{children}</Title>,
    h5: ({ children }) => <Title order={5}>{children}</Title>,
    ul: ({ children }) => <List type="unordered">{children}</List>,
    ol: ({ children }) => <List type="ordered">{children}</List>,
    li: ({ children }) => {
      const stringValue = children?.toString() ?? '';
      if (checkboxRegex.test(stringValue)) {
        return (
          <List.Item sx={{ listStyle: 'none' }}>
            <Checkbox
              label={stringValue.replace(checkboxRegex, '')}
              checked={stringValue.indexOf('[x]') === 0}
              onChange={() => {}}
            />
          </List.Item>
        );
      }

      return <List.Item>{children}</List.Item>;
    },
    p: ({ children }) => <Text my={4}>{children}</Text>,
    code: ({ children }) => {
      return (
        <Flex gap={4}>
          <Code
            sx={{ overflowX: 'auto', display: 'flex', alignItems: 'center' }}
          >
            {children}
          </Code>
          <CopyButton value={children?.toString() ?? ''} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? 'Copied' : 'Copy'}
                withArrow
                position="right"
              >
                <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                  {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Flex>
      );
    },
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
    ...components,
  };
}
