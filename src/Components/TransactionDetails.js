import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

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
    <div className="transaction-details">
      <div>
        <h3>Date Of Transaction:&nbsp;{transaction.date}</h3>
        <h4>Transaction : &nbsp;{transaction.item_name}</h4>
        <h6>From:&nbsp;{transaction.from}</h6>
        <h6>Amount:&nbsp;$&nbsp;&nbsp;{Number(transaction.amount)}</h6>
        <h6>Category Type:&nbsp;{transaction.category}</h6>
      </div>
      <button className="btn" onClick={handleDelete}>
        Delete
      </button>
      <button
        className="btn"
        onClick={() => {
          navigate("/transactions");
        }}
      >
        Back
      </button>
      <button
        className="btn"
        onClick={() => {
          navigate(`/transactions/${index}/edit`);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default TransactionDetails;
