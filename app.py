from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

ORDERS_FILE = 'orders.json'


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/place-order', methods=['POST'])
def place_order():

    data = request.json

    order = {
        'name': data['name'],
        'phone': data['phone'],
        'address': data['address'],
        'product': data['product'],
        'quantity': data['quantity']
    }


    orders = []

    if os.path.exists(ORDERS_FILE):
        with open(ORDERS_FILE, 'r') as file:
            try:
                orders = json.load(file)
            except:
                orders = []


    orders.append(order)


    with open(ORDERS_FILE, 'w') as file:
        json.dump(orders, file, indent=4)


    return jsonify({
        'message': 'Order placed successfully!'
    })


if __name__ == '__main__':
    app.run(debug=True)