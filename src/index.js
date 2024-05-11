import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './App/store'
import ToggleColorModeProvider from './utils/ToggleColorMode'
import { TmaSDKProvider } from './provider';

// const theme = createTheme({})


 ReactDOM.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
  <BrowserRouter>
  <TmaSDKProvider>
    <App />
    </TmaSDKProvider>
  </BrowserRouter>
  </ToggleColorModeProvider>
  </Provider>, 
 
  document.getElementById('root'));

  

