import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/index/Card'
import { url } from '../config/url'
import useLoginInfo from '../hooks/useLoginInfo'

function LikeArticle() {
  const [accessToken, userId] = useLoginInfo()
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios
      .get(`${url}/users/${userId}/likes`, {
        headers: {
          'x-access-token': accessToken,
        },
      })
      .then((res) => {
        setDataList(res.data.result)
      })
      .catch(() => {
        console.log('새로고침을 해주세요')
      })
  }, [accessToken, userId])

  return (
    <div className="container">
      <div className="user-article">
        <div className="user-article-header">내 관심 글 보기</div>
        <div className="card-list">
          {dataList ? (
            dataList.map((data, i) => {
              return <Card data={data} key={data.articleId} />
            })
          ) : (
            <div>아직 내 관심 글이 없습니다. </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LikeArticle
