import Head from 'next/head'
import CardBack from '../components/cardBack'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CardBack />
      </main>
    </>
  )
}
