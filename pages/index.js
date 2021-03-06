import Container from '../components/container'

import Hero from '../components/main-hero'
import Section from '../components/section'
import Welcome from '../components/welcome'
import Layout from '../components/layout'

import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'



import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'

import { getAllPostsForHome } from '../lib/api'


export default function Index({ allPosts, preview }) {

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
 // <Hero />
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Meet the Whytes by {CMS_NAME}</title>
        </Head>
        <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            // date={heroPost.date}
            // author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}

 {morePosts.length > 0 && 

  morePosts.map((post) => {
        <Section 
        
        key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            webLink={post.webLink}
        
        />  
      
      
      } )}
      
      
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      
        <Welcome />




       

        


        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}
