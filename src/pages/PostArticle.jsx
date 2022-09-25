import React from 'react'
import useLoginModal from '../hooks/useLoginModal'

function PostArticle(props) {
  return (
    <main className="post-article" style={useLoginModal(props.loginModal)}>
      <div className="container">
        <div className="input-wrapper">
          <input type="text" placeholder="제목을 입력해주세요" />
        </div>
        <div className="select-wrapper">
          <span>스터디분야</span>
          <select name="category" id="postCategory">
            <option value="1">개발</option>
            <option value="2">취업</option>
            <option value="3">면접</option>
            <option value="4">공부</option>
          </select>
        </div>
        <div className="textarea-wrapper">
          <textarea
            id="postDescription"
            placeholder="내용을 작성해주세요."
            rows="18"
          ></textarea>
        </div>

        <div className="post-btn-group">
          <div className="post-btn-item cancel">취소</div>
          <div className="post-btn-item confirm">완료</div>
        </div>
      </div>
    </main>
  )
}

export default PostArticle
