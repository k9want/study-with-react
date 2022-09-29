import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { url } from '../../config/url'
import useLoginInfo from '../../hooks/useLoginInfo'
import PostComment from './PostComment'
function Detail({ detailData }) {
  const { articleId } = useParams()
  const [accessToken, userId] = useLoginInfo()
  const navigation = useNavigate()

  const [isDeleteModaldHidden, setIsDeleteModalHidden] = useState(true)
  const [isUpdateModaldHidden, setIsUpdateModalHidden] = useState(true)

  const onClickArticleDeleteButton = (e) => {
    var config = {
      method: 'patch',
      url: `${url}/users/${userId}/articles/${articleId}/status`,
      headers: {
        'x-access-token': accessToken,
      },
    }
    axios(config)
      .then(function (response) {
        window.location.replace('/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const onClickArticleCompleteButton = (e) => {
    if (detailData.status === 'COMPLETED') {
      alert('모집완료된 글은 수정할 수 없습니다. ')
    } else {
      var config = {
        method: 'patch',
        url: `${url}/users/${userId}/articles/${articleId}/edit/completed`,
        headers: {
          'x-access-token': accessToken,
        },
      }
      axios(config)
        .then((res) => {
          setIsUpdateModalHidden(false)
          alert('모집완료로 게시글이 수정되었습니다.')
          window.location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div className="detail">
      <div className="container">
        <div className="detail-info-state">
          {detailData.status === 'ACTIVE' ? '모집중' : ''}
          {detailData.status === 'COMPLETED' ? '모집완료' : ''}
        </div>

        <div className="title">{detailData.title}</div>
        <div className="detail-info">
          <div className="category">
            <span>스터디분야 </span>
            <span>{detailData.category}</span>
          </div>
          <div className="detail-btn-group">
            <span>{detailData.createAt}</span>
            {detailData.editable === 'Y' ? (
              <>
                <span
                  className="detail-btn-item comment-update"
                  onClick={() => setIsUpdateModalHidden(false)}
                >
                  수정
                </span>
                <span
                  className="detail-btn-item comment-delete"
                  onClick={() => setIsDeleteModalHidden(false)}
                >
                  삭제
                </span>
              </>
            ) : (
              <span className="detail-nickname">{detailData.nickname}</span>
            )}
          </div>
        </div>

        <div className="description">{detailData.description}</div>
        <PostComment />

        {!isUpdateModaldHidden ? (
          <div className="detail-update-modal">
            <div className="detail-update-modal-header">
              게시글 수정하시겠습니까? <br />
              <span>
                만약에 모집이 끝났다면 <br /> 모집완료 버튼을 눌러주세요. (다시
                수정불가)
              </span>
            </div>
            <div className="detail-update-modal-btn-group">
              <button className="detail-update-modal-btn">수정하기</button>
              <button
                className="detail-update-modal-btn"
                onClick={onClickArticleCompleteButton}
              >
                모집완료
              </button>
              <button
                className="detail-update-modal-btn"
                onClick={() => setIsUpdateModalHidden(true)}
              >
                취소
              </button>
            </div>
          </div>
        ) : null}

        {!isDeleteModaldHidden ? (
          <div className="detail-delete-modal">
            <div className="detail-delete-modal-header">
              해당 모집글을 정말 삭제하시겠습니까?
            </div>
            <div className="detail-delete-modal-btn-group">
              <button
                className="detail-delete-modal-btn"
                onClick={onClickArticleDeleteButton}
              >
                삭제
              </button>
              <button
                className="detail-delete-modal-btn"
                onClick={() => setIsDeleteModalHidden(true)}
              >
                취소
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Detail
