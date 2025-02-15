'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classNames from 'classnames';

const Navlinks = [
    {label:'Dashboard', href: '/'},
    {label:'Issues', href: '/issues'}
]

const NavBar = () => {
    const currentPath = usePathname();
    console.log(currentPath);
  return (
    <nav className='flex space-x-6'>
        {Navlinks.map(e => 
            <Link key={e.href} href={e.href} 
            className={classNames({
                'text-blue-700 hover:text-blue-700' : currentPath == e.href,
                'text-slate-600 hover:text-slate-900' :  currentPath != e.href,
                'uppercase' : true
            })}
            // className={`${currentPath == e.href && 'text-blue-700 hover:text-blue-700'}  text-slate-600 hover:text-slate-900 `}
            
            >{e.label}</Link>
        )}
        
    </nav>
  )
}

export default NavBar
