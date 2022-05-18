import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../public/css/blog.module.css';

const blog = () => {
  return (
    <div className='container'>
      <div className={`${styles.blogwrapper} ${styles.flexgrid}`}>
        <article className={styles.blogwrap}>
        <Link href="/blogpost/myfirstpost">
          <a>
          <Image
          src="/images/bloglist.webp"
          width={250}
          height={400}
          />
          </a>
          </Link>
          <h1>My First blog</h1>
          <p>You are being redirected to the authorized application.</p>
        </article>
        <article className={styles.blogwrap}>
          <h1>My First blog</h1>
          <p>You are being redirected to the authorized application.</p>
        </article>

        <article className={styles.blogwrap}>
          <h1>My First blog</h1>
          <p>You are being redirected to the authorized application.</p>
        </article>
      </div>
    </div>
  )
}

export default blog