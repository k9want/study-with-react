import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { url } from '../config/url'
import useLoginInfo from '../hooks/useLoginInfo'
import useLoginModal from '../hooks/useLoginModal'
function PostArticle(props) {
  const navigate = useNavigate()
  const [accessToken, userId] = useLoginInfo()

  const [title, setTitle] = useState('')
  const [titleValid, setTitleValid] = useState(false)
  const [description, setDescription] = useState('')
  const [descriptionValid, setDescriptionValid] = useState(false)

  const [categoryId, setCategoryId] = useState(1)

  const handleTitle = (e) => {
    setTitle(e.target.value)
    if (e.target.value.length < 5) {
      setTitleValid(false)
    } else {
      setTitleValid(true)
    }
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
    if (e.target.value.length < 15) {
      setDescriptionValid(false)
    } else {
      setDescriptionValid(true)
    }
  }

  const onClickPostButton = (e) => {
    if (!titleValid) {
      alert('제목을 최소 5자리이상 입력해주세요')
      return
    } else if (!descriptionValid) {
      alert('내용을 최소 15자리이상 입력해주세요')
      return
    } else {
      let data = JSON.stringify({
        title: title,
        categoryId: categoryId,
        description: description,
      })

      let config = {
        method: 'post',
        url: `${url}/users/${userId}/article`,
        headers: {
          'x-access-token': accessToken,
          'Content-Type': 'application/json',
        },
        data: data,
      }

      axios(config)
        .then((res) => {
          alert('모집글이 작성되었습니다.')
          window.location.replace('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('jwt'))
    if (!accessToken) {
      alert('로그인 후 이용가능합니다.')
      navigate('/')
      return
    }
  }, [])

  return (
    <main className="post-article" style={useLoginModal(props.loginModal)}>
      <div className="container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={handleTitle}
          />
        </div>
        <div className="select-wrapper">
          <span>스터디분야</span>
          <select
            name="category"
            id="postCategory"
            onChange={(e) => setCategoryId(e.target.value)}
          >
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
            onChange={handleDescription}
          ></textarea>
        </div>

        <div className="post-btn-group">
          <div className="post-btn-item cancel">취소</div>
          <div className="post-btn-item confirm" onClick={onClickPostButton}>
            완료
          </div>
        </div>
      </div>
    </main>
  )
}

export default PostArticle
