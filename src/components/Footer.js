import twitter from "../images/icons8-twitter-25.png"
import facebook from "../images/icons8-facebook-25.png"
import instagram from "../images/icons8-instagram-25.png"
import github from "../images/icons8-github-25.png"
import linkedin from "../images/icons8-linkedin-25.png"

export default function Footer(){
    return(
        <footer className="footer">
            <img src={twitter} alt="twitter logo"/>
            <img src={facebook} alt="facebook logo"/>
            <img src={instagram} alt="instagram logo"/>
            <img src={linkedin} alt="linkedin logo"/>
            <img src={github} alt="github logo"/>
            
        </footer>
    )
}