import RoutineChart from './RoutineChart'

const RoutineChartList = () => {
  return (
    <div className="container">
        <h1>BreakFast</h1>
    <div className="row" style={{display:'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
        <div className="col" style={{textAlign:'center'}}><RoutineChart/></div>
    </div>
    <h1>Lunch</h1>
    <div className="row" style={{display:'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
        <div className="col" style={{textAlign:'center'}}><RoutineChart/></div>
    </div>
    <h1>Dinner</h1>
    <div className="row" style={{display:'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
        <div className="col" style={{textAlign:'center'}}><RoutineChart/></div>
    </div>
  </div>
  )
}

export default RoutineChartList