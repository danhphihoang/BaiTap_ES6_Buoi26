
// BÀI TẬP 1: THAY ĐỔI MÀU SẮC
//Mảng Màu
const colorList = ["ForestGreen", "Navy", "Aqua", "CadetBlue", "BlueViolet", "Chocolate", "DarkCyan", "DarkGoldenRod", "DarkRed", "DeepPink"];

let renderButton = () => {
    for (let index = 0; index < colorList.length; index++) {
        let color = colorList[index];
        let btn = document.createElement('button');
        btn.innerHTML = color;
        btn.className = 'btn text-light mr-2';
        btn.style.backgroundColor = color;
        btn.onclick = () => {
            document.getElementById('home').style.color = color;
        }
        document.getElementById('colors').appendChild(btn);

    }
}
renderButton();


//BÀI TẬP 2: TÍNH ĐIỂM TRUNG BÌNH
import { TinhTB } from "./TinhTrungBinh.js";
document.getElementById('tinhTB').onclick = function (event) {
    event.preventDefault();
    let arrDiem = document.querySelectorAll('#khoiLop1 input');
    let diem = [];
    for (let input of arrDiem) {
        let { id, value } = input;
        diem[id] = value;

    }
    // let ketqua = TinhTB(diem.value);
 

}