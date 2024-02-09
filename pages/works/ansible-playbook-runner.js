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
  <Layout title="ansible-playbook-runner">
    <Container>
      <Title>
        Ansible Playbook Runner <Badge>2024</Badge>
      </Title>
      <P>
        Ansible Playbook Runner is a tool that I made to run ansible playbooks servers. It is a bash script that takes a playbook and a list of servers as arguments and runs the playbook on the servers. It is made to be used with a CI/CD pipeline. It is a simple tool that I made to learn how to use ansible and how to make a shell script.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux(Ubuntu/Archlinux)</span>
        </ListItem>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>Yaml, Bash</span>
        </ListItem>

        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/damien-mathieu1/ansible-playbook-runner">
            Repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/ansible01.png" alt="Ansible" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
