import React from 'react'
import Head from 'next/head'

import { Container, CardContainer } from '../styles/pages/index'
import CardBack from '../components/cardBack'
import CardFront from '../components/cardFront'

export default function Home () {
  return (
    <Container>
      <Head>
        <title>DnD Magic Item Card</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardContainer>
        <CardFront />
        <CardBack />
      </CardContainer>
    </Container>
  )
}
