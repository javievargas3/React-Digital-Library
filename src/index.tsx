import React from 'react';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, BookInventory, Contact, About } from './components'
import { SignIn } from './components/SignIn/SignIn';
import './styles.css';


const temp_props = "Book Library"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} >
    <Provider store={store}>
    <Router>
      <Switch>


        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/BookInventory'>
          <BookInventory></BookInventory>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
				<Route path='/signin'>
          <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);