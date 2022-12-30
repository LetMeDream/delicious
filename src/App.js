import Pages from "./pages/Pages";
import Recipe from './pages/Recipe'
import { Routes, Route, useLocation } from 'react-router-dom'
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import { useEffect } from "react";
import { AnimatePresence } from 'framer-motion'


function App() {
  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  },[location]);


  return (
    <AnimatePresence exitBeforeEnter >
      <Routes location={location} key={location.pathname}>
        <Route path='/delicious' element={ <Pages/> }></Route>

        <Route path='/' element={ <Pages/> }/>
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path='/searched/:keyword' element={<Searched/>}/>
        <Route path='/recipe/:id' element={<Recipe/>}/>
        {/*  */}
    

      </Routes>
    </AnimatePresence>
  );
}


export default App;
