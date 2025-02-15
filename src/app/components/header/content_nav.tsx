'use client'
import React from 'react'
import Link from 'next/link';


const navigation = [
    { name: 'About us', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'Contact Us', href: '#' }
  ]
  

const ContentNav = () => {
  return (
    <ul className="hidden lg:flex lg:gap-x-2">
    {navigation.map((e) => (
        <Link key={e.name} href={`category`} className='duration-100 ease-out transition-all uppercase text-xs hover:text-white hover:bg-slate-500  border-white border py-1.5 px-3 rounded-lg'>{e.name}</Link>
    ))}
    </ul>                       
  )
}

export default ContentNav
