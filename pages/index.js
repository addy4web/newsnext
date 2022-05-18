import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Banner from './banner';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>INN | Indian National News </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flexgrid'>
        <div className='col-8 leftsidebar'>
          <Banner alttitle="My Home Banner" />
        </div>
        <div className='col-4 rightsidebar'>

        </div>
      </main>


      <footer>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image
            src="/images/logo.jpeg"
            width={80}
            height={40}
          />
        </a>
      </footer>

    </div>
  )
}
