// nav-script.js

document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <nav id="main-nav">
            <div id="nav-logo">SAIWA OFFICIAL</div>
            <ul id="nav-links">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <div id="nav-hamburger">
                <div class="nav-bar"></div>
                <div class="nav-bar"></div>
                <div class="nav-bar"></div>
            </div>
        </nav>
        <div id="nav-overlay"></div>
        <div id="nav-menu">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">BLOG</a>
            <a href="#">CONTACT</a>
        </div>
    `;

    const navStyle = document.createElement('style');
    navStyle.textContent = `
        #main-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #333;
            color: white;
            margin: 10px;
            padding: 10px;
            height: 45px;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            position: fixed;
            z-index: 10;
            left: 0;
            right: 0;
        }

        #nav-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        #nav-links li {
            padding: 0.5rem;
        }

        #nav-links a {
            color: white;
            text-decoration: none;
        }

        #nav-hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            position: relative;
            z-index: 5;
        }

        .nav-bar {
            width: 25px;
            height: 3px;
            background-color: white;
            margin: 4px 0;
            transition: transform 0.4s, opacity 0.4s;
        }

        #nav-menu {
            position: fixed;
            top: 0;
            right: -310px;
            width: 300px;
            height: 100%;
            background-color: rgba(51, 51, 51, 0.95);
            backdrop-filter: blur(10px);
            z-index: 12;
            transition: transform 0.4s ease;
            display: flex;
            flex-direction: column;
            padding: 30px;
            box-sizing: border-box;
            border-top-left-radius: 10px;
        }

        #nav-menu a {
            color: white;
            text-decoration: none;
            padding: 10px;
            font-size: 20px;
        }

        #nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(203, 203, 203, 0.7);
            z-index: 11;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
        }

        #nav-overlay.show {
            opacity: 1;
            pointer-events: auto;
        }

        #nav-menu.show {
            transform: translateX(-310px);
        }

        #nav-hamburger.toggle .nav-bar:nth-child(1) {
            transform: rotate(-45deg) translate(-10px, 5px);
        }

        #nav-hamburger.toggle .nav-bar:nth-child(2) {
            opacity: 0;
        }

        #nav-hamburger.toggle .nav-bar:nth-child(3) {
            transform: rotate(45deg) translate(-10px, -5px);
        }

        @media (max-width: 450px) {
            #nav-links {
                display: none;
            }
            #nav-hamburger {
                display: flex;
            }
        }
    `;

    document.head.appendChild(navStyle);
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const hamburger = document.querySelector('#nav-hamburger');
    const overlay = document.querySelector('#nav-overlay');

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-overlay');
    const hamburger = document.getElementById('nav-hamburger');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
        hamburger.classList.remove('toggle');
    } else {
        menu.classList.add('show');
        overlay.classList.add('show');
        hamburger.classList.add('toggle');
    }
}
