import { Button } from '@mantine/core';

export const EmailMeBadgeTag = () => {
  return (
    <Button
      component="a"
      href="mailto:andrew@noyes.io"
      rel="me"
      variant="light"
      size="lg"
      sx={{ width: 150 }}
    >
      Email me!
    </Button>
  );
};
