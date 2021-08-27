const qSelect = document.querySelector.bind(document);
const qSelectAll = document.querySelectorAll.bind(document);

const tabServices = qSelectAll('.service-tab-item');
const tabServiceMains = qSelectAll('.service-main-item');

tabServices.forEach((tabService, index) => {
  // index là số thứ tự của class khi click

  const tabServicesMain = tabServiceMains[index];

  tabService.onclick = function () {
    qSelect('.service-tab-item.active').classList.remove('active'); // xóa các active đang có
    this.classList.add('active'); // thêm class active vào nút mà mình đã nhấn

    qSelect('.service-main-item.active').classList.remove('active');
    tabServicesMain.classList.add('active');
  };
});
