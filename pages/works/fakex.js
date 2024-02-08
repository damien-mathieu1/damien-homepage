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
  <Layout title="fakex">
    <Container>
      <Title>
        FakeX <Badge>2023</Badge>
      </Title>
      <P>
        This project is a website made for a school project. It is a fake company that sells sneakers. The website is made with PHP and SQL. It was built using the MVC pattern and it contains a login system, a cart system and a product management system. A MySQL database is used to store the products and the users. The website and database were hosted on a server in the school.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, SQL</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/damien-mathieu1/FakeX">
            Repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fakex01.png" alt="fakex" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
