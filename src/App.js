import './App.css';
import Header from "./dumbComponents/Header";
import Body from "./dumbComponents/Body";
import About from "./dumbComponents/About"
import Projects from "./dumbComponents/Projects"
import Contact from "./dumbComponents/Contact"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import { BlogPostsConnector } from './connectors/blogPostsConnector';

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
          <Route path="/blog" component={BlogPostsConnector}/>
          <Route component={Body} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
