import { Link } from "react-router-dom";
import home from "../assets/home.png";

export default function FooterTrash() {
  return (
    <footer className="footer-section">
      <Link to="/">
        <button className="icon-button">
          <img src={home} width="70px" alt="Home Icon" />
        </button>
      </Link>
    </footer>
  );
}
