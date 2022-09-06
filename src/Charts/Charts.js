// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";
import {Data} from '../RoutineTable/DATA';

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [{
        "label": "8/30/2022",
        "value": 60
      }, {
        "label": "11/16/2021",
        "value": 83
      }, {
        "label": "10/27/2021",
        "value": 80
      }, {
        "label": "3/22/2022",
        "value": 7
      }, {
        "label": "6/9/2022",
        "value": 98
      }, {
        "label": "6/16/2022",
        "value": 50
      }, {
        "label": "5/20/2022",
        "value": 6
      }, {
        "label": "2/14/2022",
        "value": 100
      }, {
        "label": "3/22/2022",
        "value": 25
      }, {
        "label": "6/17/2022",
        "value": 83
      }, {
        "label": "6/30/2022",
        "value": 85
      }, {
        "label": "12/18/2021",
        "value": 65
      }, {
        "label": "11/4/2021",
        "value": 62
      }, {
        "label": "5/2/2022",
        "value": 42
      }, {
        "label": "5/29/2022",
        "value": 80
      }, {
        "label": "3/18/2022",
        "value": 59
      }, {
        "label": "1/7/2022",
        "value": 79
      }, {
        "label": "7/17/2022",
        "value": 27
      }, {
        "label": "7/3/2022",
        "value": 39
      }, {
        "label": "1/8/2022",
        "value": 74
      }, {
        "label": "10/21/2021",
        "value": 78
      }, {
        "label": "11/20/2021",
        "value": 28
      }, {
        "label": "7/6/2022",
        "value": 73
      }, {
        "label": "5/26/2022",
        "value": 13
      }, {
        "label": "4/27/2022",
        "value": 1
      }, {
        "label": "3/13/2022",
        "value": 8
      }, {
        "label": "12/24/2021",
        "value": 41
      }, {
        "label": "2/23/2022",
        "value": 94
      }, {
        "label": "10/31/2021",
        "value": 9
      }, {
        "label": "5/31/2022",
        "value": 54
      }, {
        "label": "11/19/2021",
        "value": 89
      }, {
        "label": "10/5/2021",
        "value": 68
      }, {
        "label": "9/12/2021",
        "value": 41
      }, {
        "label": "10/11/2021",
        "value": 24
      }, {
        "label": "2/1/2022",
        "value": 34
      }, {
        "label": "12/15/2021",
        "value": 57
      }, {
        "label": "5/7/2022",
        "value": 42
      }, {
        "label": "4/22/2022",
        "value": 91
      }, {
        "label": "8/19/2022",
        "value": 52
      }, {
        "label": "1/17/2022",
        "value": 61
      }, {
        "label": "10/4/2021",
        "value": 48
      }, {
        "label": "11/25/2021",
        "value": 43
      }, {
        "label": "3/24/2022",
        "value": 83
      }, {
        "label": "5/19/2022",
        "value": 36
      }, {
        "label": "6/13/2022",
        "value": 48
      }, {
        "label": "7/25/2022",
        "value": 79
      }, {
        "label": "3/22/2022",
        "value": 76
      }, {
        "label": "11/22/2021",
        "value": 61
      }, {
        "label": "11/16/2021",
        "value": 63
      }, {
        "label": "7/26/2022",
        "value": 3
      }, {
        "label": "11/18/2021",
        "value": 34
      }, {
        "label": "3/10/2022",
        "value": 15
      }, {
        "label": "2/16/2022",
        "value": 46
      }, {
        "label": "10/26/2021",
        "value": 6
      }, {
        "label": "5/22/2022",
        "value": 66
      }, {
        "label": "2/7/2022",
        "value": 56
      }, {
        "label": "2/5/2022",
        "value": 9
      }, {
        "label": "4/29/2022",
        "value": 96
      }, {
        "label": "5/27/2022",
        "value": 46
      }, {
        "label": "4/21/2022",
        "value": 24
      }, {
        "label": "3/14/2022",
        "value": 35
      }, {
        "label": "5/4/2022",
        "value": 25
      }, {
        "label": "9/25/2021",
        "value": 93
      }, {
        "label": "12/25/2021",
        "value": 56
      }, {
        "label": "6/12/2022",
        "value": 43
      }, {
        "label": "11/13/2021",
        "value": 76
      }, {
        "label": "8/4/2022",
        "value": 90
      }, {
        "label": "8/23/2022",
        "value": 100
      }, {
        "label": "7/15/2022",
        "value": 39
      }, {
        "label": "5/30/2022",
        "value": 91
      }, {
        "label": "12/26/2021",
        "value": 5
      }, {
        "label": "8/24/2022",
        "value": 18
      }, {
        "label": "6/19/2022",
        "value": 1
      }, {
        "label": "2/7/2022",
        "value": 31
      }, {
        "label": "2/6/2022",
        "value": 21
      }, {
        "label": "4/29/2022",
        "value": 64
      }, {
        "label": "3/13/2022",
        "value": 48
      }, {
        "label": "5/16/2022",
        "value": 50
      }, {
        "label": "9/7/2021",
        "value": 48
      }, {
        "label": "12/4/2021",
        "value": 74
      }, {
        "label": "8/15/2022",
        "value": 20
      }, {
        "label": "6/20/2022",
        "value": 99
      }, {
        "label": "9/22/2021",
        "value": 7
      }, {
        "label": "1/13/2022",
        "value": 84
      }, {
        "label": "12/7/2021",
        "value": 53
      }, {
        "label": "7/23/2022",
        "value": 37
      }, {
        "label": "8/5/2022",
        "value": 78
      }, {
        "label": "8/5/2022",
        "value": 100
      }, {
        "label": "4/10/2022",
        "value": 63
      }, {
        "label": "5/1/2022",
        "value": 7
      }, {
        "label": "8/3/2022",
        "value": 47
      },
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "450", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Blood Sugar Report visualised",
      //Set the chart subcaption
      subCaption: "In 1 mg/dL = 0.0555 mmol/L ",
      //Set the x-axis name
      xAxisName: "Dates",
      //Set the y-axis name
      yAxisName: "Readings in mg/dL",
      numberSuffix: "",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const Charts=()=>{
    return (<ReactFC {...chartConfigs} />);
}
// class Charts extends React.Component {
//   render() {
//     return (<ReactFC {...chartConfigs} />);
//   }
// }


export default Charts