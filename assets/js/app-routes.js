var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./components/main.js');
var Home = require('./components/pages/home');
var Tournament = require('./components/pages/tournament');
var DoubleTournament = require('./components/pages/doubletournament');
var Schedule = require('./components/pages/schedule');
var Rules = require('./components/pages/rules');
var Players = require('./components/pages/players');
var Live = require('./components/pages/live');

/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="tournament" handler={Tournament} addHandlerKey={true}/>
    <Route name="doubles" handler={DoubleTournament} addHandlerKey={true}/>
    <Route name="players" handler={Players} addHandlerKey={true}/>
    <Route name="schedule" handler={Schedule} addHandlerKey={true}/>
    <Route name="rules" handler={Rules} addHandlerKey={true}/>
    <Route name="live" path="video" handler={Live} addHandlerKey={true}/>
    <DefaultRoute handler={Home} addHandlerKey={true} name="home"/>
  </Route>
);

module.exports = AppRoutes;
