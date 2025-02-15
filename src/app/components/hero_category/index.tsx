'use client'
import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Styles from '../style.module.css';
import Link from 'next/link';


const Hero = () => {
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
        <div className={Styles.container}>
            <div className='w-full max-w-[800px] mx-auto'>
                <h1 className='text-center font-bold text-5xl leading-tight mt-10'>Zodiac-Based Gifts So Spot-On, They’ll Think You’re Psychic!</h1>
            </div>

            <div className='mt-10'>



                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
                    <div className="grid gap-4 relative">
                        <div className='bottom-full absolute mb-10 w-full'>
                            <span className='text-[10px] text-orange-500'>Winter News</span>
                            <p className='mt-2 leading-4 text-xs max-w-24'>Rajat Dalal is on fire in the house of Biggboss</p>

                            <i className='absolute right-2 -bottom-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-10' viewBox="0 0 60.958 61.311">
                                    <g id="Speech_bubble" transform="translate(-31.043 -33.88)">
                                        <g id="Layer-24_2_">
                                        <g id="Group_93" data-name="Group 93">
                                            <g id="Group_92" data-name="Group 92">
                                            <path id="Union_2" data-name="Union 2" d="M-356.858-3060.125a21.614,21.614,0,0,1-9.918-6.666,27.52,27.52,0,0,1-5.483.886q-.834.05-1.666.051a27.148,27.148,0,0,1-9.105-1.565,27.3,27.3,0,0,1-9.04-5.342,27.292,27.292,0,0,1-6.377-8.342,27.213,27.213,0,0,1-2.783-10.515,27.2,27.2,0,0,1,1.515-10.772,27.283,27.283,0,0,1,5.341-9.041,27.291,27.291,0,0,1,8.342-6.377,27.224,27.224,0,0,1,10.515-2.784,27.226,27.226,0,0,1,10.772,1.516,27.285,27.285,0,0,1,9.04,5.342,27.3,27.3,0,0,1,6.377,8.341,27.227,27.227,0,0,1,2.783,10.516,27.5,27.5,0,0,1-.412,6.664,27.249,27.249,0,0,1-1.93,6.17,27.644,27.644,0,0,1-7.05,9.486c.767,1.526,2.9,5.319,5.884,7,5.92,3.327,8.527,3.449,8.688,3.452a.985.985,0,0,1,1.036.874,1.013,1.013,0,0,1-.826,1.11,54.451,54.451,0,0,1-8.877.793A25.357,25.357,0,0,1-356.858-3060.125Zm-8.75-8.4a19.517,19.517,0,0,0,2.549,2.647,18.34,18.34,0,0,0,6.755,3.833,30.215,30.215,0,0,0,9.949.555,46.186,46.186,0,0,1-4.68-2.325c-3.9-2.19-6.373-7.134-6.934-8.341l-.007-.009a1,1,0,0,1,.141-1.407,25.487,25.487,0,0,0,9.293-21.186,25.42,25.42,0,0,0-26.857-23.835,25.419,25.419,0,0,0-23.837,26.857,25.421,25.421,0,0,0,26.857,23.837,25.505,25.505,0,0,0,5.609-.969l.064-.016a1,1,0,0,1,.294-.044A1,1,0,0,1-365.608-3068.527Z" transform="translate(432.324 3154.521)" fill="#ff367c"/>
                                            </g>
                                            <path id="Path_104" data-name="Path 104" d="M55.272,61.267a3.007,3.007,0,1,1,3.007,3.007A3.007,3.007,0,0,1,55.272,61.267Z" fill="#ff367c"/>
                                            <path id="Path_105" data-name="Path 105" d="M43.861,61.44a3.007,3.007,0,1,1,3.007,3.007A3.007,3.007,0,0,1,43.861,61.44Z" fill="#ff367c"/>
                                            <path id="Path_106" data-name="Path 106" d="M66.683,61.44a3.007,3.007,0,1,1,3.007,3.007A3.007,3.007,0,0,1,66.683,61.44Z" fill="#ff367c"/>
                                        </g>
                                        </g>
                                    </g>
                                </svg>
                            </i>
                        </div>
                        <div className='relative cursor-pointer overflow-hidden rounded-xl'>
                            <div className='absolute bottom-0 left-0 text-center w-full z-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent'>
                                <div className='relative z-[1] pt-10 pb-3'>
                                    <span className='text-xs text-white'>Home</span>
                                    <h4 className='font-bold text-white'>Ghar Bhar</h4>
                                </div>
                            </div>
                            <img className="h-[180px] object-cover object-center w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                        </div>

                        <div className='top-full absolute mt-6'>
                            <i>
                                <svg className='w-8' id="quotation-right-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.648 42.424">
                                    <path id="Path_107" data-name="Path 107" d="M19.654,14.2v7.617a1.87,1.87,0,0,1-1.87,1.87c-3.685,0-5.69,3.78-5.969,11.241h5.969a1.871,1.871,0,0,1,1.87,1.87V52.879a1.87,1.87,0,0,1-1.87,1.87H1.871A1.871,1.871,0,0,1,0,52.879V36.8A41.314,41.314,0,0,1,1.07,27.04a23.47,23.47,0,0,1,3.321-7.722,16.211,16.211,0,0,1,5.643-5.157,16.067,16.067,0,0,1,7.75-1.834A1.872,1.872,0,0,1,19.654,14.2Zm24.124,9.488a1.87,1.87,0,0,0,1.87-1.87V14.2a1.87,1.87,0,0,0-1.87-1.87A15.531,15.531,0,0,0,30.385,19.32a23.448,23.448,0,0,0-3.322,7.723A41.291,41.291,0,0,0,25.994,36.8V52.881a1.871,1.871,0,0,0,1.87,1.87H43.778a1.871,1.871,0,0,0,1.87-1.87V36.8a1.87,1.87,0,0,0-1.87-1.87H37.893C38.168,27.466,40.144,23.686,43.778,23.686Z" transform="translate(0 -12.327)" fill="#1d242c"/>
                                </svg>
                            </i>
                            <p className='text-xs mt-3 leading-5'>Zodiac-Based Gifts So Spot-On, They’ll Think You’re Psychic!</p>
                            <span className='text-2xl font-medium relative top-4 after:bg-yellow-200 after:opacity-70 after:w-28 after:h-3 after:absolute after:left-0 after:bottom-1 after:-z-10'>Sneha Kalra</span>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='relative cursor-pointer overflow-hidden rounded-xl'>
                            <div className='absolute bottom-0 left-0 text-center w-full z-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent'>
                                <div className='relative z-[1] pt-10 pb-3'>
                                    <span className='text-xs text-white'>Home</span>
                                    <h4 className='font-bold text-white'>Ghar Bhar</h4>
                                </div>
                            </div>
                            <img className="h-[120px] object-cover object-center w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                        </div>
                        <div className='relative cursor-pointer overflow-hidden rounded-xl'>
                            <div className='absolute bottom-0 left-0 text-center w-full z-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent'>
                                <div className='relative z-[1] pt-10 pb-3'>
                                    <span className='text-xs text-white'>Home</span>
                                    <h4 className='font-bold text-white'>Ghar Bhar</h4>
                                </div>
                            </div>
                            <img className="h-[180px] object-cover object-center w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='relative cursor-pointer overflow-hidden rounded-xl'>
                            <div className='absolute bottom-0 left-0 text-center w-full z-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent'>
                                <div className='relative z-[1] pt-10 pb-3'>
                                    <span className='text-xs text-white'>Home</span>
                                    <h4 className='font-bold text-white'>Ghar Bhar</h4>
                                </div>
                            </div>
                            <img className="h-[400px] object-cover object-center w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='relative cursor-pointer overflow-hidden rounded-xl'>
                            <div className='absolute bottom-0 left-0 text-center w-full z-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent'>
                                <div className='relative z-[1] pt-10 pb-3'>
                                    <span className='text-xs text-white'>Home</span>
                                    <h4 className='font-bold text-white'>Ghar Bhar</h4>
                                </div>
                            </div>
                            <img className="h-[180px] object-cover object-center w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                        </div>
                        <div className='relative cursor-pointer overflow-hidden rounded-xl'>
                            <div className='absolute bottom-0 left-0 text-center w-full z-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent'>
                                <div className='relative z-[1] pt-10 pb-3'>
                                    <span className='text-xs text-white'>Home</span>
                                    <h4 className='font-bold text-white'>Ghar Bhar</h4>
                                </div>
                            </div>
                            <img className="h-[120px] object-cover object-center w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4 relative">


                        <div className='bottom-full absolute mb-10 w-full flex justify-center'>
                            <i>
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-24' viewBox="0 0 172.946 164.622">
                                <g id="_9648301_38767" data-name="9648301_38767" transform="translate(-163.309 -91.74)">
                                    <g id="Object" transform="translate(163.309 91.74)">
                                    <g id="Group_81" data-name="Group 81">
                                        <path id="Path_57" data-name="Path 57" d="M561.414,440.824a18.52,18.52,0,0,1-3.778-6.231c-.24,2.885,1.518,6.144,3.653,8.081,1.118,1.014,2.771,1.949,4.164,1.452a2.159,2.159,0,0,0,1.351-2.095C565.439,443.9,562.94,442.415,561.414,440.824Z" transform="translate(-470.62 -358.951)" fill="#acacac"/>
                                        <path id="Path_58" data-name="Path 58" d="M259.807,204.15c-11.407-6.143-22.335-6.807-30.771-1.868-10.064,5.892-15.757,16.792-15.984,29.746a69.679,69.679,0,0,0,.535,9.839,82.31,82.31,0,0,1-9.619,11.3,20.892,20.892,0,0,0-4.261,1.887c-.429.252-.864.531-1.365.88l-23.855,14.913c-11.2,6.558-14.547,21.748-7.456,33.861s21.974,16.632,33.125,10.1l2.452-1.312,22.957,24.077a7.244,7.244,0,0,0,9.1,1.374c.026-.015.053-.032.078-.049l6.092-4.079a4.392,4.392,0,0,0,1.518-1.75,4.319,4.319,0,0,0,.331-.535c2.275-4.354,2.38-4.876,2.435-5.156a4.379,4.379,0,0,0-1.941-4.578l-5.976-3.827a29.13,29.13,0,0,1-6.9-6.16l-8.006-9.845,2.308-1.234a20.059,20.059,0,0,0,1.874-.958,20.443,20.443,0,0,0,3.728-2.806,73.59,73.59,0,0,1,16.177-2.084,63.553,63.553,0,0,0,5.947,3.625c12.334,6.6,22.657,7.281,34.005.638,8.436-4.939,13.207-14.793,13.434-27.747.218-12.428-3.8-26.347-11.324-39.194S270.751,210.044,259.807,204.15Zm-23,68.056,12.481-9.2L235.122,269.4l7.005-5.578-8.735,3.2c-.077-.127-.154-.256-.23-.384l4.875-3.9-6.175,1.655q-.129-.231-.257-.462l3.888-3.169-5.048.989q-.133-.258-.264-.517l3.5-2.81-4.527.709c-.088-.187-.173-.374-.259-.562l3.316-2.66-4.2.659c-.077-.181-.155-.361-.231-.542l18.292-7.131a14.3,14.3,0,0,0,2.09,9.794,16.9,16.9,0,0,0,3.777,4.51l-14.889,9.336C236.969,272.425,236.889,272.317,236.81,272.207Zm22.449-9.916c-1.927,1.128-5.883-.7-8.478-5.137s-2.257-8.779-.329-9.908,5.883.7,8.478,5.137S261.187,261.162,259.26,262.291Zm-32.613-28.262c-1.046,1.561-2.109,3.114-3.25,4.61,1.615-3.789,3.582-7.437,5.559-11.057,2.6-4.756,5.417-9.423,8.441-13.934,1.046-1.56,2.11-3.114,3.252-4.609-1.612,3.791-3.581,7.438-5.557,11.058C232.5,224.853,229.669,229.518,226.647,234.028Zm-3.4-4.251a49.483,49.483,0,0,1,3.382-9.1,48.365,48.365,0,0,1,4.759-8.461,49.083,49.083,0,0,1-3.382,9.1A48.725,48.725,0,0,1,223.245,229.777Zm28.68,58.142,9.468.52-13.153-4.133,21.907-.377-24.94-3.479,19.33-3-17.979-.721L261.4,264.536a1.508,1.508,0,0,0,.211-.214c2.965-2.575,3.01-8.231-.06-13.473a17.772,17.772,0,0,0-2.365-3.183l15.7-13.366-19.36,10.55a9.209,9.209,0,0,0-2.293-.829l18.953-16.978q-1.5-2-3.115-3.912l-18.367,17.578,16-20.254a69.806,69.806,0,0,0-9.949-8.926c-.063-.046-.128-.09-.191-.136l-16.835,19.789,14.976-21.044c-1.555-.986-3.171-1.87-4.8-2.727,11.432,3.442,23.9,14.031,32.766,29.178,13.742,23.474,13.711,49.134-.068,57.2C274.259,298.675,262.754,296,251.925,287.919Zm-24.04,47.7c-.026-.032-.053-.063-.082-.093l-22.416-23.51.687-.368,5.082,3.89-2.822-5.1.9-.483,4.964,3.8-2.757-4.98.956-.511,4.846,3.709-2.691-4.861.685-.366,10.57,13a29.33,29.33,0,0,0,6.949,6.2l6.358,4.072a1.366,1.366,0,0,1,.024,2.284l-6.051,4.051A4.269,4.269,0,0,1,227.885,335.616Zm-6.665-31.008c2.45,2.669,4.771,5.461,7.088,8.246a42.835,42.835,0,0,0,5.084,5.351,59.961,59.961,0,0,0,5.748,4.1c1.836,1.224,4.144,2.36,4.4,4.806-.759-2.006-2.578-2.821-4.308-3.864a52.018,52.018,0,0,1-5.871-3.9c-3.7-2.978-6.495-6.993-9.3-10.78C223.1,307.26,222.141,305.946,221.22,304.608Zm-38.6-18.16a25.459,25.459,0,0,1,.622-14.14,19.9,19.9,0,0,0-1.288,2.3,24.85,24.85,0,0,0-1.975,13.446,25.458,25.458,0,0,1,.622-14.14,19.95,19.95,0,0,0-1.288,2.3,24.848,24.848,0,0,0-1.975,13.446,25.458,25.458,0,0,1,.622-14.14,19.934,19.934,0,0,0-1.288,2.3,24.852,24.852,0,0,0-1.975,13.446,25.458,25.458,0,0,1,.622-14.14,19.942,19.942,0,0,0-1.288,2.3,24.848,24.848,0,0,0-1.975,13.446,25.458,25.458,0,0,1,.622-14.14,19.949,19.949,0,0,0-1.288,2.3,24.855,24.855,0,0,0-1.975,13.446,25.456,25.456,0,0,1,.624-14.146,22.171,22.171,0,0,1,1.377-3.079,18.94,18.94,0,0,1,4.645-3.83l18.809-11.758a79.115,79.115,0,0,0-4.991,8.091,24.846,24.846,0,0,0-1.975,13.446,25.458,25.458,0,0,1,.622-14.14,19.947,19.947,0,0,0-1.288,2.3,24.85,24.85,0,0,0-1.975,13.446,25.457,25.457,0,0,1,.622-14.14,19.924,19.924,0,0,0-1.288,2.3A24.846,24.846,0,0,0,182.619,286.448Zm51.234,2.238a28.835,28.835,0,0,0,3.133,1.943,27.808,27.808,0,0,1-6.032-2.22,34.4,34.4,0,0,1-9.473-7.357,35.525,35.525,0,0,0,9.022,8.884,27.284,27.284,0,0,0,2.9,1.681,26.727,26.727,0,0,1-5.876-1.935,31.924,31.924,0,0,1-9.508-7.045,32.907,32.907,0,0,0,9.159,8.594,26.882,26.882,0,0,0,2.677,1.438,24.86,24.86,0,0,1-5.252-1.478,29.914,29.914,0,0,1-10.048-6.97A30.61,30.61,0,0,0,224,292.633c.763.422,1.538.8,2.322,1.138a22.876,22.876,0,0,1-5.269-1.308,28.527,28.527,0,0,1-9.968-6.657,28.719,28.719,0,0,0,9.7,8.218c.65.325,1.307.617,1.969.882a21.667,21.667,0,0,1-5.114-1.1,27,27,0,0,1-10.013-6.415,27.106,27.106,0,0,0,10.053,8.084q.734.327,1.474.6a20.837,20.837,0,0,1-4.792-.864,25.509,25.509,0,0,1-10.2-6.237,26.053,26.053,0,0,0,9.932,7.755q.739.314,1.485.571a19.461,19.461,0,0,1-4.7-.729,24.6,24.6,0,0,1-10.185-6.013,25.7,25.7,0,0,0,9.93,7.5c.615.257,1.237.477,1.864.668a22.056,22.056,0,0,1-16.322-11.011c-4.747-8.109-4.066-18.148,1.463-24.6a70.131,70.131,0,0,0,16.8-16.022,77.1,77.1,0,0,0,9.131,23.851,81.214,81.214,0,0,0,13.9,17.687,27.858,27.858,0,0,1-3.209-1.53,37.151,37.151,0,0,1-9.311-7.63A37.936,37.936,0,0,0,233.853,288.687Zm2.357-8.826a81.475,81.475,0,0,1-12.629-20.46c-3.813-8.839-6.038-18.7-5.451-28.36.545-8.968,3.777-18.316,11.47-23.579.586-.4,1.209-.744,1.822-1.1a24.584,24.584,0,0,0-7.636,8.263,33.666,33.666,0,0,0-3.806,12.92c-.952,9.393.971,18.93,4.3,27.694A82.026,82.026,0,0,0,235.544,275.5c5.692,7.523,12.812,14.3,21.219,18.694,7.781,4.07,16.946,6.13,25.351,2.733.624-.252,1.223-.562,1.829-.855a23.84,23.84,0,0,1-11.362,3.417,33.522,33.522,0,0,1-13.437-2.5C250.2,293.489,242.386,287.14,236.21,279.86Zm60.937-19.268a54.571,54.571,0,0,1,.887,10.8,45.862,45.862,0,0,1-1.244,9.2,50.664,50.664,0,0,0,.261-17.609,76.436,76.436,0,0,0-5.607-18.82,86.805,86.805,0,0,0-23.811-32.265,49.269,49.269,0,0,0-17.248-9.364,45.66,45.66,0,0,1,15.688,7.547,75.684,75.684,0,0,1,14.185,13.9A85.384,85.384,0,0,1,291,241.487,76.593,76.593,0,0,1,297.148,260.592Z" transform="translate(-163.309 -175.341)" fill="#acacac"/>
                                        <path id="Path_59" data-name="Path 59" d="M636.823,119.047c1.1-1.269,2.109-2.614,3.094-3.971,2.662-3.666,5.023-7.525,7.347-11.41-1.605.071-3.209.14-4.813.235a101.97,101.97,0,0,0,5.678-12.16c-1.389,1.677-2.676,3.442-3.92,5.228-2.189,3.142-4.2,6.39-6.219,9.643,1.566-.039,3.13-.082,4.694-.146-.2.37-.408.737-.606,1.108A83.5,83.5,0,0,0,636.823,119.047Z" transform="translate(-532.354 -91.74)" fill="#acacac"/>
                                        <path id="Path_60" data-name="Path 60" d="M705.064,189.314c1.47-.893,2.879-1.889,4.266-2.905,3.621-2.652,7.019-5.573,10.391-8.53-1.549-.425-3.1-.851-4.653-1.254a101.94,101.94,0,0,0,9.135-9.831c-1.837,1.17-3.6,2.455-5.335,3.773-3.047,2.318-5.961,4.791-8.877,7.269,1.5.443,3,.882,4.512,1.3-.3.291-.614.576-.916.869A83.457,83.457,0,0,0,705.064,189.314Z" transform="translate(-585.539 -150.235)" fill="#acacac"/>
                                        <path id="Path_61" data-name="Path 61" d="M774.076,279.628a101.984,101.984,0,0,0,11.723-6.534c-2.108.546-4.184,1.224-6.239,1.943-3.614,1.265-7.148,2.719-10.687,4.176,1.29.884,2.581,1.763,3.884,2.626q-2.589,1.248-5.125,2.6a70.932,70.932,0,0,0-6.986,4.171c1.674-.4,3.321-.909,4.954-1.448,4.263-1.406,8.4-3.136,12.516-4.909C776.772,281.373,775.431,280.49,774.076,279.628Z" transform="translate(-628.858 -233.083)" fill="#acacac"/>
                                        <path id="Path_62" data-name="Path 62" d="M819.741,396.744c-1.089-1.181-2.178-2.362-3.284-3.526a101.974,101.974,0,0,0,12.954-3.507c-2.178.02-4.356.176-6.524.378-3.813.355-7.593.911-11.379,1.47,1.038,1.169,2.079,2.335,3.135,3.486-1.876.39-3.744.814-5.6,1.286a70.989,70.989,0,0,0-7.787,2.359c1.72.02,3.443-.08,5.157-.208C810.886,398.149,815.315,397.469,819.741,396.744Z" transform="translate(-660.507 -323.971)" fill="#acacac"/>
                                        <path id="Path_63" data-name="Path 63" d="M842.972,501.715c-2.115-.521-4.264-.91-6.414-1.253-3.781-.6-7.582-1-11.388-1.4.716,1.39,1.434,2.777,2.172,4.155-1.914-.088-3.829-.14-5.746-.144a70.977,70.977,0,0,0-8.129.353c1.661.446,3.355.777,5.047,1.078,4.419.787,8.878,1.227,13.346,1.623-.762-1.414-1.524-2.828-2.307-4.23A101.891,101.891,0,0,0,842.972,501.715Z" transform="translate(-670.026 -409.198)" fill="#acacac"/>
                                    </g>
                                    </g>
                                </g>
                            </svg>

                            </i>
                        </div>

                        <div className='relative cursor-pointer overflow-hidden rounded-xl'>
                            <div className='absolute bottom-0 left-0 text-center w-full z-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-zinc-900 after:to-transparent'>
                                <div className='relative z-[1] pt-10 pb-3'>
                                    <span className='text-xs text-white'>Home</span>
                                    <h4 className='font-bold text-white'>Ghar Bhar</h4>
                                </div>
                            </div>
                            <img className="h-[180px] object-cover object-center w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                        </div>

                        <div className='top-full absolute right-0'>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-28' viewBox="0 0 59.813 125.428">
                                    <g id="Paperplane" transform="translate(-405.462 -137.625)">
                                        <g id="Group_89" data-name="Group 89">
                                        <g id="Layer-22_2_">
                                            <path id="Path_90" data-name="Path 90" d="M417.137,138.625c20.556,0,45.983,20.622,36.055,43.317-7.29,16.661-41.686,16.338-37.092.259,3.52-12.321,33.244-6.441,40.2.519,18.966,18.965-.317,46.391-15.3,58.88" fill="none" stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                                        </g>
                                        <g id="Layer-21_2_">
                                            <g id="Group_88" data-name="Group 88">
                                            <path id="Path_91" data-name="Path 91" d="M431.188,223.686l-25.726,39.331,47.624-4.008-19.7-13.228Z" fill="#ff367c"/>
                                            <path id="Path_92" data-name="Path 92" d="M407.648,261.677l24.922-15.394" fill="none" stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                                            </g>
                                        </g>
                                        </g>
                                    </g>
                                </svg>
                            </i>
                        </div>
                    </div>
                </div>



                {/* <img src="/hero_banner.png" alt="Next.js Logo" className="w-full"/> */}
            </div>
        </div>
    )
}

export default Hero
