import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="gitlab-cicd">
    <Container>
      <Title>
        Gitlab CICD <Badge>2024</Badge>
      </Title>
      <P>
        During my internship at anaba, I had to change the CI/CD pipeline in
        Gitlab. I had to create a new environment for each deploy in
        development. Creating those environment permitted to have a better
        overview of the different versions of the application. After each merge
        of merge request, the pipeline was triggered and the clean up of the
        environment was done. Those clean up jobs was the main goal of my
        mission, our deploy create AWS Lambdas and AWS S3 buckets and we had to
        clean them up after each deploy because we had a limited amount of AWS
        resources.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>AWS, Gitlab CI/CD</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/gitlab01.png" alt="gitlab" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
