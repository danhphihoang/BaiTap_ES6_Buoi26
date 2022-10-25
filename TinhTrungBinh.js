export let TinhTB = (...param) => {
    let tong = 0;
    let ketqua = 0;
    for (let index = 0; index < param.length; index++) {
        tong += param[index];
    }
    ketqua = tong / param.length;

    return ketqua;
}   