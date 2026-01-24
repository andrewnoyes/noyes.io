import {
  ActionIcon,
  Anchor,
  Container,
  createStyles,
  Group,
} from '@mantine/core';
import { IconBrandGit, IconMail } from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    marginLeft: -16,
    marginRight: -16,
    marginBottom: -16,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export const AppFooter = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Anchor<'a'>
          href="https://git.unfrl.com/androo/noyes.io"
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          color="dimmed"
          sx={{ fontFamily: 'monospace' }}
        >
          built by androo
        </Anchor>
        <Group spacing={0} className={classes.links} noWrap>
          <Link
            href="https://git.unfrl.com/androo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="lg" aria-label="Git repos">
              <IconBrandGit size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href="mailto:andrew@noyes.io">
            <ActionIcon size="lg" aria-label="Email">
              <IconMail size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </footer>
  );
};
