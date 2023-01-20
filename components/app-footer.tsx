import {
  ActionIcon,
  Anchor,
  Container,
  createStyles,
  Group,
} from '@mantine/core';
import { IconBrandGithub, IconMail } from '@tabler/icons';
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
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Anchor<'a'>
          href="https://github.com/andrewnoyes/noyes.io"
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          color="dimmed"
          sx={{ fontFamily: 'monospace' }}
        >
          Built by Andrew
        </Anchor>
        <Group spacing={0} className={classes.links} noWrap>
          <Link
            href="https://github.com/andrewnoyes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="lg" aria-label="GitHub">
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href="mailto:andrew@noyes.io">
            <ActionIcon size="lg" aria-label="Email">
              <IconMail size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  );
};
