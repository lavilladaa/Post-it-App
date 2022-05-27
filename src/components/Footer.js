import {Link} from 'react-router-dom';
import binFull from "./assets/binFull.png"

export default function Footer(){
    return (
        <footer className="footer-section" >
        <Link to="/trash">
            <button className="binIcon-button">
                <img src={binFull} width="80px" alt="Bin Full"/>
            </button>
        </Link>
        </footer>
    )

}