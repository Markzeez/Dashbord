import React from 'react'
import {BiArrowToTop, BiBarChartAlt2 , BiBell, BiCreditCard, BiFileFind, BiHome, BiLinkExternal, BiMailSend} from "react-icons/bi"

const Sidebar = () => {
  return (
    <div className='bg-slate-800 flex-none w-14 sm:w-20 h-screen'>
<div className='h-20 items-center flex'>
    <BiHome width={40} className='text-gray-300 left-3 sm:left-6 fixed text-4xl' />
</div>
<div className='fixed left-3 sm:left-6 top-[100px]'>
    <BiBarChartAlt2 width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl'/>
    <BiFileFind width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl'/>
    <BiMailSend width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl'/>
    <BiCreditCard width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl'/>
    <BiBell width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl'/>
   
</div>
<div className='fixed bottom-4 left-3 sm:left-6 '>
  <a href="#top"> <BiArrowToTop  width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl' /></a>
   <BiLinkExternal width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 text-4xl' /> 

</div>
    </div>
  )
}

export default Sidebar