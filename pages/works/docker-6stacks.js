import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="docker-6stacks">
    <Container>
      <Title>
        Docker 6 Stacks <Badge>2023</Badge>
      </Title>
      <P>
        This project is a docker-compose file that contains 6 stacks. It is a school project that I made to learn how to use docker compose and how to make a multi-container application. It contains a Traefik reverse proxy, a Loki stack to collect logs with Grafana to display the logs, a Magento stack, a Keycloak stack, a Ghost stack and a Gitea stack.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>Docker, Bash</span>
        </ListItem>

        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/damien-mathieu1/Docker-6-Stacks-Compose">
            Repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
