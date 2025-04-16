const express = require('express');
const router = express.Router();
const Automobile = require('../models/Automobile');

// Create an automobile
router.post('/', async (req, res) => {
  try {
    const automobile = new Automobile(req.body);
    await automobile.save();
    res.status(201).send(automobile);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all automobiles
router.get('/', async (req, res) => {
  try {
    const automobiles = await Automobile.find();
    res.status(200).send(automobiles);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an automobile
router.put('/:id', async (req, res) => {
  try {
    const automobile = await Automobile.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!automobile) {
      return res.status(404).send();
    }
    res.send(automobile);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an automobile
router.delete('/:id', async (req, res) => {
  try {
    const automobile = await Automobile.findByIdAndDelete(req.params.id);
    if (!automobile) {
      return res.status(404).send();
    }
    res.send(automobile);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;