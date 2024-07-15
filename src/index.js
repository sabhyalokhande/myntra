import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ProductPage from './views/product-page'
import SellerFormEcochic from './views/seller-form-ecochic'
import TryOn from './views/try-on'
import TryOnPhone from './views/try-on-phone'
import Addoutfit from './views/addoutfit'
import Home from './views/home'
import Fitplanner from './views/fitplanner'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ProductPage} exact path="/product-page" />
        <Route
          component={SellerFormEcochic}
          exact
          path="/seller-form-ecochic"
        />
        <Route component={TryOn} exact path="/try-on" />
        <Route component={TryOnPhone} exact path="/try-on-phone" />
        <Route component={Addoutfit} exact path="/addoutfit" />
        <Route component={Home} exact path="/" />
        <Route component={Fitplanner} exact path="/fitplanner" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
