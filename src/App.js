import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
// import resumeData from './components/resumeData';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/portfolio' component={Home} exact/>
        <Route path='/contact' component={Contact} exact />
        <Route path='/about' component={About} exact />
        <Route path='/portfolio' component={Portfolio} exact />
        <Route path='/testimonials' component={Testimonials} exact />
      </Switch>
    {/* <Home /> */}
    <Footer />
    </Router>
  );
}

export default App;
