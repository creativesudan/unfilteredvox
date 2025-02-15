'use client'
import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';


const language = [
    { label: 'English', href: '#' },
    { label: 'Hindi', href: '#' },
    { label: 'Punjabi', href: '#' }
  ]
  


const LanguageDropdown = () => {
   

  return (

<>
        <Menu as="div" className="relative inline-block text-left">
        <div>

        <MenuButton className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="text-xs font-bold uppercase text-gray-600 dark:text-gray-300">En</span>
        </MenuButton>
        </div>

        <MenuItems
            transition
            className="duration-200 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
            <div className="py-1">
            {language.map((e, index) => (
                <MenuItem key={index}>
                    <a href="#" className="font-semibold hover:bg-slate-100 block px-4 py-2 text-sm text-gray-700">{e.label}</a>
                </MenuItem>
            ))}
            </div>
        </MenuItems>
        </Menu>
        </>
  )
}

export default LanguageDropdown
