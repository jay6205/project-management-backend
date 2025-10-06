import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

// const healthCheck = async (req, res) => {
//     try {
//         const user = await getUserFromDB()
//         res.status(200).json(
//             new ApiResponse(200, { message: "Server is Running" })
//         )
//     } catch (error) {
//         console.error(error)
//         next(error)
//     }
// }

const healthCheck = asyncHandler(async (req, res) => {
    res.status(200).json(
        new ApiResponse(200, { message: "Server is Running" })
    )
})

export { healthCheck }