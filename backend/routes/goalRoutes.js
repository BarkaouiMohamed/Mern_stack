 const express = require('express') // bring express into this file , this is common js module syntax
 const router = express.Router()
const { getGoals,setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

//GET
 /* router.get('/', (req, res) => {
     res.status(200).json({ 
         // you can set the status by yourself 
         message: 'Get Goals '
     })
 }) */

 /* router.get('/',getGoals)

 //CREATE
 router.post('/', setGoal)

//UPDATE
router.put('/:id', updateGoal)
 
//Delete
router.delete('/:id', deleteGoal) */
// because we have get and post , delete and update are the same route we replace the syntax 

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)
module.exports = router