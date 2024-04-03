import { Icon } from '@iconify/react'

const SectionSocialContact = () => {
  return (
    <a
      href="//www.facebook.com/LadysmithDays"
      target="_blank"
      rel="noopener noreferrer"
    >
      <section
        id="keep-in-touch"
        className="
            my-4
            flex
            flex-col
            bg-blue-800
            p-7
            text-white md:w-11/12 md:flex-row
            md:rounded-br-full md:rounded-tr-full
            md:pr-0
          "
      >
        <div
          className="
              w-48
              md:pl-8
            "
        >
          <div className="group my-2 w-4/5 px-4 py-3 text-white md:w-1/4 ">
            <div className="flex">
              <div className="rounded-sm border-2 p-2 transition-all duration-500 group-hover:bg-blue-500">
                <Icon icon="cib:facebook-f" width={60} />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-prose md:w-3/5">
          <div className="flex items-center transition ease-in-out hover:text-orange-500">
            <h1 className="font-heading my-3 font-sans text-xl md:text-4xl">
              Keep up to date
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="ml-3 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </div>
          <p className="text-sm">
            While this website will contain the finalized schedule, we will be
            releasing information about this year&lsquo;s event over Facebook.
            There, you can talk to us through Facebook Messenger, and see
            updates.
          </p>
        </div>
      </section>
    </a>
  )
}

export default SectionSocialContact
