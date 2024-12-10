import { createStyles, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    textDecoration: 'none',
    fontWeight: 700,
  },
  image: {
    borderRadius: '50%',
  },
  title: {
    fontFamily: 'monospace',
  },
}));

export const Logo = () => {
  const { classes } = useStyles();

  return (
    <Link href="/" className={classes.link}>
      <Image
        src="/dog-bandana.webp"
        alt="Black dog"
        width={42}
        height={42}
        className={classes.image}
      />
      <Text size="xl" className={classes.title}>
        androo
      </Text>
    </Link>
  );
};
