const xhr = new XMLHttpRequest()

// 第三个参数表示是同步请求还是异步请求
xhr.open('GET', '/api/list.json', true)


xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log('响应成功', JSON.parse(xhr.responseText));
        } else {
            console.log('其他情况');
        }
    }
}

xhr.send(null)


// =====================post请求==================

const xhr = new XMLHttpRequest()
xhr.open('POST', '/api/list.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log('响应成功', JSON.parse(xhr.responseText));
        } else {
            console.log('其他情况');
        }
    }
}

const requestBody = {
    userName: 'xq',
    password: '123'
}
xhr.send(JSON.stringify(requestBody))