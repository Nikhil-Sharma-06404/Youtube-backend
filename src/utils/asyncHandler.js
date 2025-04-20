// Same Code in Promises type

const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res)).catch((err) => next(err))
    };
}

export {asyncHandler}

// Generic Custom Wrapper Function for async await and error handling
// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//         console.log()
//     }
// }


