import React from 'react'
import Banner from '../components/index/Banner'
import Category from '../components/index/Category'
import Main from '../components/index/Main'
import useLoginModal from '../hooks/useLoginModal'

function Index(props) {
  return (
    <div style={useLoginModal(props.loginModal)}>
      <Banner />
      <Category />
      <Main />
    </div>
  )
}

export default Index
