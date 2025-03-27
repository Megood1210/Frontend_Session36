
const btnAdd = document.querySelector("#btn");
const input = document.querySelector("#taskName");
const pendingTasks = document.querySelector("#pendingTasks");
const inProgressTasks = document.querySelector("#inProgressTasks");
const doneTasks = document.querySelector("#doneTasks");

let tasks = JSON.parse(localStorage.getItem("pendings")) || [];

function render() {
    pendingTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const taskName = document.createElement("p");
        taskName.textContent = task.name;
        taskDiv.appendChild(taskName);
       
        if (task.status === 0) {
   
            const startBtn = document.createElement("button");
            startBtn.textContent = "Chuyển tiếp";
            startBtn.addEventListener("click", () => {
                tasks[index].status = 1; 
                localStorage.setItem("pendings", JSON.stringify(tasks));
                render();
            });
            taskDiv.appendChild(startBtn);
            pendingTasks.appendChild(taskDiv);
        } else if (task.status === 1) {

            const doneBtn = document.createElement("button");
            doneBtn.textContent = "Hoàn thành";
            doneBtn.addEventListener("click", () => {
                tasks[index].status = 2; 
                localStorage.setItem("pendings", JSON.stringify(tasks));
                render();
            });
            taskDiv.appendChild(doneBtn);
            inProgressTasks.appendChild(taskDiv);
        } else if (task.status === 2) {
            doneTasks.appendChild(taskDiv);
        }
    });
}

render();

btnAdd.addEventListener("click", function () {
    if (!input.value.trim()) {
        alert("Không được để trống");
        return;
    }

    tasks.push({ name: input.value.trim(), status: 0 });

    localStorage.setItem("pendings", JSON.stringify(tasks));

    input.value = "";

    render();
});