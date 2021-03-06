import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'
import AssistantMainPage from './components/assistant/assistant-main-page/AssistantMainPage'
import IncidencePage from './components/assistant/incidence-page/IncidencePage';
import IncidencesPage from './components/assistant/incidences-page/IncidencesPage';



function App() {
  return (
    <Router>
      <div>
        <h1 className="text-4xl">DocTheSolve</h1>
        {/* Menu de navegación */}
        <nav>
          <ul>
            <li className="inline mx-2 text-gray-500">
              <Link to="/">Inicio</Link>
            </li>
            <li className="inline mx-2 text-gray-500">
              <Link to="/incidences">Tabla de Incidencias</Link>
            </li>
          </ul>
        </nav>
        
        {/* Routing */}
        <Switch>
          <Route exact path="/">
            <AssistantMainPage />
          </Route>
          <Route exact path="/incidences">
            <IncidencesPage />
          </Route>
          <Route path="/incidences/:id">
            <IncidencePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
