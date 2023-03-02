import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//COMPONENTS
import NavBar from "./Components/Navbar.js";

//PAGES
import Edit from "./Pages/Edit";
import Index from "./Pages/Index.js";
import Landing from "./Pages/Landing";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";
import FourOFour from "./Pages/FourOFour";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
