export function SponsorSilver({
  imageClassname,
  specialEvent,
  text,
  name,
}: any) {
  return (
    <article className="my-4">
      <div className="h-52 overflow-hidden border-4 border-purple-700 px-8 py-4 drop-shadow-xl">
        {/* {specialEvent && <FlagSoapbox />} */}
        {text ? (
          <div className="font-heading mt-12 text-2xl font-semibold text-purple-600">
            {name}
          </div>
        ) : (
          <div
            className={
              'my-1 flex h-full w-full justify-center bg-contain bg-center bg-no-repeat ' +
              imageClassname
            }
          ></div>
        )}
      </div>
    </article>
  )
}
