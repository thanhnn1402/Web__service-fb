const btnNavs = document.querySelectorAll('.js-btn-subNav');
const subNavs = document.querySelectorAll('.navbar-sub');
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

var btnCloseMenu = document.querySelector('.topbar-left__btn');
const Navbar = document.querySelector('.navbar');
const NavbarTitle = document.querySelectorAll('.navbar__title');
const header = document.querySelector('.header');
const ContentMain = document.querySelector('.content-main');
var a = [];
btnCloseMenu.addEventListener('click', function(e) {
    var btnNavContents = document.querySelectorAll('.navbar__item-text');
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
})

// show service 
var btnTopbar = document.querySelectorAll('.topbar-right__item');
var service = document.querySelector('.topbar-right-service');


btnTopbar[0].addEventListener('click', function() {
    service.classList.toggle('show');
})


//
var btnNotifys = document.querySelectorAll('.topbar-right-notify__category-name');
var notify = document.querySelector('.topbar-right-notify');
var notifyHistory = document.querySelector('.topbar-right-notify__history');
var notifyAdmin = document.querySelector('.topbar-right-notify__admin');

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


// 
var tabs = document.querySelectorAll('.tabs');
var panes = document.querySelectorAll('.tab-pane');

tabs.forEach(function(tab, index) {
    var pane = panes[index];

    tab.onclick = function() {
        document.querySelector('.tabs.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    }
})

var feels = document.querySelectorAll('.feel');

feels.forEach(function(feel) {
    feel.addEventListener('click', function() {
        document.querySelector('.feel.active').classList.remove('active');

        this.classList.add('active');
    })
})

var toast = document.querySelector('.toast');
var btnClose = document.querySelector('.toast__btn-close');

btnClose.onclick = function() {
    toast.style.display = 'none';
}