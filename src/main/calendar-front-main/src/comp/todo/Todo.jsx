import React, {useEffect} from 'react';
import axios from "axios";

function Todo(props) {
    const getTodoList = async () => {
        const resp = (await axios.get('//localhost:8080/todo')).data
        console.log(resp.data)
      }

      useEffect(() => {
        getTodoList(); 
      }, []);

    return (
        <div>
            투두 목록 출력
        </div>
    );
}

export default Todo;