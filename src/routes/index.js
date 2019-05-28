import React, { Fragment } from 'react';
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
    <Route
      render={() => (
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route path="/tvs" component={TVs} />
            <Route exact path="/tv/:id" component={TV} />
            <Route path="/persons" component={Persons} />
            <Route path="/person/:id" component={Person} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      )}
    />
);

export default Routes;
