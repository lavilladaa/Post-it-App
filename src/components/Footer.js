import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import trash from "./assets/trash.png";

export default function Footer() {
  const deletedList = useSelector((state) => state.note.deletedList);
  const length = deletedList.length;

  const alertTrash = () => {
    alert("The Trash is empty");
  };

  return (
    <div>
      {length > 0 ? (
        <footer className="footer-section">
          <Link to="/trash">
            <button className="image-button">
              {/* <img src={binFull} width="80px" alt="Bin Full" /> */}
              <div className="trash-count">{length}</div>
            </button>
          </Link>
        </footer>
      ) : (
        <footer className="footer-section">
          {/* <Link to="/trash"> */}
          <button className="icon-button" onClick={alertTrash}>
            <img src={trash} width="65px" alt="Trash" />
          </button>
          {/* </Link> */}
        </footer>
      )}
    </div>
  );
}
