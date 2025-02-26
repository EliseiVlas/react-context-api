// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// importiamo il contesto creato (global)
import GlobalContext from "./context/GlobalContest";

// gestione dati pizze per listato
import { useState, useEffect } from 'react';
import axios from "axios";

// pages
import PostCard from "./pages/PostCard";
import PostList from "./pages/PostList";
import PostPage from "./pages/PostPage";
import ChiSiamo from "./pages/ChiSiamo";
import About from "./pages/About";





function App() {

      // stato dei piatti
      const [piatti, setPiatti] = useState([]);


      // funzione di gestione chiamata all'API
      function fetchPiatti() {
          axios.get("http://localhost:3000/piatti/")
              .then((res) =>
                  setPiatti(res.data)
              )
      }
  
      // Solo al primo rendering
      useEffect(fetchPiatti, []);

  return (
    <GlobalContext.Provider value={piatti}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PostPage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/about" element={<About />} />
            <Route path="/Ristorante" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter >
    </GlobalContext.Provider>
  )
}

export default App
