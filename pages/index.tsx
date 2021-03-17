import { Container } from '@vcomponents'
import Link from 'next/link'

const IndexPage = (): JSX.Element => (
  <Container>
    <h1 className="text-4xl text-black dark:text-white">Hello Next.js 👋</h1>
    <p>
      <Link href="/blog">
        <a className="leading-6 underline transition-colors text-black-600 hover:text-blue-600 visited:text-purple-600">
          Blog again
        </a>
      </Link>
    </p>
  </Container>
)

export default IndexPage
