const express = require("express")

const router = express.Router()
app.use(express.json())
const {
        registerUser, 
        loginUser, 
        currenUser
      } = require("./userController")
    
const {LogInCollection,Location,ComplaintType,Department,Log,CallStatus} = require("./mongodb")
      
// const validateToken = require("../middleware/validateTokenHandler")

router.post("/register", registerUser) 
router.post("/login", loginUser) 
router.post("/current", currenUser)
router.get("/current", currenUser) 
router.get("/location",async(req,res)=>{

  try{
const getLocation= await Location.find({}) ;
res.status(201).send(getLocation)
console.log(getLocation)
  }catch(e){
res.status(500).send(e);
  }}) 


// api making for login
router.get("/login",(req, res) => {
    res.render('login')
}
)



//api making for Location

// app.get("/location",async(req,res)=>{

//   try{
// const getLocation= await Location.find({}) ;
// res.status(201).send(getLocation)
// console.log(getLocation)
//   }catch(e){
// res.status(500).send(e);
//   }

// })

// api making for departments

app.get("/departments",async(req,res)=>{

  try{
const acessDepartment= await Department.find({}) ;
res.status(201).send(acessDepartment)
  }catch(e){
res.status(500).send(e);
  }

})

//Api for changing password(Json m object banake change krna upper )
app.patch("/changepassword/:id",async(req,res)=>{
try{
const _id=req.params.id;

  const changePass= await LogInCollection.findByIdAndUpdate(_id,req.body,{new:true}
  );
  res.send(changePass);
}
catch(e){
  res.status(404).send(e);
}
})







module.exports = router 