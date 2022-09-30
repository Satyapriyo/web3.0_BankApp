import React from "react";
import "./index.css";
import { Navbar, Footer, Services, Transactions, Welcome } from "./components";
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradients-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
