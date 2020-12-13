function createBtn() {
    const block = document.createElement('div')
    block.classList.add('divForBtn')
    const themeBtn = document.createElement('button')
    themeBtn.textContent = 'Dark'
    themeBtn.classList.add('buttonRegular')
    block.appendChild(themeBtn)
    const nav = document.querySelector('.divflex1')
    nav.insertAdjacentElement('afterbegin', block)
    render(nav, block)
}

createBtn()

function render(obj, item) {
    const bg = document.querySelector('main')
    const themeBtn = document.querySelector('.buttonRegular')
	const upperdiv = document.querySelector('.divflex1')
    const stripe = document.querySelector('#first')
	const stripe2 = document.querySelector('#second')
	const rect = document.querySelector('.rectangle')
    const nav = document.querySelector('.navbar-nav')
	const navlink = document.querySelectorAll('.nav-link')
    const footer = document.querySelector('footer')

    themeBtn.addEventListener('click', function() {

        if (themeBtn.textContent === 'Dark') {
			console.log("In if")
			bg.style.background = 'url("img/background2.png") no-repeat'
			upperdiv.style.background = 'url("img/CrowdEDITEDperf2.png") no-repeat'
			navlink.forEach((item) => {
                item.style.color = '#d1d1d1'
            })
			nav.style.background = 'rgba(33,33,33,0.4)'
			rect.style.backgroundColor = 'rgba(33,33,33,0.6)'
            stripe.style.backgroundColor = 'rgba(33,33,33,1)'
			stripe2.style.backgroundColor = 'rgba(33,33,33,1)'
            footer.style.background = 'linear-gradient(0deg, rgba(50,30,97,1) 0%, rgba(50,30,97,0) 80%)'
			
			themeBtn.style.backgroundColor = 'rgba(255,255,255,0.6)'
            themeBtn.textContent = 'Light'
			obj.insertAdjacentElement('beforeend', item)
        } else {
			console.log("In else")
            bg.style.background = 'url("img/background.png") no-repeat'
            upperdiv.style.background = 'url("img/CrowdEDITEDperf.png") no-repeat'
            navlink.forEach((item) => {
                item.style.color = '#000000'
            })
            nav.style.background = 'rgba(255,255,255,0.4)'
			rect.style.backgroundColor = 'rgba(255,255,255,1)'
            stripe.style.backgroundColor = 'rgba(255,255,255,1)'
			stripe2.style.backgroundColor = 'rgba(255,255,255,1)'
            footer.style.background = 'linear-gradient(0deg, rgba(114,39,175,1) 0%, rgba(114,39,175,0) 80%)'
			
			themeBtn.style.backgroundColor = 'rgba(33,33,33,0.6)'
            themeBtn.textContent = 'Dark'
			obj.insertAdjacentElement('afterbegin', item)
        }
    })
}
