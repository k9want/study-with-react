import React, { useState } from 'react'
import Card from './Card'

function Main(props) {
  return (
    <main>
      <div className="container">
        <div className="filter">
          <div className="filter-left">
            <div className="filter-item is-active">최신순</div>
            <div className="filter-item">좋아요순</div>
            <div className="filter-item">댓글순</div>
          </div>
          <div className="filter-right">
            <div className="filter-item is-active"> 모집중인 글만 보기</div>
          </div>
        </div>
        <div className="card-list">
          {props.dataList.map((data, i) => {
            return <Card data={data} />
          })}
        </div>
      </div>
    </main>
  )
}

export default Main
