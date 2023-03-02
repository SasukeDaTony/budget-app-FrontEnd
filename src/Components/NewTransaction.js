import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_BASE_URL;

function NewTransaction() {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}transactions`, transaction)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="item_name">Transaction:</label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          onChange={handleTextChange}
          value={transaction.amount}
        />
        <br />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={transaction.category}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewTransaction;
