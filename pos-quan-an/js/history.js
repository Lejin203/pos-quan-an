const API = "https://pos-quan-an.onrender.com"  // Thay bằng URL Render của bạn

function draw() {
    fetch(API + "/history")
        .then(r => r.json())
        .then(history => {
            let div = document.getElementById("history");
            div.innerHTML = "";
            history.forEach(h => {
                let d = document.createElement("div");
                let total = h.foods.reduce((sum, f) => sum + f.price * f.qty, 0);
                d.innerHTML = `Bàn ${h.table} - ${total}đ - ${h.time}`;
                div.appendChild(d);
            });
        });
}

draw();
// Tự động cập nhật lịch sử mỗi 5 giây
setInterval(draw, 5000);