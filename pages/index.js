import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
      <Layout home>
         <Head>
            <title>{siteTitle}</title>
            Vengo de los cambios realizados en la rama prueba-vercel
         </Head>
         <section className={utilStyles.headingMD}>
            <p>
               Mucho gusto soy Sebastian Rendon y me gusta realizar proyectos web.
            </p>
            <p>
               (This is a sample website - you'll be building a site like this on{' '}
               <a href='https://nextjs.org/learn'>our Next.js tutorial</a>)
            </p>
         </section>
         <section className={`${utilStyles.headingMD} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLG}>Blog</h2>
            <ul className={utilStyles.list}>
               {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                     <Link href={`/posts/${id}`}>
                        <a>{title}</a>
                     </Link>
                     <br />
                     <small className={utilStyles.lightText}>
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
