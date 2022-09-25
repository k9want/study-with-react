import React from 'react'
import Comment from '../components/detailArticle/Comment'
import Detail from '../components/detailArticle/Detail'
import useLoginModal from '../hooks/useLoginModal'
function DetailArticle(props) {
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
