function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(error)
        }
        img.src = url
    })
}
