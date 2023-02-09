import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import {Switch, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
          <Route component={Body} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
