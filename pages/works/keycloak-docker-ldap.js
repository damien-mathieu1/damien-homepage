import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="keycloak-docker-ldap">
    <Container>
      <Title>
        Keycloak Docker LDAP <Badge>2023</Badge>
      </Title>
      <P>
        This project is a docker compose file that contains a Keycloak stack with an LDAP server. It is a school project that I made to learn how to use Keycloak and LDAP. It also contains a PHP stack to test the authentication with Keycloak.
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
          <Link href="https://github.com/damien-mathieu1/Virtu-PHP-LDAP">
            Repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
