import { useState } from "react";
import "./App.css";
import postcodes from "./postcodes.json";
function App() {
  const [search, setsearch] = useState("");
  const [valid, setvalid] = useState(false);

  const handleChange = (e) => {
    setsearch(e.target.value);
    if (postcodes.includes(e.target.value.replace(/\s/g, "").toUpperCase())) {
      setvalid(true);
    } else {
      setvalid(false);
    }
  };
  return (
    <div className={`App ${valid ? "valid" : "notvalid"}`}>
      <h1>CPCA postcode checker</h1>
      <input type="text" onChange={handleChange} placeholder="Postcode" />
      {valid && search !== "" && <p>{search.toUpperCase()} is a valid CPCA postcode!</p>}
      {!valid && search !== "" && <p>{search.toUpperCase()} is not a valid CPCA postcode!</p>}
      {search === "" && <p className="hidden-message">Hidden message. Nice catch.</p>}
      <a href="https://timjs.netlify.app" className="timjs" target="_blank" rel="noreferrer">
        t:mJS
      </a>
    </div>
  );
}

export default App;
