import Head from 'next/head'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Sammy Mwangangi'
export const siteTitle = 'My Profile/Portfolio Website'

export default function Layout({ children, home }) {
  return (
    <div className="px-10 py-10 md:mx-64 md:my-20">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center text-center">
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className="w-32 h-32 rounded-full mx-auto"
              alt={name}
            />
            <h1 className="text-3xl font-bold leading-tight tracking-wide mb-4 text-gray-700">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className="w-32 h-32 rounded-full mx-auto"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="mt-4 text-left text-gray-700 text-3xl font-bold">
              <Link href="/">
                <a className="">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-4 font-bold text-blue-500 text-lg">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}