const { FloorPlan, Event } = require('../models');

// Get all floor plans
exports.getAllFloorPlans = async (req, res) => {
  try {
    const floorPlans = await FloorPlan.findAll({
      include: [{ model: Event, attributes: ['id', 'title'] }],
    });
    res.json(floorPlans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get floor plan by ID
exports.getFloorPlanById = async (req, res) => {
  try {
    const floorPlan = await FloorPlan.findByPk(req.params.id, {
      include: [{ model: Event, attributes: ['id', 'title'] }],
    });
    if (!floorPlan) return res.status(404).json({ message: 'FloorPlan not found' });
    res.json(floorPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new floor plan
exports.createFloorPlan = async (req, res) => {
  try {
    const { eventId, name, svgData } = req.body;

    // Optional: validate event exists
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const floorPlan = await FloorPlan.create({ eventId, name, svgData });
    res.status(201).json(floorPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update floor plan
exports.updateFloorPlan = async (req, res) => {
  try {
    const { name, svgData } = req.body;
    const floorPlan = await FloorPlan.findByPk(req.params.id);
    if (!floorPlan) return res.status(404).json({ message: 'FloorPlan not found' });

    floorPlan.name = name || floorPlan.name;
    floorPlan.svgData = svgData || floorPlan.svgData;

    await floorPlan.save();
    res.json(floorPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete floor plan
exports.deleteFloorPlan = async (req, res) => {
  try {
    const floorPlan = await FloorPlan.findByPk(req.params.id);
    if (!floorPlan) return res.status(404).json({ message: 'FloorPlan not found' });

    await floorPlan.destroy();
    res.json({ message: 'FloorPlan deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
