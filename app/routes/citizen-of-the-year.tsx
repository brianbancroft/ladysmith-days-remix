import {
  type ActionFunctionArgs,
  type MetaFunction,
  redirect,
} from '@remix-run/node'
import CitizenArchive from '~/components/CitizenArchive'
import CitizenLatest from '~/components/CitizenLatest'
import CitizenRecent from '~/components/CitizenRecent'
import FormContactGeneral from '~/components/FormContactGeneral'
import PageJumbotron from '~/components/PageJumbotron'
import {
  archivedRecipients,
  latestRecipient,
  recentRecipients,
} from '~/data/citizenOfTheYear'
import { sendEmail } from '~/server/sendEmail.server'

export async function action({ request }: ActionFunctionArgs) {
  const formData = new URLSearchParams(await request.text())
  const name = String(formData.get('name'))
  const email = String(formData.get('email'))
  const message = String(formData.get('message'))

  await sendEmail({ name, email, message, page: 'Citizen of the Year' })

  return redirect('/?sent=true')
}

export const meta: MetaFunction = () => [
  {
    title: 'Citizen of the Year - Ladysmith Days',
    description: "Nominate Ladysmith's citizen fo the year!",
  },
]

const acceptingSubmissions = true

const CitizenOfTheYearPage = () => {
  return (
    <>
      <main className="container mx-auto pt-12">
        <PageJumbotron
          imageClass="bg-header-coty"
          title="The award"
          subtitle="The Citizen of the Year Award is presented for outstanding Community Service over a period of time. The service must be voluntary and does not include service where there has been a connection to normal employment. Businesses, organizations and service groups are welcome to nominate individuals in recognition of their volunteer service."
          slogan="Citizen of the year"
        />

        <section
          id="citizen-of-the-year-latest"
          className="mb-6 mt-2 flex flex-row justify-end"
        >
          <CitizenLatest
            year={latestRecipient.year}
            name={latestRecipient.name}
            image={latestRecipient.image}
            copy={latestRecipient.copy}
          />
        </section>

        {/* <section className="bg-purple-700 text-white mx-2 mb-6 px-6 py-4 justify-center flex">
            {acceptingSubmissions ? (
              <a
                href="#contact-us"
                className="pointer hover:text-orange-300 duration-300 ease-in-out underline text-2xl font-bold "
              >
                Do you know the next citizen of the year?
              </a>
            ) : (
              <p className="text-lg">
                Thank you for your submissions! We will announce the winner on
                August 6!
              </p>
            )}
          </section> */}

        <section id="citizen-of-the-year-recent" className="mx-2 my-2 lg:px-12">
          <div className="mx-0 grid grid-cols-1 gap-4 md:mx-6 md:grid-cols-2">
            {recentRecipients.map(recipient => (
              <CitizenRecent
                key={`recipient-${recipient.name.split(' ').join('-')}`}
                year={recipient.year}
                name={recipient.name}
                cancelled={recipient.cancelled ?? false}
                image={recipient.image}
              />
            ))}
          </div>
        </section>
        <section
          id="citizen-of-the-year-archive"
          className="my-8 flex justify-center"
        >
          <div
            className="
            grid w-full
            grid-cols-1
            gap-x-2 gap-y-2
            md:grid-cols-2
            xl:w-5/6
          "
          >
            {archivedRecipients.map(recipient => (
              <CitizenArchive
                key={`recipient-${recipient.name.split(' ').join('-')}`}
                year={recipient.year}
                name={recipient.name}
              />
            ))}
          </div>
        </section>
        {acceptingSubmissions && (
          <section
            id="contact-us"
            className="flex items-center justify-center bg-blue-50 p-7 shadow-2xl drop-shadow-2xl"
          >
            <FormContactGeneral
              title="Nominate the next Citizen of the Year"
              description="If there is a volunteer you believe has been contributing to the
                community outside their place of work, this is their chance to
                be recognized. Give us a few words about this excellent citizen, and we will get in touch with you. Nominations are accepted until June 15 of each
                year."
              route="/citizen-of-the-year"
            />
          </section>
        )}
      </main>
    </>
  )
}

export default CitizenOfTheYearPage
