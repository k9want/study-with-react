import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner from '../components/index/Banner'
import Category from '../components/index/Category'
import Main from '../components/index/Main'
import { url } from '../config/url'
import useLoginModal from '../hooks/useLoginModal'
function Index(props) {
  const [dataList, setDataList] = useState([])
  const [kindId, setKindId] = useState(1)
  const [type, setType] = useState('recent')
  const [containComplete, setContainComplete] = useState('')

  useEffect(() => {
    axios
      .get(`${url}/articles/kind/${kindId}/${type}/${containComplete}`)
      .then((res) => {
        setDataList(res.data.result)
      })
      .catch(() => {
        console.log('새로고침을 해주세요')
      })
  }, [kindId, type, containComplete])

  return (
    <div style={useLoginModal(props.loginModal)}>
      <Banner />
      <Category kindId={kindId} setKindId={setKindId} />
      <Main
        dataList={dataList}
        type={type}
        setType={setType}
        containComplete={containComplete}
        setContainComplete={setContainComplete}
      />
    </div>
  )
}

export default Index
