import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../config/url'
import useLoginInfo from '../hooks/useLoginInfo'
function UserInfo() {
  const [accessToken, userId] = useLoginInfo()

  const [nickname, setNickname] = useState('')
  const [nicknameValid, setNicknameValid] = useState(true)

  const [categoryId, setCategoryId] = useState(1)

  const handleNickname = (e) => {
    setNickname(e.target.value)
    if (e.target.value.length < 2) {
      setNicknameValid(false)
    } else {
      setNicknameValid(true)
    }
  }

  const onClickButton = (e) => {
    if (!nicknameValid) {
      alert('닉네임은 최소 2자리 이상 입력해주세요')
    } else {
      let data = JSON.stringify({
        nickname: nickname,
        studyKindId: categoryId,
      })

      let config = {
        method: 'patch',
        url: `${url}/users/${userId}`,
        headers: {
          'x-access-token': accessToken,
          'Content-Type': 'application/json',
        },
        data: data,
      }

      axios(config)
        .then((res) => {
          alert('내 정보가 수정되었습니다.')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    axios
      .get(`${url}/users/${userId}`, {
        headers: {
          'x-access-token': accessToken,
        },
      })
      .then((res) => {
        setCategoryId(res.data.result.studyKindId)
        setNickname(res.data.result.nickname)
      })
      .catch(() => {
        console.log('새로고침을 해주세요')
      })
  }, [accessToken, userId])

  return (
    <div className="container">
      <div className="user-info">
        <div className="user-info-header">내 정보 수정</div>
        <div className="user-info-content">
          <div className="select-wrapper user-info-select-wrapper">
            <span>관심 스터디분야</span>
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
          <div className="user-info-nickname">
            <div>닉네임</div>
            <div className="user-info-input-wrapper">
              <input type="text" value={nickname} onChange={handleNickname} />
            </div>
          </div>
          {!nicknameValid && nickname.length > 0 && (
            <span className="signup-form-error">
              닉네임은 최소 2자리 이상입니다.
            </span>
          )}
        </div>
        <div className="user-info-footer">
          <div className="user-info-btn-group">
            <button className="user-info-signout-btn ">회원탈퇴</button>
            <button className="user-info-btn" onClick={onClickButton}>
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
