import type { MetaFunction } from '@remix-run/node'
import logo from '~/assets/ladysmith-days-logo.png'
import FormContactGeneral from '~/components/FormContactGeneral'
import ScrollDownIndicator from '~/components/ScrollDownIndicator'
import SectionEventSummary from '~/components/SectionEventSummary'
import SectionOurPlan from '~/components/SectionOurPlan'
import SectionSocialContact from '~/components/SectionSocialContact'
import TimerClock from '~/components/TimerClock'

export const meta: MetaFunction = () => {
  return [
    { title: 'Ladysmith Days' },
    { name: 'description', content: 'Celerate with us' },
  ]
}

export default function Index() {
  return (
    <main className="w-full">
      <section className="" id="hero">
        <div
          id="introduction"
          className="
              bg-header-homepage
              flex h-screen
              flex-col
              justify-center bg-gray-500 bg-cover
              bg-no-repeat
            "
          style={{ backgroundPosition: '0 25%' }}
        >
          <div
            className="
            flex h-full
            flex-col
            items-center bg-blue-700
            bg-opacity-60
            p-4
            pt-12
            align-middle
            text-white
            md:align-baseline
          "
          >
            <img
              src={logo}
              className="my-12"
              alt="ladysmith days logo"
              height={300}
              width={350}
            />
            <h2 className="font-heading fade-in relative right-4 my-12 justify-center rounded-r-xl bg-white p-2 pl-8 text-5xl font-black text-blue-600 md:right-0 md:block md:bg-transparent md:p-0 md:pl-2 md:text-white">
              Celebrate Ladysmith
            </h2>
            <TimerClock />
            <h3 className="font-heading fade-in-delay my-4 mt-12 text-xl font-light italic opacity-0">
              august long weekend
            </h3>
          </div>
          <div className="relative ">
            <ScrollDownIndicator />
          </div>
        </div>

        <SectionEventSummary />
      </section>

      <div className="container mx-auto">
        {/* <SponsorsHomepage /> */}

        {/* Three variants:x
              1. The plan (early times)
              2. The schedule. (as soon as the schedule is available)
              3. The gratitude (TBD)
             */}

        {/* {scheduleVisible && <SectionSchedule />} */}
        <SectionOurPlan />

        {/* <SectionGratitude /> */}

        <SectionSocialContact />
      </div>

      <div className="my-2 grid h-52 grid-cols-1 gap-1 md:hidden">
        <a
          href="https://ladysmith.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-300 p-2 transition-all duration-500 hover:bg-gray-200"
        >
          <div className="bg-sponsor-homepage-1 my-1 flex h-full w-full justify-center bg-contain bg-center bg-no-repeat px-12 py-6"></div>
        </a>

        <a
          href="https://www.ladysmithkinsmen.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-300 p-4 transition-all duration-500 hover:bg-gray-200"
        >
          <div className="bg-sponsor-homepage-3 my-1  flex h-full w-full justify-center bg-contain bg-center bg-no-repeat px-12 py-6"></div>
        </a>
      </div>

      <section
        id="contact-us"
        className="flex items-center justify-center bg-cyan-300 px-4 py-7 text-blue-700 shadow-2xl drop-shadow-2xl"
      >
        <FormContactGeneral
          description="If you have any questions about the event, the best ways to get a hold of us are either through this contact form, or through Facebook"
          handleSubmit={() => {}}
        />
      </section>
    </main>
  )
}
