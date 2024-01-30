import './App.css';
import Home from './comp/home/Home';
import Login from './comp/login/Login';
import TodoCreate from './comp/todo/TodoCreate';
import Register from './comp/login/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '././index.css';
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);
  return (
    <div className="App">
        백엔드 데이터 : {hello}
       <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/todo" element={<TodoCreate/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
