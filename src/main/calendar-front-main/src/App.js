import './App.css';
import Home from './comp/home/Home';
import Login from './comp/login/Login';
import TodoCreate from './comp/todo/TodoCreate';
import Register from './comp/login/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Todo from './comp/todo/Todo';
import TodoDetail from "./comp/todo/TodoDetail";

function App() {
  return (
    <div className="App">
       <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/> 
        <Route path="/detail:date" element={<TodoDetail/>} />
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
