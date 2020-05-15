export const userAgentObj = () => {
  const ua = navigator.userAgent.toLowerCase()
  let isWeiXin = false
  let isDingTalk = false
  let isApp = false
  const obj = {}
  if (ua.match(/DingTalk/i) === 'dingtalk') { // 用钉钉打开
    isDingTalk = true
  } else if (ua.match(/MicroMessenger/i) === 'micromessenger') { // 用微信打开
    isWeiXin = true
  } else { // 用其他浏览器打开
    isApp = true
  }
  obj.isWeiXin = isWeiXin
  obj.isDingTalk = isDingTalk
  obj.isApp = isApp
  localStorage.setItem('userAgentObj', JSON.stringify(obj))
  return obj
}

export const ChangePageTitle = (title) => {
  // const userAgentObj = JSON.parse(localStorage.getItem('userAgentObj')) || null
  // if (userAgentObj && userAgentObj.isDingTalk) { // 钉钉内
  //   window.$dd.ready(function() {
  //     window.$dd.biz.navigation.setTitle({
  //       title: title, // 控制标题文本，空字符串表示显示默认文本
  //       onSuccess: function(result) {},
  //       onFail: function(err) {}
  //     });
  //   });
  // } else { // 微信或浏览器内
  var iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.onload = () => {
    setTimeout(() => {
      iframe.remove()
    }, 0)
  }
  document.title = title
  // }
}
