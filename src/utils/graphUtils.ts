import { graphData } from "../types/graphTypes";

export const  getalcoholCategoryArray = (graphdata:Array<graphData>) => {
    const alcoholCategoryArray:any = [];
    if(graphdata){
        graphdata.map((data)=>{
            if(alcoholCategoryArray.includes(`Alcohol Type ${data.Alcohol}`)){
                return;
            }
            alcoholCategoryArray.push(`Alcohol Type ${data.Alcohol}`)
        })
    }
    return alcoholCategoryArray;
}

export const getMalicAcidAverageArray = (graphdata:Array<graphData>,alcoholCategoryArray:any) => {
    const MalicAcidAverageArray:any = [];
    for (let index = 0; index < alcoholCategoryArray.length; index++) {
        const element = alcoholCategoryArray[index];
        let totalValue = 0;
        let totalLength = 0;
        graphdata.filter((graphElement)=>`Alcohol Type ${graphElement.Alcohol}` === element).map((data:any)=>{
            totalValue += data["Malic Acid"];
            totalLength += 1;
        })
        MalicAcidAverageArray.push(totalValue/totalLength)
    }
    return MalicAcidAverageArray;
}

export const getBarGraphOption = (xAxisData:Array<string>, yAxisData:Array<number>, color:string) =>{ 
    return {
        color,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {},
        xAxis: [{
          type: "category",
          data: xAxisData
        }],
        yAxis: [{
          type: "value"
        }],
        series: [{
          name: "Avg of Malic Acid",
          type: "bar",
          barWidth: "60%",
          data: yAxisData
        }]
      };
}

export const getscatterGraphData = (graphdata:Array<graphData>) => {
    const scatterGraphData = graphdata.map((data:any)=>{
        return [data["Color intensity"],data["Hue"]];
    })
    return scatterGraphData;
}

export const getScatterGraphOption = (scatterGraphData:Array<Array<number>>) => {
    return {legend: {},
    grid: {
      left: "3%",
      right: "7%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: "value",
      scale: true,
      axisLabel: {
        formatter: "{value} nanometer"
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      scale: true,
      axisLabel: {
        formatter: "{value} h"
      },
      splitLine: {
        show: false
      }
    },
    series: [{
      name: "Scatter Graph",
      type: "scatter",
      data: scatterGraphData
    }]
  };
}