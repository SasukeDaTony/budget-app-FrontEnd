import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();


  
  return (
    <div className="nav-container">
      <nav>
        <div className="logo-container">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="logo"
            src="https://i0.wp.com/www.additudemag.com/wp-content/uploads/2020/10/Budgeting_1920x1080.jpg?resize=1280%2C720px&ssl=1"
            width="200px"
            height="200px"
            alt="logo"
          />
        </div>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/transactions");
            }}
          >
            All Transactions
          </button>
          <button
            className="new-btn"
            onClick={() => {
              navigate("/transactions/new");
            }}
          >
            New Transaction
          </button>
        </div>
      </nav>
      <br/>
    </div>
  );
}
