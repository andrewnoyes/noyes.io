import { Anchor, AnchorProps } from '@mantine/core';

export const ExternalLink = (props: AnchorProps & { href: string }) => {
  return <Anchor target="_blank" rel="noopener noreferrer" {...props} />;
};
