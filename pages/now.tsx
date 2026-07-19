import {
  Container,
  Divider,
  Group,
  Image,
  List,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { ExternalLink } from '../components';

const LAST_UPDATED = new Date('07/19/2026');

export default function Now() {
  const theme = useMantineTheme();

  return (
    <Container
      size="sm"
      sx={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.xl }}
    >
      <section>
        <Title>Now</Title>
        <Group spacing="xs">
          <Text>
            Welcome to my{' '}
            <ExternalLink href="https://nownownow.com/">now</ExternalLink> page!
          </Text>
          <Text color="dimmed" size="sm">
            Updated {LAST_UPDATED.toLocaleDateString()} from Salt Lake City
          </Text>
        </Group>
      </section>

      <Divider />

      <section>
        <Title order={2}>Work</Title>
        <List
          spacing="md"
          mt="sm"
          icon={
            <IconChevronRight
              size={18}
              style={{ marginTop: 2 }}
              color={theme.colors.violet[7]}
            />
          }
        >
          <List.Item>
            <Text>
              {`I'm currently a Senior Software Engineer at `}
              <ExternalLink href="https://bcfranchise.com/">
                BaseCamp Franchising
              </ExternalLink>
              {`. There I work on all kinds of fun stuff - architecting new API
              services, building cross-platform apps, and so much more! `}
              (
              <ExternalLink href="https://www.linkedin.com/jobs/view/4385030560">{`We're hiring!`}</ExternalLink>
              )
            </Text>
          </List.Item>
        </List>
      </section>

      <section>
        <Title order={2}>Projects</Title>
        <List
          spacing="md"
          mt="sm"
          icon={
            <IconChevronRight
              size={18}
              style={{ marginTop: 2 }}
              color={theme.colors.violet[7]}
            />
          }
        >
          <List.Item>
            <Text>
              <ExternalLink href="https://app.copdb.org">CopDB </ExternalLink>
              {`has been my (and others) personal project for the last four or so
              years. Its goal is to document the most domestically violent part
              of the state. A big push this year is to aggregate data from other
              similar projects (ICE list, OpenOversight, Chicago Police Data
              Project, etc), so that we can build a more holistic dataset of the
              cops in the US.`}
            </Text>
            <Image
              src="/copdb/home.webp"
              alt="CopDB home page."
              height={300}
              fit="contain"
              mt="xs"
            />
          </List.Item>
          <List.Item>
            <Text>
              {`Also related to CopDB, another exciting idea we have is to
              introduce a mobile app. The mobile app would be exclusively for
              handling and uploading media while out on the streets. This is a
              pretty lofty goal and probably will not get to it this year, but
              still exciting!`}
            </Text>
          </List.Item>
        </List>
      </section>

      <section>
        <Title order={2}>Books</Title>
        <List
          spacing="md"
          mt="sm"
          icon={
            <IconChevronRight
              size={18}
              style={{ marginTop: 2 }}
              color={theme.colors.violet[7]}
            />
          }
        >
          <List.Item>
            <Text>
              Right now, I am reading{' '}
              <ExternalLink href="https://theanarchistlibrary.org/library/daniel-guerin-for-a-libertarian-communism">
                For a Libertarian Communism
              </ExternalLink>{' '}
              {`by Daniel Guérin with some friends. It's a collection of essays that explores a "synthesis" of Marxism and Anarchism.`}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              {`Next we're gonna read `}
              <ExternalLink href="https://www.revolpress.com/people-not-one">
                The People Are Not One, Socialist Strategy After Left Populism
              </ExternalLink>
              {`, which is co-authored by a local guy, C. Derick Varn.`}
            </Text>
          </List.Item>
        </List>
      </section>
    </Container>
  );
}
