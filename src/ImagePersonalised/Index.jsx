import React from "react"
import "./Index.css"
import "./animation.css"
import Header from "./Components/Header"
import Tool from "./Components/Tool"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

export default function App(){
    return <><div className="_ii">
        <div className="_padding_top_left_right">
        <Header />
        <Tool />
        <Main />
        </div>
        <Footer />
    </div>
    </>
}