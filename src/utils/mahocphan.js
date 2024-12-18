function randomMaHocPhan(year) {

    // Tạo ngẫu nhiên 6 chữ số còn lại
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // Tạo số có 6 chữ số

    // Kết hợp 2 số của năm với số ngẫu nhiên
    const mssv = '422000' + randomNumber.toString();

    return mssv;
}

module.exports = randomMaHocPhan