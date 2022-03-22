console.log(window);
// window.alert('day la tu win')
// window.prompt('day la tu win')
// với những phương thức thuộc tính từ win có thể sử dụng window.tên hoặc gọi luôn tên.

// window.open('http://thuthuatphanmem.vn/tranh-to-mau-cong-chua-phep-thuat-winx/')
// quảng cáo
function onhelp() {
    window.open('http://127.0.0.1:5500/help.html');
    // open('/bom/help.html');
}

function reses() {
    window.location.reload();
    location.reload();

}
//giới hạn thời gian xem web
function tien_nap() {
    var naptien = prompt('nap vao tien đẻ xem tiếp');
    //khai báo biến để dùng setInterval
    var intervalnaptien;
    if ((isNaN(naptien) == false) && (naptien > 5000)) {
        //nếu nạp tiền thành công thì xóa interval để k chạy thông báo
        clearInterval(interval);
        alert('nap tien thanh cong');


    } else {
        // nạp tiền k thành công sẽ chạy liên tục
        var interval = setInterval("alert('nap sai lại nào')", 1000);
        alert('nap tien k thanh công');
        //ví dụ cái khác:nếu nạp k thành công thì mở 19 lần wiz
        for (var i = 0; i < 20; i++) {
            // open('http://thuthuatphanmem.vn/tranh-to-mau-cong-chua-phep-thuat-winx/')
            // hoặc
            // document.write('nap tiền đi r cho xem');

        }
    }
}


// setTimeout("tien_nap()", 1000);

// xóa chạy lại thời gian nạp tiền

// var interval = setInterval("console.log('nap sai lại nào')", 1000);
// clearInterval(interval);

console.log(document);