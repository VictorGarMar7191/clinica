import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Landing from './containers/landing/landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogInPacient from "./components/LonInPacient/LogInPacient";
import PacientCard from "./components/PacientCard/PacientCard"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/inicio" component={Landing} />
        <Route exact path="/log-in-pac" component={LogInPacient} />
        <Route exact path="/paciente1" component={PacientCard} />
        </Switch>
     
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
