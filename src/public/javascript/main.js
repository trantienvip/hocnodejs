const qSelect = document.querySelector.bind(document);
const qSelectAll = document.querySelectorAll.bind(document);

const tabServices = qSelectAll('.service-tab-item');
const tabServiceMains = qSelectAll('.service-main-item');

tabServices.forEach((tabService, index) => {
    // index là số thứ tự của class khi click

    const tabServicesMain = tabServiceMains[index];

    tabService.onclick = function() {
        qSelect('.service-tab-item.active').classList.remove('active'); // xóa các active đang có
        this.classList.add('active'); // thêm class active vào nút mà mình đã nhấn

        qSelect('.service-main-item.active').classList.remove('active');
        tabServicesMain.classList.add('active');
    };
});


//  open navbars mobile

const bntNavbars = document.querySelector('.bnt__nav_bars');
const navBarsMoblie = document.querySelector('.navbars_mobile');
const navOverlay = document.querySelector('.navbars_overlay');
const bntNavClose = document.querySelector('.bnt__close_navbars');


bntNavbars.onclick = function() {
    navOverlay.style.display = 'block';
    navBarsMoblie.classList.add('active');
}

function cotrolNavClose() {
    navOverlay.style.display = 'none';
    navBarsMoblie.classList.remove('active');
}
navOverlay.onclick = cotrolNavClose;
bntNavClose.onclick = cotrolNavClose;


// control navbars item children
const bntShowNavItemChildrens = document.querySelectorAll('.navbars_mobile .bnt_show_nav-children');
const boxNavItemChildrens = document.querySelectorAll('.navbars_mobile .item-small');

bntShowNavItemChildrens.forEach((bntShowNavItemChildren, index) => {
    bntShowNavItemChildren.onclick = function() {
        if (bntShowNavItemChildren.classList[2] == 'fa-plus-circle') {
            bntShowNavItemChildren.classList.remove('fa-plus-circle');
            bntShowNavItemChildren.classList.add('fa-minus-circle');
            boxNavItemChildrens[index].style.display = "block";
        } else {
            bntShowNavItemChildren.classList.remove('fa-minus-circle');
            bntShowNavItemChildren.classList.add('fa-plus-circle');
            boxNavItemChildrens[index].style.display = "none";
        }
    }
});