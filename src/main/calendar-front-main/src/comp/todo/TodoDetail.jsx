import React ,{useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {ReactComponent as CloseIcon} from '../../assets/icon/Close.svg';


const TodoDetail = () => {

    const { date } = useParams(); // /todos/:id와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState({});

    const getTodo = async () => {
        const resp = await (await axios.get(`/api/todos`));
        setTodo(resp.data);
        setLoading(false);
    };


    useEffect(() => {
        getTodo();
    }, [date]);

    return (
        <TodoBack>
            <TodoFrame>
                <Header>
                    <CloseIcon onClick={() => window.location.replace("/")} />
                </Header>
                <DateFrame>
                    <TodoDate name="date">
                    </TodoDate>

                    <TimeFrame>
                        <TodoTime>
                        </TodoTime>
                        <span style={{marginLeft : '0.25em'}}>시</span>
                        <TodoTime>
                        </TodoTime>
                        <span style={{marginLeft:'0.25em'}}>분</span>
                    </TimeFrame>
                </DateFrame>

                <TodoTitle/>
                <TodoMemo/>

                <TodoSubmit onClick={() => window.location.replace("/")} >닫기</TodoSubmit>
            </TodoFrame>
        </TodoBack>
    )}
export default TodoDetail;

const Header = styled.div`  
    display : flex;
    justify-content: flex-end;
    width : 100%;
    `;

const TodoBack = styled.div`
    display:flex;
    justify-content:center;
    align-items: center; 
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: rgba(0, 0, 0, 0.5);  
    `;

const TodoFrame = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; 
    width:300px;
    height: 70%;
    border-radius : 3em;
    background-color:#ffffff;
    padding: 3em 2.5em;
    `;

const DateFrame = styled.div`
    width : 100%;
    display:flex;
    flex-direction: column;
    `;

const TimeFrame=styled.div`
    width: 100%;
    display: flex;
    font-size: 1.025em;
    margin-top : 0.5em;
    `;

const TodoDate = styled.div`
    font-size: 2em;
    font-weight: 700;
    `;

const TodoTime = styled.div`
    width: 10%;
    height : 100%;
    border-radius : 1em;
    background-color:#E6E7F0;
    padding-left : 1em;
    border : none;
    `;

const TodoTitle = styled.div`
    width: 100%;
    height : 10%;
    border-radius : 2em;
    background-color:#E6E7F0;
    padding-left : 1em;
    border : none;
    `;

const TodoMemo = styled.textarea`
    width: 100%;    
    height : 40%;
    border-radius : 2em;
    background-color:#E6E7F0;
    border : none;
    padding : 1em;
    resize: none;
    `;

const TodoSubmit = styled.div`
    display : flex;
    justify-content:center;
    align-items: center; 
    text-align : center;
    width: 25%;    
    height : 8%;
    border-radius : 3em;
    background-color:#208DFB;
    color:#ffffff;
    `;

