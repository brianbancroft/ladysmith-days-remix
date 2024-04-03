import { Link } from '@remix-run/react'

function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 px-3 py-4 text-gray-50">
      <div className="container mx-auto">
        <ul className="mb-8 ml-5 list-disc">
          <li className="font-semibold">Ladysmith Celebrations Society</li>
          <li>
            <Link
              to="/citizen-of-the-year/"
              className="border-b-2 hover:border-yellow-400"
            >
              Citizen of the Year
            </Link>
          </li>
          <li>
            <Link to="/privacy/" className="border-b-2 hover:border-yellow-400">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className="mt-2 text-center text-xs">
          © {new Date().getFullYear()} Ladysmith Celebration Society
        </div>
      </div>
    </footer>
  )
}

export default Footer
