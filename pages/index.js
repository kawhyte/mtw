import Container from '../components/container'

import Hero from '../components/main-hero'
import Section from '../components/section'
import Welcome from '../components/welcome'
import Layout from '../components/layout'

import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index() {

  return (
    <>
      <Layout >
        <Head>
          <title>Meet the Whytes by {CMS_NAME}</title>
        </Head>
        <Container>
        <Hero />
        <Section />
        <Welcome />
        </Container>
      </Layout>
    </>
  )
}

