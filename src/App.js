import logo from './logo.svg';
import './App.css';
// import Home from './container/Pages/Home';
import Home from './container/Pages/Home';
import Routers from './container/Pages/Routers';
import Header from './component/Header';

const App=()=> {
  return (
    <div className="App">
      {/* <Home /> */}
      
      <Header />
      
      <Routers />
      
    </div>
  );
}

export default App;
