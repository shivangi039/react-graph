import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
// Import charts, all with Chart suffix
import { ScatterChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent, DatasetComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { graphInterface } from '../types/graphTypes';
import { getscatterGraphData, getScatterGraphOption } from '../utils/graphUtils';
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, ScatterChart, CanvasRenderer,DatasetComponent,LegendComponent]
);

function ScatterGraph({graphdata}:graphInterface) {
    const scatterGraphData = getscatterGraphData(graphdata);
    const option = getScatterGraphOption(scatterGraphData);

  return (
    <div className='graph-1'>
        <h2>Scatter Graph</h2>
        <ReactEChartsCore
        echarts={echarts}
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        onChartReady={undefined}
        onEvents={undefined}
        opts={undefined}
        />
    </div>
  )
}

export default ScatterGraph
