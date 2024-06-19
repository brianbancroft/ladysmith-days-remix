type Props = {
  eventOver?: boolean
}

function SectionEventSummary(props: Props) {
  const { eventOver } = props

  return (
    <div className=" bg-sky-400 py-6 text-blue-700 shadow-2xl">
      <div className="">
        <h2 className="text-center font-heading text-xl font-bold md:text-5xl">
          {eventOver
            ? 'Thank you for a great event'
            : ' A free and fun weekend'}
        </h2>
        <p className="mx-auto mt-2 max-w-prose text-sm md:text-xl">
          Ladysmith Days celebrates of our town by giving everyone something to
          do over the long weekend and showcasing the best that Ladysmith has to
          offer.
        </p>
      </div>
    </div>
  )
}

export default SectionEventSummary
