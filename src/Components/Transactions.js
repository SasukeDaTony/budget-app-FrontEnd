import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import Transaction from "./Transaction";

const API = process.env.REACT_APP_BASE_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  // const [amount, setAmount] = useState(0);
  // const { index } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

 

  return (
    <div className="transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>Year-Month-Day</th>
              <th>Type</th>
              <th>Amount</th>
              <th>From</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
