function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    document.querySelector(".container").style.backgroundColor = color;
    // Lưu màu vào localStorage
    localStorage.setItem("backgroundColor", color);
}

// Khi tải lại trang, áp dụng màu nền đã lưu
const savedColor = localStorage.getItem("backgroundColor");
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.querySelector(".container").style.backgroundColor = savedColor;
}
