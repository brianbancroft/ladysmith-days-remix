type ContainerProps = {
  children: React.ReactNode
  darkBackground?: boolean
}

const Container = ({ children, darkBackground }: ContainerProps) =>
  darkBackground ? (
    <div className="h-72 overflow-hidden border-4 border-sky-700 bg-sky-300 px-12 py-10 shadow-xl drop-shadow-xl">
      {children}
    </div>
  ) : (
    <div className="h-72 overflow-hidden border-4 border-sky-700 px-12 py-10 shadow-xl drop-shadow-xl">
      {children}
    </div>
  )

export const SponsorGold = ({
  imageClassname,
  copy,
  name,
  text,
  darkBackground = false,
}: any) => {
  return (
    <div className="my-4 p-4">
      <Container darkBackground={darkBackground}>
        {/* {specialEvent && <FlagSoapbox />} */}
        <a href="#" className="my-6 h-72">
          {text ? (
            <div className="mt-12 text-2xl font-semibold text-sky-600">
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
        </a>
      </Container>
      {copy && (
        <div className=" bg-sky-500 p-4 font-semibold text-white">
          <p className="mx-auto max-w-prose">{copy}</p>
        </div>
      )}
    </div>
  )
}
