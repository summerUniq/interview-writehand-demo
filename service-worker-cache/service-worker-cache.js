window.navigator.serviceWorker.register('/test.js').then(() => {
    console.log('注册成功');
}).catch(() => {
    console.error('注册失败');
})