const items = document.querySelectorAll('.navbar__item');
const subNavs = document.querySelectorAll('.navbar-sub');

subNavs.forEach(function(subNav, index) {
    const item = items[index + 4];

    item.onclick = function() {
        if (document.querySelector('.navbar__link.active')) {
            document.querySelector('.navbar__link.active').classList.remove('active');
            document.querySelector('.navbar-sub').style.maxHeight = null;

            this.querySelector('.navbar__link').classList.add('active');
            subNav.style.maxHeight = subNav.scrollHeight + 'px';
        } else if (this.querySelector('.navbar__link.active')) {
            this.querySelector('.navbar__link.active').classList.remove('active');
            subNav.style.maxHeight = null;
        } else {
            this.querySelector('.navbar__link').classList.add('active');
            subNav.style.maxHeight = subNav.scrollHeight + 'px';
        }
    }
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