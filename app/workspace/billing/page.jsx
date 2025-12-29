import React from 'react'
import { PricingTable } from '@clerk/nextjs'

function page() {
  return (
    <div>
         <h2 className='text-3xl pb-5 font-bold'>Select Plan</h2>
         <PricingTable />
    </div>
  )
}

export default page