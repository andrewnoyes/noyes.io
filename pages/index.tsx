import { Group, Image, UnstyledButton } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { About, Hero, ProjectList, WorkExperience } from '../components';
import { getPageTitle } from '../utils';

// dog gifs pulled from: https://github.com/tonybaloney/vscode-pets/tree/main/media/dog

const blackDog = {
  src: '/gifs/black-dog-lie.gif',
  height: 75,
  width: 140,
};

const fireDog = {
  src: '/gifs/red-dog-idle.gif',
  height: 85,
  width: 105,
};

export default function Home() {
  const { asPath } = useRouter();
  const [pageTitle, setPageTitle] = useState(getPageTitle([]));
  const [dog, setDog] = useState(blackDog);

  const isBlackDog = dog.src === blackDog.src;

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

      <Group
        position="center"
        align="flex-end"
        mt="xl"
        mb={100}
        sx={{ minHeight: 150 }}
      >
        <UnstyledButton
          aria-label="toggle dog"
          onClick={() => {
            setDog(isBlackDog ? fireDog : blackDog);
          }}
          sx={{ display: 'flex', alignItems: 'flex-end' }}
        >
          <Image
            {...dog}
            alt={
              isBlackDog ? 'dog laying down, wagging its tail' : 'flame dog!'
            }
          />
        </UnstyledButton>
      </Group>

      <About />

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
