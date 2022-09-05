let img = document.querySelector('img')
let price_new = document.querySelector('.price')
let btn = document.querySelectorAll('button[ data-colors ]')
let colors = document.querySelector('.span')
let btn_price = document.querySelectorAll('button[ data-macbook ]')

console.log(img);
console.log(price_new);
console.log(btn);
console.log(colors);
console.log(btn_price);



btn.forEach(element => {
    element.onclick = () => {
        imgChanger(element.getAttribute('data-colors'))
    }
});

function imgChanger(btn) {
    if (btn === 'white') {
        img.setAttribute('src', './Img/gold.png')
        colors.innerHTML = 'White'
    } else {
        img.style.width = '310px'
        img.setAttribute('src', './Img/white.png')
        colors.innerHTML = 'Space Grey'
    }
}


btn_price.forEach(item => {
    item.onclick = () => {
        changePrice(item.getAttribute('data-macbook'))
        // btn_price.style.border = '1px solid #0080ff'
    }
});
function changePrice(btn_price) {
    if (btn_price === 'GB512') {
        price_new.innerHTML = '$1,999'
    } else if (btn_price === 'TB1') {
        price_new.innerHTML = '$2,199'
    } else if (btn_price === 'TB2') {
        price_new.innerHTML = '$2,399'
    } else if (btn_price === 'TB4') {
        price_new.innerHTML = '$3,199'
    }
}

