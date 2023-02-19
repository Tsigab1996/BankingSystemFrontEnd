
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Container/Dashboard/Dashboard';





function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <h1 id="header"> G2 BANKING SYSTEM APPLICATION</h1>
      <Dashboard/>
     </BrowserRouter>
    </div>

   );
}

export default App;
