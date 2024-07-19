import { useCallback, useEffect, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { toast } from 'react-toastify'
import type { MetaFunction } from '@remix-run/node'
import { Link, useLocation } from '@remix-run/react'
import logo from '~/assets/ladysmith-days-logo.png'
import { HomepageSponsors } from '~/components/HomepageSponsors'
import { HomepageSponsors2 } from '~/components/HomepageSponsors2'
import ScrollDownIndicator from '~/components/ScrollDownIndicator'
import SectionEventSummary from '~/components/SectionEventSummary'
// import SectionOurPlan from '~/components/SectionOurPlan'
import { SectionSchedule } from '~/components/SectionSchedule'
import SectionSocialContact from '~/components/SectionSocialContact'
import TimerClock from '~/components/TimerClock'

export const meta: MetaFunction = () => {
  return [
    { title: 'Ladysmith Days - August 3,4 2024' },
    {
      property: 'og:title',
      content: 'Ladysmith Days - August 3,4 2024',
    },
    {
      name: 'description',
      content:
        'Ladysmith Days is a two-day event in Ladysmith, BC featuring free family fun, live music, food, and more',
    },
  ]
}

export default function Index() {
  const location = useLocation()
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return
    }

    const token = await executeRecaptcha('yourAction')
    setCaptchaToken(token)
  }, [executeRecaptcha])

  // useEffect that will execute out token setting callback function
  useEffect(() => {
    handleReCaptchaVerify()
  }, [handleReCaptchaVerify])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('sent') === 'true') {
      toast('Thank you! Your email was sent. We will get back to you soon.')
    }
  }, [location.search])

  return (
    <main className="w-full">
      <section className="bg-blue-700  pb-6" id="hero">
        <div
          id="introduction"
          className="
              flex
              h-screen flex-col
              justify-center
              bg-gray-500 bg-header-homepage-mobile bg-cover
              bg-center bg-no-repeat
              bg-origin-padding md:bg-header-homepage
            "
          style={{ backgroundPosition: '0 25%' }}
        >
          <div
            className="
            flex h-full
            flex-col
            items-center
            bg-blue-700 bg-opacity-50
            p-4
            py-12
            align-middle
          
            text-white
            md:align-baseline
          "
          >
            <img
              src={logo}
              className="
                fade-in 
                my-12 
                delay-1000
              "
              alt="ladysmith days logo"
              height={300}
              width={350}
            />
            <h2 className="fade-in relative right-4 my-6 justify-center rounded-r-xl bg-white p-2 pl-8 font-heading text-5xl font-black text-blue-600 md:right-0 md:my-12 md:block md:bg-transparent md:p-0 md:pl-2 md:text-white">
              Celebrate Ladysmith
            </h2>
            <TimerClock />
            <h3 className="fade-in-delay my-4 mt-12 font-heading text-xl font-light italic opacity-0">
              August 3-4, 2024
            </h3>
          </div>
          <div className="invisible relative bottom-5 md:visible">
            <ScrollDownIndicator />
          </div>
        </div>

        <SectionEventSummary />
        <nav className="flex justify-evenly pb-4 pt-6 md:flex-row">
          <Link
            to="/volunteer"
            className="btn btn-primary font-heading text-2xl text-ld-yellow md:text-4xl"
          >
            Volunteer
          </Link>
          <Link
            to="/sponsor"
            className="btn btn-primary font-heading text-2xl text-ld-yellow md:text-4xl"
          >
            Sponsor
          </Link>
        </nav>
        <HomepageSponsors />
      </section>

      <div className="w-full bg-blue-700 pb-6">
        {/* Three variants:x
              1. The plan (early times)
              2. The schedule. (as soon as the schedule is available)
              3. The gratitude (TBD)
             */}

        <SectionSchedule />
        <HomepageSponsors2 />

        {/* <SectionOurPlan /> */}

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
          <div className="my-1 flex h-full w-full justify-center bg-sponsor-homepage-1 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
        </a>

        <a
          href="https://www.ladysmithkinsmen.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-300 p-4 transition-all duration-500 hover:bg-gray-200"
        >
          <div className="my-1 flex  h-full w-full justify-center bg-sponsor-homepage-3 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
        </a>
      </div>
    </main>
  )
}
