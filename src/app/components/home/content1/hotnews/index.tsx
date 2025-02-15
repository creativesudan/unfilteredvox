

import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';

const navigation = [
    { name: 'About us', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'Contact Us', href: '#' }
  ]

const Hotnews = (props:any) => {
    const {limit} = props;
  return (
        <>
        <div className={`grid grid-cols-${limit} gap-4`}>
            {navigation.map((e, index) => (
                <Link key={index} href={`users/new`} >
                    <img src='https://static.toiimg.com/photo/msid-90672220/90672220.jpg' className='object-cover object-center w-full h-32 rounded-lg'/>
                    <h4 className='text-md font-bold mt-3'>Title</h4>
                    <p className='text-xs'>Caption of the news</p>
                </Link>
            ))}
        </div>       
        </>
    )
}

export default Hotnews
