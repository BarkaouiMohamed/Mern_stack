const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @route Get/api/goals
// @access Private
const getGoals =asyncHandler( async (req, res) => {

    res.status(200).json({
        message: 'Get -Goals '
    })
}) // you can set the status by yourself

// @desc Set Goal
// @route POST/api/goals
// @access Private
const setGoal = asyncHandler(async(req, res) => {
    if (!req.body.text)
    /* {res.status(400).json({message: 'Please set a text'})} */
    {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({
        message: 'Set goal'
    })
} )

// @desc Update Goal
// @route PUT/api/goals/:id
// @access Private

    const updateGoal =asyncHandler( async (req, res) => {
    res.status(200).json({
        message: ` Update Goal ${req.params.id} `
    })
})

// @desc Delete Goal
// @route Delete/api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: ` Delete Goal ${req.params.id} `
    })
})
// to use the getGoals we need to export it 
module.exports = {
    getGoals,
    setGoal,
    deleteGoal,
    updateGoal,
}