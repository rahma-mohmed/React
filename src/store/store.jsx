import {createStore} from 'redux';
import languageReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
     reducer: languageReducer,
});

export default store;


// const store = createStore(languageReducer);

// export default store;