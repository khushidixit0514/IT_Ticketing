const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv").config()
const {LogInCollection,Location,ComplaintType,Department,CallStatus} = require("./mongodb")
const jwt =require("jsonwebtoken")

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
    const {name, password} =req.body
    if(!name ||!password){
        res.status(400)
        throw new Error("username, email, password are required!")
    }
    const userAvailable = await LogInCollection.findOne({ name })
    if(userAvailable){
        res.status(400)
        throw new Error("User already registered!")
    }
    // Hashed password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("Hashed Password: ", hashedPassword)
    const user = await User.create({
        name,
        password: hashedPassword,
    })
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400)
        throw new Error("User data is invalid!")
    }
})

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler( async (req, res) => {
    const {name, password} = req.body
    if(!name || !password){
        res.status(400)
        throw new Error("email, password are required!")
    }
    const user = await LogInCollection.findOne({name})

    if (user.password === req.body.password  && user.key==="99"){
        const accessToken = jwt.sign(
            {
              user: {
                name: user.name,
                id: user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" },
      )
      console.log({accessToken})
      res.status(200).render("home")



    }else{
        res.status(401)
        throw new Error("Email or Password invalid!")
    }
})






//@desc Current user
//@route GET /api/users/current
//@access private
const currenUser = asyncHandler( async (req, res) => {
    res.render({user})
    
})


const register= asyncHandler(async(req,res)=>{


    try{
        const getLocation= await Location.find({}) ;
        res.status(201).send(getLocation)
        console.log(getLocation)
            }catch(e){
        res.status(500).send(e);
            }
        
    res.render("register",{location:{getLocation}})
})




const Locationn=asyncHandler(async(req,res)=>{

    try{
const getLocation= await Location.find({}) ;
res.status(201).send(getLocation)
console.log(getLocation)
    }catch(e){
res.status(500).send(e);
    }

})
module.exports = {registerUser, loginUser, currenUser,Locationn,register} 
