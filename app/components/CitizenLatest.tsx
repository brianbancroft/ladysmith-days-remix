type Props = {
  year: number | string
  name: string
  copy: string
  image?: string
}

function CitizenLatest(props: Props) {
  const { year, name, copy, image } = props
  return (
    <div
      className="
            m-2
            flex
            flex-col
            items-center
            rounded
            bg-blue-100 p-6
            shadow-xl
            md:min-h-60
            md:w-10/12 md:flex-row
            md:rounded-l-full
            md:p-2
          "
    >
      <div className="p-4">
        <img className="h-48 w-48 rounded-full bg-gray-500" src={image} />
      </div>
      <div className="py-4 md:w-2/3 md:p-8 md:py-8">
        <h2 className="mb-4 font-heading text-2xl font-bold text-blue-800">
          {year} - {name}
        </h2>
        <div className="text-sm">
          <p className="mb-2">{copy}</p>
        </div>
      </div>
    </div>
  )
}

export default CitizenLatest
