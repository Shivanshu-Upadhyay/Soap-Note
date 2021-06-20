import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Assessment from './Assessment';
import Plan from './Plan';
import Subjective from './Subjective';
import Objective from './Objective';
import Menu from './Menu';
import './index.css'
const App = () => {

return(

          <>
          <div className='mb-3'> <Menu  /></div>
              
          <Switch>

            <Route exact path='/'  component={Subjective}/>
            <Route  path='/objective'  component={Objective} />
            <Route  path='/assessment'  component={Assessment}/>
            <Route  path='/plan'  component={Plan}/>
          </Switch>
           
           

         </>
)
};

export default App;