import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../../config/url'
import useLoginInfo from '../../hooks/useLoginInfo'

function PostComment() {
  const { articleId } = useParams()
  const [accessToken, userId] = useLoginInfo()
  const [description, setDescription] = useState('')

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const onClickButton = (e) => {
    if (!description) {
      return
    } else {
      var data = JSON.stringify({
        description: description,
      })

      var config = {
        method: 'post',
        url: `${url}/articles/${articleId}/comment`,
        headers: {
          'x-access-token': accessToken,
          'Content-Type': 'application/json',
        },
        data: data,
      }
      axios(config)
        .then((res) => {
          window.location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div className="detail-textarea-wrapper">
      <div className="detail-comment-header">댓글 작성</div>
      <textarea
        rows="5"
        placeholder="이곳에 댓글을 입력하세요."
        value={description}
        onChange={handleDescription}
      ></textarea>
      <div className="detail-comment-btn-wrapper">
        <button className="detail-comment-btn" onClick={onClickButton}>
          완료
        </button>
      </div>
    </div>
  )
}

export default PostComment
