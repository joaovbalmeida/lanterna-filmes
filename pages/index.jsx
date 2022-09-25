import Head from 'next/head'
import Image from 'next/image'

import AboutPicture from '../public/about-picture.png'
import PeoplePicture from '../public/people.png'
import Layout from '../components/layout'
import OrangePattern from '../components/icons/orangePattern'
import GreenPattern from '../components/icons/GreenPattern'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with</title>
      </Head>
      <section className="h-screen"></section>
      <section className="flex flex-col lg:bg-cinema-texture lg:bg-repeat pt-28 pb-28 lg:pb-80 px-8 lg:px-36">
        <div className="flex flex-col lg:flex-row h-fit">
          <div className="lg:w-1/2 h-fit flex flex-col mr-8">
            <div className="relative">
              <p className="w-[30rem] absolute uppercase font-extrabold font-poppins text-7xl text-white z-10">
                Sobre Nós
              </p>
              <span className="w-[30rem] absolute left-3 about-span">SOBRE NÓS</span>
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
            <div className="relative group w-[5rem] z-10">
              <p className="hidden group-hover:block absolute text-body3 font-bold text-white -top-7 text-center w-full">
                Lucas
              </p>
              <div className="h-[5rem] w-[5rem] rounded-full bg-green">
                <img
                  className="h-[4.75rem] w-[4.75rem] translate-y-[0.0625rem]"
                  alt=""
                  src={PeoplePicture.src}
                />
              </div>
            </div>
            <div className="relative group w-[5rem] z-10">
              <p className="hidden group-hover:block absolute text-body3 font-bold text-white -top-7 text-center w-full">
                Lucas
              </p>
              <div className="h-[5rem] w-[5rem] rounded-full bg-green">
                <img
                  className="h-[4.75rem] w-[4.75rem] translate-y-[0.0625rem]"
                  alt=""
                  src={PeoplePicture.src}
                />
              </div>
            </div>
            <div className="relative group w-[5rem] z-10">
              <p className="hidden group-hover:block absolute text-body3 font-bold text-white -top-7 text-center w-full">
                Lucas
              </p>
              <div className="h-[5rem] w-[5rem] rounded-full bg-green">
                <img
                  className="h-[4.75rem] w-[4.75rem] translate-y-[0.0625rem]"
                  alt=""
                  src={PeoplePicture.src}
                />
              </div>
            </div>
            <div className="relative group w-[5rem] z-10">
              <p className="hidden group-hover:block absolute text-body3 font-bold text-white -top-7 text-center w-full">
                Lucas
              </p>
              <div className="h-[5rem] w-[5rem] rounded-full bg-green">
                <img
                  className="h-[4.75rem] w-[4.75rem] translate-y-[0.0625rem]"
                  alt=""
                  src={PeoplePicture.src}
                />
              </div>
            </div>
            <div className="relative group w-[5rem] z-10">
              <p className="hidden group-hover:block absolute text-body3 font-bold text-white -top-7 text-center w-full">
                Lucas
              </p>
              <div className="h-[5rem] w-[5rem] rounded-full bg-green">
                <img
                  className="h-[4.75rem] w-[4.75rem] translate-y-[0.0625rem]"
                  alt=""
                  src={PeoplePicture.src}
                />
              </div>
            </div>
            <div className="relative group w-[5rem] z-10">
              <p className="hidden group-hover:block absolute text-body3 font-bold text-white -top-7 text-center w-full">
                Lucas
              </p>
              <div className="h-[5rem] w-[5rem] rounded-full bg-green">
                <img
                  className="h-[4.75rem] w-[4.75rem] translate-y-[0.0625rem]"
                  alt=""
                  src={PeoplePicture.src}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
