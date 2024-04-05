import './tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import {
  type ActionFunctionArgs,
  type LinksFunction,
  redirect,
} from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import Footer from '~/components/Footer'
import Nav from '~/components/Nav'
import DefaultErrorBoundary from '~/components/ui/error-boundary'
import iconsHref from '~/components/ui/icons/sprite.svg?url'
import { sendEmail } from './server/sendEmail.server'

export const links: LinksFunction = () => [
  { rel: 'prefetch', href: iconsHref, as: 'image' },
]

export async function action({ request }: ActionFunctionArgs) {
  const formData = new URLSearchParams(await request.text())
  const name = String(formData.get('name'))
  const email = String(formData.get('email'))
  const message = String(formData.get('message'))

  await sendEmail({ name, email, message, page: 'Homepage' })

  return redirect('/?sent=true')
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        <Nav />
        <ToastContainer />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  return <DefaultErrorBoundary />
}

export function HydrateFallback() {
  return <h1>Loading...</h1>
}
