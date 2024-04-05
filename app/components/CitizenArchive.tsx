type Props = {
  year: number | string
  name: string
}

function CitizenArchive(props: Props) {
  const { year, name } = props

  return (
    <div className="bg-blue-800 px-2 py-4 text-lg text-white md:text-center">
      {year} - {name}
    </div>
  )
}

export default CitizenArchive
