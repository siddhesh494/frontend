import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import Navbar from '../../utilities/Navbar/Navbar'
import LandingPage from '../LandingPage/LandingPage'

const PageRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage/>
            )}
          />
        </Switch>
      </BrowserRouter>
      
      
    </div>
  )
}

export default PageRouting