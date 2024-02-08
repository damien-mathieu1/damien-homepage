import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="ePortolfio">
    <Container>
      <Title>
        ePortfolio <Badge>2023</Badge>
      </Title>
      <P>
        ePortfolio is a personal project made to showcase my work and introduce myself. It is made with Vue.js and was originally hosted on my raspberry pi running a docker container. Cloudflare was used as a reverse proxy to make it accessible from the internet. Now it is hosted through Github Pages because it is easier to maintain and I had no time to maintain my raspberry pi anymore.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://damien-mathieu1.github.io/">
            https://damien-mathieu1.github.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue.JS, SCSS</span>
        </ListItem>

        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/damien-mathieu1/ePortfolio">
            Repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/eportfolio01.png" alt="ePortfolio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
