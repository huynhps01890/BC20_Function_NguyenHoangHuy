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
 * +B5: tách hàm
 * 
 * Khối 3:
 * + tính tiền (total)
 */

const KW50DAU = 500;
const KW50KETIEP = 650;
const KW100KETIEP = 850;
const KW150KETIEP = 1100;
const TREN350KW = 1300;

// main function
function tinhTienDien(){
    var name = document.getElementById("txtName").value;
    var soKW = document.getElementById("txtKw").value;
    var total = 0;

    // gọi hàm
    total = tinhDien(soKW,KW50DAU,KW50KETIEP,KW100KETIEP,KW150KETIEP,TREN350KW);


    // if(0< soKW && soKW <= 50){
    //     // tính KW đầu
    //     total = soKW * KW50DAU;
    // }else if(50 < soKW && soKW <= 100){
    //     total = 50 * KW50DAU + (soKW - 50) * KW50KETIEP;
    // }else if(100 < soKW && soKW <= 200){
    //     total = 50 * KW50DAU + 50 * KW50KETIEP + (soKW - 100) * KW100KETIEP;
    // }else if(200 < soKW && soKW <= 350){
    //     total = 50 * KW50DAU + 50 * KW50KETIEP + 100 * KW100KETIEP + (soKW - 200) * KW150KETIEP ;
    // }else if(soKW > TREN350KW){
    //     total = 50 * KW50DAU + 50 * KW50KETIEP + 100 * KW100KETIEP + 150 * KW150KETIEP + (soKW - 350) * TREN350KW;
    // }else{
    //     console.log("Số điện chưa hợp lệ");
    // }
    document.getElementById("txtTinh").innerHTML = "Họ tên: " + name + " ; " + "Số tiền điện là : " + total;

}
document.getElementById("btnTinh").onclick = tinhTienDien;

// tách hàm
function tinhDien(thamsoKW,thamsoKW50DAU,thamsoKW50KETIEP,thamsoKW100KETIEP,thamsoKW150KETIEP,thamsoTREN350KW){
    var total = 0;
    if(0< thamsoKW && thamsoKW <= 50){
        // tính KW đầu
        total = thamsoKW * thamsoKW50DAU;
    }else if(50 < thamsoKW && thamsoKW <= 100){
        total = 50 * thamsoKW50DAU + (thamsoKW - 50) * thamsoKW50KETIEP;
    }else if(100 < thamsoKW && thamsoKW <= 200){
        total = 50 * thamsoKW50DAU + 50 * thamsoKW50KETIEP + (thamsoKW - 100) * thamsoKW100KETIEP;
    }else if(200 < thamsoKW && thamsoKW <= 350){
        total = 50 * thamsoKW50DAU + 50 * thamsoKW50KETIEP + 100 * thamsoKW100KETIEP + (thamsoKW - 200) * thamsoKW150KETIEP ;
    }else if(thamsoKW > 350){
        total = 50 * thamsoKW50DAU + 50 * thamsoKW50KETIEP + 100 * thamsoKW100KETIEP + 150 * thamsoKW150KETIEP + (thamsoKW - 350) * thamsoTREN350KW;
    }else{
        console.log("Số điện chưa hợp lệ");
    }
    
    return total;
}


/**
 * Bài 3: Tính thuế thu nhập cá nhân
 * 
 * Khối 1:
 * + tên (fullNameThue)
 * + tổng thu nhập năm (tongThunhap)
 * + số người phụ thuộc (soNguoiPhuThuoc)
 * 
 * Khối 2:
 * +B1: khai báo biến
 * +B2: lấy giá trị từ người dùng nhập vào
 * +B3: tính thuế thu nhập cá nhân
 * +B4: xuất kết quả
 * 
 * 
 * Khối 3: 
 * + thu nhập chịu thuế (thuNhapChiuThue)
 */


const THUE60 = 0.05;
const THUE_60_120 = 0.1;
const THUE_120_210 = 0.15;
const THUE_210_384 = 0.2;
const THUE_384_624 = 0.25;
const THUE_624_960 = 0.3;
const THUE_TREN_960 = 0.35;

function tinhThueThuNhap(){
    var fullNameThue = document.getElementById("txtNameThue").value;
    var tongThunhap = document.getElementById("txtThuNhap").value;
    var soNguoiPhuThuoc = document.getElementById("txtSoNguoi").value;
    var thuNhapChiuThue = tongThunhap - 4000000 - soNguoiPhuThuoc * 1600000;
    console.log(tongThunhap,soNguoiPhuThuoc,thuNhapChiuThue,tienDongThue);
    

    if(0 < thuNhapChiuThue && thuNhapChiuThue <= 60000000){
        thuNhapChiuThue = thuNhapChiuThue * THUE60;
    }else if(60000000 < thuNhapChiuThue && thuNhapChiuThue <= 120000000){
        thuNhapChiuThue = thuNhapChiuThue * THUE_60_120;
    }else if(120000000 < thuNhapChiuThue && thuNhapChiuThue <= 210000000){
        thuNhapChiuThue = thuNhapChiuThue * THUE_120_210;
    }else if(210000000 < thuNhapChiuThue && thuNhapChiuThue <= 384000000){
        thuNhapChiuThue = thuNhapChiuThue * THUE_210_384;
    }else if(384000000 < thuNhapChiuThue && thuNhapChiuThue <= 624000000){
        thuNhapChiuThue = thuNhapChiuThue * THUE_384_624;
    }else if(624000000 < thuNhapChiuThue && thuNhapChiuThue <= 960000000){
        thuNhapChiuThue = thuNhapChiuThue *THUE_624_960;
    }else if(thuNhapChiuThue > 960000000){
        thuNhapChiuThue = thuNhapChiuThue * THUE_TREN_960;
    }else{
        console.log("Chưa phù hợp")
    }
    document.getElementById("txtTinhThue").innerHTML = "Tiền thuế phải đóng: " + thuNhapChiuThue;
}

document.getElementById("btnTinhThue").onclick = tinhThueThuNhap;




/**
 * Bài 4 : Tính tiền cáp
 * 
 * Khối 1:
 * + mã KH (maKH)
 * + loại KH (loaiKH)
 * + số kênh cao cấp (soKenh)
 * + số kết nối (soKetNoi)
 * 
 * Khối 2:
 * +B1: tạo biến
 * +B2: lấy giá trị từ người dùng
 * +B3: kiểm tra loại KH
 * +B4: tính tiền dựa vào loại KH
 * +B5: show kết quả
 * +B6: tách hàm
 * 
 * Khối 3:
 * + tổng tiền trả (total)
 */


const PHIXULY_NHADAN = 4.5
const PHIDICHVU_NHADAN = 20.5;
const THUEKENH_NHADAN = 7.5;

const PHIXULY_DOANHNGHIEP = 15;
const PHIDICHVU_DOANHNGHIEP = 75;
const THUEKENH_DOANHNGHIEP = 50;

// main function
function tinhTienCap(){
    var maKH = document.getElementById("txtMaKH").value;
    var loaiKH = document.getElementById("selectKhachHang").value;
    var soKenh = document.getElementById("txtSoKenhCaoCap").value;
    var soKetNoi = document.getElementById("txtSoKetNoi").value;
    var total = 0;
    // console.log(maKH,loaiKH,soKenh,soKetNoi,total);

    // kiểm tra loại KH
    switch(loaiKH){
        case "nhaDan":
            // tính tiền nhà dân
            // gọi hàm
            total = tinhTien(PHIXULY_NHADAN,PHIDICHVU_NHADAN,soKenh,THUEKENH_NHADAN);
            break;
        case "doanhNghiep":
            // tính tiền doanh nghiệp
            // gọi hàm
            total = tinhTien(PHIXULY_DOANHNGHIEP,PHIDICHVU_DOANHNGHIEP,soKenh,THUEKENH_DOANHNGHIEP) + tinhDauKetNoi(soKetNoi,PHIDICHVU_DOANHNGHIEP);
            break;
        default:
            console.log("Hãy chọn loại KH")
    }

    document.getElementById("txtTinhTienCap").innerHTML = "Số tiền là : " + "$" + total;
    
}

document.getElementById("btnTinhTienCap").onclick = tinhTienCap;

// tách hàm
function tinhTien(thamsoPHIXULY,thamsoPHIDICHVU,thamsosoKenh,thamsoTHUEKENH){
    var total = 0;
    total = thamsoPHIXULY + thamsoPHIDICHVU + thamsosoKenh * thamsoTHUEKENH;

    return total;
}

// hàm tính tiền số đầu kết nối
function tinhDauKetNoi(thamsosoKetNoi,thamsoPHIDICHVU){
    var total = 0;
    if(0 < thamsosoKetNoi && thamsosoKetNoi <= 10){
        total = 0;
    }else if(thamsosoKetNoi > 10){
        total = (thamsosoKetNoi - 10) * 5;
    }
    return total;
}




