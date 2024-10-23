import React, { createContext, useContext } from 'react';       // Context api 
import logo from './logo.svg';
import './App.css';
// import Home from './container/Pages/Home';
import Home from './container/Pages/Home';
import Routers from './container/Pages/Routers';
import Header from './component/Header';
import {CommonData} from './Context/GlobalContext';                     // For Context Api 
import {GlobalContext} from './Context/GlobalContext';

// export const CommonData = createContext();                         // CommonData is userDefined Var for context Api // CommonData ha object bnla ..//

const App = () => {

  // const { count, setCount } = useContext(CommonData);
  //const name = "DeveloperGuru";

  return (
    <GlobalContext>              {/* username is key and value is name / Provider purn compo la deta provide krnyach kam krte ..//*/}
      <div className="App">
        {/* <Home /> */}

        {/* <Header />        sarv Pages sathi use honar header madhe navbar ahe ithe import kela mhanun bcz app ha index.js madhe ahe  */}

        <Routers />

      </div>
    </GlobalContext>
  );
}

export default App;



// Context Api means We can Pass Data in Any Component Without Using Props ..//
// Create Context means Jith aapl main file ch configuration asnar tithech use honar ../
// Create Context ekdach use honar jithe aapl main file ch configuration asnar tithe ch ../
