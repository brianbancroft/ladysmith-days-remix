import { type ActionFunctionArgs, redirect } from '@remix-run/node'
import { type MetaFunction } from '@remix-run/react'
import FormContactGeneral from '~/components/FormContactGeneral'
import PageJumbotron from '~/components/PageJumbotron'
import SectionSponsorList from '~/components/SectionSponsorList'
import { sendEmail } from '~/server/sendEmail.server'

export const meta: MetaFunction = () => {
  return [
    { title: 'Sponsor Ladysmith Days' },
    {
      name: 'description',
      content: 'Help make Ladysmith Days a weekend to celebrate!',
    },
  ]
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = new URLSearchParams(await request.text())
  const name = String(formData.get('name'))
  const email = String(formData.get('email'))
  const message = String(formData.get('message'))

  await sendEmail({ name, email, message, page: 'Sponsor' })

  return redirect('/?sent=true')
}

function SponsorPage() {
  return (
    <main className="container mx-auto pt-12">
      <PageJumbotron
        imageClass="bg-header-sponsor"
        title="Help sponsor a free weekend for our town"
        subtitle="The most important part of Ladysmith Days is that it's a free event for the whole family. There is no admission and it wouldn't happen without support from the local sponsors."
        slogan="Help support a fun weekend"
      />

      <section className="w-full  text-white  md:grid md:grid-cols-2 md:gap-x-4">
        <div className="container mx-auto bg-rose-500 px-12 py-6 text-yellow-300 lg:px-24">
          <h2 className="py-2 text-xl font-bold md:text-2xl lg:text-3xl">
            There are many ways to support us
          </h2>
          <p className="my-2">
            The organizations which support Ladysmith Days can support in
            several ways. Some donate money, which is used for the activities
            and events. Other companies donate by loaning equipment or providing
            signage. Others lead activities or support their employees who want
            to volunteer.
          </p>

          <p className="my-2">
            All contributions are welcome. If you wish to assist Ladysmith Days,
            it all starts with a conversation. The Ladysmith Celebrations
            Society is happy to find out the best way your team can be a part of
            the event.
          </p>
        </div>
        <div className="bg-fireworks bg-cover bg-center" />
      </section>

      <section className="py-6">
        <div className="container mx-auto">
          <div
            className="
                my-2
                flex
                h-32
                items-center
                justify-center
                bg-slate-50
                px-4
                py-4
                shadow
                
                

              "
          >
            <h2 className="mx-auto w-2/3 text-2xl">
              Ladysmith Days could not happen without the help of our community
              partners for 2024:
            </h2>
          </div>

          <SectionSponsorList />
        </div>
      </section>

      <section
        id="contact-us"
        className="mt-4 flex items-center justify-center bg-cyan-400 p-7 text-blue-600 shadow-2xl drop-shadow-2xl"
      >
        <FormContactGeneral
          description="Talk to us to see how Ladysmith Days can be a way to help your organization or business give back to the town"
          route="/sponsor"
        />
      </section>
    </main>
  )
}

export default SponsorPage
