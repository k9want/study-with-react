import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../config/url'
import useLoginInfo from '../hooks/useLoginInfo'

function EditArticle() {
  const navigate = useNavigate()
  const { articleId } = useParams()
  const [accessToken, userId] = useLoginInfo()

  const [title, setTitle] = useState('')
  const [titleValid, setTitleValid] = useState(true)
  const [description, setDescription] = useState('')
  const [descriptionValid, setDescriptionValid] = useState(true)

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

  const onClickCancelButton = (e) => {
    navigate(-1)
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
        method: 'patch',
        url: `${url}/users/${userId}/articles/${articleId}/edit`,
        headers: {
          'x-access-token': accessToken,
          'Content-Type': 'application/json',
        },
        data: data,
      }

      axios(config)
        .then((res) => {
          alert('모집글이 수정되었습니다.')
          navigate(`/articles/${articleId}`)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    axios
      .get(`${url}/articles/${articleId}`, {
        headers: {
          'x-access-token': accessToken,
        },
      })
      .then((res) => {
        console.log(res.data.result)
        setTitle(res.data.result.title)
        setDescription(res.data.result.description)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <main className="post-article">
      <div className="container">
        <div className="input-wrapper">
          <input type="text" onChange={handleTitle} value={title} />
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
            rows="18"
            onChange={handleDescription}
            value={description}
          ></textarea>
        </div>

        <div className="post-btn-group">
          <div className="post-btn-item cancel" onClick={onClickCancelButton}>
            취소
          </div>
          <div className="post-btn-item confirm" onClick={onClickPostButton}>
            완료
          </div>
        </div>
      </div>
    </main>
  )
}

export default EditArticle
