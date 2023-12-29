import { Container } from "react-bootstrap";
import { Movieslist } from "./components/Movieslist";
import MovieDetails from "./components/MovieDetails";
import { Navbar2 } from "./components/Navbar-2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navbar2 />} />
        </Routes>
        <Container>
          <Routes>
            <Route path={`/`} element={<Movieslist />} />
            <Route path="/Movies/:id" element={<MovieDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
