import { combineReducers } from 'redux';
import newsletterReducer frmo './newsletter';

const rootReducer = combineReducers({
  newsletter: newsletterReducer
});

export default rootReducer;