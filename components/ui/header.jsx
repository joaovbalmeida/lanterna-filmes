import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import WhatsappIcon from '../icons/whatsappIcon'
import InstagramIcon from '../icons/instagramIcon'
import MenuIcon from '../icons/menuIcon'
import CloseIcon from '../icons/closeIcon'
import MenuIconHover from '../icons/menuIconHover'
import Logo from '../../public/logo.png'

const MenuItem = ({ label, href, setShowMenu }) => (
  <li
    className="group w-full flex items-center"
    onClick={() => {
      setShowMenu(false)
    }}
  >
    <Link href={href} passHref>
      <a className="relative flex items-end">
        <div className="absolute w-0 h-0 mb-[7px] group-hover:w-3 group-hover:h-1 bg-green md:transition-all md:duration-200" />
        <p className="transition-all duration-200 group-hover:translate-x-4 text-h3 font-extrabold md:font-normal md:text-body2">
          {label}
        </p>
      </a>
    </Link>
  </li>
)

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed top-0 flex h-20 w-screen px-8 md:px-0 bg-gradient-transparent z-50 font-montserrat">
      <div className="flex items-center h-full w-1/2 md:w-1/3 md:pl-16">
        <div
          className="group w-8 h-fit cursor-pointer p-2"
          onClick={() => {
            if (!showMenu) {
              setShowMenu(true)
            }
          }}
        >
          <div className="block group-hover:hidden">
            <MenuIcon />
          </div>
          <div className="hidden group-hover:block">
            <MenuIconHover />
          </div>
        </div>
        {showMenu && (
          <>
            <div className="hidden md:block absolute bg-white z-20 top-6 p-2">
              <button
                onClick={() => {
                  setShowMenu(false)
                }}
                className="p-1"
              >
                <CloseIcon />
              </button>
              <ul className="text-black px-5 pb-7 pt-5 w-56 space-y-3">
                <MenuItem label="Música" href="/musica" setShowMenu={setShowMenu} />
                <MenuItem label="Cinema" href="/cinema" setShowMenu={setShowMenu} />
                <MenuItem label="Publicidade" href="/publicidade" setShowMenu={setShowMenu} />
                <MenuItem label="Sobre nós" href="/#about" setShowMenu={setShowMenu} />
                <MenuItem label="Fale Conosco" href="#contact" setShowMenu={setShowMenu} />
              </ul>
            </div>
            <div className="block md:hidden absolute top-0 left-0 right-0 h-screen bg-white z-20 p-2">
              <button
                onClick={() => {
                  setShowMenu(false)
                }}
                className="p-1"
              >
                <div className="scale-[2.0] m-4">
                  <CloseIcon />
                </div>
              </button>
              <ul className="text-black px-5 pb-7 pt-5 w-full space-y-8">
                <MenuItem label="Música" href="/musica" setShowMenu={setShowMenu} />
                <MenuItem label="Cinema" href="/cinema" setShowMenu={setShowMenu} />
                <MenuItem label="Publicidade" href="/publicidade" setShowMenu={setShowMenu} />
                <MenuItem label="Sobre nós" href="/#about" setShowMenu={setShowMenu} />
                <MenuItem label="Fale Conosco" href="#contact" setShowMenu={setShowMenu} />
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-end md:justify-center h-full w-1/2 md:w-1/3">
        <Link className="cursor-pointer" href={'/'} passHref>
          <a>
            <Image src={Logo.src} height={38} width={150} alt="Lanterna Filmes Logo" />
          </a>
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-end h-full w-1/3 px-16 space-x-4">
        <a
          className="text-black-darkest bg-white rounded-full hover:bg-black-darkest hover:text-white p-2 cursor-pointer"
          href=""
          target={'_blank'}
          rel="noreferrer"
        >
          <WhatsappIcon />
        </a>
        <a
          className="text-black-darkest bg-white rounded-full hover:bg-black-darkest hover:text-white p-2 cursor-pointer"
          href="https://www.instagram.com/lanternafilmes/"
          target={'_blank'}
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
    </nav>
  )
}

export default Header
