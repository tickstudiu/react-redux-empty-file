import { combineReducers } from 'redux';

import languageReducer from './languageReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
});

export default  rootReducers;
