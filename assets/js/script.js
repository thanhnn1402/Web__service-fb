const btnNavs = document.querySelectorAll('.navbar__link');
const subNavs = document.querySelectorAll('.navbar-sub');


subNavs.forEach(function(subNav, index) {
    const btnNav = btnNavs[index + 4];
    let toggle = document.createAttribute('data-toggle');
    toggle.value = false;
    // subNav.setAttributeNode(toggle);

    btnNav.onclick = function() {
        //     if (subNav.getAttribute('data-toggle') == false) {
        //         subNav.style.maxHeight = subNav.scrollHeight + 'px';
        //         console.log(subNav.getAttribute('data-toggle'))
        //         toggle.value = true;

        //     } else {
        //         subNav.style.maxHeight = null;
        //         console.log(subNav.getAttribute('data-toggle'))
        //         toggle.value = false;
        //     }



        if (document.querySelector('.navbar__link.active')) {
            for (var i = 0; i < subNavs.length; i++) {
                document.querySelector('.navbar__link.active').classList.remove('active');
            }
        } else {
            this.classList.toggle('active');
            if (subNav.style.maxHeight) {
                toggle.value = false;
                subNav.setAttributeNode(toggle);
                subNav.style.maxHeight = null;
                this.querySelector('.navbar__link-icon').classList.remove('active');
            } else {
                toggle.value = true;
                subNav.setAttributeNode(toggle);
                subNav.style.maxHeight = subNav.scrollHeight + 'px';
                this.querySelector('.navbar__link-icon').classList.add('active');
            }
        }
    }
})


function showMenu() {

}

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