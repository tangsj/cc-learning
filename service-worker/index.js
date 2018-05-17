// https://juejin.im/post/5af2fd776fb9a07a9c04372f?utm_source=gold_browser_extension

window.onload = function() {
  if (!navigator.serviceWorker) {
    return;
  }
  registerServiceWorker();
}

function registerServiceWorker() {
  navigator.serviceWorker.register('./sw.js').then((res) => {
    console.log('注册成功！');
  }).catch((err) => {
    console.log('注册失败！');
  });

  navigator.serviceWorker.addEventListener('message', (e) => {
    console.log(e);
  });
}

document.getElementById('sendTest').addEventListener('click', () => {
  navigator.serviceWorker.controller.postMessage('postMessage');
}, false);
