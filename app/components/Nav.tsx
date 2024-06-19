import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from '@remix-run/react'
import NavIcon from './NavIcon'

function classNames(...args: any[]) {
  let className = ''
  for (const arg of args) {
    className = className + `${arg} `
  }

  return className
}

function Nav() {
  const [visible, setVisible] = useState(false)

  return (
    <nav className="flex flex-row items-center bg-blue-700 p-2">
      <button onClick={() => setVisible(!visible)} className="hidden md:flex">
        <NavIcon open={visible} small />
      </button>

      <div
        id="navLinks-desktop"
        className={classNames(
          'text-blue hidden grid-cols-4 gap-x-6 rounded-r-full border-2 border-blue-400 bg-white px-8 py-2 capitalize text-blue-700 underline transition-all duration-700 md:flex',
          visible ? 'ml-12' : '-ml-[50vw]',
        )}
      >
        <Link to="/" className="font-medium uppercase">
          home
        </Link>
        <Link to="/volunteer" className="font-medium uppercase">
          volunteer
        </Link>
        <Link to="/vendor" className="font-medium uppercase">
          vendor
        </Link>
        <Link to="/sponsor" className="font-medium uppercase">
          sponsor
        </Link>
        <Link to="/citizen-of-the-year" className="font-medium uppercase">
          citizen of the year
        </Link>
      </div>

      {/* Mobile View */}
      <div className="flex items-center justify-between md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center  px-4 py-4  font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <button onClick={() => setVisible(!visible)}>
                <NavIcon open={visible} small />
              </button>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={`
                absolute 
                -left-2
                top-[4.1rem]
                z-40
                w-56 origin-top-right divide-y divide-gray-100 
                rounded-r-md bg-white text-ld-dark-blue 
                shadow-lg ring-1 ring-black 
                ring-opacity-5 focus:outline-none 
              `}
            >
              <Menu.Item>
                {({ active, close }) => (
                  <div className="flex items-center">
                    <Link
                      onClick={() => {
                        setVisible(false)
                        close()
                      }}
                      to="/"
                      style={{ color: 'darkblue' }}
                      className="p-3 text-2xl"
                    >
                      home
                    </Link>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active, close }) => (
                  <div className="flex items-center">
                    <Link
                      onClick={() => {
                        setVisible(false)
                        close()
                      }}
                      to="/citizen-of-the-year"
                      style={{ color: 'darkblue' }}
                      className="p-3 text-2xl"
                    >
                      citizen of the year
                    </Link>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active, close }) => (
                  <div className="flex items-center">
                    <Link
                      onClick={() => {
                        setVisible(false)
                        close()
                      }}
                      to="/volunteer"
                      style={{ color: 'darkblue' }}
                      className="p-3 text-2xl"
                    >
                      volunteer
                    </Link>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active, close }) => (
                  <div className="flex items-center">
                    <Link
                      onClick={() => {
                        setVisible(false)
                        close()
                      }}
                      to="/vendor"
                      style={{ color: 'darkblue' }}
                      className="p-3 text-2xl"
                    >
                      vendor
                    </Link>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active, close }) => (
                  <div className="flex items-center">
                    <Link
                      onClick={() => {
                        setVisible(false)
                        close()
                      }}
                      to="/sponsor"
                      style={{ color: 'darkblue' }}
                      className="p-3 text-2xl"
                    >
                      sponsor
                    </Link>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  )
}

export default Nav
