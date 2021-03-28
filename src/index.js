import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from './Config/StateProvider';
import reducer, {initialState} from './Config/reducer';

// const rootReducer= combineReducers({

//     //other reducer in future
//   form:formReducer

// })
     
//   const store = createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEDVTOOLS_EXTENSION_());

  

 

ReactDOM.render(
  <React.StrictMode>
   <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
