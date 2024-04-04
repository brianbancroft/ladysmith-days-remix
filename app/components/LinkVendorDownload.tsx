import DownloadIcon from './DownloadIcon'
type Props = {
  pdfDocument: string
  label: string
  bgImage: string
  soldOut?: boolean
}

function LinkVendorDownload(props: Props) {
  const { pdfDocument, label, bgImage, soldOut = false } = props

  const LinkWrapper = ({ children }) =>
    soldOut ? (
      <div className="cursor-not-allowed select-none">{children}</div>
    ) : (
      <a className="" href={pdfDocument} target="_blank" rel="noreferrer">
        {children}
      </a>
    )

  return (
    <LinkWrapper>
      <div
        className={`
                group
                flex
                h-36 flex-col
                justify-end
                bg-gray-300 bg-cover
                text-lg
                md:h-48 ${bgImage} bg-center
              `}
      >
        <div
          className={`
                  flex h-36
                  flex-col justify-end
                  bg-white
                  md:h-48
                  ${soldOut ? 'bg-opacity-40' : 'bg-opacity-20'}
                  bg-opacity-30
                  transition
                  duration-300
                  ease-in-out
                  ${soldOut ? 'hover:bg-opacity-80' : 'hover:bg-opacity-0'}
                `}
        >
          <div
            className="
                    flex
                    w-full
                    items-center
                    justify-between
                    bg-yellow-400
                    pr-4
                    text-purple-700
                    group-hover:text-purple-500
                  "
          >
            <p className="px-4 py-2 text-xl font-bold">{label}</p>

            <p>
              {soldOut ? (
                <span className="group-hover:text-bold italic text-gray-600 group-hover:text-red-600 group-hover:underline">
                  Booked for {new Date().getFullYear()}
                </span>
              ) : (
                <DownloadIcon />
              )}
            </p>
          </div>
        </div>
      </div>
    </LinkWrapper>
  )
}

export default LinkVendorDownload
