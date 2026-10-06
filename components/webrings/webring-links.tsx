import { Anchor, Group, Text } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

export interface WebringLinksProps {
  title: string;
  sourceUrl: string;
  previousUrl: string;
  nextUrl: string;
}

export const WebringLinks = (props: WebringLinksProps) => {
  const { title, sourceUrl, previousUrl, nextUrl } = props;

  const previousLabel = `Previous in ${title}`;
  const nextLabel = `Next in ${title}`;

  return (
    <Group noWrap mb="xs" spacing="xs">
      <Anchor
        href={previousUrl}
        title={previousLabel}
        aria-label={previousLabel}
        sx={{ display: 'flex' }}
      >
        <IconArrowLeft size={14} />
      </Anchor>
      <Anchor href={sourceUrl} size="sm" sx={{ width: 160 }}>
        <Text align="center" sx={{ fontFamily: 'monospace' }}>
          {title}
        </Text>
      </Anchor>
      <Anchor
        href={nextUrl}
        title={nextLabel}
        aria-label={nextLabel}
        sx={{ display: 'flex' }}
      >
        <IconArrowRight size={14} />
      </Anchor>
    </Group>
  );
};
