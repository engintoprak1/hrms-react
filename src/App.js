import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import {Container} from 'semantic-ui-react';
import Navi from './layouts/Navi.jsx'

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className='main'>
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
