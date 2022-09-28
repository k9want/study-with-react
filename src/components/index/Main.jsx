import React, { useState } from 'react'
import Card from './Card'

function Main(props) {
  return (
    <main>
      <div className="container">
        {props.dataList ? (
          <div className="filter">
            <div className="filter-left">
              <div className="filter-item is-active">최신순</div>
              <div className="filter-item">좋아요순</div>
              <div className="filter-item">댓글순</div>
            </div>
            <div className="filter-right">
              <div className="filter-item is-active">
                {' '}
                모집중인 게시글만 보기
              </div>
            </div>
          </div>
        ) : null}
        <div className="card-list">
          {props.dataList ? (
            props.dataList.map((data, i) => {
              return <Card data={data} />
            })
          ) : (
            <div>현재 해당 카테고리의 모집중인 게시글이 없습니다.</div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Main
