import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
      render={({ location }) => (
        <Fragment>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={300}>
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
            </CSSTransition>
          </TransitionGroup>
        </Fragment>
      )}
    />
);

export default Routes;
