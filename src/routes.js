import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import App from './containers/App';
import About from './components/About';
import ListPage from './containers/ListPage';
import Home from './containers/Home/Home';
// import MoveSort from './containers/MoveSort/MoveSort';
import Gas from './containers/MoveSort/Gas/Gas';
import Electric from './containers/MoveSort/Electric/Electric';
import Details from './containers/MoveSort/Details/Details';
import Television from './containers/MoveSort/Television/Television';
import Water from './containers/MoveSort/Water/Water';

export default(
    <Route path='/' component={App}>
        <IndexRedirect to='/home'/>
        <Route path='/about' component={About}/>
        <Route path='/list' component={ListPage}/>
        <Route path='/home' component={Home}/>
		<Route path='/sort-your-move'>
            <IndexRoute component={Details}/>
            <Route path='details' component={Details}/>
            <Route path='gas' component={Gas}/>
            <Route path='electric' component={Electric}/>
            <Route path='television' component={Television}/>
            <Route path='water' component={Water}/>
        </Route>
    </Route>
);
