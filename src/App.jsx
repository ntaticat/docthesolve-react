import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'
import { AssistantMainPage } from './components/assistant/assistant-main-page/AssistantMainPage'
import { IncidencesPage } from './components/assistant/incidences-page/IncidencesPage'


function App() {
  return (
    <Router>
      <div className="">
        <h1>DocTheSolve</h1>
        {/* Menu de navegación */}
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/incidences">Incidencias</Link>
            </li>
          </ul>
        </nav>
        
        {/* Routing */}
        <Switch>
          <Route exact path="/">
            <AssistantMainPage />
          </Route>
          <Route path="/incidences">
            <IncidencesPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
