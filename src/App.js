import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  const [page, setPage] = useState(Home)

  return (
    <>
    <section id="main" className="container-fluid d-flex flex-column justify-content-between bg-dark">
      <div>
        <Header
        page = {page}
        setPage = {setPage}
        />
      </div>
      {page}
      <Footer/>
    </section>  
    </>
  );
}

export default App;
