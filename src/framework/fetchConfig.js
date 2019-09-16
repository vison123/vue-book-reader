let baseUrl = '//book.visonsoft.cn'
/*eslint-disable */
if (process.env.NODE_ENV === 'production') {
  baseUrl = '//book.visonsoft.cn'
  if (process.env.BUILD_ENV === 'TEST') {
    console.log('in TEST')
    baseUrl = '//test.book.visonsoft.cn'
  }
  if (process.env.BUILD_ENV === 'PRE') {
    console.log('in PRE')
    baseUrl = '//pre.book.visonsoft.cn'
  }
  if (process.env.BUILD_ENV === 'PROD') {
    console.log('in PROD')
    baseUrl = '//prod.book.visonsoft.cn'
  }
}

export { baseUrl }
