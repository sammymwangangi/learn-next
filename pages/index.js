import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
// import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="items-center">
        <p className="text-xl text-gray-600 leading-relaxed">
          So far, we’ve only added minimal React and CSS code just to illustrate concepts such as CSS Modules. 
          Before we move on to our next lesson about data fetching, let’s polish our page styling and code.
        </p>
        <p className="mt-2 text-indigo-400 font-semibold">
          This is a sample website - you’ll be building a site like this on{' '}
          <a className="text-indigo-700" href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
      <section className="items-center">
        <h2 className="mt-4 text-left text-gray-700 text-3xl font-bold">Blog</h2>
        <ul className="list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-4 text-blue-600 font-medium leading-loose text-xl" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className="hover:underline">{title}</a>
              </Link>
              <br />
              <small className="font-medium text-gray-600">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}