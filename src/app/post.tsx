import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Head from "next/head";


const navigation = [
  { name: 'About us', href: '#' },
  { name: 'Privacy policy', href: '#' },
  { name: 'Contact Us', href: '#' }
]

export default function Home() {
  return (
    <main>
      
      <header className=" inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between">
          <div className="flex lg:flex-1 justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">unfiltered Vox</span>
              <img src="/logo.png" alt="Next.js Logo" className="h-14"/>
            </a>

            <div className='flex space-x-6'>
              <div>
                <ul className="hidden lg:flex lg:gap-x-2">
                  
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="rounded-lg py-1.5 px-3 hover:bg-orange-50 text-sm/6 font-semibold text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </ul>
              </div>

              <Menu as="div" className="relative inline-block text-left">
              <div>

              <MenuButton className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">En</span>
              </MenuButton>
            </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      English
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Hindi
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
              </Menu>
            </div>
            

          </div>
        </nav>
      </header>
      
      <h1 className="text-center text-xl font-extrabold">Post</h1>
    </main>
  );
}
