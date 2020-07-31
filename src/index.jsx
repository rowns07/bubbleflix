import React from 'react';
import ReactDOM from 'react-dom';
import './styles/settings/color.css';
import './styles/reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// adicionar um joguinho
const P404 = () => (<div style={{ fontSize: 18 }}>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={P404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
