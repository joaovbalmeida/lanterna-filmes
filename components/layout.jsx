import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'

import Footer from './ui/footer'
import Header from './ui/header'
import { ContentContext } from '../hooks/contentContext'

const Layout = ({ children }) => {
  const contentRef = useRef()
  const [content, setContent] = useState(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setContent(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [contentRef])

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta
          name="description"
          content={`A statically generated blog example using Next.js and`}
        />
        <meta property="og:image" content={'HOME_OG_IMAGE_URL'} key="ogImage" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="relative min-h-screen max-w-screen overflow-hidden bg-black font-montserrat">
        <ContentContext.Provider value={{ content, setContent }}>
          <main>{children}</main>
          {content != null && (
            <div className="fixed right-0 bottom-0 left-0 top-0 flex justify-center items-center w-screen h-screen z-10 pt-16">
              <div
                ref={contentRef}
                className="bg-black-light w-screen sm:w-fit max-w-[95%] sm:max-w-[90%] md:max-w-[80%] max-h-[90%]  rounded-lg overflow-y-scroll overflow-x-hidden border-[3px] border-black-dark text-white"
              >
                <div className="w-full aspect-video overflow-hidden"></div>
                <div className="px-4 md:px-12 py-8">
                  <p className="text-body1 md:text-h3 font-extrabold">{content.title}</p>
                  <p className="text-body4 md:text-body3 mt-2">{content.summary}</p>
                  <div className="block sm:hidden mt-6">
                    <p className="text-body3 font-bold">Ficha Técnica</p>
                    <p className="text-body4 py-2">{content.preview}</p>
                    <p className="text-body4">{content.tecnicalDescription}</p>
                    {content.awards?.length > 0 && (
                      <>
                        <p className="text-body3 font-bold mt-6 mb-2">Prêmios e Festivais</p>
                        {content.awards.map((award, index) => (
                          <p key={`${index}-${award}`} className="text-body4 mt-4">
                            {award}
                          </p>
                        ))}
                      </>
                    )}
                    {content.awardsUrl?.length > 0 && (
                      <div className="flex flex-wrap items-center justify-center max-w-full">
                        {content.awardsUrl.map((awardUrl, index) => (
                          <img
                            key={`${index}-${awardUrl}`}
                            src={awardUrl}
                            alt="Award Logo"
                            className="object-contain"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </ContentContext.Provider>
      </div>
      <Footer />
    </>
  )
}

export default Layout
