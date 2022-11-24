import { Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Certificates from "../pages/Certificates"
import Education from "../pages/Education"
import Home from "../pages/Home"
import Proficiency from "../pages/Experience"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import { useHref } from 'react-router-dom'
import { useEffect } from "react"

const Main = ({ setIsShowing }) => {

    const urlChange = useHref()

    useEffect(() => {
        console.log("URL Changed to :" + urlChange)
        setIsShowing(true)
    }, [urlChange])



    return (
        <div className="bg-slate-200 h-screen overflow-y-scroll hideScrollBar">


            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/certificates' element={<Certificates />} />
                <Route path='/education' element={<Education />} />
                <Route path='/proficiency' element={<Proficiency />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Main