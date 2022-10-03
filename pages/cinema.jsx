import { useRef } from 'react'
import Head from 'next/head'

import Layout from '/components/layout'
import ArrowDown from '/components/icons/arrowDown'
import MovieCover from '/public/movie-cover.jpg'
import useContent from '../hooks/contentContext'

const MovieCard = ({ imageUrl, preview, director }) => {
  const { setContent } = useContent()

  return (
    <div className="flex flex-col mx-12 sm:mx-0 sm:flex-row sm:items-end">
      <img
        alt=""
        src={MovieCover.src}
        className="aspect-[3/4] object-cover sm:max-w-[60%] rounded"
      />
      <div className="flex flex-col sm:w-1/3 sm:justify-end sm:ml-4 mt-4 sm:mt-0">
        <p className="text-body3 text-center sm:text-left">
          Documentário / Ficção / Drama / 87 / 2021
        </p>
        <p className="text-body3 text-center sm:text-left mt-6 sm:mt-5">Direção: Lucas Melo</p>
        <button
          title="Ver Mais"
          className="py-2 px-4 text-body3 border rounded whitespace-nowrap mt-4 bg-button-blue cursor-pointer"
          onClick={() => {
            setContent({
              videoUrl: '',
              title: 'Prata',
              summary:
                'Sinopse. Nosso filme “PRATA”, dirigido pelo @melinholucas faz sua estreia internacional em solo Mexicano, no maior festival de curtas da América Latina, o Shorts Mexico. É uma honra participarmos do evento, como vencedores de outro festival gigantesco, o @curtacinema. O filme entra em exibição gratuitamente hoje, a partir das 22h, na plataforma @wahustreaming e fica até o dia 8/9.',
              preview: 'Documentário / Ficção / Drama / 87 / 2021',
              tecnicalDescription:
                'Direção: Nome 1Roteiro: Nome 2Diretor Assistente: nome 3Direção de Fotografia: Nome 4Edição de Som: Nome 5Direção de Arte: Nome 6Montagem: Nome 7Produção Executiva: Nome 8Elenco: Nome 9Nome 10, Nome 11, Nome 12, Nome 13',
              awards: [
                'Cannes Film Festival, 2019, França – Cannes Écrans Junior / Competition',
                'Valletta Film Festival, 2019, Malta – Competition – Teens Only Bucheon',
                'International Fantastic Film Festival (BIFAN), 2019, Coréia do Sul – Family Zone',
              ],
              awardsUrl: [
                'https://cdn.iconscout.com/icon/free/png-256/cannes-2-283549.png',
                'https://cdn.iconscout.com/icon/free/png-256/cannes-2-283549.png',
              ],
            })
          }}
        >
          Ver Mais
        </button>
      </div>
    </div>
  )
}

const Cinema = () => {
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
        <div className="grid lg:gap-x-20 gap-y-16 lg:gap-y-28 grid-cols-1 lg:grid-cols-2 self-center">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
    </Layout>
  )
}

export default Cinema
