//input: loaiXe: string,soKm: number, thoiGianCho:number
var loaiXe = '';
var soKm = 0;
var thoiGianCho = 0;
//output: tongTien: number
var tongTien = 0;
//process
//Bước 1: Lấy giá trị input loại xe dựa vào sử kiện onclick của các nút radio button
document.getElementById('grabCar').onclick = function (){
    loaiXe = 'grabCar';
    // console.log(loaiXe)
}
document.getElementById('grabSUV').onclick = function (){
    loaiXe = 'grabSUV';
}
document.getElementById('grabBlack').onclick = function (){
    loaiXe = 'grabBlack';
}
//event oninput: người dùng gõ phím vào ô input
document.getElementById('soKm').oninput = function () {
    soKm = +document.getElementById('soKm').value;
    console.log('Số km',soKm);
}

document.getElementById('thoiGianCho').oninput = function(){
    thoiGianCho = +document.getElementById('thoiGianCho').value;
}


document.getElementById('btnTinhTien').onclick = function (){
    tongTien = tinhTienGrab(loaiXe,soKm,thoiGianCho);
    document.getElementById('xuatTien').innerHTML = tongTien;
}

document.getElementById('btnInHoaDon').onclick = function(){
    window.print();
}

function tinhTienGrab (loai,km,thoiGian) { //input
    var tien = 0; //output
    switch(loai) {
        case 'grabCar':{
            if(km <= 1){
                tien = 8000;
            }else if (km > 1 && km <= 19) {
                tien += 8000 + 7500 * (km - 1);
            }else if(km > 19) {
                tien += 8000 + 7500 * 19 + (km - 20) * 7000
            }
            tien += thoiGian * 2000 / 3;
        };break;
        case 'grabSUV': {
            if(km <= 1){
                tien = 9000;
            }else if (km > 1 && km <= 19) {
                tien += 9000 + 8500 * (km - 1);
            }else if(km > 19) {
                tien += 9000 + 8500 * 19 + (km - 20) * 8000
            }
            tien += thoiGian * 3000 / 3;
        };break;
        case 'grabBlack': {
            if(km <= 1){
                tien = 10000;
            }else if (km > 1 && km <= 19) {
                tien += 10000 + 9500 * (km - 1);
            }else if(km > 19) {
                tien += 10000 + 9500 * 19 + (km - 20) * 9000
            }
            tien += thoiGian * 4000 / 3;
        };break;
    }
    return tien; // 10000
}