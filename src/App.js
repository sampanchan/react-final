
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import Sin from './components/Sin';
import Default from './components/Default';
import Graph from './components/Graph';
import {useContext, useState, useEffect} from 'react';
import {Context} from './store/store';

function App() {

    const [newSinText, setNewSinText] = useState('');
    const [state, dispatch ] = useContext(Context);
    const { sins, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = state; //where is this?

    // const onChangeText = (e) => {
    //   console.log(e.target.value);

    // } <-- OLD
    const onChangeCheckbox = (e) => {
      const uid = e.target.getAttribute('data-uid');
   
      const updatedSins = sins.map((sin) => {
        if (sin.uid === uid) {
          sin.value = !sin.value;
        }
        return sin;
      });
      console.log(updatedSins, uid);

      // Update sins state.
      dispatch({ type: 'UPDATE_SINS', payload: updatedSins });
    };


    //adding text in box
    const onChangeText = (e) => setNewSinText(e.target.value);

    //delete sin
    const deleteSin = (e) => {
      const uid = e.target.getAttribute('data-uid');
      

      // Remove sin from array of sins.
      const filteredSins = sins.filter((sin) => sin.uid !== uid);
  
      // Update sins state.
      console.log(uid, filteredSins);
      dispatch({ type: 'UPDATE_SINS', payload: filteredSins });
    };


    //adding sins
    const addSin = () => {
      // Populate new sin object
      const newSin = {
        value: false,
        sin: newSinText,
        uid: uuidv4(),
      };
      // Add new sin to sins array
      const updatedSins = [...sins, newSin];
  
      // Update sins state.
      dispatch({ type: 'UPDATE_SINS', payload: updatedSins });
      // Reset sin text once added.
      setNewSinText('');
    };

    const addSinsForToday = () => {

      // Get active sins
      const activeSins = sins.filter((sin) => sin.value);
      
    
      // Steps:
      // 1. Check what day of the week it is.
      let d = new Date();
      let day = d.getDay();
      console.log(day);
      let type = '';
      switch(day){
        case 1: 
          console.log('today is Monday');
          type = 'UPDATE_MONDAY';
          break;
        case 2: 
          console.log('today is tuesday');
          type = 'UPDATE_TUESDAY';
          break;
        case 3: 
          console.log('today is Wednesday');
          type = 'UPDATE_WEDNESDAY';
          break;
        case 4: 
          console.log('today is Thursday');
          type = 'UPDATE_THURSDAY';
          break;
        case 5: 
          console.log('today is Friday');
          type = 'UPDATE_FRIDAY';
          break;
        case 6: 
          console.log('today is saturday');
          type = 'UPDATE_SATURDAY';
          break;
        case 0: 
          console.log('today is Sunday');
          type = 'UPDATE_SUNDAY';
          break;
      }
      // 2. Push active sins to the current day array.
          // add sins with vaue of 'true' into local storage

  
      console.log(type);
      dispatch({ type: type , payload: activeSins });
    };
    console.log(state.saturday);

    useEffect(() => {
      dispatch({
        type: 'MOUNT_STATE',
        payload: JSON.parse(window.localStorage.getItem('state')),
      });
    }, []);

    useEffect(() => {
      window.localStorage.setItem('state', JSON.stringify(state));
    }, [state]);

    // Sums of Sins

    const todaySins = () => {
      let d = new Date();
      let day = d.getDay();

      switch(day) {
        case 1:
          return state.monday.length;
        case 2:
          return state.tuesday.length;
        case 3:
          return state.wednesday.length;
        case 4:
          return state.thursday.length;
        case 5:
          return state.friday.length;
        case 6:
          return state.saturday.length;
        case 0:
          return state.sunday.length;
        default:

      }

    };

    const weekSins = () => {
      const week = [
        state.monday.length,
        state.tuesday.length,
        state.wednesday.length,
        state.thursday.length,
        state.friday.length,
        state.saturday.length,
        state.sunday.length,
      ];
      const sinsPerWeek = week.reduce((sum, nextItem) => sum + nextItem, 0);
      return sinsPerWeek;
    }


    const graphProps = { monday, tuesday, wednesday, thursday, friday, saturday, sunday };
    console.log(state);
    return (
    
    <div className="App">
      <header> 
        <h1>Sinsitivity</h1>
      </header>
      <div className="container">
        <div>
          <div className="profile">
              <div className="profile_image"> 
              </div>
                <div className="profile_goals">
                  <p>Sins committed today    <span id="todaySin">{todaySins()}</span></p>
                  <p>Sins committed this week <span id="weekSin">{ weekSins()}</span></p>
              </div>
            </div>
            <div className="sin-list">
              <h2 className="your-sins">Your Sins</h2>
              <div className="sin-list__item">
                {sins.length > 0 &&
                sins.map((sin) => (
                  <Default
                    {...sin}
                    key={sin.uid}
                    onChangeCheckbox={onChangeCheckbox}
                    deleteSin={deleteSin}
                  />
                ))}
                <Sin onChangeText={onChangeText} addSin={addSin} value={newSinText} />
              </div>
              <button className="submit-btn" onClick={addSinsForToday}>Submit</button>
            </div>
        </div>  
       <Graph {...graphProps}/>
      
       </div>
   

      
    </div>
  );
}

export default App;
