const express = require("express")
const path = require("path")
const app = express()
const session = require('express-session')
const config=require("./config")
const dotenv = require("dotenv").config()

app.use(express.json())
const asyncHandler = require("express-async-handler")

const router = express.Router()
// const hbs = require("hbs")
const {LogInCollection,Location,ComplaintType,Department,Log,CallStatus} = require("./mongodb")
const port = process.env.PORT || 3000

app.use(session({secret:config.sessionSecret}))
app.use(express.urlencoded({ extended: false }))


const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))
const {
    registerUser, 
    loginUser, 
    currenUser,Locationn,register
  } = require("./userController")
  

  

const routes= require('./routes.js')

app.use("/",routes)

app.listen(port, () => {
    console.log('port connected');
})




// hbs.registerPartials(partialPath)



// const validateTokenHandler = asyncHandler(async(req, res, next) =>{
//     let token
//     let authHeader = req.headers.Authorization || req.headers.authorization
//     if (authHeader && authHeader.startsWith("Bearer")){
//         token = authHeader.split(" ")[1]
//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
//             if(err){
//                 res.status(401)
//                 throw new Error("User is not authorized!")
//             }
//             req.user =decoded.user
//             next()
//         })
//         if(!token){
//             res.status(401)
//             throw new "User is unauthorised or token is missing!"
//         }
//     }
// })

//complaint log api
// app.post("/registerr",async(req,res)=>{
// try{   
// const{id,date,description}=req.body;
// const log = await Log.create({
//     id,
//     date,
//     description,
// })
// if(log){
//     res.status(201).json({id: log.id, date: log.date,description:log.description})
// }}
// catch(e){
//     res.send(e)
// }

// })













// const validateToken = require("../middleware/validateTokenHandler")

// app.use(router.post("/register", registerUser) )
// app.use(router.post("/login", loginUser)) 
// app.use(router.get("/current", currenUser)) 

// app.use(router.get("/",(req, res) => {
//     res.render('login')
// }
// ))


// app.use(router.get("/register",register )) 






//Api for changing password(Json m object banake change krna upper )
// app.patch("/changepassword/:id",async(req,res)=>{
// try{
// const _id=req.params.id;

//     const changePass= await LogInCollection.findByIdAndUpdate(_id,req.body,{new:true}
//     );
//     res.send(changePass);
// }
// catch(e){
//     res.status(404).send(e);
// }
// })

// app.get("/user/:id",async(req,res)=>{
//     try{ const _id=req.params.id;
        

//     const changePasss= await LogInCollection.findById(_id)
//     res.send(changePasss)
//     }
//     catch(e){
//         res.status(404).send(e);
//     }

// })

// app.post("/complaint",async(req,res)=>{
//     const {id, date, description} =req.body;

//     const complaintt =  await Log.create({
//         id,
//         date,
//         description
//     })


// })





// app.get("/register",async(req,res)=>{

   
// // const getLocation= await Location.find({}) ;

// // const location={
// //     location1:,
// //     location2:"moradabad"
// // }

// // res.render("register",{location})

// //     }

// )







// app.get('/signup', (req, res) => {
//     res.render('signup')
// })
// app.get('/', (req, res) => {
//     res.render('login')
// })



// app.get('/home', (req, res) => {
//     res.render('home')
// })

// app.post('/signup', async (req, res) => {
    
//     // const data = new LogInCollection({
//     //     name: req.body.name,
//     //     password: req.body.password
//     // })
//     // await data.save()

//     const data = {
//         name: req.body.name,
//         password: req.body.password

//     }

// //     const checking = await LogInCollection.findOne({ name: req.body.name })

// //    try{
// //     if (checking.name === req.body.name && checking.password===req.body.password) {
// //         res.send("user details already exists")
// //     }
// //     else{
// //         await LogInCollection.insertMany([data])
// //     }
// //    }
// //    catch{
// //     res.send("wrong inputs")
// //    }

// //     res.status(201).render("home", {
// //         naming: req.body.name
// //     })





// await LogInCollection.insertMany([data])
// res.render("home")
// })



// const loginapi= async (req, res) => {

//     try {
//         const check = await LogInCollection.findOne({ name: req.body.name })


//     const userbhai={
// username:req.body.name,
// password:req.body.password

//     }

//         if (check.password === req.body.password  && check.key==="99"  ) {
//             // res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
//             res.render("home")
//         //     req.session.user_id= check._id;
//         // //    console.log(user_id)
//         // console.log(check._id)
      

// // LogInCollection.find({'_id':check._id})
// //          .then((x)=>{
// //     res.render("register",{send:x })
// //     console.log(x)
// //     })



//         }
        
//         else if (check.password === req.body.password  && check.key==="999"  ) {
//             // res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
//             res.render("admin")
//         }
//         else {
//             res.send("incorrect password")
//         }


//     } 
    
//     catch (e) {

//         res.send("wrong details")
        

//         }
// }

// // console.log(userbhai)


// app.post('/login', loginapi



// )
// // console.log(check)
// // app.get('/register',(req,res)=>{
// //     res.render("register")
// // })

// // app.post('/register',(req,res)=>{ 
// // const bhai= req.body.name;
// // console.log(bhai);

// //     // LogInCollection.find({"name":bhai})
// //     // .then((x)=>{
// //     // res.render("register",{x})
// //     // console.log(x)
// //     // })
    
// // })
// const currenUser = async (req, res) => {
//     res.json(req.userbhai)

// }
// app.get('/register',async(req,res)=>{
    
// console.log(currenUser)
    
// // try{
// //     const check = await LogInCollection.findOne({ name: req.body.name })
// // // LogInCollection.find({'_id':check._id})
// // //          .then((x)=>{
// // //     res.render("register",{send:x })
// // //     console.log(x)
// // //     })

// //     // console.log(check._id);


// // }
  
// // catch (e) {

// //     res.send("wrong details")
    

// }



// )





