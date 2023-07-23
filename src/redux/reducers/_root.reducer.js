import { combineReducers } from 'redux';
import bodyPartWorkoutReducer from './workout.reducer';


const rootReducer = combineReducers({
    bodyPartWorkoutReducer,

});

export default rootReducer;