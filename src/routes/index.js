import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  Movies,
  Movie,
  TVs,
  TV,
  About,
  Persons,
  Person,
  NotFound,
} from 'pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/movies" component={Movies} />
    <Route path="/movie/:id" component={Movie} />
    <Route path="/tvs" component={TVs} />
    <Route path="/tv/:id" component={TV} />
    <Route path="/persons" component={Persons} />
    <Route path="/person/:id" component={Person} />
    <Route path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
