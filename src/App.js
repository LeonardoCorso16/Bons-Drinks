import './assets/App.css';
import Navbar from './Componentes/Header/Navbar.js';
import Contato from './Componentes/Contato/Contato.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Componentes/Home/Home';
import Drinks from './Componentes/Drinks/Drinks';
import NossoTime from './Componentes/Time/NossoTime';
import SobreNos from './Componentes/Sobre/SobreNos';
import Input from './Componentes/Input/Input';
import Footer from './Componentes/Footer/Footer';


function App() {
  return (
    <div className="divMaior">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/time">
            <NossoTime className="conteudo" />
          </Route>
          <Route path="/contato">
            <Contato className="conteudo" />
          </Route>
          <Route path="/sobre">
            <SobreNos className="conteudo" />
          </Route>
          <Route path="/drinks/">
            <Drinks className="conteudo" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;