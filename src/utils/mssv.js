function randomMSSV(year) {
    // Lấy 2 số cuối của năm
    const yearSuffix = year.toString().slice(-2);

    // Tạo ngẫu nhiên 6 chữ số còn lại
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // Tạo số có 6 chữ số

    // Kết hợp 2 số của năm với số ngẫu nhiên
    const mssv = yearSuffix + randomNumber.toString();

    return mssv;
}

module.exports = randomMSSV