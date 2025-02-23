function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function HomepageSponsors() {
  return (
    <div id="sponsors" className="mx-auto my-3 w-full md:w-5/6">
      <div className="grid grid-cols-3 gap-2 md:h-52">
        <a
          href="https://www.ladysmith.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-element sponsor-link bg-gray-200 p-2"
        >
          <div
            className={classNames(
              'my-1 h-full w-full justify-center  bg-contain bg-center bg-no-repeat px-12 py-6 md:flex ',
              `bg-sponsor-homepage-1`,
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
              'my-1 flex h-full w-full justify-center  bg-contain bg-center bg-no-repeat px-12 py-6',
              `bg-sponsor-homepage-2`,
            )}
          ></div>
        </a>
        <a
          href="https://www.ladysmithcofc.com/portfolio/saltair-marine-services-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className=" sponsor-element sponsor-link bg-gray-200 p-4"
        >
          <div
            className={classNames(
              'my-1  h-full  w-full justify-center  bg-contain bg-center bg-no-repeat px-12 py-6 md:flex',
              `bg-sponsor-homepage-3`,
            )}
          ></div>
        </a>
      </div>
    </div>
  )
}
