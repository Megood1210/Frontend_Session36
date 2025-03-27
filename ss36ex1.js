const app = document.getElementById("app");

function renderForm() {
    app.innerHTML = `
        <div class="container">
            <h2>Nhập tên của bạn</h2>
            <div class="input-container">
                <input type="text" id="nameInput">
                <button class="save-btn" id="saveBtn">Lưu</button>
            </div>
        </div>
    `;

    document.getElementById("saveBtn").addEventListener("click", saveName);
}

function renderGreeting(name) {
    app.innerHTML = `
        <div class="container">
            <h2>👋 Chào bạn, <strong>${name}</strong>!</h2>
            <button class="change-btn" id="changeBtn">Đổi tên</button>
        </div>
    `;

    document.getElementById("changeBtn").addEventListener("click", changeName);
}

function saveName() {
    const name = document.getElementById("nameInput").value.trim();
    if (name !== "") {
        localStorage.setItem("username", name);
        renderGreeting(name);
    }
}

function changeName() {
    localStorage.removeItem("username");
    renderForm();
}

// Kiểm tra dữ liệu trong localStorage và hiển thị giao diện phù hợp
const storedName = localStorage.getItem("username");
if (storedName) {
    renderGreeting(storedName);
} else {
    renderForm();
}
