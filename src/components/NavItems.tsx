import Link from 'next/link'
import React from 'react'

const NavItems = () => {
  return (
    <nav>
      <ul className="flex md:flex-row flex-col justify-center md:items-center items-start md:gap-10 gap-4">
        <Link href={'/'}> <li>Home</li> </Link>
        <Link href={'/products'}> <li>Products</li> </Link>
      </ul>
    </nav>
  )
}

export default NavItems