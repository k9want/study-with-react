import axios from 'axios'
import React, { useEffect } from 'react'
import Comment from '../components/detailArticle/Comment'
import Detail from '../components/detailArticle/Detail'
import useLoginModal from '../hooks/useLoginModal'
function DetailArticle(props) {
  useEffect(() => {
    axios.get()
  })

  return (
    <div style={useLoginModal(props.loginModal)}>
      <Detail />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default DetailArticle
