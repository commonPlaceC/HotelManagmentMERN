import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      <Button className='update-button'>Update</Button>
    </div>
  );
}

export default App;
