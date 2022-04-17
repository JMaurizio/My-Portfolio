import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  const [page, setPage] = useState(Home)

  return (
    <>
    <section className="container-fluid d-flex flex-column">
      <div className="d-flex justify-content-end mb-2">
        <Header
        page = {page}
        setPage = {setPage}
        />
      </div>
      {page}
    </section>  
    </>
  );
}

export default App;
