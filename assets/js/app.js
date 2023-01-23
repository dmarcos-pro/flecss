import * as common from './common';

const app = {
    device : {
        mobile  : 520,
        tablet  : 768,
        laptop  : 1024,
        desktop : 1224
    },
    window : {
        height : document.documentElement.clientHeight,
        width : document.documentElement.clientWidth
    },
    page : {
        height : document.body.clientHeight,
        width : document.body.clientWidth
    },
    sticky : {
        height : document.querySelector('.sticky') == null ? null : document.querySelector('.sticky').clientHeight,
        position : document.querySelector('.sticky') == null ? null : document.querySelector('.sticky').offsetTop
    }
}
var tabsItem = document.querySelectorAll('.tabs .items .item');
for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', (event) => {
        common.tabs(event, i);
    }, false);
}
var labelTag = document.querySelectorAll('label input');
for (let i = 0; i < labelTag.length; i++) {
    labelTag[i].addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

document.querySelector('.dropdown-button').addEventListener('click', (event) => {
    common.dropdownButton(event.target.offsetParent);
});
document.querySelector('.switch').addEventListener('click', (event) => {
    common.switchButton(event.target.value, event.target.offsetParent);
});
window.addEventListener('scroll', (event) => {
    common.scrollpage(app.window.height, app.page.height);
    if (app.sticky.height != null) {
        common.sticky(app.window.height, app.sticky.position, app.sticky.height);
    }
    var parallaxItem = document.querySelectorAll('.parallax');
    for (let i = 0; i < parallaxItem.length; i++) {
        for (let x = 0; x < parallaxItem[i].children.length; x++) {
            if ( (window.pageYOffset + app.window.height) > parallaxItem[i].offsetTop ) {
                common.parallax(
                    window.pageYOffset,
                    parallaxItem[i].children[x].getAttribute('class'),
                    parallaxItem[i].children[x].getAttribute('speed'),
                    parallaxItem[i].offsetTop,
                    parallaxItem[i].children[x].getAttribute('align')
                );
            }
        }
    }
});
var toastBlock = document.querySelectorAll('.toast-block');
for (let i = 0; i < toastBlock.length; i++) {
    toastBlock[i].children[0].addEventListener('click', (event) => {
        toastBlock[i].children[1].style.bottom = "2rem";
        setTimeout( () => {
            toastBlock[i].children[1].style.bottom = "-100%";
        }, 3000);

    });
}
