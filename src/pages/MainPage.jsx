import React from 'react';

function MainPage() {
    function search(){
      alert('hihi');
      
    }

    return (
      <div>
        <h2>안뇽 여기는 메인페이지야 암튼 그렇다고</h2>
        <div>
          <label htmlFor="searchBar"></label>
          <input type="text" id="searchBar" placeholder='검색어를 입력하세요' />
          <button type="submit" onClick={search}>검색</button>
        </div>
      </div>
    );
}

export default MainPage;