import Pages from "./pages/Pages";
import Recipe from './pages/Recipe'
import { Routes, Route, useLocation } from 'react-router-dom'
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import { useEffect } from "react";


function App() {
  /* let location = useLocation();
  useEffect(()=>{
    console.log(location)
  },[location]); */


  return (
    <Routes>
      <Route path='/splide' element={ <Pages/> }></Route>

      <Route path='/' element={ <Pages/> }/>
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path='/searched/:keyword' element={<Searched/>}/>
      <Route path='/recipe/:id' element={<Recipe/>}/>
      {/*  */}
  

    </Routes>
  );
}


export default App;
