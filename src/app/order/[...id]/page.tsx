import { Button } from '@/components'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='container'>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Your Order is Successfully Placed</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order#121sdfd6f66ef46+s</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Your Recipt is Mailed to Your Email.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size={'lg'}>
            <Link
              href="/"
            >
              Go back home
            </Link>
            </Button>
          </div>
        </div>
      </main>
    </section>
  )
}

export default page