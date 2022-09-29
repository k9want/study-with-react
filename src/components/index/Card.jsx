import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ data }) {
  const navigate = useNavigate()
  function handleCard() {
    navigate(`/articles/${data.articleId}`)
  }

  return (
    <div className="col-sm-2 col-md-4 col-lg-3" onClick={() => handleCard}>
      <div className="card" onClick={handleCard} value={data.articleId}>
        <div className="card-category">{data.category}</div>
        <div className="card-title">{data.title}</div>
        <div className="card-footer">
          <div className="card-author">{data.nickname}</div>
          <div className="card-createdAt">{data.createAt}</div>
          <div className="card-state">
            {data.status === 'ACTIVE' ? '모집중' : ''}
            {data.status === 'COMPLETED' ? '모집완료' : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
