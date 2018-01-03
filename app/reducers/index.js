/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';

const rootReducer = combineReducers({
  students,
  campuses
})

export default rootReducer;

export * from './students';
export * from './campuses';
