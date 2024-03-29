import React, { useState} from 'react';
import {ReactComponent as CloseIcon} from '../../assets/icon/Close.svg';
import TodoCalendar from './TodoCalendar';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

function TodoCreate( element,setComplete,) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const [todo, setTodo] = useState({
        title : '',
        content : '',
        date: moment(selectedDate).format('YYYYMMDD'),
        hou : '',
        min : '',
    });

    const {title,content,hou,min} = todo; //비구조화 할당


    const onChange = (e) => {
        const { name, value } = e.target; //event.target에서 name과 value만 가져오기
        setTodo({
            ...todo,
            [name]: value,
        });
    };
    const saveTodo = async () => {
        await axios.post('api/todos', todo)
            .then((res) => {
                alert('등록되었습니다.');
                window.location.replace("/");
            })
            .catch(error => {
                console.error('오류 발생:', error.response);
                alert('등록에 실패했습니다.');
            });
    };


    const openCalendar = () => {
        setIsCalendarOpen(true);
      };
    
      const closeCalendar = () => {
        setIsCalendarOpen(false);
      };
    
      const handleCalendarSelect = (date) => {
        setSelectedDate(date);
          setTodo({
              ...todo,
              date: moment(date).format('YYYYMMDD'),
          })
        closeCalendar();
      };    

    return (
        <TodoBack>
            <TodoFrame>
            <Header>
            <CloseIcon onClick={() => window.location.replace("/")} />
            </Header>
            <DateFrame>
            <TodoDate name="date"
                      value={moment(selectedDate).format('YYYY년 MM월 DD일')}
                      onClick={() => {
                          openCalendar();
                      }} >
                {moment(selectedDate).format('YYYY년 MM월 DD일')}
            </TodoDate>

                <TimeFrame>
                    <TodoTime
                        placeholder="00"
                        type="text"
                        name="hou"
                        value={hou}
                        onChange={onChange}>
                    </TodoTime>
                    <span style={{marginLeft : '0.25em'}}>시</span>
                    <TodoTime
                        style={{marginLeft:'0.25em'}}
                        placeholder="00"
                        type="text"
                        name="min"
                        value={min}
                        onChange={onChange}>
                    </TodoTime>
                    <span style={{marginLeft:'0.25em'}}>분</span>
                </TimeFrame>
            </DateFrame>

            <TodoTitle
                placeholder="제목"
                type="text"
                name="title"
                value={title}
                onChange={onChange}
            />
            <TodoMemo
                type="text"
                name="content"
                value={content}
                onChange={onChange}
            />

            <TodoSubmit onClick={saveTodo}>확인</TodoSubmit>
            </TodoFrame>
            {isCalendarOpen && (
             <TodoCalendar onSelectDate={handleCalendarSelect} />
             )}
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

const TodoTime = styled.input`
    width: 10%;
    height : 100%;
    border-radius : 1em;
    background-color:#E6E7F0;
    padding-left : 1em;
    border : none;
    `;

const TodoTitle = styled.input`
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

