import { Card, Container, Grid, Image, Space, Text } from '@mantine/core';
import { SectionHeader } from './section-header';

export const About = () => {
  return (
    <section id="about">
      <Container size="md" sx={{ paddingTop: 100, paddingBottom: 100 }}>
        <SectionHeader title="About Me" />
        <Grid gutter="lg">
          <Grid.Col sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card p={0} radius="sm" sx={{ height: 200, width: 200 }}>
              <Image
                src="/androo-min.jpg"
                alt="Andrew Noyes"
                height={200}
                width={200}
              />
            </Card>
          </Grid.Col>
          <Grid.Col sm={8}>
            <Text>
              Listicle pop-up tote bag, iceland tumblr tilde migas woke hexagon
              semiotics gatekeep heirloom occupy crucifix enamel pin.
              Dreamcatcher waistcoat try-hard gastropub bruh adaptogen tofu, fit
              craft beer cray heirloom migas. Gastropub kombucha pabst art party
              lomo craft beer sartorial, four loko meh woke. Fashion axe seitan
              yuccie ugh wayfarers farm-to-table everyday carry keffiyeh twee
              prism DIY jean shorts. Coloring book trust fund food truck ethical
              taiyaki VHS. Tbh organic copper mug literally, vinyl mustache
              heirloom iceland direct trade forage 8-bit yuccie chartreuse vegan
              beard. Brunch knausgaard fam, air plant shoreditch iceland
              pitchfork taiyaki food truck neutra hashtag prism taxidermy
              flannel live-edge.
            </Text>
            <Space h="md" />
            <Text>
              Four loko la croix vibecession lumbersexual. Blue bottle next
              level typewriter church-key retro hammock helvetica crucifix
              iPhone pork belly 90's man bun chillwave stumptown. Subway tile
              iPhone before they sold out lo-fi same blog. Chambray cornhole
              fixie, microdosing chillwave hella williamsburg direct trade
              try-hard vexillologist. Hell of gastropub pug unicorn post-ironic
              listicle flannel synth biodiesel freegan man braid blog.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
