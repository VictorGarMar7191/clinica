import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Landing from './components/landing/landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogInPacient from "./containers/LonInPacient/LogInPacient";
import DoctorContainer from './containers/DoctorContainer/DoctorContainer';
import PacientCard from "./containers/PacientCard/PacientCard";
import ConsultForm from "./components/consultForm/consultForm";
import LogInMedContainer from './containers/LogInMedContainer/LogInMedContainer'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/inicio" component={Landing} />
        <Route exact path="/log-in-pac" component={LogInPacient} />
        <Route exact path="/register-doctor" component={DoctorContainer} />
        <Route exact path="/login-doctor" component={LogInMedContainer} />
        <Route exact path="/Consulta" component={ConsultForm} />
        <Route exact path="/paciente1" component={PacientCard} />
        </Switch>

        <Footer />

      </BrowserRouter>
  );
}

export default App;
