import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

/* 01 컴포넌트 임포트 */
function MyButton() {
  return (
    <button className="button">I'm a button</button>
  );
}

/* 01 : 반드시 root에 감싸는 태그 필요! */
function Login() {
  return (
    <>
    <label for="login">로그인 : </label>
    <input type="text" id="login" placeholder='로그인 할 아이디를 입력하세요'></input>
    </>
  );
}

/* 02 조건문 */
let content;
let isLoggedIn = true;
if (isLoggedIn) {
  content = <MyButton/>
} else {
  content = <Login/>
}

/*데이터 맵핑*/
const user = {
  name: 'hahye',
  age: '14',
  height: '60',
}

/*03 반복문*/
const userData = [{
  name: 'hahye',
  age: '14',
  height: '60',
},{
  name: 'eunji',
  age: '24',
  height: '160',
},{
  name: 'youna',
  age: '30',
  height: '170',
}, ]

function UserList() {
  const users = userData.map( userData => 
    <li key={userData.age}>{userData.name}</li>
  );
  return (
    <ul>{users}</ul>
  )
}

/* 04 이벤트*/
function MyButtonV2 (){
  function click(){
    alert('클릭!');
  }
  return (
    <button onClick={click}> 버튼 </button>
  )
}

/* 05 화면 업데이트 연습1 */
function AddBtn ({count, onClick}){
  // const [count, setCount] = useState(0);
  
  // function addCount(){
  //   setCount(count + 1);
  // }
  return (
    <button onClick={onClick}>{count}번 클릭했습니다.</button>
  )
}

/* 05 화면 업데이트 연습2 */
function ToggleBtn ({isTrue, onClick}){
  return (
    <button onClick={onClick}>{isTrue ? '진실' : '거짓'}</button>
  )
}


function Practice2() {
  const [hello, setHello] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* 엑시오스 db 데이터 연결 */
  useEffect(() => {
    axios.get('/api/bulletinList').then((res) => {
      setHello('안녕');
      console.log(res.data);
    })

   // 여기에 API의 URL과 키를 넣어주세요.
   const apiUrl = 'https://apis.data.go.kr/B551011/KorService1/areaBasedList1'; // API URL
   const apiKey = 'IMNlfSEGzASE/yk86nOY54DTctdfYQcu8LjB1Vg+fAOIvyueEXRsdQFy/2BAGEM7Dly1lHybG8Mgvqfz+u5sWQ=='; // 받은 API 키

   axios
     .get(apiUrl, {
       params: {
        serviceKey: apiKey, // 서비스 키
            numOfRows: 10, // 요청할 데이터 개수
            areaCode: 5,
            pageNo: 1, // 페이지 번호
            MobileOS: 'ETC', // 모바일 OS
            MobileApp: 'TestApp', // 모바일 앱 이름
            _type: 'json', // 응답 형식 (JSON)
       },
     })
     .then((response) => {
       setData(response.data); // 응답 데이터 처리
       console.log(response.data)
      //  setLoading(false); // 로딩 완료
       console.log('완료')
      })
      .catch((err) => {
        setError(err); // 오류 처리
        console.log('실패')
      //  setLoading(false); // 로딩 완료
     });

  }, []);
 // 로딩, 에러 처리 및 데이터 렌더링
//  if (loading) return <div>Loading...</div>;
//  if (error) return <div>Error: {error.message}</div>;

  /* 05 화면 업데이트 : 상위 컴포넌트에서 useState*/
  const [count, setCount] = useState(0);
  function addCount2 (){
    setCount(count + 1);
  }

  const [isTrue, setIsTrue] = useState(true);
  function checkTrue (){
    setIsTrue(!isTrue);
  }

  /*06 틱택토 만들기*/
  const [oxList, setoxList] = useState([null, null, null, null, null, null, null, null, null])
  const [oxData, setOxData] = useState(true);
  function checkPosition (i){
  // 상태를 직접 변경하지 말고, 새로운 배열을 만들어야 합니다.*********
  const newOxList = [...oxList];
  newOxList[i] = oxData;
    setoxList(newOxList);
    
    if(oxData){
      newOxList[i] = 'x';      
    } else {
      newOxList[i] = 'o';      
    }
    
    console.log(setoxList);
    setOxData((oxData) => !oxData);
  }
  return (
    <div className="App">
         <div>
      <h1>API 데이터</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* 데이터를 화면에 출력 */}
    </div>
      <Header />
      <div className="App-header">
        <h2>틱택토 연습해보장!</h2>
        <p>무한루프오류 왜 나타나는 거지?? 왜 상태를 직접 변경하는 것은 안되는거지?? </p>
        <main>
          <div className="block">
            <button onClick={() => checkPosition(0)}>{oxList[0]}</button> 
            <button onClick={() => checkPosition(1)}>{oxList[1]}</button>
            <button onClick={() => checkPosition(2)}>{oxList[2]}</button>
          </div>
          <div className="block">
            <button onClick={() => checkPosition(3)}>{oxList[3]}</button>
            <button onClick={() => checkPosition(4)}>{oxList[4]}</button>
            <button onClick={() => checkPosition(5)}>{oxList[5]}</button>
          </div>
          <div className="block">
            <button onClick={() => checkPosition(6)}>{oxList[6]}</button>
            <button onClick={() => checkPosition(7)}>{oxList[7]}</button>
            <button onClick={() => checkPosition(8)}>{oxList[8]}</button>
          </div>
        </main>
      </div>
      <section className="practice">
        <div>
          <h2>컴포넌트</h2>
          <MyButton/>
        </div>
        <div>
          <h2>if else 조건문</h2>
          {content}
        </div>
        <div>
          <h2>삼항연산자 조건문</h2>
          {isLoggedIn ? <MyButton/> : <Login/>}
        </div>
        <div>
          <h2>조건이 맞을 경우에만 보이게 처리</h2>
          {isLoggedIn && <MyButton />}
        </div>
        <div>
          <h2>반복문</h2>
          <UserList/>
        </div>
        <div>
          <h2>클릭 이벤트</h2>
          <MyButtonV2/>
        </div>
        <div>
          <h2>반응형 데이터 - 같은 컴포넌트여도 컴포넌트안에 데이터가 있는경우 각각 독립적인 상태를 지닌다</h2>
          <h2>현재에는 데이터, 이벤트는 상위컴포넌트에서 만들어서 하위에 던져주어서 동일한 작동을 하게 된다. 뭔가 신기함</h2>
          <AddBtn count={count} onClick={addCount2} />
          <AddBtn count={count} onClick={addCount2} />
        </div>
        <div>
          <h2>그냥 문득 만들어 보고싶어서 토글버튼!</h2>
          <ToggleBtn isTrue={isTrue} onClick={checkTrue} />
        </div>
        <div>
          데이터 맵핑
        <h1 className="App-title">{hello}</h1>
        {user.name}
        {content}
        </div>
      </section>
  </div>
  );
}

export default Practice2;
