import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App';
import About from './components/About';
import ListPage from './containers/ListPage';
import Home from './containers/Home/Home';
// import MoveSort from './containers/Movesort/Movesort';

export default(
    <Route path='/' component={App}>
        <IndexRedirect to='/home'/>
        <Route path='/about' component={About}/>
        <Route path='/list' component={ListPage}/>
        <Route path='/home' component={Home}/>
		// <Route path='/sort-your-move' component={MoveSort}/>
    </Route>
);
