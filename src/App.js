import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  const [page, setPage] = useState(Home)

  return (
    <>
    <section className="d-flex flex-column">
      <div className="d-flex justify-content-end">
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
