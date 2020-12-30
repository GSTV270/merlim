import React from 'react'
import Head from 'next/head'

import { Container, CardContainer } from '../styles/pages/index'
import CardBack from '../components/WizardsTemplate/CardBack'
import CardFront from '../components/WizardsTemplate/CardFront'
import CustomCard from '../components/CustomTemplate/index'

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
      <CardContainer>
        <CustomCard />
      </CardContainer>
    </Container>
  )
}
