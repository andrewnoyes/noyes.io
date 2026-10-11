import { Anchor, Group, Text } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

export interface WebringLinksProps {
  title: string;
  sourceUrl: string;
  previousUrl: string;
  nextUrl: string;
  randomUrl?: string;
}

export const WebringLinks = (props: WebringLinksProps) => {
  const { title, sourceUrl, previousUrl, nextUrl, randomUrl } = props;

  const previousLabel = `Previous in ${title}`;
  const nextLabel = `Next in ${title}`;
  const randomLabel = `Random in ${title}`;

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
      <Group
        spacing={4}
        sx={{ width: 160, alignSelf: 'center', justifyContent: 'center' }}
      >
        <Anchor href={sourceUrl} size="sm" sx={{ width: 140 }}>
          <Text align="center" sx={{ fontFamily: 'monospace' }}>
            {title}
          </Text>
        </Anchor>
        {randomUrl && (
          <Anchor
            href={randomUrl}
            title={randomLabel}
            aria-label={randomLabel}
            size="xs"
          >
            🎲
          </Anchor>
        )}
      </Group>
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
