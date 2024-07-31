import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Products from "./pages/Products/Products";
import { AppProvider } from "./AppContext";
import Card from "./components/Card/Card";

export default function App() {
  return (
    <div>
      <AppProvider>
        <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/card" element={<Card />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </AppProvider>
    </div>
  );
}