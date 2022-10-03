import CardBanner from '../../public/card-banner.jpg'

const ContentCard = ({ coverUrl }) => {
  return (
    <div className="-translate-y-3/4 sm:translate-y-0 flex flex-col bg-gradient-dark p-4 md:p-6 rounded min-w-fit m-2 md:m-4">
      <img alt="" src={CardBanner.src} className="aspect-video object-cover" />
      <p className="text-body3 md:text-body1 mt-3">
        <b>Problemático -</b> Yves Anjos
      </p>
      <p className="text-body4 md:text-body2 ">2020</p>
      <div className="flex justify-center">
        <button
          title="Ver Mais"
          className="px-10 py-2 text-body3 border rounded whitespace-nowrap mt-4 bg-button-blue cursor-pointer"
        >
          Ver Mais
        </button>
      </div>
    </div>
  )
}

export default ContentCard
