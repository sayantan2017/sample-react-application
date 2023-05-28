import logo from './logo.svg';
import './App.css';
import Layout from '../src/components/Shared/Layout';
import AllBrand from './pages/AllBrand';
import AddSuperBrand from './pages/AddSuperBrand';
import UpdateSuperBrand from './pages/UpdateSuperBrand';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Layout>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<AllBrand />} />
        <Route path="/superbrand-create" element={<AddSuperBrand />} />
        <Route path="/superbrand-update/:id" element={<UpdateSuperBrand />} />
        </Routes>
      </BrowserRouter>
  </Layout>
  );
}

export default App;
