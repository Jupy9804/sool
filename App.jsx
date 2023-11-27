import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Main from './Main';
//import Sub1 from "./Sub1";
import Sub2 from "./Sub2";



 function App(props) {
  
  return (
    <div>

        <Router>
          <Routes>
              <Route exact path="/" element={<Sub2 />}></Route>
            
          </Routes>
        </Router>
        </div>
    
  );
}

export default App;