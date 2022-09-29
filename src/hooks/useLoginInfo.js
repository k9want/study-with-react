function useLoginInfo() {
  const accessToken = JSON.parse(localStorage.getItem('jwt'))
  const userId = JSON.parse(localStorage.getItem('userId'))

  return [accessToken, userId]
}

export default useLoginInfo
