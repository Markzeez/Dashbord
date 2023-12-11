import React from 'react'
import SaleItem from './SaleItem'
import WebAnalytics from './WebAnalytics'
import ScoreList from './ScoreList'

const RightColumn = () => {
  return (
    <div className='w-full p-2'>
      <SaleItem/>
      <WebAnalytics/>
      <ScoreList />
    </div>
  )
}

export default RightColumn