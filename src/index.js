import ReactDOM from "react-dom"
import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interest from "./components/Interest"
import "./App.css"

function App(){
    return(
        <div className="mobile">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    App(),
    document.getElementById("root")
)