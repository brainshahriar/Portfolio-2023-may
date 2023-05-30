import "./home.scss";

import {Footer, Stackshare, Typewritter, Contact, Navbar, About} from "../../components/index";
import {GoogleAnalytics} from "../../components/organism/index.js";


export function Home() {
    return (
        <div className="p-home">
            <GoogleAnalytics />

            <Navbar/>
            <Typewritter/>
            <About />
            <Contact/>
            <Stackshare/>
            <Footer/>
        </div>
    );
}
