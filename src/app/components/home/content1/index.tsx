'use client'; 

import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Styles from '../../style.module.css';
import Hotnews from './hotnews';
import Categorynews from './categorynews';


const Content1 = () => {

  return (
        <div className={Styles.container}>
            <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-10'>
                <div className='col-span-2'>
                    <div className='flex justify-between items-center mb-6'>
                        <h1 className='font-bold text-xl'>Hot Right Now!</h1>
                        <button type="button" className="text-black bg-gray-100 uppercase  hover:text-white hover:bg-slate-700 font-semibold border border-black border-2 rounded-xl text-sm px-6 py-3">View All</button>
                    </div>     

                    <div>
                        <Hotnews limit={5}/>
                    </div>

                    <div className='mt-16'>
                        <div className='flex justify-between mb-6'>
                            <h1 className='font-bold text-xl'>Read By Category</h1>
                        </div>           
                        <div>
                            <Categorynews limit={2}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex justify-between mb-6'>
                        <h1 className='font-bold text-xl'>Popular Headlines</h1>
                    </div>   
                    <Categorynews limit={1}/>
                </div>
            </div>
        </div>
    )
}

export default Content1
