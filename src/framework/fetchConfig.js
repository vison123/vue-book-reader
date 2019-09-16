let baseUrl = '//book.visonsoft.cn'
/*eslint-disable */
if (process.env.NODE_ENV === 'production') {
  baseUrl = '//book.visonsoft.cn'
  if (TEST) {
    console.log('in TEST')
    baseUrl = '//book.visonsoft.cn'
  }
  if (PRE) {
    console.log('in PRE')
    baseUrl = '//book.visonsoft.cn'
  }
  if (PROD) {
    console.log('in PROD')
    baseUrl = '//book.visonsoft.cn'
  }
}

export { baseUrl }
