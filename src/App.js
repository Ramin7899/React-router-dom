import './App.css';
import { BrowserRouter, Route, Router, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';



const App = () => {


  return (
    <div className="App">
      <h3>
        React Router Dom
      </h3>

      <nav style={{ borderBottom: "1px solid", paddingBottom: "1rem" }}>
        <Link to="/books">Books</Link>
        <Link to="/about">About us</Link>

      </nav>
      <Outlet />
    </div>
  );
}

export default App;
