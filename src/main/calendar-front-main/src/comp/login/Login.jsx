import React, { useState } from 'react';
import * as t from './RegisterStyle';
import { Link } from 'react-router-dom';
import { ReactComponent as Kakao } from '../../assets/img/kakao.svg';
import { ReactComponent as Naver } from '../../assets/img/naver.svg';




function Login(props) {
const [userData, setUserData] = useState([]);
const [email, setEmail] = useState('');
const [pw, setPw] = useState("");
const Rest_api_key = process.env.REACT_APP_REST_API_KEY;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

const onChangeEmail = (e) => {
    setEmail(e.target.value);
};
const onChangePw = (e) => {
    setPw(e.target.value);
};
const kakaoLogin = ()=>{
  window.location.href = kakaoURL;
};

const onSubmit = (e) => {
    e.preventDefault();
    setUserData((prevUserData) => {
        return [
            ...prevUserData,
            {
                email: {email},
                pw: {pw},
            },
        ];
    });
    console.log({userData});
};
 

  const handleLogin = () => {
    if (email=== "a" && pw === "1") {
        window.location.replace("/")
    }
    if (email === "a" && pw !== "1"){
        alert("비밀번호가 옳지 않습니다.");
    }
    if (email !== "a" && pw === "1"){
        alert("아이디가 옳지 않습니다.");
    }
    if (email !== "a" && pw !== "1"){
        alert("아이디와 비밀번호가 옳지 않습니다.");
    }
};

  return (
    <t.Container>
      <t.ImageContainer>
        <t.Image />
      </t.ImageContainer>
      <t.TextContainer>
        <t.TextStyle>Welcome!</t.TextStyle>
        <p style={{ color: '#2F3367' }}>이메일과 비밀번호를 입력해주세요!</p>

        <form onSubmit={onSubmit}>    
          <label>
            <t.FormInput
              placeholder="이메일"
              type="text" 
              value={email} 
              onChange={onChangeEmail}
            />
          </label>
          <br />
          <label>
            <t.FormInput
              placeholder="비밀번호"
              type="password" 
              value={pw} 
              onChange={onChangePw}
            />
          </label>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '25rem',margin: '0 auto', flexDirection: 'row' }}>
           
            <t.SNSButton
              onClick={kakaoLogin}
              style={{ backgroundColor: '#FEE500', marginRight: '10px' }}
            >
              <Kakao style={{ float: 'left' }}/>
              카카오 로그인
            </t.SNSButton>

            <t.SNSButton
              style={{ backgroundColor: '#03C75A' ,color: '#ffffff'}}
            >
            <Naver style={{ float: 'left' }} />
              네이버 로그인
            </t.SNSButton>
          </div>
          <br />
              <t.LogInButton type="submit" onClick={handleLogin}>로그인</t.LogInButton>

        </form>
        <hr style={{ color: '#ECECF0', marginRight: '4%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ textAlign: 'left', color: '#2F3367' }}>아이디가 없으신가요</p>
          <Link to='/register' style={{ textDecoration: "none", marginRight:'4%'}}>
          <p style={{ textAlign: 'right', color: '#007DFA'}}>회원가입하기!</p>
          </Link>
        </div>
      </t.TextContainer>
    </t.Container>
  );
}

export default Login;