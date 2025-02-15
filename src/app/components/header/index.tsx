'use client'
import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Styles from './style.module.css';
import Link from 'next/link';
import ContentNav from './content_nav';
import LanguageDropdown from './language';
import Logo from './logo';
import Container from '../styled/container';


const Header = () => {
    // const [user, setUser] = useState(1);
    
    // const [isOnline, setIsOnline] = useState(navigator.onLine);

    // useEffect(() => {
    //   const handleOnline = () => setIsOnline(true);
    //   const handleOffline = () => setIsOnline(false);
  
    //   // Add event listeners to detect online/offline changes
    //   window.addEventListener('online', handleOnline);
    //   window.addEventListener('offline', handleOffline);
  
    //   // Cleanup the event listeners on component unmount
    //   return () => {
    //     window.removeEventListener('online', handleOnline);
    //     window.removeEventListener('offline', handleOffline);
    //   };
    // }, []);

  return (
    <div>
        <header className=" inset-x-0 top-0 z-50 py-4">
            <Container>
                <nav aria-label="Global" className="flex items-center justify-between">
                    <div className="flex lg:flex-1 justify-between">
                        <Logo/>
                        <div className='flex space-x-6 items-center'>
                            <div>
                                <ContentNav/>
                            </div>
                            <LanguageDropdown/>
                        </div>
                    </div>
                </nav>
            </Container>
      </header>
    </div>
  )
}

export default Header
