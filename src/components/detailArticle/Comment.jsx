import React from 'react'

function Comment() {
  return (
    <div className="comment">
      <div className="comment-wrapper">
        <div className="comment-header">
          <div className="comment-nickname">베네치아</div>
          <div className="comment-info">
            <span className="comment-createdAt">2022.04.22</span>
            <span className="comment-btn-item article-update">수정</span>
            <span className="comment-btn-item article-delete">삭제</span>
          </div>
        </div>
        <div className="comment-description">해당 스터디에 관심있습니다.</div>
      </div>
    </div>
  )
}

export default Comment
