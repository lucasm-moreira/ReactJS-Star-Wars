import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";

import { Container, Dimmer, Loader } from "semantic-ui-react";

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Planets from "./components/Planets";
import People from "./components/People";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const myHeader = new Headers();

  myHeader.append("Access-Control-Allow-Origins", "*");

  useEffect(() => {
    /** 
     * a primeira é feita com IIFE e a segunda é utilizando função normalmente
     * função assíncrona para capturar dados dos personagens do star wars
     * quando os dados estiverem prontos (let data = await res.json())
     * setamos o state people com data.results
     */

     async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  return (
      <div className="bg">
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading...</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/personagens">
                <People data={people} /> {" "}
                {/** Passa a prop people para outros componentes usarem */}
              </Route>
              <Route exact path="/planetas">
                <Planets data={planets}/> {" "}
                {/** Passa a prop planets para outros componentes usarem */}
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </div>
  )
}

export default App;
