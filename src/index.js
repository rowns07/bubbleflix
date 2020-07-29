import React from 'react';
import ReactDOM from 'react-dom';
import './styles/settings/color.css';
import './styles/reset.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';



// desafio adicionar game na pagina de erro
const P404 = () => (<div style={{ fontSize: 18 }}>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" component={Home} exact />

      {/* FORMA NORMAL DE IMPORTAR COMPONENTE NA ROTA */}
      <Route path="/cadastro/video"  >
        <CadastroVideo />
      </Route>
      {/* FORMA SIMPLIFICADA */}
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route component={P404} />


    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
