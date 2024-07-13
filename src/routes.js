const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem} = require('./controllers');

router.get('/items', getItems);
router.get('/items/:id', getItem);
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

module.exports = router;