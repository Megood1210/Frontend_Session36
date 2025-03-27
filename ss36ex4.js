const modeToggle = document.querySelector(".dark-mode-toggle");
const modeIcon = document.getElementById("mode-icon");
const body = document.body;

// Kiểm tra chế độ từ localStorage
const currentMode = localStorage.getItem("theme");
if (currentMode === "dark") {
    enableDarkMode();
}

// Hàm bật Dark Mode
function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark"); // Lưu trạng thái
}

// Hàm tắt Dark Mode
function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light"); // Lưu trạng thái
}

// Xử lý sự kiện khi bấm nút
modeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});
