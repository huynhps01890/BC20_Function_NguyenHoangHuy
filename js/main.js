/**
 * Bài 2 : Tính tiền điện
 * 
 * Khối 1:
 * + tên (name)
 * + số Kw (soKW)
 * 
 * Khối 2:
 * +B1: khai báo biến
 * +B2: lấy giá trị từ form
 * +B3: tính tiền điện theo từng mốc
 * +B4: hiển thị kết quả
 * 
 * Khối 3:
 * + tính tiền (total)
 */

const KW50DAU = 500;
const KW50KETIEP = 650;
const KW100KETIEP = 850;
const KW150KETIEP = 1100;
const TREN350KW = 1300;

function tinhTienDien(){
    var name = document.getElementById("txtName").value;
    var soKW = document.getElementById("txtKw").value;
    var total = 0;
    if(0< soKW && soKW <= 50){
        // tính KW đầu
        total = soKW * KW50DAU;
    }else if(50 < soKW && soKW <= 100){
        total = 50 * KW50DAU + (soKW - 50) * KW50KETIEP;
    }else if(100 < soKW && soKW <= 200){
        total = 50 * KW50DAU + 50 * KW50KETIEP + (soKW - 100) * KW100KETIEP;
    }else if(200 < soKW && soKW <= 350){
        total = 50 * KW50DAU + 50 * KW50KETIEP + 100 * KW100KETIEP + (soKW - 200) * KW150KETIEP ;
    }else if(soKW > TREN350KW){
        total = 50 * KW50DAU + 50 * KW50KETIEP + 100 * KW100KETIEP + 150 * KW150KETIEP + (soKW - 350) * TREN350KW;
    }else{
        console.log("Số điện chưa hợp lệ");
    }
    document.getElementById("txtTinh").innerHTML = "Số tiền điện là : " + total;

}
document.getElementById("btnTinh").onclick = tinhTienDien;




