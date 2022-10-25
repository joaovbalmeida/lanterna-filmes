import { useRef } from 'react'
import Head from 'next/head'
import client from '/services/client'

import Layout from '/components/layout'
import ArrowDown from '/components/icons/arrowDown'
import useContent from '../hooks/contentContext'

const MovieCard = ({ movie }) => {
  const { setContent } = useContent()

  return (
    <div className="flex flex-col mx-12 md:mx-0 sm:flex-row sm:items-end sm:w-5/12">
      <img
        alt={movie.title}
        src={movie.pictureUrl}
        className="aspect-[3/4] object-cover sm:max-w-[60%] rounded"
      />
      <div className="flex flex-col sm:w-1/3 sm:justify-end sm:ml-4 mt-4 sm:mt-0">
        <p className="text-body3 text-center sm:text-left">{movie.preview}</p>
        <p className="text-body3 text-center sm:text-left mt-6 sm:mt-5">
          Direção: {movie.director}
        </p>
        <button
          title="Ver Mais"
          className="py-2 px-4 text-body3 border rounded whitespace-nowrap mt-4 bg-button-blue cursor-pointer"
          onClick={() => {
            setContent({
              youtube: movie.youtube,
              title: movie.title,
              summary: movie.summary,
              preview: movie.preview,
              technicalDescription: movie.technicalDescription,
              awards: movie.awards?.map((award) => award.name),
              awardsUrl: movie.awards
                ?.filter((award) => award.logoUrl)
                .map((award) => award.logoUrl),
            })
          }}
        >
          Ver Mais
        </button>
      </div>
    </div>
  )
}

const Cinema = ({ movies }) => {
  const ref = useRef(null)

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout>
      <Head>
        <title>Lanterna Filmes | Cinema</title>
      </Head>
      <section className="h-screen w-screen flex justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center text-white">
          <p className="text-h2 sm:text-[62px] text-center font-bold tracking-[0.25em] leading-[88px]">
            CINEMA
          </p>
          <p className="text-body4 sm:text-body2 text-center mt-4">Explore nosso catálogo</p>
          <div className="hidden sm:block mt-20 hover:cursor-pointer" onClick={handleScroll}>
            <ArrowDown />
          </div>
        </div>
      </section>
      <section
        ref={ref}
        className="flex flex-col bg-blue pt-28 pb-28 lg:pb-96 px-8 lg:px-36 text-white"
      >
        <div className="w-full flex justify-around flex-wrap space-y-16">
          {movies?.map((movie, index) => (
            <MovieCard key={`moview-${index}`} movie={movie} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const movies = await client.fetch(`
    *[_type == "movies"]{
      title,
      preview,
      summary,
      technicalDescription,
      director,
      youtube,
      "awards": awards[]{
        name,
        "logoUrl": logo.asset->url  
      },
      "pictureUrl": picture.asset->url
    }
  `)

  return {
    props: {
      movies,
    },
  }
}

export default Cinema
