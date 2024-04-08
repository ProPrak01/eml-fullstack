import asyncHandler from "express-async-handler"
import Team from "../models/Team.js";

// @desc : Get the speaker Data 
// @route: GET /api/team/:year
// @access : public 

export const getTeamByYear = asyncHandler(async(req,res) => {
    const team = await Team.find({year : req.params.year})
    res.status(200).send(team)
});

export const addTeammate = asyncHandler(async(req,res)=> {
    if(!req.body){
        res.status(400);
    }

    const teammate = await Team.create(req.body); 
    res.status(200).send(teammate);
})


// {
//     "name": "Arjav",
//     "position": "Students' Head",
//     "year": 2023,
//     "photo": "https://media.licdn.com/dms/image/D5603AQGv2NnrrIxSUQ/profile-displayphoto-shrink_800_800/0/1707976353343?e=2147483647&v=beta&t=aV3Hv5NPwP7IminPx2T65j5yIW3M7gQcvMUbK8CFXvs",
//     "vertical": ""
  
//   }