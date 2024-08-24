import { ProductList } from '@/components'
import React from 'react'

const page = () => {
  return (
    <section className="container">
      <div>
        <h1 className="head-text">Products</h1>
      </div>
      <ProductList />
    </section>
  )
}

export default page