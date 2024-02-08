import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFakex from '../public/images/works/fakex_eyecatch.png'
import thumbKeycloakDockerLdap from '../public/images/works/keycloak_eyecatch.png'
import thumbDocker6Stacks from '../public/images/works/6stack_eyecatch.png'
import thumbAnaba from '../public/images/works/anaba_eyecatch.png'
import thumbEportfolio from '../public/images/works/eportfolio_eyecatch.png'
import thumbRickypedia from '../public/images/works/rickypedia_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="anaba" title="anaba" thumbnail={thumbAnaba}>
            A Chrome Extension made for LinkedIn which automate contact creation in anaba
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ePortfolio"
            title="ePortfolio"
            thumbnail={thumbEportfolio}
          >
            ePortfolio made to showcase my work and try Vue.js
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="rickypedia"
            title="Rickypedia"
            thumbnail={thumbRickypedia}
          >
            A website that uses Rick & Morty API to display characters and episodes
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          School works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="fakex" thumbnail={thumbFakex} title="fakex">
            Sneaker marketplace mimicking StockX 
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="docker-6stacks" thumbnail={thumbDocker6Stacks} title="Docker 6 stacks">
            Docker compose with 6 stacks
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="keycloak-docker-ldap"
            thumbnail={thumbKeycloakDockerLdap}
            title="Keycloak Docker LDAP"
          >
            Keycloak with Docker and LDAP
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
