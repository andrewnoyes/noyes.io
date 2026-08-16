import { Group, Image } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { About, Hero, ProjectList, WorkExperience } from '../components';
import { getPageTitle } from '../utils';

// dog gifs pulled from: https://github.com/tonybaloney/vscode-pets/tree/main/media/dog

export default function Home() {
  const { asPath } = useRouter();
  const [pageTitle, setPageTitle] = useState(getPageTitle([]));

  // add the #about, #experience, etc sections to page title
  useEffect(() => {
    const hash = asPath.split('#')[1];
    setPageTitle(getPageTitle([hash || '']));
  }, [asPath, pageTitle, setPageTitle]);

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
      </Head>

      <Hero />

      <Group position="center" my="xl">
        <Image
          src="/gifs/black-dog-lie.gif"
          alt="dog on the ground and wagging its tail"
          height={75}
          width={140}
        />
      </Group>

      <About />

      <Group position="center" my="xl">
        <Image
          src="/gifs/black-dog-idle.gif"
          alt="dog standing and wagging its tail"
          height={90}
          width={115}
        />
      </Group>

      <WorkExperience />

      <Group position="center" my="xl">
        <Image
          src="/gifs/black-dog-walk.gif"
          alt="dog walking"
          height={85}
          width={105}
        />
      </Group>

      <ProjectList />

      <Group position="center">
        <Image
          src="/gifs/black-dog-ball.gif"
          alt="black dog with ball"
          height={85}
          width={105}
        />
      </Group>
    </div>
  );
}
