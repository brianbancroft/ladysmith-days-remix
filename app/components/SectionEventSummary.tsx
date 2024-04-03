type Props = {
  eventOver?: boolean
}

function SectionEventSummary(props: Props) {
  const { eventOver } = props

  return (
    <div className="m-4 rounded-sm border-4 border-sky-600 bg-sky-100 p-6 text-blue-700">
      <div className="">
        <h2 className="font-heading text-center text-xl font-bold md:text-3xl">
          {eventOver
            ? 'Thank you for a great event'
            : ' A free and fun weekend'}
        </h2>
        <p className="mx-auto mt-2 max-w-prose text-sm md:text-base">
          Ladysmith Days celebrates of our town by giving everyone something to
          do over the long weekend and showcasing the best that Ladysmith has to
          offer.
        </p>
      </div>
    </div>
  )
}

export default SectionEventSummary
