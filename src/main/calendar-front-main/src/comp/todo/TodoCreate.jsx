import React, {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as CloseIcon} from '../../assets/icon/Close.svg';

function TodoCreate(props) {

const [userTodo, setUserTodo] = useState([]);
const [title, setTitle] = useState("");
const [memo, setMemo] = useState("");

    const onWriteTitle = (e) => {
        setTitle(e.target.value);
    };
    const onWriteMemo = (e) => {
        setMemo(e.target.value);
    };

const onSubmit = (e) => {
    e.preventDefault();
    setUserTodo((userTodoData) => {
        return [
            ...userTodoData,
            {
                title: {title},
                memo: {memo},
            },
        ];
    });
    if (title === "" && memo === ""){
        alert("내용을 입력하세요");
    }
    else{
        alert("제목 : " + title + "메모 : " + memo);
        window.location.replace("/");
        setTitle("");
        setMemo("");
        console.log({userTodo});
    }
    
};
    return (
        <TodoBack>
            <TodoFrame>
            <Header>
            <CloseIcon onClick={() => window.location.replace("/")} />
            </Header>
            <DateFrame>
                    <TodoDate>2024 3월 4일</TodoDate>
                    <TodoTime>시간 :  09 : 30</TodoTime>
                </DateFrame>
                <TodoTitle
                placeholder="제목"
                type="text" 
                value={title} 
                onChange={onWriteTitle}
                />
                <TodoMemo
                type="text" 
                value={memo} 
                onChange={onWriteMemo}
                />
                <TodoSubmit onClick={onSubmit}>확인</TodoSubmit>
            </TodoFrame>
        </TodoBack>

    );
}

export default TodoCreate;

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
    justify-content: space-around;
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
const TodoDate = styled.div`
    font-size: 2em;
    font-weight: 700;
    `;

const TodoTime = styled.div`
    font-size: 1.025em;
    margin-top : 0.5em;
    `;

const TodoTitle = styled.input`
    width: 100%;
    height : 10%;
    border-radius : 3em;
    background-color:#E6E7F0;
    padding-left : 1em;
    border : none;
    `;

const TodoMemo = styled.textarea`
    width: 100%;    
    height : 50%;
    border-radius : 3em;
    background-color:#E6E7F0;
    border : none;
    padding : 1.5em;
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

