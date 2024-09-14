
document.getElementById('toggle-menu').addEventListener('click', function() {
var sideMenu = document.getElementById('side-menu');
var toggleMenu = document.getElementById('toggle-menu');
var overlay = document.querySelector('.overlay');

if (sideMenu.classList.contains('open')) {
    sideMenu.classList.remove('open');
    toggleMenu.classList.remove('open');
    overlay.classList.remove('show');
    overlay.classList.add('hide');
    
    setTimeout(function() {
        overlay.style.display = 'none';
    }, 400); // フェードアウトアニメーションの時間に合わせる
} else {
    sideMenu.classList.add('open');
    toggleMenu.classList.add('open');
    overlay.classList.remove('hide');
    overlay.classList.add('show');
    overlay.style.display = 'block';
}
});

document.querySelector('.overlay').addEventListener('click', function() {
var sideMenu = document.getElementById('side-menu');
var toggleMenu = document.getElementById('toggle-menu');
var overlay = document.querySelector('.overlay');

sideMenu.classList.remove('open');
toggleMenu.classList.remove('open');
overlay.classList.remove('show');
overlay.classList.add('hide');

setTimeout(function() {
    overlay.style.display = 'none';
}, 400); // フェードアウトアニメーションの時間に合わせる
});
