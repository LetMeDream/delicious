import Pages from "./pages/Pages";
import { Routes, Route, useLocation } from 'react-router-dom'
import Cuisine from "./pages/Cuisine";
import { useEffect } from "react";


function App() {
  /* let location = useLocation();
  useEffect(()=>{
    console.log(location)
  },[location]); */


  return (
    <Routes>
      <Route path='/splide' element={ <Pages/> }></Route>

      <Route path='/' element={ <Pages/> }></Route>
      <Route path="/cuisine/:type" element={<Cuisine />} />
      {/*  */}
  

    </Routes>
  );
}


export default App;
