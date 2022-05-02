var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const main = $('.main');


// sự kiện click menu navbar
const btnNavs = $$('.js-btn-subNav');
const subNavs = $$('.navbar-sub');
for (var i = 0; i < btnNavs.length; i++) {
    btnNavs[i].addEventListener('click', function() {
        for (var j = 0; j < subNavs.length; j++) {
            if (this.className != 'navbar__link js-btn-subNav active') {
                btnNavs[j].classList.remove('active');
                btnNavs[j].querySelector('.navbar__item-text').classList.remove('active');
                subNavs[j].style.maxHeight = null;
            }
        }
        var subNav = this.nextElementSibling;
        if (subNav.style.maxHeight) {
            subNav.style.maxHeight = null;
            this.classList.remove('active');
            this.querySelector('.navbar__item-text').classList.remove('active');
        } else {
            subNav.style.maxHeight = subNav.scrollHeight + 'px';
            this.querySelector('.navbar__item-text').classList.add('active');
            this.classList.add('active');

        }
    })
}


// thu gọn menu
const btnCloseMenu = $('.topbar-left__btn');
const Navbar = $('.navbar__list');
const NavbarTitle = $$('.navbar__title');
const header = $('.header');
const ContentMain = $('.content-main');
const btnNavContents = $$('.navbar__item-text');
var a = [];

function collapseMenu() {
    if (screen.width >= 768) {
        if (Navbar.className == 'navbar__list show') {
            btnNavContents.forEach(function(btnNavContent) {
                btnNavContent.style.display = 'none';
                Navbar.style.width = 70 + 'px';
                ContentMain.style.marginLeft = 70 + 'px';
                header.style.marginLeft = 70 + 'px';
                Navbar.classList.remove('show');
            })
        } else {
            btnNavContents.forEach(function(btnNavContent) {
                btnNavContent.style.display = 'inline-block';
                Navbar.style.width = 250 + 'px';
                ContentMain.style.marginLeft = 250 + 'px';
                header.style.marginLeft = 250 + 'px';
                Navbar.classList.add('show');
            })
        }
        for (var i = 0; i < NavbarTitle.length; i++) {
            a.push(NavbarTitle[i].textContent);
        }

        NavbarTitle.forEach(function(value, index) {
            if (value.textContent == a[index]) {
                value.textContent = '...';
            } else {
                value.textContent = a[index];
            }
        })
    }
}

btnNavs.forEach(function(btnNav) {
    if (Navbar.className == 'navbar__list') {
        btnNav.removeListener('click', function() {
            for (var j = 0; j < subNavs.length; j++) {
                if (this.className != 'navbar__link js-btn-subNav active') {
                    btnNavs[j].classList.remove('active');
                    btnNavs[j].querySelector('.navbar__item-text').classList.remove('active');
                    subNavs[j].style.maxHeight = null;
                }
            }
            var subNav = this.nextElementSibling;
            if (subNav.style.maxHeight) {
                subNav.style.maxHeight = null;
                this.classList.remove('active');
                this.querySelector('.navbar__item-text').classList.remove('active');
            } else {
                subNav.style.maxHeight = subNav.scrollHeight + 'px';
                this.querySelector('.navbar__item-text').classList.add('active');
                this.classList.add('active');

            }
        })
        btnNav.onmouseover = function() {
            alert('skdndsm')
        }
    }
})

btnCloseMenu.addEventListener('click', function() {
    collapseMenu();
})


if (screen.width > 767 && screen.width <= 1024) {
    collapseMenu();
}

if (screen.width <= 767) {
    btnCloseMenu.addEventListener('click', function(e) {
        Navbar.style.width = 250 + 'px';
        $('.navbar').style.right = 0;
    })

    $('.navbar').addEventListener('click', function(e) {
        Navbar.style.width = 0;
        this.style.right = '100%';
    })

    Navbar.addEventListener('click', function(e) {
        e.stopPropagation();
    })
}

// hiển thị dịch vị khác trên thanh top-bar
const btnTopbar = $$('.topbar-right__link');
const service = $('.topbar-right-service');
const searchMobile = $('.form-search--mobile');
const btnNotifys = $$('.topbar-right-notify__category-name');
const notify = $('.topbar-right-notify');
const notifyHistory = $('.topbar-right-notify__history');
const notifyAdmin = $('.topbar-right-notify__admin');
const heading = $('.heading');
const contentMain = $('.content');
const cards = $$('.card');
const seperates = $$('.seperate');


btnTopbar.forEach(function(btn) {

})

// btnTopbar[0].onclick = function(e) {
//     searchMobile.classList.toggle('show');
//     e.stopPropagation();
// }

searchMobile.addEventListener('click', function(e) {
    e.stopPropagation();
})

// btnTopbar[1].addEventListener('click', function(e) {
//     service.classList.toggle('show');
//     e.stopPropagation();
// })

service.addEventListener('click', function(event) {
    event.stopPropagation();
})


main.addEventListener('click', function() {
    service.classList.remove('show');
    notify.classList.remove('show');
    searchMobile.classList.remove('show');
})


//


// hiển thị thông báo trên thanh top'-bar


notify.addEventListener('click', function(event) {
    event.stopPropagation();
})

// btnTopbar[4].onclick = function(e) {
//     notify.classList.toggle('show');
//     e.stopPropagation();
// }

btnNotifys.forEach(function(btnNotify, index) {
    btnNotify.onclick = function() {
        if (index == 0) {
            btnNotifys[1].classList.remove('active');
            this.classList.add('active');
            notifyAdmin.classList.remove('active');
            notifyHistory.classList.add('active')
        } else {
            btnNotifys[0].classList.remove('active');
            this.classList.add('active');
            notifyAdmin.classList.add('active');
            notifyHistory.classList.remove('active')
        }
    }
})

btnTopbar[2].addEventListener('click', openFullscreen)

function openFullscreen() {
    if (main.requestFullscreen) {
        main.requestFullscreen();
    } else if (main.webkitRequestFullscreen) { /* Safari */
        main.webkitRequestFullscreen();
    } else if (main.msRequestFullscreen) { /* IE11 */
        main.msRequestFullscreen();
    }
}



btnTopbar[3].addEventListener('click', function() {
    Navbar.classList.toggle('bg-dark-100');
    header.classList.toggle('bg-dark-200');
    heading.classList.toggle('bg-dark-100');
    contentMain.classList.toggle('bg-dark-300');

    seperates.forEach(function(seperate) {
        seperate.classList.toggle('bg-dark-300');
    })
    cards.forEach(function(card) {
        card.classList.toggle('bg-dark-400');
    })
})

// click tabs
const tabs = $$('.tabs');
const panes = $$('.tab-pane');

tabs.forEach(function(tab, index) {
    var pane = panes[index];

    tab.onclick = function() {
        $('.tabs.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    }
})


// chọn cảm xúc
const feels = $$('.feel');

feels.forEach(function(feel) {
    feel.addEventListener('click', function() {
        $('.feel.active').classList.remove('active');

        this.classList.add('active');
    })
})


// tắt thông báo đăng nhập
var toast = $('.toast');
var btnClose = $('.toast__btn-close');

btnClose.onclick = function() {
    toast.style.display = 'none';
}