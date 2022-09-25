import { useForm } from 'react-hook-form'

import WhatsappIcon from './icons/whatsappIcon'
import InstagramIcon from './icons/instagramIcon'

const Footer = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <footer className="relative bg-black-dark w-screen text-white font-montserrat">
      <form
        className="w-screen lg:bottom-0 lg:ml-[5%] lg:absolute lg:w-fit bg-white border border-black/50 lg:border-none lg:rounded-t-lg px-10 lg:px-16 py-8 lg:py-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-body1 font-bold text-black">Fale Conosco</p>
        <div className="flex flex-col space-y-4 lg:spacey-y-6 mt-7 lg:mt-10 mb-8 lg:mb-6 text-black">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
            <input
              className="bg-white border border-black rounded h-10 px-2 placeholder-black focus:border-orange focus:border-2 focus:outline-none"
              placeholder="Nome"
              {...register('name', { required: true })}
            />
            <input
              className="bg-white border border-black rounded h-10 px-2 placeholder-black focus:border-orange focus:border-2 focus:outline-none"
              placeholder="Cidade/Estado"
              {...register('state', { required: true })}
            />
          </div>
          <input
            className="bg-white border border-black rounded h-10 px-2 placeholder-black focus:border-orange focus:border-2 focus:outline-none"
            placeholder="Email"
            type={'email'}
            {...register('email', { required: true })}
          />
          <textarea
            className="bg-white border border-black rounded h-32 px-2 placeholder-black pt-2 resize-none focus:border-orange focus:border-2 focus:outline-none"
            placeholder="Mensagem"
            {...register('message', { required: true })}
          />
        </div>
        <button
          type="submit"
          className="h-10 px-9 bg-orange rounded-[8px] font-bold text-body2 hover:bg-orange-dark active:bg-orange-light"
        >
          Enviar
        </button>
      </form>
      <div className="flex flex-col items-end pb-16 pt-10 lg:pt-16 px-10 lg:px-32 space-y-4 text-body4">
        <p>
          © Lanterna Filmes Produções 2022
          <br />
          Todos os direitos Reservados
        </p>
        <p>+55 (21) 0000-0000</p>
        <p>contato@lanternafilmes.com</p>
        <div className="lg:hidden w-full flex items-center justify-end space-x-4 pt-4">
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
      </div>
    </footer>
  )
}

export default Footer
