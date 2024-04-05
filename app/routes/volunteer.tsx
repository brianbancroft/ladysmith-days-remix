import type { ActionFunctionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import PageJumbotron from '~/components/PageJumbotron'
import { sendEmail } from '~/server/sendEmail.server'

export async function action({ request }: ActionFunctionArgs) {
  const formData = new URLSearchParams(await request.text())
  const name = String(formData.get('name'))
  const email = String(formData.get('email'))
  const message = String(formData.get('message'))

  await sendEmail({ name, email, message, page: 'Volunteer Page' })

  return {
    props: {},
  }
}

const VolunteerSponsors = () => (
  <section id="sponsors" className="my-3">
    <div className="pl-2 text-xs italic">Brought to you by:</div>
    <div className="grid gap-2 md:h-52 md:grid-cols-3">
      <a
        href="https://606.cupe.ca/"
        target="_blank"
        rel="noopener noreferrer"
        className="sponsor-element sponsor-link p-2"
      >
        <div className="my-1 flex h-full w-full justify-center bg-sponsor-volunteer-1 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
      </a>

      <a
        href="https://pharmasave.com/ladysmith/"
        target="_blank"
        rel="noopener noreferrer"
        className="sponsor-element sponsor-link  p-2 px-4"
      >
        <div className="my-1 flex  h-full w-full justify-center bg-sponsor-volunteer-2 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
      </a>
      <a
        href="https://www.saveonfoods.com/ladysmith/"
        target="_blank"
        rel="noopener noreferrer"
        className=" sponsor-element sponsor-link p-4"
      >
        <div className="my-1 flex  h-full w-full justify-center bg-sponsor-volunteer-3 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
      </a>
    </div>
  </section>
)

function Volunteer() {
  return (
    <main className="container mx-auto py-12">
      <div id="modalDisplay" className="hidden">
        <section
          className="
            fixed
            z-50
            flex h-full
            w-full flex-col
            justify-center
            bg-gray-700
            bg-opacity-60
            p-4
            align-middle
          "
        ></section>
      </div>
      <PageJumbotron
        imageClass="bg-header-volunteer"
        title="Come Celebrate With Us"
        // subtitle={`Ladysmith Days is a casual organization that is active during
        //       the spring-summer seasons. Our volunteers have differing
        //       levels of commitment. Ladysmith Days is volunteer-run and is
        //       thankful to everyone that helps out.`}
        slogan="We are Volunteer-Driven"
      />

      <div className="container mx-auto mt-8 md:mt-0">
        {/* <SelectorVolunteerPositions /> */}
      </div>
      <section
        id="contact-us"
        className="bg-pattern-folds my-6 mt-4 flex items-center justify-center rounded  border-2 p-7 text-blue-600 shadow-2xl  drop-shadow-2xl md:mt-6"
      >
        {' '}
        <div className="max-w-prose rounded border border-blue-600 bg-white p-3">
          <h1 className="font-sans my-2 ml-2 font-heading text-2xl font-semibold">
            Want to help? Reach out
          </h1>
          <p className="ml-2 py-2">
            Ladysmith Days is a casual organization. Our volunteers are
            dedicated to putting on a fun, free weekend for familes across
            Ladysmith. We differ from other events in that our volunteer
            positions are not set. There is a place here for you if you want to
            help.
          </p>
          <p className="ml-2">
            To get started <em>the easiest way to begin is right here</em>. Talk
            to us. Let us know a little about you and we will bring you into our
            next meeting, or at the event.
          </p>
          <Form
            action="/volunteer"
            method="post"
            className="mt-3 flex flex-col"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              className="m-2 border border-blue-600 p-2"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="m-2 border border-blue-600 p-2"
            />
            <textarea
              required
              name="message"
              placeholder="Tell us what you think..."
              className="m-2 border border-blue-600 p-2"
            ></textarea>
            <button
              type="submit"
              value="submit"
              className="m-2 bg-blue-800 p-2 font-semibold text-white"
            >
              Submit
            </button>
          </Form>
        </div>
      </section>
      <VolunteerSponsors />
    </main>
  )
}

export default Volunteer
