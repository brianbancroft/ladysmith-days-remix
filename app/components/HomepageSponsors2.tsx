function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function HomepageSponsors2() {
  return (
    <div id="sponsors" className="mx-auto my-3 w-full md:w-5/6">
      <div className="grid grid-cols-3 gap-2 md:h-52">
        <a
          href="https://www.ladysmith.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-element sponsor-link mt-4 h-3/4 bg-gray-200 p-2"
        >
          <div
            className={classNames(
              'h-full w-full justify-center  bg-contain bg-center bg-no-repeat px-12 py-6 md:flex ',
              `bg-sponsor-homepage-4`,
            )}
          ></div>
        </a>

        <a
          href="https://www.ldcu.ca/Personal/"
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-element sponsor-link  bg-gray-200 p-2 px-4"
        >
          <div
            className={classNames(
              'flex h-full w-full justify-center  bg-contain bg-center bg-no-repeat px-12 py-6',
              `bg-sponsor-homepage-5`,
            )}
          ></div>
        </a>
        <a
          href="https://www.ladysmithcofc.com/portfolio/saltair-marine-services-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className=" sponsor-element sponsor-link mt-4 h-3/4 bg-gray-200 p-4"
        >
          <div
            className={classNames(
              'h-full  w-full justify-center  bg-contain bg-center bg-no-repeat px-12 py-6 md:flex',
              `bg-sponsor-homepage-6`,
            )}
          ></div>
        </a>
      </div>
    </div>
  )
}
