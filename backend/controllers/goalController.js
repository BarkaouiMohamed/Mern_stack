const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')
// @desc Get Goals
// @route Get/api/goals
// @access Private
// get goals which fetch them from mongodb using mongoose
const getGoals =asyncHandler( async (req, res) => { 
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
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
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
} )

// @desc Update Goal
// @route PUT/api/goals/:id
// @access Private

    const updateGoal =asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)
    
    // Check for user
    if(!user)
    {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user 
    if (goal.user.toString() !== user.id )
    {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
})

// @desc Delete Goal
// @route Delete/api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    
    const user = await User.findById(req.user.id)
    
    // Check for user
    if(!user)
    {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user 
    if (goal.user.toString() !== user.id )
    {
        res.status(401)
        throw new Error('User not authorized')
    }
    await goal.remove()
    res.status(200).json({ id: req.params.id })
})
// to use the getGoals we need to export it 
module.exports = {
    getGoals,
    setGoal,
    deleteGoal,
    updateGoal,
}