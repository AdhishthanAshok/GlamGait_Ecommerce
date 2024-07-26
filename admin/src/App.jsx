import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Admin from "./Components/Admin.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dark:bg-gray-800">
      <Navbar />
      <Admin />
    </div>
  );
}

export default App;
