import React from 'react';
import Button from '../Button/Button';
import './drinks.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom';
import BuscarDrinks from './BuscarDrinks.js';

const Drinks = () => {

    return (
        <div className="api">
            <section className="cabecalho">
                <div>
                    <h1 className="drinkAnim">
                        Drinks
                    </h1>
                </div>
            </section>
            <section className="conteudoDrink">
                <Switch>
                    <Route path="/drinks/buscar">
                        <BuscarDrinks />
                    </Route>
                </Switch>
            </section>
        </div>
    )
}

export default Drinks