import React from 'react'
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getalcoholCategoryArray, getBarGraphOption, getMalicAcidAverageArray } from '../utils/graphUtils';
import { GridComponent, TooltipComponent, TitleComponent, DatasetComponent } from 'echarts/components';
import { graphInterface } from '../types/graphTypes';
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer,DatasetComponent]
);
function BarGraph({graphdata}:graphInterface) {
    const alcoholCategoryArray = getalcoholCategoryArray(graphdata);
    const MalicAcidAverageArray = getMalicAcidAverageArray(graphdata, alcoholCategoryArray);
    const option = getBarGraphOption(alcoholCategoryArray, MalicAcidAverageArray, "#3398db")
    return (
    <div className='graph-2'>
        <h2>Bar Graph</h2>
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
    );
}

export default BarGraph;
