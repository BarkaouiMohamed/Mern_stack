// @desc Get Goals
// @route Get/api/goals
// @access Private
const getGoals = (req, res) => res.status(200).json({  message: 'Get Goals '}) // you can set the status by yourself

// @desc Set Goal
// @route POST/api/goals
// @access Private
const setGoal = (req, res) => res.status(200).json({ 
    message: 'Set Goal '
}) 

// @desc Update Goal
// @route PUT/api/goals/:id
// @access Private
const updateGoal = (req, res) => res.status(200).json({ 
    message: ` Update Goal ${req.params.id} `
}) 

// @desc Delete Goal
// @route Delete/api/goals/:id
// @access Private
const deleteGoal = (req, res) => res.status(200).json({
    message: ` Delete Goal ${req.params.id} `
})

// to use the getGoals we need to export it 
module.exports = {
    getGoals,
    setGoal,
    deleteGoal,
    updateGoal,
}