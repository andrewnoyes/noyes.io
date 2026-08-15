import { Container, Image, Stack, Text, Title } from '@mantine/core';

export default function Custom404() {
  return (
    <Container size="xs" p="xl">
      <Stack>
        <Title align="center">Page not found!</Title>
        <Text align="center">{`Sorry, couldn't find that page - here's a funny gif instead.`}</Text>
        <Image
          id="joe-black-car-scene"
          src="/notes/memes/joe-black-car-scene.gif"
          alt="joe black getting hit by cars on a loop (comical)."
          height={250}
          radius="sm"
        />
      </Stack>
    </Container>
  );
}
