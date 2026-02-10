const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const floorPlanController = require('../controllers/floorPlanController');

// All routes protected by JWT
router.get('/', verifyToken, floorPlanController.getAllFloorPlans);
router.get('/:id', verifyToken, floorPlanController.getFloorPlanById);
router.post('/', verifyToken, floorPlanController.createFloorPlan);
router.put('/:id', verifyToken, floorPlanController.updateFloorPlan);
router.delete('/:id', verifyToken, floorPlanController.deleteFloorPlan);

module.exports = router;
