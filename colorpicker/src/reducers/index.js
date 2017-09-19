import { combineReducers } from 'redux';
import ColorsReducer from './reducer_colors';
import ActivePage from './reducer_active_page';

const rootReducer = combineReducers({
  colors: ColorsReducer,
  activePage: ActivePage
});

export default rootReducer;
