// it's a function that runs during the request response cycle 
// so when we send a route or send a request to a route or an endpoint 
// this function that we create is going run and check the token  

const jwt = require ('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const user = require('../models/userModel')

const protect = asyncHandler(async(req,res,next) => {
    let token 
    // Check the authorization header, making sure it's bearer token  

    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ){
        try{
            // Then we're assigning the token to the variable token
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token from header
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from token
            req.user  = await user.findById(decoded.id).select('-password')
            next()

        } catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        } 
    }

    if (!token)
    {
        res.status(401)
        throw new Error('Not authorized, No token')
    }
})

module.exports = { protect }