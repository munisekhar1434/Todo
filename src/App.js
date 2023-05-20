import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Dashbord from './components/Dashbord';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TodoWrapper  />
       {/* <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/dashbord" element={<Dashbord/>} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    
    </div>
  );
}

export default App;
