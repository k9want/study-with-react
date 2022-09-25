function useLoginModal(click) {
  const style = {
    filter: 'blur(3px)',
  }

  return click ? style : null
}

export default useLoginModal
