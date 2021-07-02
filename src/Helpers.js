/* methods used in multiple components */

const Helpers = {
  time() {
    const now = new Date()
    const hour = now.getHours()
    const min = now.getMinutes()
    return `${hour}:${min}`
  },

  copyToClipBoard(copyText, setIsLinkCoppied) {
    navigator.permissions.query({name: 'clipboard-write'}).then((result) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        /* write to the clipboard now */
        navigator.clipboard.writeText(copyText).then(() => {
          /* clipboard successfully set */
          setIsLinkCoppied(true)
        }, function() {
          /* clipboard write failed */
          setIsLinkCoppied(false)
        })
      }
    })
  },

  timeStampToDate(timestamp) {
    const dateObj = new Date(timestamp)
    return (
      dateObj.getMonth() + 1 +
      '/' + dateObj.getDate() +
      '/' + dateObj.getFullYear()
    )
  },

  timeStampToTime(timestamp) {
    const dateObj = new Date(timestamp)
    const hours = dateObj.getHours().toString()
    const minutes = dateObj.getMinutes().toString()
    const formattedHours = hours.length === 2 ? hours : '0' + hours
    const formattedMinutes = minutes.length === 2 ? minutes : '0' + minutes
    return (
      `${formattedHours}:${formattedMinutes}`
    )
  },

  formatDate(str) {
    if (str) {
      const dashB = str.slice(5, str.length) + '/' + str.slice(0, 4)
      return dashB.replace('-', '/')
    } else {
      return ''
    }
  },

  /* Used to trigger callback after typing has stopped for pause length */
  toggleTyping(timeOfType, callback, pauseLength = 2000) {
    setTimeout(() => {
      const now = Date.now()
      if ((now - timeOfType) >= pauseLength) {
        callback()
      }
    }, pauseLength);
    return false
  },
}

export default Helpers
