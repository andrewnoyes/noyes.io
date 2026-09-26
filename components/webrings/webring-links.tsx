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

  return (
    <Group noWrap mb="xs" spacing="xs">
      <Anchor
        href={previousUrl}
        title="Previous in webring"
        aria-label="Previous in webring"
        sx={{ display: 'flex' }}
      >
        <IconArrowLeft size={16} />
      </Anchor>
      <Anchor href={sourceUrl} size="sm" sx={{ width: 50 }}>
        <Text align="center">{title}</Text>
      </Anchor>
      <Anchor
        href={nextUrl}
        title="Next in webring"
        aria-label="Next in webring"
        sx={{ display: 'flex' }}
      >
        <IconArrowRight size={16} />
      </Anchor>
    </Group>
  );
};
