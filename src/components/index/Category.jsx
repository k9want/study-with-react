import React from 'react'

function Category(props) {
  return (
    <div className="category">
      <div className="container">
        <div className="category-btn-group">
          <div
            className="category-btn"
            onClick={() => {
              props.setKindId(1)
            }}
          >
            개발
          </div>
          <div
            className="category-btn"
            onClick={() => {
              props.setKindId(2)
            }}
          >
            취업
          </div>
          <div
            className="category-btn"
            onClick={() => {
              props.setKindId(3)
            }}
          >
            면접
          </div>
          <div
            className="category-btn"
            onClick={() => {
              props.setKindId(4)
            }}
          >
            공부
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
