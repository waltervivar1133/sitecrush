import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from "react-router-dom";
import { Compartir } from "../pages/Creation/Compartir";

// pages 

import { Home  } from '../pages/Creation/Home';
import { Proposito } from "../pages/Creation/Proposito";
import { Reto } from "../pages/Creation/Reto";
import { Tiempo } from "../pages/Creation/Tiempo";
import { Variables } from "../pages/Creation/Variables";
import { NombreInicial } from "../pages/Game/NombreInicial";
import { SalaEspera } from "../pages/Game/SalaEspera";
import { Ideacion } from "../pages/Game/Ideacion";
import { IdeacionScrumper } from "../pages/Game/IdeacionScrumper";


export const AppRouter = () => {
  return (
    <div>
      <Router>
      <div>
         <Switch>
            <Route
              path="/"
              component= { Home }
              exact
            />
            <Route
              path="/reto"
              component= { Reto }
              exact
            />
              <Route
              path="/variables"
              component= { Variables }
              exact
            />
             <Route
              path="/proposito"
              component= { Proposito }
              exact
            />
            <Route
              path="/tiempo"
              component= { Tiempo }
              exact
            />
            <Route
              path="/compartir"
              component= { Compartir }
              exact
            />
            <Route
              path="/nombre"
              component= { NombreInicial }
              exact
            />
             <Route
              path="/salaespera"
              component= { SalaEspera  }
              exact
            />
             <Route
              path="/ideacion"
              component= { Ideacion  }
              exact
            />
              <Route
              path="/ideacionscrumper"
              component= { IdeacionScrumper  }
              exact
            />
            
         </Switch>
      </div>
    </Router>
    </div>
  )
}
