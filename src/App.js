import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { CreatePie, EditPie, Home } from './pages';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-navbar">
        <Navbar />
      </header>
      <div className="app-body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<CreatePie />} />
          <Route path="/edit/:id" element={<EditPie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
