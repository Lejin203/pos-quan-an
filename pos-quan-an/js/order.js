let tables = Storage.getTables()
let menu = Storage.getMenu()

let currentTable = null
let currentCategory = null

const API = "https://pos-quan-an.onrender.com"  // Thay bằng URL Render của bạn

/* =========================
   DANH MỤC
========================= */

function drawCategories() {
    let div = document.getElementById("categories")
    div.innerHTML = ""

    let cats = [...new Set(menu.map(m => m.cat))]

    cats.forEach(cat => {
        let b = document.createElement("div")
        b.className = "category-btn"

        if (cat === currentCategory) b.classList.add("active")

        b.innerText = cat

        b.onclick = () => {
            currentCategory = cat
            drawCategories()
            drawMenu()
        }

        div.appendChild(b)
    })
}

/* =========================
   MENU
========================= */

function drawMenu() {
    let div = document.getElementById("menu")
    div.innerHTML = ""

    let key = document.getElementById("search").value.toLowerCase()

    let list = []

    if (key) {
        list = menu.filter(m =>
            m.name.toLowerCase().includes(key)
        )
        document.getElementById("categories").style.display = "none"
    } else {
        document.getElementById("categories").style.display = "flex"
        list = menu.filter(m =>
            !currentCategory || m.cat === currentCategory
        )
    }

    list.forEach(m => {
        let b = document.createElement("button")

        b.innerHTML = m.name + "<br>" + m.price + "đ"

        b.onclick = () => addFood(m)

        div.appendChild(b)
    })
}

/* =========================
   BÀN
========================= */

function drawTables() {
    let div = document.getElementById("tables")
    div.innerHTML = ""

    for (let i = 1; i <= 20; i++) {
        let b = document.createElement("button")

        b.innerText = "Bàn " + i

        if (currentTable === i) {
            b.style.background = "#27ae60"
            b.style.color = "white"
        }

        b.onclick = () => openTable(i)

        div.appendChild(b)
    }
}

/* =========================
   CHỌN BÀN
========================= */

function openTable(n) {
    currentTable = n

    if (!tables[n]) tables[n] = []

    document.getElementById("currentTable").innerHTML =
        "Đang phục vụ: <b>Bàn " + n + "</b>"

    drawBill()
    drawTables()
}

/* =========================
   THÊM MÓN
========================= */

function addFood(food) {
    if (currentTable === null) {
        alert("Vui lòng chọn bàn trước")
        return
    }

    tables[currentTable].push(food)

    Storage.saveTables(tables)

    drawBill()
}

/* =========================
   HÓA ĐƠN
========================= */

function drawBill() {
    if (currentTable === null) {
        document.getElementById("bill").innerHTML = "Chưa chọn bàn"
        return
    }

    let table = tables[currentTable]

    let html = ""
    let total = 0

    table.forEach((f, i) => {
        total += f.price

        html += `
<div class="bill-item">
  ${f.name} - ${f.price}đ
  <button onclick="removeFood(${i})">❌</button>
</div>
`
    })

    html += "<hr><b>Tổng: " + total + "đ</b>"

    document.getElementById("bill").innerHTML = html
}

/* =========================
   XÓA MÓN
========================= */

function removeFood(i) {
    tables[currentTable].splice(i, 1)

    Storage.saveTables(tables)

    drawBill()
}

/* =========================
   GỘP MÓN TRÙNG
========================= */

function groupFoods(foods) {
    let map = new Map();
    foods.forEach(f => {
        let key = f.name + "_" + f.price;
        if (map.has(key)) {
            let item = map.get(key);
            item.qty += 1;
        } else {
            map.set(key, { name: f.name, price: f.price, qty: 1 });
        }
    });
    return Array.from(map.values());
}

/* =========================
   GỬI BẾP (SERVER)
========================= */

function sendKitchen() {
    if (currentTable === null) {
        alert("Chưa chọn bàn");
        return;
    }

    let foods = tables[currentTable];
    if (foods.length === 0) {
        alert("Chưa có món nào để gửi");
        return;
    }

    let grouped = groupFoods(foods);

    let order = {
        table: currentTable,
        foods: grouped
    };

    fetch(API + "/send", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    }).then(() => {
        alert("Đã gửi bếp");
        tables[currentTable] = [];
        Storage.saveTables(tables);
        drawBill();
    });
}

/* ========================= */

document.getElementById("search").oninput = drawMenu

drawTables()
drawCategories()
drawMenu()