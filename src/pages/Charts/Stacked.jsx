import React from 'react';

import { Header, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#dedede]  rounded-3xl">
    <Header category="Chart" title="Stacked: Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;
