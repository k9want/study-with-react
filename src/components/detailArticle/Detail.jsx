import React from 'react'

function Detail({ detailData }) {
  return (
    <div className="detail">
      <div className="container">
        <div className="detail-info-state">
          {detailData.status ? '모집중' : '모집완료'}
        </div>

        <div className="title">{detailData.title}</div>
        <div className="detail-info">
          <div className="category">
            <span>스터디분야 </span>
            <span>{detailData.category}</span>
          </div>
          <div className="detail-btn-group">
            <span>{detailData.createAt}</span>
            {!detailData.editable === 'Y' ? (
              <>
                <span className="detail-btn-item comment-update">수정</span>
                <span className="detail-btn-item comment-delete">삭제</span>
              </>
            ) : (
              <span className="detail-nickname">{detailData.nickname}</span>
            )}
          </div>
        </div>

        <div className="description">{detailData.description}</div>
        <div className="detail-textarea-wrapper">
          <div className="detail-comment-header">댓글 작성</div>
          <textarea rows="5" placeholder="이곳에 댓글을 입력하세요."></textarea>
          <div className="detail-comment-btn-wrapper">
            <button className="detail-comment-btn">완료</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
