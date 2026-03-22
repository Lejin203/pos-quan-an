import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

orders = []          # danh sách đơn đang chờ
history = []         # lịch sử đã hoàn thành
order_id = 1

# =========================
# GỬI ĐƠN TỪ MÁY ORDER
# =========================
@app.route("/send", methods=["POST"])
def send():
    global order_id
    data = request.json
    order = {
        "id": order_id,
        "table": data["table"],
        "foods": data["foods"],      # đã gộp số lượng
        "time": datetime.now().strftime("%H:%M:%S %d/%m")
    }
    orders.append(order)
    order_id += 1
    print("Đơn mới:", order)
    return {"status": "ok", "id": order["id"]}

# =========================
# BẾP LẤY DANH SÁCH ĐƠN CHỜ
# =========================
@app.route("/orders", methods=["GET"])
def get_orders():
    return jsonify(orders)

# =========================
# ĐÁNH DẤU ĐƠN ĐÃ XONG
# =========================
@app.route("/done", methods=["POST"])
def done():
    data = request.json
    oid = data["id"]
    # tìm order và chuyển sang history
    for i, o in enumerate(orders):
        if o["id"] == oid:
            history.append(o)
            del orders[i]
            break
    return {"status": "done"}

# =========================
# LẤY LỊCH SỬ
# =========================
@app.route("/history", methods=["GET"])
def get_history():
    return jsonify(history)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)