

import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';

const navigation = [
    { name: 'About us', href: '#' },
    { name: 'Privacy policy', href: '#' }
  ]

const Hotnews = (props:any) => {
    const {limit} = props;
  return (
        <>
        <div className={`grid grid-cols-${limit} gap-4`}>
            {navigation.map((e, index) => (
                <Link key={index} href={`users/new`} >
                    <img src='https://static.toiimg.com/photo/msid-90672220/90672220.jpg' className='object-cover object-center w-full h-60 rounded-lg'/>
                    <div className='mt-3'>
                        <p className='text-xs'>Entertainment</p>
                        <h4 className='text-xl font-bold mt-1 mb-3'>7 Bollywood Actors Who Gave Up Stardom Way Too Early</h4>
                        <p className='text-xs'>by ISHAN JAIN</p>
                        <p className='text-xs text-slate-400 mt-0.5'>24 Dec 2024</p>
                    </div>
                </Link>
            ))}
        </div>       
        </>
    )
}

export default Hotnews
