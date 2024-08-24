import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
                <div className="block">
                    <h4 className="text-xl text-black font-bold mb-7">Universal Mart</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-400 ">Home</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">About</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">Pricing</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">Features</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-400 ">Pro Version</a></li>
                    </ul>
                </div>
                <div className="block">
                    <h4 className="text-xl text-black font-bold mb-7">Products</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-400 ">Figma UI System</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">Icons Assets</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">Responsive Blocks</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">Components Library</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-400 ">Plugin Guide</a></li>
                    </ul>
                </div>
                <div className="block">
                    <h4 className="text-xl text-black font-bold mb-7">Resources</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-400 ">FAQs</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">Quick Start</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">Documentation</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">User Guide</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-400 ">Plugin Guide</a></li>
                    </ul>
                </div>
                <div className="block">
                    <h4 className="text-xl text-black font-bold mb-7">Support</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-400 ">Customer Support</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">Cookies</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">License</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-400 ">Terms & Conditions</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-400 ">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="py-7 border-t border-gray-700 ">
                <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
                    <a href="https://universalmart.vercel.app/"  className="flex justify-center ">
                        <Image
                        src="/unimart-transparent 2.png"
                        alt='Logo'
                        width={120}
                        height={100}
                        />
                            
                    </a>
                    <span className="text-gray-400  block">©
<a href="https://universalmart.vercel.app">UniversalMart</a> 2024, All rights reserved.</span>
                    <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                        <a href="javascript:;"  className="w-9 h-9 rounded-full flex justify-center items-center">
                            <Image
                              src={'/instagram1.svg'}
                              alt="Instagram"
                              width={20}
                              height={20}
                            />
                                
                        </a>
                        <a href="javascript:;"  className="w-9 h-9 rounded-full flex justify-center items-center ">
                        <Image
                              src={'/whatsapp.svg'}
                              alt="whatsapp"
                              width={20}
                              height={20}
                            />
                                
                        </a>
                        <a href="javascript:;"  className="w-9 h-9 rounded-full  flex justify-center items-center">
                        <Image
                              src={'/facebook.svg'}
                              alt="facebook"
                              width={20}
                              height={20}
                            />
                                
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer