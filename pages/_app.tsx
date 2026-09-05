import { AppShell, ColorScheme, Global, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { AppFooter, AppHeader } from '../components';
import { siteConfig } from '../utils';

const ROUTES_TO_EXCLUDE_APPSHELL = ['/webgarden', '/webgarden.html'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'dark',
  });

  const path = router.asPath;

  const showAppShell = !ROUTES_TO_EXCLUDE_APPSHELL.includes(path);

  useEffect(() => {
    console.log(`                                                            
 @@@@@@   @@@  @@@  @@@@@@@   @@@@@@@    @@@@@@    @@@@@@   
@@@@@@@@  @@@@ @@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  
@@!  @@@  @@!@!@@@  @@!  @@@  @@!  @@@  @@!  @@@  @@!  @@@  
!@!  @!@  !@!!@!@!  !@!  @!@  !@!  @!@  !@!  @!@  !@!  @!@  
@!@!@!@!  @!@ !!@!  @!@  !@!  @!@!!@!   @!@  !@!  @!@  !@!  
!!!@!!!!  !@!  !!!  !@!  !!!  !!@!@!    !@!  !!!  !@!  !!!  
!!:  !!!  !!:  !!!  !!:  !!!  !!: :!!   !!:  !!!  !!:  !!!  
:!:  !:!  :!:  !:!  :!:  !:!  :!:  !:!  :!:  !:!  :!:  !:!  
::   :::  ::   ::   :::: ::   ::   :::  ::::: ::  ::::: ::  
 :   : :  ::    :   :: :  :    :   : :   : :  :    : :  :`);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{siteConfig.name}</title>
        <link rel="shortcut icon" href="/favicon.webp" />
        <meta name="description" content={siteConfig.description} />
        <meta name="image" content={siteConfig.image} />
        <meta property="og:title" content={siteConfig.name} key="title" />
        <meta property="og:description" content={siteConfig.description} />
        <meta
          property="og:image"
          content={`https://noyes.io/${siteConfig.image}`}
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Negro matapacos" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="noyes.io" />
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
          primaryColor: 'violet',
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
          padding={showAppShell ? undefined : 0}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          {showAppShell ? (
            <>
              <AppHeader
                colorSchemeProps={{
                  colorScheme,
                  onToggle: () =>
                    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark'),
                }}
              />
              <Component {...pageProps} />
              <AppFooter />
            </>
          ) : (
            <Component {...pageProps} />
          )}
        </AppShell>
      </MantineProvider>
    </Fragment>
  );
}
