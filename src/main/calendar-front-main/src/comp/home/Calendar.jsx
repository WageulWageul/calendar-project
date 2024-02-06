
import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import styled from 'styled-components'
import { ReactComponent as LeftMonth } from "../../assets/icon/Left.svg";
import { ReactComponent as RightMonth } from "../../assets/icon/Right.svg";
import { ReactComponent as ProfileImg } from '../../assets/img/Profile.svg';





function Calendar(props){
    const navigate = useNavigate();

    const [getMoment, setMoment] = useState(moment())
    const [isYearScrollBarVisible, setYearScrollBarVisible] = useState(false);
    const [currentYear] = useState(getMoment.year());

    const today = getMoment
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const monthslist = Array.from({ length: 12 }, (_, index) => index + 1);

    const [plan, setPlan] = useState([]);

    const getTodoList = async () => {
        await axios.get('api/todos')
            .then(res => {
                const plan = res.data.map(item => item.date);
                setPlan(plan);
            })
            .catch(error => {
                console.error('오류 발생:', error.response);
                alert('실패했습니다.');
            });
    }

    useEffect(() => {
        getTodoList();
    }, []);
    const handleYearClick = () => {
        setYearScrollBarVisible(prevState => !prevState);
    };

    const yearRange = Array.from({ length: 41 }, (_, index) => currentYear - 20 + index);

    const calendarArr=()=>{

        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week}>
                    {Array(7).fill(0).map((data, index) => {
                        let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                        if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                            return (
                                <td key={index}
                                    style={{color: '#ffffff', borderRadius: '3em', backgroundColor: '#007DFA'}}>
                                    <span>{days.format('D')}</span>
                                    <div onClick={() => navigate(`/todos/detail/${days.format('YYYYMMDD')}`)}>
                                        {plan.includes(days.format('YYYYMMDD')) && <Dot/>}
                                    </div>
                                </td>
                            );
                        } else if (days.format('MM') !== today.format('MM')) {
                            return (
                                <td key={index}>
                                    <span style={{color:'silver'}}>{days.format('D')}</span>
                                </td>
                            );
                        }else{
                            return (
                                <td key={index}>
                                    <span>{days.format('D')}</span>
                                    <div onClick={() => navigate(`/todos/detail/${days.format('YYYYMMDD')}`)}>
                                        {plan.includes(days.format('YYYYMMDD')) && <Dot/>}
                                    </div>
                                </td>
                            );
                        }
                    })
                    }
                </tr>);
        }
        return result;
    }

    return (
        <>
            <ResponsiveHeaderFrame>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                    <Year onClick={handleYearClick}>{today.format('YYYY년')}</Year>
                    <YearScrollBar visible={isYearScrollBarVisible}>
                        {yearRange.map((year) => (
                            <YearOption onClick={() => {
                                setMoment(getMoment.clone().year(year));
                            }}
                                        key={year}>
                                {year}
                            </YearOption>
                        ))}
                    </YearScrollBar>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <LeftMonth style={{width:'30px',height:'30px' }} onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}/>
                        <Month>{today.format('MM월')}</Month>
                        <RightMonth style={{width:'30px',height:'30px' }} onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}/>
                    </div>
                </div>
                <ResponsiveMonthList>
                    {monthslist.map((month) => (
                        <MonthButton
                            onClick={() => {
                                setMoment(getMoment.clone().month(month - 1));
                            }}
                            key={month}
                        >
                            {month}
                        </MonthButton>
                    ))}
                </ResponsiveMonthList>
                <Link to='/login'>
                    <ProfileFrame>
                        <ProfileImg></ProfileImg>
                    </ProfileFrame>
                </Link>
            </ResponsiveHeaderFrame>
            <Cal_Container>
                <tr>
                    <th className='sun'>일</th>
                    <th>월</th>
                    <th>화</th>
                    <th>수</th>
                    <th>목</th>
                    <th>금</th>
                    <th className='sat'>토</th>
                </tr>
                {calendarArr()}
            </Cal_Container>
        </>
    )
}

export default Calendar;

const Dot = styled.div`
    height: 8px;
    width: 8px;
    background-color: #f87171;
    border-radius: 50%;
    margin-left: 50%;
    justify-content: center;
    align-items: center;
`;

const Cal_Container = styled.table`
  width: 100%;
  height : 100%;
  
  text-align: center;  
  font-size : 2rem;
  
  line-height: 2em;
  & > tbody > tr > td {
    border-radius : 3em;
  }
  th.sun {
    color: #F85959;
  }
  th.sat {
    color : #007DFA;
  }
`;
const Year = styled.div`
    font-size : 8vw;
    font-weight : 600;
    color : #2F3367;
    margin-right : 0.25em;
    white-space: nowrap;
    @media (max-width:1150px){
        font-size : 9.5vw;
    }
`;

const Month = styled.div`
    display : flex;
    align-items: center;
    font-size : 3vw;
    font-weight : 500;
    color : #2F3367;
    white-space: nowrap;

    @media (max-width:1150px){
        font-size : 5vw;
    }
`;



const MonthButton = styled.div`
    font-weight: 600;
    font-size : 2.5em;
    color : #2F3367;
    border-radius : 3em;
    margin : 0.25em 0.65em ;
    width : 90%;
    @media screen and (max-width: 1150px) {
        font-size : 2em;
    }
    &:hover {  /*마우스 올렸을때 스타일*/
        background-color : #007DFA;
        color : #FFFFFF;
    }
`;


const HeaderFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
`;

const MonthList = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content: center;
    text-align: center;

    background-color:#F5F5F7;
    border-radius : 3em;
    @media screen and (max-width: 1150px) {
        width: 100%;
    }
`;

const ProfileFrame = styled.div`
    display : flex;
    background-color:#F5F5F7;
    border-radius: 50%;
    padding: 0.5em;

`;

const YearScrollBar = styled.div`
    display: ${props => (props.visible ? 'block' : 'none')};
    position: absolute;
    background-color: #F5F5F7;
    border-radius: 0em 1.5em ;
    margin-top: 12em;
    margin-right: 72em;
    padding: 0.5em;
    max-height: 80px;
    overflow-y: auto;
`;

const YearOption = styled.div`
    font-weight: 600;
    font-size: 2em;
    color: #2F3367;
    margin: 0.25em 0.65em;
    cursor: pointer;
`;

const ResponsiveHeaderFrame = styled(HeaderFrame)`
    justify-content: space-between;
    @media screen and (max-width: 1150px) {
        flex-wrap: wrap;
    }
`;

const ResponsiveMonthList = styled(MonthList)`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(6, 1fr);
    justify-content: center;

    @media screen and (max-width: 1150px) {
        order: 3; /* MonthList를 마지막으로 배치 */
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 1em;
        ${MonthButton} {
            width: 100%;
            margin: 0.25em 0.65em;
        }
    }
`;

