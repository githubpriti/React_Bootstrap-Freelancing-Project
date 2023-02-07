import React from "react";
import NavBar from "./NavBar";
import MasterHead from "./MasterHead";
import PortFolio from "./PortFolio";
import About from "./About";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Copyright from "./Copyright";

const App = () => {
    return(
        <div>
            <NavBar/>
            <MasterHead/>
            <PortFolio/>
            <About/>
            <ContactSection/>
            <Footer/>
            <Copyright/>
        </div>
    )
}
export default App;