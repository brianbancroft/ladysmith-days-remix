export function SponsorBronze({
  imageClassname = '',
  text,
  name,
  specialEvent,
}: any) {
  return (
    <article className="my-4">
      <div className="flex h-48 items-center justify-center overflow-hidden border-4 border-emerald-600 px-8 py-4 shadow-xl">
        {text ? (
          <div className="text-2xl font-semibold text-emerald-400">{name}</div>
        ) : (
          <div
            className={
              'my-1 flex h-full w-full justify-center bg-contain bg-center bg-no-repeat px-12 py-6 ' +
              imageClassname
            }
          />
        )}
      </div>
    </article>
  )
}
