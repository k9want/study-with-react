import React from 'react'
import Card from '../components/index/Card'

function UserArticle() {
  return (
    <div className="container">
      <div className="user-article">
        <div className="user-article-header">내가 쓴 글</div>
        <div className="card-list">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default UserArticle
