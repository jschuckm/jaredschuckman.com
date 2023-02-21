import React from "react";
import ReactDOM from "react-dom";
import Header from "host/Header";
import Footer from "host/Footer";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header></Header>
    <div>Name: remote</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Footer></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
