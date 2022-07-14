import picture from "../images/IMG_20201108_125432_850.jpg"
import email from "../images/icons8-mail-16.png"

export default function Info(){
    return(
        <header>
            <img src={picture} alt="pic" className="pic"/>
            <div className="header">
                <h3>Emenike Ifeanyi</h3>    
                <h4>Frontend Developer</h4> 
                <h5>https://deathg7n.github.io/Portfolio/</h5>    
                <button className="button_email"><div className="flex-box"><img className="email_pic" src={email} alt="email"/>Email</div></button>   
            </div>
        </header>
        
    )
}
