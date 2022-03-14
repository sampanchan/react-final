// // the graph that shows the sins

// import App from './App.js';





const Graph = ({ monday, tuesday, wednesday, thursday, friday, saturday, sunday }) => {
    console.log(`${(sunday.length) * 100}px`);
    return (
    <div className="graph">
        <div className="graph-goal">
        <h2>Sin Progression</h2>
        </div>
        <div className="sin-graph" id="sin-graph">
        <div className="sin-day">
            <span>Monday</span>
            <div className="sin-day__bar" style={{ width: `${monday.length * 100}px` }} />
        </div>
        <div className="sin-day">
            <span>Tuesday</span>
            <div className="sin-day__bar" style={{ width: `${tuesday.length * 100}px` }} />
        </div>
        <div className="sin-day">
            <span>Wednesday</span>
            <div className="sin-day__bar" style={{ width: `${wednesday.length * 100}px` }} />
        </div>
        <div className="sin-day">
            <span>Thursday</span>
            <div className="sin-day__bar" style={{ width: `${thursday.length * 100}px` }} />
        </div>
        <div className="sin-day">
            <span>Friday</span>
            <div className="sin-day__bar" style={{ width: `${friday.length * 100}px` }} />
        </div>
        <div className="sin-day">
            <span>Saturday</span>
            <div className="sin-day__bar" style={{ width: `${saturday.length * 100}px` }} />
        </div>
        <div className="sin-day">
            <span>Sunday</span>
            <div className="sin-day__bar" style={{ width: `${sunday.length * 10}%` }} />
        </div>
        </div>
    </div>

    
    

)};

export default Graph;













