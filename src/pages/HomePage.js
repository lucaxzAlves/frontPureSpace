import React from "react";

import { PlacesProvider } from "../placesContext";
import Header from "../components/header";
import InitialPage from "../sectionComponents/initialPage";
import Map from "../sectionComponents/Map";
import Graphic from "../sectionComponents/Graphic";
import About from "../sectionComponents/About";


import '../styles/globalstyle.css'



function HomePage() {
  return (
   <>
    <PlacesProvider>
    <Header/>

   <InitialPage/> 
    <Map/>
    <Graphic/>
   <About/>
   </PlacesProvider>
    </>
  );

}

export default HomePage;
