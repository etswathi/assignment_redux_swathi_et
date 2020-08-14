import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import allReducers from './reducers'
import {Provider} from 'react-redux'
import App from './components/App'
 

const store=createStore(allReducers)
console.log(store)
ReactDOM.render(
  
  //make store available to app as such it wil b available to all components
  <Provider store={store}><App/></Provider>
  
    
  ,
  document.getElementById('root')
);

