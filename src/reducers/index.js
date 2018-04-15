import { combineReducers } from 'redux';
import newsletterReducer from './newsletter';

const rootReducer = combineReducers({
  newsletter: newsletterReducer
});

export default rootReducer;