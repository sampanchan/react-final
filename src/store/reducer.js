


const reducer = (state, action) => {
    switch(action.type) {
        case 'MOUNT_STATE':
      
            return {
                ...state,
                ...action.payload,
            };
        
        case 'UPDATE_SINS':

            return {
                ...state,
                sins: action.payload
            };

        // add cases for each day of the week
        case 'UPDATE_MONDAY':
            const updatedMonSins = [ ...state.monday, ...action.payload];
            return {
                ...state,
                sins: state.defaultSins,
                monday: updatedMonSins
            };
        case 'UPDATE_TUESDAY':
                const updatedTuesSins = [ ...state.tuesday, ...action.payload];
                return {
                    ...state,
                    sins: state.defaultSins,
                    tuesday: updatedTuesSins
                };
        case 'UPDATE_WEDNESDAY':
                const updatedWedSins = [ ...state.wednesday, ...action.payload];
                return {
                    ...state,
                    sins: state.defaultSins,
                    wednesday: updatedWedSins
                };
        case 'UPDATE_THURSDAY':
                const updatedThurSins = [ ...state.thursday, ...action.payload];
                return {
                    ...state,
                    sins: state.defaultSins,
                    thursday: updatedThurSins
                };
        case 'UPDATE_FRIDAY':
            const updatedFriSins = [ ...state.friday, ...action.payload];
            return {
                ...state,
                sins: state.defaultSins,
                friday: updatedFriSins
            };

        case 'UPDATE_SATURDAY':
            console.log(action);
            const updatedSatSins = [ ...state.saturday, ...action.payload];
            return {
                ...state,
                sins: state.defaultSins,
                saturday: updatedSatSins
            };
        case 'UPDATE_SUNDAY':
            const updatedSunSins = [ ...state.sunday, ...action.payload];
            return {
                ...state,
                sins: state.defaultSins,
                sunday: updatedSunSins
            };
        //
            //delete sin
           
        default:
            return state;
    }


};

export default reducer;