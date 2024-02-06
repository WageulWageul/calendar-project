import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';

const MiniCalendar = styled.div`
    padding: 10px;   
    position: absolute;
    top: 36%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    background-color:#c5c7d9;
    border-radius : 1em;
    `;


function TodoCalendar({ onSelectDate }){
  const handleDateChange = (selectedDate) => {
    onSelectDate(selectedDate);
  };

  return (
    <MiniCalendar>
      <Calendar onChange={handleDateChange} />
    </MiniCalendar>
  );
};
export default TodoCalendar;
