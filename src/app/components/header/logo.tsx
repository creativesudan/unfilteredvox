'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';


const Logo = () => {
  return (
        <Link key={'logo'} href={`/`}>
            <span className="sr-only">unfiltered Vox</span>
            <img src="/logo.png" alt="Next.js Logo" className="h-14"/>
        </Link>
  )
}

export default Logo
