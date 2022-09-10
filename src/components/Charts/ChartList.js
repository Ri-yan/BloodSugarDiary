import Charts from './Charts'

const ChartList = () => {
  return (
    <div class="container">
        <h1>BreakFast</h1>
    <div class="row" style={{display:'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
        <div class="col" style={{textAlign:'center'}}><h2>Before</h2><Charts/></div>
        <div class="col"><h2>After</h2><Charts/></div>
    </div>
    <h1>Lunch</h1>
    <div class="row" style={{display:'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
        <div class="col" style={{textAlign:'center'}}><h2>Before</h2><Charts/></div>
        <div class="col"><h2>After</h2><Charts/></div>
    </div>
    <h1>Dinner</h1>
    <div class="row" style={{display:'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
        <div class="col" style={{textAlign:'center'}}><h2>Before</h2><Charts/></div>
        <div class="col"><h2>After</h2><Charts/></div>
    </div>
  </div>
  )
}

export default ChartList