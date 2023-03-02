import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

function Transaction({ transaction, index }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`${API}transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
      <tr>
        <td>{transaction.date}</td>
        <td>
          <h4>{transaction.category.toUpperCase()}</h4>
        </td>
        <td>&nbsp;{transaction.amount}</td>
        <td>
          <Link to={`/transactions/${index}`}>
            <h5>{`${transaction.item_name}`}</h5>
          </Link>
        </td>
        <td>
          <Link to={`/transactions/${index}/edit`}>🧩</Link>
        </td>
        <td>
          <Link to={`/`} onClick={handleDelete}>
            🧨
          </Link>
        </td>
      </tr>
    
  );
}

export default Transaction;
