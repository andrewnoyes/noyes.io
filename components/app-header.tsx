import {
  ActionIcon,
  Box,
  Button,
  createStyles,
  Drawer,
  Group,
  Header,
  Image,
  ScrollArea,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBurger, IconCircleDashedX } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { APP_HEADER_HEIGHT, siteConfig } from '../utils';
import {
  ColorSchemeToggle,
  ColorSchemeToggleProps,
} from './color-scheme-toggle';
import { ResumeLink } from './resume-link';

const useStyles = createStyles((theme) => ({
  matapacosHome: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    textDecoration: 'none',
    fontWeight: 700,
  },
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
    fontFamily: 'monospace',
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
  linkActive: {
    borderBottom: `1px solid ${theme.colors.violet[7]}`,
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

export const AppHeader = ({
  colorSchemeProps,
}: {
  colorSchemeProps: ColorSchemeToggleProps;
}) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, cx } = useStyles();
  const router = useRouter();

  const links = siteConfig.mainLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={cx(classes.link, {
        [classes.linkActive]: router.asPath.indexOf(link.href) === 0, // nested routes for eg '/notes/some-note' will still be active
      })}
      onClick={closeDrawer}
      scroll={!!link.scrollToTop}
    >
      {link.name}
    </Link>
  ));

  const rotation = Math.floor(Math.random() * 365);

  return (
    <Box>
      <Header height={APP_HEADER_HEIGHT} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Link href="/" className={classes.matapacosHome}>
            <Image
              src="/matapacos.webp"
              alt="androo"
              width={34}
              height={34}
              radius="sm"
            />
            <Text size="lg" sx={{ fontFamily: 'monospace' }}>
              androo
            </Text>
          </Link>
          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            {links}
          </Group>
          <Group
            sx={{ height: '100%' }}
            spacing={4}
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
            <ActionIcon
              title="Toggle navigation"
              aria-label="Toggle navigation"
              onClick={toggleDrawer}
              variant="transparent"
              size="lg"
              color={
                colorSchemeProps.colorScheme === 'dark' ? undefined : 'dark'
              }
              sx={{
                transform: drawerOpened ? `rotate(${rotation}deg)` : '',
                transition: 'transform ease 200ms',
              }}
            >
              {drawerOpened ? (
                <IconCircleDashedX stroke={1.5} size={34} />
              ) : (
                <IconBurger stroke={1.5} size={34} />
              )}
            </ActionIcon>
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
            top: APP_HEADER_HEIGHT,
          },
          drawer: {
            top: APP_HEADER_HEIGHT,
          },
        }}
        className={classes.hiddenDesktop}
        zIndex={1000000}
        withCloseButton={false}
        position="right"
      >
        <ScrollArea
          sx={{ height: `calc(100vh - ${APP_HEADER_HEIGHT}px)` }}
          mx="-md"
        >
          {links}
          <Group position="center" grow mt="sm" pb="xl" px="md">
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
