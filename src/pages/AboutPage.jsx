import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* 엑시오스 db 데이터 연결 */
  useEffect(() => {

   // 여기에 API의 URL과 키를 넣어주세요.
   const apiUrl = 'https://apis.data.go.kr/B551011/KorService1/areaBasedList1'; // API URL
   const apiKey = 'IMNlfSEGzASE/yk86nOY54DTctdfYQcu8LjB1Vg+fAOIvyueEXRsdQFy/2BAGEM7Dly1lHybG8Mgvqfz+u5sWQ=='; // 받은 API 키

   axios
     .get(apiUrl, {
        params: {
        serviceKey: apiKey, // 서비스 키
        numOfRows: 10, // 요청할 데이터 개수
        areaCode: 2,
        pageNo: 1, // 페이지 번호
        MobileOS: 'ETC', // 모바일 OS
        MobileApp: 'TestApp', // 모바일 앱 이름
        _type: 'json', // 응답 형식 (JSON)
       },
     })
     .then((response) => {
      setData(response.data.response.body.items.item); // 응답 데이터 처리
       console.log(response.data.response.body.items.item)
       setLoading(false); // 로딩 완료
       console.log('완료')
      })
      .catch((err) => {
        setError(err); // 오류 처리
        console.log('실패')
        setLoading(false); // 로딩 완료
     });

  }, []);
 // 로딩, 에러 처리 및 데이터 렌더링
 if (loading) return <div>Loading...</div>;
 if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
    <h2>공공api 적용 테스트</h2>
    <ul>
      {/* data가 배열이므로 map으로 렌더링 */}
      {data &&
        data.map((item, index) => (
          <li key={index}>
            <img src={item.firstimage} alt={item.title}></img>
            <strong>address:</strong> {item.addr1}, <strong>title:</strong> {item.title}
          </li>
        ))}
    </ul>
  </div>
  );
}

export default App;
