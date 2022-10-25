import { useRef } from 'react'
import Head from 'next/head'

import Layout from '/components/layout'
import ArrowDown from '/components/icons/arrowDown'
import ContentCard from '../components/ui/contentCard'

const Publicidade = () => {
  const ref = useRef(null)

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout>
      <Head>
        <title>Lanterna Filmes | Publicidade</title>
      </Head>
      <section className="h-screen w-screen flex justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center text-white">
          <p className="text-h3 sm:text-[62px] text-center font-bold tracking-[0.25em] leading-[88px]">
            PUBLICIDADE
          </p>
          <p className="text-body4 sm:text-body2 text-center mt-4">Explore nosso catálogo</p>
          <div className="hidden sm:block mt-20 hover:cursor-pointer" onClick={handleScroll}>
            <ArrowDown />
          </div>
        </div>
      </section>
      <section
        ref={ref}
        className="flex flex-col w-full bg-green pt-28 sm:pb-28 lg:pb-96 px-8 lg:px-36 text-white"
      >
        <div className="w-full flex justify-center flex-wrap flex-grow">
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
      </section>
    </Layout>
  )
}

export default Publicidade
