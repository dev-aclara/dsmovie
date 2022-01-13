import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from "./components/pages/Listing";
import Form from "./components/pages/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Componente Navbar*/} 
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;