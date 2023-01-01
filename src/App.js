import logo from './logo.svg';
import './App.css';
// color 5fe4c9
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Skills } from './Pages/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <About/>
    </div>
  );
}

export default App;
