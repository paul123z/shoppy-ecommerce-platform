import React from 'react'

import {Header,LineChart} from'../../components';


const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#dedede] rounded-3xl">
      <Header category="Chart"
      title="Line"
      />
      
      <div className="w-full">
        <LineChart/>
      </div>

    </div>
  )
}

export default Line