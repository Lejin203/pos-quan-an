const API = "https://pos-quan-an.onrender.com"  // Thay bằng URL Render của bạn

function loadKitchen() {
    fetch(API + "/orders")
        .then(r => r.json())
        .then(data => {
            let div = document.getElementById("orders");
            div.innerHTML = "";
            data.forEach(o => {
                let html = "<div>";
                html += "<h3>Bàn " + o.table + "</h3>";
                html += "<small>" + o.time + "</small><br>";
                o.foods.forEach(f => {
                    html += f.name + " x" + f.qty + "<br>";
                });
                html += `<button onclick="doneOrder(${o.id})">✅ Xong</button>`;
                html += "</div>";
                div.innerHTML += html;
            });
        });
}

function doneOrder(id) {
    fetch(API + "/done", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    }).then(() => {
        loadKitchen(); // reload ngay sau khi xóa
    });
}

// Real-time cập nhật mỗi 2 giây
setInterval(loadKitchen, 2000);
loadKitchen();