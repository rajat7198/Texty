import './App.css';
import React from 'react';
// import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  // const [alert, setAlert] = useState(null)

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   })
  // }
  return (
    <>
      <Router>
        <Navbar title='Texty' />
        {/* <Alert alert={alert} /> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
