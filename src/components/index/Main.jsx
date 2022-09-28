import React, { useState } from 'react'
import Card from './Card'

function Main(props) {
  const handleContainCompleteButton = (e) => {
    if (props.containComplete === '') {
      props.setContainComplete('all')
    } else {
      props.setContainComplete('')
    }
  }

  return (
    <main>
      <div className="container">
        {props.dataList ? (
          <div className="filter">
            <div className="filter-left">
              <div
                className={
                  'filter-item ' +
                  (props.type === 'recent' ? 'is-active' : null)
                }
                onClick={() => props.setType('recent')}
              >
                최신순
              </div>
              <div
                className={
                  'filter-item ' +
                  (props.type === 'popular' ? 'is-active' : null)
                }
                onClick={() => props.setType('popular')}
              >
                인기순
              </div>
            </div>
            <div className="filter-right">
              <div
                className={
                  'filter-item ' +
                  (props.containComplete === '' ? 'is-active' : null)
                }
                onClick={handleContainCompleteButton}
              >
                모집중인 게시글만 보기
              </div>
            </div>
          </div>
        ) : null}
        <div className="card-list">
          {props.dataList ? (
            props.dataList.map((data, i) => {
              return <Card data={data} key={data.articleId} />
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
