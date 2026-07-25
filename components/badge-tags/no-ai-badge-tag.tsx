import { createStyles } from '@mantine/core';
import Link from 'next/link';
import { BadgeTag } from './badge-tag';

const useStyles = createStyles(() => ({
  internalLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export const NoAiBadgeTag = () => {
  const { classes } = useStyles();

  return (
    <Link href="/notes/_tech-critique" className={classes.internalLink}>
      <BadgeTag
        src="/thinksies.png"
        alt="thinksies"
        content={
          <>
            made by human <br />
            <strong>not by ai</strong>
          </>
        }
      />
    </Link>
  );
};
