const foods = [
    { id: 1, name: "Bún bò Huế", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vRtpZi4NzBo31F_PRnBmV8EREJUzqxE8Lw&s", likes: 0 },
    { id: 2, name: "Phở bò Hà Nội", img: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/01-Phuong-Mon%20ngon&congthuc/1.%20pho%20ha%20noi/canh-nau-pho-ha-noi-xua-mang-huong-vi-kinh-do-cua-80-nam-ve-truoc-1.jpg", likes: 0 },
    { id: 3, name: "Cơm tấm Sài Gòn", img: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg", likes: 0 }
];

// Lấy dữ liệu từ localStorage nếu có
const savedLikes = JSON.parse(localStorage.getItem("foodLikes"));
if (savedLikes) {
    foods.forEach(food => {
        if (savedLikes[food.id]) {
            food.likes = savedLikes[food.id];
        }
    });
}

// Render danh sách món ăn
function renderFoodList() {
    const foodList = document.getElementById("food-list");
    foodList.innerHTML = "";

    foods.forEach(food => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food-item");

        foodItem.innerHTML = `
            <img src="${food.img}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p class="likes"> &#10084; <span id="like-count-${food.id}">${food.likes}</span> lượt thích</p>
                <button class="like-btn" onclick="likeFood(${food.id})">Thích +1</button>
            </div>
        `;

        foodList.appendChild(foodItem);
    });
}

// Xử lý tăng lượt thích
function likeFood(id) {
    const food = foods.find(f => f.id === id);
    if (food) {
        food.likes += 1;
        document.getElementById(`like-count-${food.id}`).textContent = food.likes;

        // Lưu vào localStorage
        const updatedLikes = foods.reduce((acc, curr) => {
            acc[curr.id] = curr.likes;
            return acc;
        }, {});
        localStorage.setItem("foodLikes", JSON.stringify(updatedLikes));
    }
}

// Khởi động trang
renderFoodList();
