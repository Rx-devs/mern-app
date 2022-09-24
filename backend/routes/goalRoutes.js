const express = require('express');
const router = express.Router();
const {getGoals, setGoals, updateGoal, deleteGoal} = require('../controllers/goalController');
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoals).post(protect, setGoals);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

//router.get('/', getGoals);
//router.post('/', setGoals);
//router.put('/:id', updateGoal);
//router.delete('/:id', deleteGoal);


//router.get('/', (req, res) => {
//    res.status(200).json({
//        message: 'Get goals'
//    });
//});
//router.post('/', (req, res) => {
//    res.status(200).json({
//        message: 'Set goals'
//    });
//});
//
//router.put('/:id', (req, res) => {
//    res.status(200).json({
//        message: `Update goal ${req.params.id}`
//    });
//});
//
//router.delete('/:id', (req, res) => {
//    res.status(200).json({
//        message: `Delete goal ${req.params.id}`
//    });
//});


module.exports = router;