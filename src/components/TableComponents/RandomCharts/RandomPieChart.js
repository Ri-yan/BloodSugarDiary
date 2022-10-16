import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import { useEffect , useState} from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);
const chartConfig={
    caption: "Random Readings Chart",
    plottooltext: "<b>$percentValue</b>",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
}

const data=[
    {
    label: "High",
    value: "30"
    },
    {
    label: "Low",
    value: "57"
    },
    {
    label: "Normal",
    value: "77"
    }
    ]

const RandomPieChart = ({products,selectedRecordId}) => {
    const [graphData, setgraphData] = useState('')
    const DataGraph=(pro)=>{
        let h=0;
        let n=0;
        let l=0;
        try {
            
            pro.forEach(i => {
                if(i.result>=99 && i.result<=140 && i.result!==''){
                    n++;
                }
                else if(i.result<99 && i.result!==''){
                    l++;
                }
                else if(i.result>140 && i.result!==''){
                    h++;
                }
            });
           
                // console.log(graphData)
                console.log(selectedRecordId,"",'total',"",h+n+l,'high',"",h,'low',"",l,'normal',"",n)
                
        } catch (error) {
           console.log(error.message) 
        }
        let p=[{
            label: "High",
            value: `${h}`
            },
            {
            label: "Low",
            value: `${l}`
            },
            {
            label: "Normal",
            value: `${n}`
            }]
        setgraphData(p)
           console.log(graphData[0],"",graphData[1],"",graphData[2])
    }
    useEffect(() => {
        const unsub = DataGraph(products);
        return ()=>unsub;
        // return DataGraph(products)
      }, [products])
    
    
return (
<ReactFusioncharts
type="doughnut2d"
width="100%"
height="500"
dataFormat="JSON"
dataSource={{chart: chartConfig,data:graphData}}
/>
);
}
export default RandomPieChart