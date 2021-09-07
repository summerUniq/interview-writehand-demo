
let a;
for (let i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br/>'
    a.addEventListener('click', () => {
        alert(i)
    })
    document.body.appendChild(a)
}