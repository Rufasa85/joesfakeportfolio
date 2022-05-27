import React from "react";
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NavTabs from "./components/NavTabs"
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
                <NavTabs/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/:thing" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;
