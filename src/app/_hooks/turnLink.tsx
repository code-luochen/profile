const useTurnLink = () => {
  // 跳转到对应的 url 地址
  const turnToLink = (url: string | undefined) => {
    window.open(url, '_blank')
  }

  return turnToLink
}
export default useTurnLink
