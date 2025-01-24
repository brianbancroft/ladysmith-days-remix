import { Link } from '@remix-run/react'

function SectionOurPlan() {
  return (
    <section
      id="plan-content"
      className="mx-auto mb-12 grid max-w-[1200px] grid-cols-1 gap-2 bg-blue-600 p-4 pb-8 shadow-xl md:grid-cols-2"
    >
      <div className="h-full rounded-t bg-lime-300 p-4 text-blue-700 md:rounded-none md:border-l-8 md:border-l-lime-700 md:px-12 md:py-8">
        <h2 className="my-3 text-3xl font-semibold">Our Plan</h2>
        <p className="my-3 text-lg lg:text-xl">
          The Ladysmith Celebration Society is planning all facets of our event.
          For 2024. This year we are planning for a two-day event at Transfer
          Beach along with a Soap Box Derby in Downtown Ladysmith.
        </p>
        <p className="italic">
          (On Saturday night, we will be introducing something new and exciting
          for the first time...)
        </p>
        <p className="my-3 text-lg lg:text-xl">
          On Sunday night, we will be having a concert and fireworks at Transfer
          Beach like last year, and we expect it to be a blast.
        </p>
      </div>
      <div className="text-gray-800">
        <Link to="/volunteer/">
          <div
            className="text-
                  lg group group h-36 bg-call-homepage-volunteer bg-cover bg-no-repeat transition-all duration-500  
                    hover:bg-center"
          >
            <div
              className="
                    
                    flex
                    h-36 flex-col
                    justify-end
                    bg-white bg-opacity-70
                    transition

                    ease-in-out
                    group-hover:bg-opacity-20
                  "
            >
              <div className="bg-blue-700 px-4 py-2 text-lime-400 transition ease-in-out group-hover:text-orange-300">
                <p className="text-3xl">Volunteer with us</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="grid grid-cols-2 gap-x-2 md:grid-cols-1 md:gap-x-0">
          <Link to="/sponsor/">
            <div
              className="
                    group
                    mt-2
                    flex
                    h-36
                    flex-col
                    justify-end bg-gray-200
                    bg-call-homepage-sponsor
                    bg-cover
                    bg-top
                    text-lg
                    transition-all
                    duration-1000
                    hover:bg-center
                  "
            >
              <div
                className="
                group
                      flex
                      h-36
                      cursor-pointer flex-col
                      justify-end
                      bg-white bg-opacity-70
                      transition
                      duration-300
                      ease-in-out
                      hover:bg-opacity-20
                    "
              >
                <div className="bg-blue-700 px-4 py-2 text-lime-400 transition ease-in-out group-hover:text-orange-300">
                  <p className="text-3xl">Sponsor our Events</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/vendor/">
            <div
              className="
              pointer
                    mt-2
                    flex
                    h-36
                    cursor-pointer
                    flex-col justify-end
                    bg-gray-300
                    bg-call-homepage-vendor bg-cover
                    bg-center
                    text-lg
                    duration-1000
                    hover:bg-top
                  "
            >
              <div
                className="
                group
                      flex
                      h-36
                      cursor-pointer flex-col
                      justify-end
                      bg-white bg-opacity-70
                      transition
                      duration-300
                      ease-in-out
                      hover:bg-opacity-20
                    "
              >
                <div className="bg-blue-700 px-4 py-2 text-lime-400 transition ease-in-out group-hover:text-orange-300">
                  <p className="text-3xl">Sell Merch</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionOurPlan
