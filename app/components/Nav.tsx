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
          'hidden flex-row justify-evenly bg-blue-700/60 py-2 transition-all duration-300 md:flex',
          visible ? 'ml-12' : '-ml-[50vw]',
        )}
      >
        <Link to="/">home</Link>
        <Link to="/volunteer">volunteer</Link>
        <Link to="/vendor">vendor</Link>
        <Link to="/sponsor">sponsor</Link>
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
                text-ld-dark-blue 
                absolute
                -left-2
                top-[4.1rem]
                z-40 w-56 origin-top-right divide-y 
                divide-gray-100 rounded-r-md bg-white 
                shadow-lg ring-1 ring-black 
                ring-opacity-5 focus:outline-none 
              `}
            >
              <Menu.Item>
                {({ active }) => (
                  <div className="flex items-center">
                    <Link to="/" style={{ color: 'darkblue' }}>
                      home
                    </Link>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className="flex items-center">
                    <Link to="/volunteer" style={{ color: 'darkblue' }}>
                      volunteer
                    </Link>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div className="flex items-center">
                    <Link to="/vendor" style={{ color: 'darkblue' }}>
                      vendor
                    </Link>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div className="flex items-center">
                    <Link to="/sponsor" style={{ color: 'darkblue' }}>
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
