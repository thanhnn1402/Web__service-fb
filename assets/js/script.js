var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);


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
const Navbar = $('.navbar');
const NavbarTitle = $$('.navbar__title');
const header = $('.header');
const ContentMain = $('.content-main');
const btnNavContents = $$('.navbar__item-text');
var a = [];

function collapseMenu() {
    if (Navbar.className == 'navbar show') {
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

btnCloseMenu.addEventListener('click', function() {
    collapseMenu();
})


if (screen.width <= 1024) {
    collapseMenu();
}

// hiển thị dịch vị khác trên thanh top-bar
const btnTopbar = $$('.topbar-right__item');
const service = $('.topbar-right-service');


btnTopbar[0].addEventListener('click', function() {
    service.classList.toggle('show');
})


// hiển thị thông báo trên thanh top'-bar
const btnNotifys = $$('.topbar-right-notify__category-name');
const notify = $('.topbar-right-notify');
const notifyHistory = $('.topbar-right-notify__history');
const notifyAdmin = $('.topbar-right-notify__admin');

notify.addEventListener('click', function(event) {
    event.stopPropagation();
})

btnTopbar[3].onclick = function() {
    notify.classList.toggle('show');
}

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