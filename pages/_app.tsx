import { AppShell, ColorScheme, Global, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { AppFooter, AppHeader } from '../components';
import { siteConfig } from '../utils';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'dark',
  });

  return (
    <Fragment>
      <Head>
        <title>{siteConfig.name}</title>
        <link rel="shortcut icon" href="/dog-bandana.webp" />
        <meta name="description" content={siteConfig.description} />
        <meta name="image" content={siteConfig.image} />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.image} />
        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <Global
          styles={() => ({
            html: {
              scrollBehavior: 'smooth',
            },
          })}
        />
        <AppShell
          padding="md"
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <AppHeader
            colorSchemeProps={{
              colorScheme,
              onToggle: () =>
                setColorScheme(colorScheme === 'dark' ? 'light' : 'dark'),
            }}
          />
          <Component {...pageProps} />
          <AppFooter />
        </AppShell>
      </MantineProvider>
    </Fragment>
  );
}
