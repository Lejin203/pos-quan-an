from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

orders = []

# =========================
# GỬI ĐƠN TỪ MÁY ORDER
# =========================
@app.route("/send", methods=["POST"])
def send():

    data = request.json

    orders.append(data)

    print("Đơn mới:", data)

    return {"status":"ok"}


# =========================
# BẾP LẤY DANH SÁCH ĐƠN
# =========================
@app.route("/orders")
def get_orders():

    return jsonify(orders)


# =========================
# XÓA ĐƠN (khi bếp làm xong)
# =========================
@app.route("/clear", methods=["POST"])
def clear():

    orders.clear()

    return {"status":"cleared"}


# =========================
# CHẠY SERVER
# =========================
if __name__ == "__main__":

    print("Server đang chạy tại:")
    print("http://localhost:5000")

    app.run(host="0.0.0.0", port=5000, debug=True)
