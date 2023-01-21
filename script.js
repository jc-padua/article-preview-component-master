const share = document.querySelectorAll('.share-img');
const cardFooter = document.querySelectorAll('.card-footer');


share.forEach(btn => {
    btn.addEventListener('click', () => {
        cardFooter.forEach(footer => {
            if (footer.classList.contains('active')) {
                footer.classList.remove('active')
                // footer.setAttribute('transition-style', 'in:circle:center');
            } else {
                footer.classList.add('active')
                // footer.setAttribute('transition-style', 'in:circle:center');
            }
        })
    })
})

// setAttribute('transition-style','in:circle:bottom-right')