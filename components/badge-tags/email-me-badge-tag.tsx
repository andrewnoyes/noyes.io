import { Button } from '@mantine/core';
import { ExternalLink } from '../external-link';

export const EmailMeBadgeTag = () => {
  return (
    <ExternalLink href="mailto:andrew@noyes.io">
      <Button
        variant="gradient"
        sx={{ width: 150 }}
        gradient={{ from: 'grape', to: 'violet' }}
        size="lg"
      >
        Email me!
      </Button>
    </ExternalLink>
  );
};
