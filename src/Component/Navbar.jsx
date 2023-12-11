import { TextInput } from '@tremor/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div id='top' className='relative w-full sm:flex justify-between items-center p-2'>
        <h1 className='font-bld text-gray-300'>
            Dashbord
        </h1>
        <div className='py-2'>
            <TextInput  icon={BiSearch} placeholder='Search...'/>
            
        </div>
    </div>
  )
}

export default Navbar