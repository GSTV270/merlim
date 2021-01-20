import React, { useState, useMemo } from 'react'
import Head from 'next/head'

import { Container, Content, CardSelector } from '../styles/pages/index'
import WizardsTemplate from '../components/WizardsTemplate'
import CustomTemplate from '../components/CustomTemplate'

export default function Home () {
  const [selectedModel, setSelectedModel] = useState('WIZARDS')

  const cardsDictionary = useMemo(() => ({
    WIZARDS: <WizardsTemplate />,
    CUSTOM: <CustomTemplate />
  }))

  return (
    <Container>
      <Head>
        <title>DnD Magic Item Card</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <h1>Merlim&apos;s Magic Items</h1>

        <CardSelector>
          <button onClick={() => setSelectedModel('WIZARDS')}>Wizard&apos;s Template</button>
          <button onClick={() => setSelectedModel('CUSTOM')}>Custom Template</button>
        </CardSelector>

        {cardsDictionary[selectedModel]}
      </Content>
    </Container>
  )
}
