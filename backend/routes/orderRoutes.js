const express = require("express");
const router = express.Router();
const Order = require("../models/Order.models");
const OrderItem = require("../models/OrderItem.models");

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("customer vendor");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new order
router.post("/", async (req, res) => {
  const order = new Order({
    customer: req.body.customer,
    vendor: req.body.vendor,
    total_price: req.body.total_price,
    status: req.body.status,
    delivery_type: req.body.delivery_type,
  });

  try {
    const newOrder = await order.save();
    // Add order items
    const orderItems = req.body.items.map((item) => ({
      order: newOrder._id,
      product: item.product,
      quantity: item.quantity,
      price: item.price,
    }));
    await OrderItem.insertMany(orderItems);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get an order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "customer vendor"
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an order
router.put("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.total_price = req.body.total_price || order.total_price;
    order.status = req.body.status || order.status;
    order.delivery_type = req.body.delivery_type || order.delivery_type;

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an order
router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    await OrderItem.deleteMany({ order: order._id });
    await order.remove();
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
