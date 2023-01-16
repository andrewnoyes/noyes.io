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
}));

export const Logo = () => {
  const { classes } = useStyles();

  return (
    <Link href="/" className={classes.link}>
      <Image
        src="/retrobot.jpeg"
        alt="Retrobot"
        width={42}
        height={42}
        style={{ borderRadius: '50%' }}
      />
      <Text size="xl" sx={{ fontFamily: 'monospace' }}>
        androo
      </Text>
    </Link>
  );
};
