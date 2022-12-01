import Head from 'next/head'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import client from '/services/client'

import AboutPicture from '/public/about-picture.png'
import Layout from '/components/layout'
import OrangePattern from '/components/icons/orangePattern'
import GreenPattern from '/components/icons/greenPattern'
import CinemaIcon from '/components/icons/cinemaIcon'
import MusicIcon from '/components/icons/musicIcon'
import PublicityIcon from '/components/icons/publicityIcon'

const Home = ({ people }) => {
  return (
    <Layout>
      <Head>
        <title>Lanterna Filmes</title>
      </Head>
      <section className="relative h-screen w-screen bg-home-mobile-banner bg-cover lg:bg-none flex flex-col justify-end overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=O5D_XGpZh-E"
            muted={true}
            loop={true}
            controls={false}
            width={'100%'}
            height={'100%'}
            playing={true}
          />
        </div>
        <div className="hidden lg:flex items-center justify-center mb-16 space-x-8">
          <div className="group relative flex flex-col items-center">
            <p className="hidden group-hover:block group-hover:absolute text-white font-bold -top-10">
              Cinema
            </p>
            <Link className="cursor-pointer" href={'/cinema'} passHref>
              <a className="relative w-16 h-16 rounded-full bg-transparent group-hover:bg-white border-2 border-white text-white group-hover:text-black flex items-center justify-center">
                <CinemaIcon />
              </a>
            </Link>
          </div>
          <div className="group relative flex flex-col items-center">
            <p className="hidden group-hover:block group-hover:absolute text-white font-bold -top-10">
              Música
            </p>
            <Link className="cursor-pointer" href={'/musica'} passHref>
              <a className="relative w-16 h-16 rounded-full bg-transparent group-hover:bg-white border-2 border-white text-white group-hover:text-black flex items-center justify-center">
                <MusicIcon />
              </a>
            </Link>
          </div>
          <div className="group relative flex flex-col items-center">
            <p className="hidden group-hover:block group-hover:absolute text-white font-bold -top-10">
              Publicidade
            </p>
            <Link className="cursor-pointer" href={'/publicidade'} passHref>
              <a className="relative w-16 h-16 rounded-full bg-transparent group-hover:bg-white border-2 border-white text-white group-hover:text-black flex items-center justify-center">
                <PublicityIcon />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col lg:bg-home-texture lg:bg-repeat pt-28 pb-28 lg:pb-80 px-8 lg:px-36"
        id="about"
      >
        <div className="flex flex-col lg:flex-row h-fit">
          <div className="lg:w-1/2 h-fit flex flex-col mr-8">
            <div className="relative">
              <p className="w-[30rem] absolute uppercase font-extrabold font-poppins text-5xl lg:text-7xl text-white z-10">
                Sobre Nós
              </p>
              <span className="w-[30rem] absolute left-2 about-span">SOBRE NÓS</span>
            </div>
            <p className="text-gray-5 mt-32">
              Lanterna Filmes é um coletivo/produtora audiovisual com braços em cinema e
              publicidade. As ideias da Lanterna estão saindo do papel só agora, mas é um projeto
              que é idealizado há praticamente um ano.
            </p>
            <p className="text-gray-5 mt-8">
              A missão da Lanterna filmes é trazer produções novas e plurais para o cenário
              audiovisual brasileiro, que dialoguem com o público mais jovem. A visão da Lanterna
              filmes é ser sinônimo de qualidade e a produtora favorita entre os jovens.
            </p>
            <p className="text-gray-5 mt-8">
              Como nossos principais valores acreditamos na liberdade de expressão de todos os
              idealizadores e na pluralidade de ideias.
            </p>
          </div>
          <div className="hidden w-1/2 lg:flex relative ml-20">
            <div className="relative flex w-full h-full">
              <div className="absolute z-10 -top-16 -left-[4.8rem]">
                <OrangePattern />
              </div>
              <img
                width={560}
                height={720}
                alt=""
                src={AboutPicture.src}
                className="object-contain"
              />
              <div className="z-10 translate-y-[70%] -translate-x-10">
                <GreenPattern />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-full mt-32 mb-28">
          <div className="flex relative">
            <p className="w-[30rem] absolute font-extrabold font-poppins text-5xl text-white z-10">
              Lanterneiros
            </p>
            <span className="w-[30rem] absolute left-3 people-span">Lanterneiros</span>
          </div>
          <div className="h-20 flex justify-end space-x-4">
            {people != null &&
              people.map((person, index) => (
                <div key={`person-${index}`} className="relative group w-[4.275rem] z-10">
                  <p className="hidden group-hover:block absolute text-body3 font-bold text-white -top-7 text-center w-full whitespace-nowrap flex-grow">
                    {person.name}
                  </p>
                  <div className="h-[4.275rem] w-[4.275rem] rounded-full bg-green">
                    <div className="h-[4rem] w-[4rem] overflow-hidden rounded-full">
                      <img
                        className="h-[4rem] w-[4rem] translate-y-[0.0625rem]"
                        alt={person.name}
                        src={person.pictureUrl}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const people = await client.fetch(
    `*[_type == "people"]{
      name,
      "pictureUrl": picture.asset->url
    }`
  )

  return {
    props: {
      people,
    },
  }
}

export default Home
