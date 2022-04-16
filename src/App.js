import './App.css';
import Header from './components/Header';
import Header2 from './components/Header2';
import Laptop from './components/Laptop'
import LapGrid from './components/Lapgrid'
import Footer from './components/Footer';
import Headerimg from './components/Headerimg';

function App() {
  return (
    <div className="App">
      <Header/>
      <Header2/>
      <Headerimg/>
      <Laptop/>
      <LapGrid/>
      <Footer/>
    </div>
  );
}

export default App;
