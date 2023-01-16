import {
  Box,
  Burger,
  Button,
  createStyles,
  Divider,
  Drawer,
  Group,
  Header,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { siteConfig } from '../utils';
import {
  ColorSchemeToggle,
  ColorSchemeToggleProps,
} from './color-scheme-toggle';
import { Logo } from './logo';
import { ResumeLink } from './resume-link';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const HEADER_HEIGHT = 60;

export const AppHeader = ({
  colorSchemeProps,
}: {
  colorSchemeProps: ColorSchemeToggleProps;
}) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = siteConfig.mainLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={classes.link}
      onClick={closeDrawer}
      scroll={false}
    >
      {link.name}
    </Link>
  ));

  return (
    <Box>
      <Header height={HEADER_HEIGHT} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Logo />
          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            {links}
          </Group>
          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <ColorSchemeToggle {...colorSchemeProps} />
            <ResumeLink>
              <Button ml={16} variant="default">
                Resume
              </Button>
            </ResumeLink>
          </Group>
          <Group className={classes.hiddenDesktop}>
            <ColorSchemeToggle {...colorSchemeProps} />
            <Burger
              title="Toggle navigation"
              opened={drawerOpened}
              onClick={toggleDrawer}
            />
          </Group>
        </Group>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size={300}
        padding="md"
        styles={{
          root: {
            top: HEADER_HEIGHT,
          },
          drawer: {
            top: HEADER_HEIGHT,
          },
        }}
        className={classes.hiddenDesktop}
        zIndex={1000000}
        withCloseButton={false}
        position="right"
      >
        <ScrollArea
          sx={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
          mx="-md"
        >
          {links}
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />
          <Group position="center" grow pb="xl" px="md">
            <ResumeLink>
              <Button fullWidth variant="default">
                Resume
              </Button>
            </ResumeLink>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
