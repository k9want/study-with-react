import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card() {
  const navigate = useNavigate()
  function handleCard() {
    navigate('/detail')
  }

  return (
    <div className="col-sm-2 col-md-4 col-lg-3">
      <div className="card" onClick={handleCard}>
        <div className="card-category">개발</div>
        <div className="card-title">
          리액트 같이 공부할 사람 모집합니다. 리액트 같이 공부할 사람
          모집합니다.리액트 같이 공부할 사람 모집합니다.리액트 같이 공부할 사람
          모집합니다.리액트 같이 공부할 사람 모집합니다.리액트 같이 공부할 사람
          모집합니다.
        </div>
        <div className="card-footer">
          <div className="card-author">베네치아스토리</div>
          <div className="card-createdAt">2022.04.05</div>
          <div className="card-state">모집중</div>
        </div>
      </div>
    </div>
  )
}

export default Card
