import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
// import { HooksIceCreamContainer  } from "./components/HooksIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <HooksCakeContainer />
    <CakeContainer />
    <IceCreamContainer />
    {/* <HooksIceCreamContainer /> */}
    </div>
    </Provider>
  );
}

export default App;
