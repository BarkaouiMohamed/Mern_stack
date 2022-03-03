// it's a function that runs during the request response cycle 
// so when we send a route or send a request to a route or an endpoint 
// this function that we create is going run and check the token  
const errorHandler = (err , req , res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}
    module.exports = {
        errorHandler,
    }