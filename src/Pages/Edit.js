import EditTransaction from "../Components/EditTransaction";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

function Edit() {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
  });

  const { index } = useParams();

  useEffect(() => {
    axios.get(`${API}transactions/${index}`).then((res) => {
      setTransaction(res.data);
    });
  }, [index]);

  return (
    <div>
      Edit Page
      <EditTransaction transaction={transaction} setTransaction={setTransaction} index={index} />
    </div>
  );
}

export default Edit;
