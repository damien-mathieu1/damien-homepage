import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="anaba">
    <Container>
      <Title>
        anaba pour LinkedIn <Badge>2023</Badge>
      </Title>
      <P>
        A Chrome Extension made for LinkedIn available in the chrome store. This extension is used to automate contact from LinkedIn to anaba solution. I made this extension as a mission during my internship and it is probably going to be improved in the future based on the clients&apos; feedbacks.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.anaba.fr/">
            https://www.anaba.fr/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JS, ManifestV3, Chrome Extension</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://www.linkedin.com/posts/louis-leblanc_bienvenue-%C3%A0-lextension-anaba-pour-activity-7090685583248777217-ZiTW?utm_source=share&utm_medium=member_desktop">
            Announcing the release of the extension on LinkedIn <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/anaba01.png" alt="anaba" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
