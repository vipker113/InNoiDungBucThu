function inThu(){
    let ten = prompt("Nhập tên người bạn muốn gửi : ");
    let diaDiem= prompt("Nhập địa điểm : ");
    let ngayThang= prompt("Nhập ngày tháng (ví dụ : Ngày 10/6/2021) : ");
    document.getElementById("name").innerHTML=ten;
    document.getElementById("diaDiem").innerHTML=diaDiem;
    document.getElementById("thoiGian").innerHTML=ngayThang;
    document.getElementById("letter").style.display="block";
}