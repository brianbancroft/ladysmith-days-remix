type Props = {
  year: number | string
  name: string
  cancelled: boolean
  image?: string
}

function CitizenRecent(props: Props) {
  const { year, name, cancelled, image } = props

  return (
    <div
      className={`
              flex
              h-36 flex-row
              items-center
              justify-between
              rounded-lg
              bg-blue-100
              px-4
              shadow-lg
              lg:px-8
             
            `}
    >
      <div>
        <h3 className="mb-1 font-heading text-2xl font-bold">{year} -</h3>
        <h3
          className={`mb-1 ${
            cancelled ? 'text-md italic text-gray-400' : 'text-2xl font-bold'
          }`}
        >
          {name}
        </h3>
      </div>
      {image && (
        <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-300">
          <img src={image} width={96} height={96} />
        </div>
      )}
    </div>
  )
}

export default CitizenRecent
