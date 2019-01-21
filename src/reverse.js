const reverse = str => {
  if (typeof str !== 'string') {
    return ''
  }
  if (str.length < 2) {
    return str
  } else {
    return reverse(str.substr(1)) + str.charAt(0)
  }
}

export default reverse
