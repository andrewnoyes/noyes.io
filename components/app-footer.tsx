import {
  ActionIcon,
  Anchor,
  Container,
  createStyles,
  Group,
  Image,
} from '@mantine/core';
import { IconBrandGit, IconMail } from '@tabler/icons-react';
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
    position: 'relative',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

export const AppFooter = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Image
        src="/gifs/purple-skele-idle.gif"
        alt="purple skeleton idling"
        height={64}
        width={68}
        sx={{
          top: 16,
          left: 8,
          position: 'absolute',
        }}
      />
      <Container className={classes.inner}>
        <Anchor<'a'>
          href="https://git.unfrl.com/androo/noyes.io"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          color="dimmed"
          sx={{ fontFamily: 'monospace' }}
        >
          built by androo, not ai <span role="img">😘</span>
        </Anchor>
        <Group spacing={0} noWrap>
          <Link
            href="https://git.unfrl.com/androo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to my public git repos."
          >
            <ActionIcon size="lg" aria-label="git icon">
              <IconBrandGit size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link
            href="mailto:andrew@noyes.io"
            aria-label="Link to my email address."
          >
            <ActionIcon size="lg" aria-label="mail icon">
              <IconMail size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </footer>
  );
};
