import { Anchor, Group, Text } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

export const WebringLinks = () => {
  return (
    <Group noWrap mb="xs">
      <Anchor
        href="https://xn--sr8hvo.ws/previous"
        title="Previous in webring"
        aria-label="Previous in webring"
        sx={{ display: 'flex' }}
      >
        <IconArrowLeft />
      </Anchor>
      <Anchor href="https://xn--sr8hvo.ws">
        <Text>IndieWeb</Text>
      </Anchor>
      <Anchor
        href="https://xn--sr8hvo.ws/next"
        title="Next in webring"
        aria-label="Next in webring"
        sx={{ display: 'flex' }}
      >
        <IconArrowRight />
      </Anchor>
    </Group>
  );
};
