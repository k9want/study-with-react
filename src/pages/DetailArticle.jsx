import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Comment from '../components/detailArticle/Comment'
import Detail from '../components/detailArticle/Detail'
import { url } from '../config/url'
import useLoginModal from '../hooks/useLoginModal'

function DetailArticle(props) {
  const [detailData, setDetailData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('jwt'))
    if (!accessToken) {
      alert('로그인 후 이용가능합니다.')
      navigate('/')
      return
    }

    console.log('계속')
    axios
      .get(`${url}/articles/8`, {
        headers: {
          'x-access-token': accessToken,
        },
      })
      .then((res) => {
        console.log(res.data.result)
        setDetailData(res.data.result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div style={useLoginModal(props.loginModal)}>
      <Detail detailData={detailData} />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default DetailArticle
