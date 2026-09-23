import { Anchor, Button } from '@mantine/core';

export const EmailMeBadgeTag = () => {
  return (
    <Anchor href="mailto:andrew@noyes.io" rel="me">
      <Button variant="light" sx={{ width: 150 }} size="lg">
        Email me!
      </Button>
    </Anchor>
  );
};
