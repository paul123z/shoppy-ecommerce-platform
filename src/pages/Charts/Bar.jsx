import React from 'react'
import { ChartComponent, SeriesCollectionDirective,BarSeries, SeriesDirective,Inject,DateTime,Legend,Category,Tooltip,ColumnSeries,DataLabel } from '@syncfusion/ej2-react-charts'

import{barCustomSeries, barPrimaryYAxis,barPrimaryXAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

import { Header } from '../../components'

const Bar = () => {

  const{currentMode} = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#dedede] rounded-3xl">
      <Header category="Chart"
      title="Bar: Distribution of Olympic Medals [Beijing 2022]"
      />
      <div className=" w-full">
      <ChartComponent
    id="area-chart"
    height="420px"
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={currentMode === "Dark" ? '#dedede' : "#FFF"}
    legendSettings={{ background: '#fff' }}
    >
      <Inject services=  
      {[ColumnSeries,DataLabel,Legend,Tooltip,Category]}
      />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  </div>
  )
}

export default Bar