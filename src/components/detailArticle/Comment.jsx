import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../../config/url'
import useLoginInfo from '../../hooks/useLoginInfo'

function Comment({ comment }) {
  const { articleId } = useParams()
  const [accessToken, userId] = useLoginInfo()

  const commentId = comment.commentId

  const onClickDeleteButton = (e) => {
    var config = {
      method: 'patch',
      url: `${url}/articles/${articleId}/comments/${commentId}/status`,
      headers: {
        'x-access-token': accessToken,
      },
    }
    axios(config)
      .then((res) => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="comment">
      <div className="comment-wrapper">
        <div className="comment-header">
          <div className="comment-nickname">{comment.nickname}</div>
          <div className="comment-info">
            <span className="comment-createdAt">{comment.createdAt}</span>
            {comment.commentEditable ? (
              <>
                {/* <span className="comment-btn-item article-update">수정</span> */}
                <span
                  className="comment-btn-item article-delete"
                  onClick={onClickDeleteButton}
                >
                  삭제
                </span>
              </>
            ) : null}
          </div>
        </div>
        <div className="comment-description">{comment.description}</div>
      </div>
    </div>
  )
}

export default Comment
