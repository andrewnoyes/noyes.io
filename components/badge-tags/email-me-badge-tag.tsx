import { Button } from '@mantine/core';
import { ExternalLink } from '../external-link';

export const EmailMeBadgeTag = () => {
  return (
    <ExternalLink href="mailto:andrew@noyes.io">
      <Button variant="light" sx={{ width: 150 }} size="lg">
        Email me!
      </Button>
    </ExternalLink>
  );
};
