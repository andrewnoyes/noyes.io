import { Anchor, Image, Text } from '@mantine/core';
import Link from 'next/link';
import { useBadgeTagStyles } from './badge-tag';

export const NoAiBadgeTag = () => {
  const { classes } = useBadgeTagStyles();

  return (
    <Anchor
      component={Link}
      href="/notes/_tech-critique"
      sx={(theme) => ({
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.xs,
      })}
      className={classes.badge}
    >
      <Image src="/thinksies.png" alt="thinksies" height={32} width={32} />
      <Text size="xs" sx={{ lineHeight: 1.3 }}>
        made by human <br />
        <strong>not by ai</strong>
      </Text>
    </Anchor>
  );
};
