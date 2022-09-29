import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Comment from '../components/detailArticle/Comment'
import Detail from '../components/detailArticle/Detail'
import { url } from '../config/url'
import useLoginInfo from '../hooks/useLoginInfo'
import useLoginModal from '../hooks/useLoginModal'
function DetailArticle(props) {
  const [accessToken, userId] = useLoginInfo()
  const navigate = useNavigate()

  const [detailData, setDetailData] = useState({})
  const [commentList, setCommentList] = useState([])
  const { articleId } = useParams()

  useEffect(() => {
    if (!accessToken) {
      alert('로그인 후 이용가능합니다.')
      navigate('/')
      return
    }

    axios
      .all([
        axios.get(`${url}/articles/${articleId}`, {
          headers: {
            'x-access-token': accessToken,
          },
        }),
        axios.get(`${url}/articles/${articleId}/comments`, {
          headers: {
            'x-access-token': accessToken,
          },
        }),
      ])

      .then(
        axios.spread((res1, res2) => {
          setDetailData(res1.data.result)
          if (res2.data.code === 1111) {
            setCommentList(res2.data.result.Comment)
          }
        })
      )
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div style={useLoginModal(props.loginModal)}>
      <Detail detailData={detailData} />
      {commentList && commentList.length > 0 ? (
        commentList.map((comment, i) => {
          return <Comment key={comment.commentId} comment={comment} />
        })
      ) : (
        <div className="comment">아직 댓글이 없습니다.</div>
      )}
    </div>
  )
}

export default DetailArticle
