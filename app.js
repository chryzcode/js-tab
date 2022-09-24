const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')
const btns = document.querySelectorAll('.tab-btn')


about.addEventListener('click', function (e) {
    const id = e.target.dataset.id
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })

        articles.forEach(function (article) {
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
})

