import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeaderDropMenu() {
  const navigate = useNavigate()

  const onClickLogoutBtn = (e) => {
    localStorage.removeItem('userId')
    localStorage.removeItem('jwt')
    alert('로그아웃되었습니다.')
    window.location.replace('/')
  }

  return (
    <div className="header-dropmenu">
      <div
        className="header-dropmenu-item"
        onClick={() => {
          navigate('/user/info')
        }}
      >
        내 정보
      </div>
      <div
        className="header-dropmenu-item"
        onClick={() => {
          navigate('/user/article')
        }}
      >
        내 모집 글
      </div>
      {/* <div
        className="header-dropmenu-item"
        onClick={() => {
          navigate('/user/likes')
        }}
      >
        내 관심 글
      </div> */}
      <div className="header-dropmenu-item" onClick={onClickLogoutBtn}>
        로그아웃
      </div>
    </div>
  )
}

export default HeaderDropMenu
