import { BrowserRouter } from 'react-router-dom';
import React from "react";
import AppRoutes from "./AppRoutes";


function App() {
  return(
    <div>
      <BrowserRouter>
      
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
