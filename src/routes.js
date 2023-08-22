const express = require("express")

const router = express.Router()
// app.use(express.json())
const {
        registerUser, 
        loginUser, 
        currenUser
      } = require("./userController")
    
const {LogInCollection,Location,ComplaintType,Department,Log,CallStatus, EndRemark} = require("./mongodb")
      
// const validateToken = require("../middleware/validateTokenHandler")

router.post("/register", registerUser) 
router.post("/login", loginUser) 
router.post("/current", currenUser)
router.get("/current", currenUser) 



// api making for login
router.get("/login",(req, res) => {
    res.render('login')
}
)

//api making for finding complaint by complaintType
router.get("/complaintbytypeCPU",async(req,res)=>{

  try{
const acessComplaint= await Log.find({"complaintType":"CPU"}) ;
res.status(201).send(acessComplaint)
  }catch(e){
res.status(500).send(e);
  }

})

//api making for finding complaint by location
router.get("/complaintbylocationsec",async(req,res)=>{

  try{
const acessComplaint= await Log.find({"location":"Sec-58"}) ;
res.status(201).send(acessComplaint)
  }catch(e){
res.status(500).send(e);
  }

})
//api for getting history of all complaints of a particular user

router.get("/complainthistorykhushi",async(req,res)=>{

  try{
const acessComplaintby= await Log.find({"name":"Khushi"}) ;
res.status(201).send(acessComplaintby)
  }catch(e){
res.status(500).send(e);
  }

})
//api for getting all complaints deal by a particular attendee for admin
router.get("/complaintattendedbyPriyanshu",async(req,res)=>{

  try{
const acessComplaintatt= await LogLineOfAttendee.find({"complaintAttendedBy":"Priyanshu"}) ;
res.status(201).send(acessComplaintatt)
  }catch(e){
res.status(500).send(e);
  }

})
//api for getting all complaints of a particular department
router.get("/complaintfromBPSteel",async(req,res)=>{

  try{
const acessComplaintfrom= await Log.find({"department":"BP Steel"}) ;
res.status(201).send(acessComplaintfrom)
  }catch(e){
res.status(500).send(e);
  }

})

//api for getting remark of attendee for approval
router.get("/complaintendapproval",async(req,res)=>{

  try{
const getEndRemark= await EndRemark.find({}) ;
res.status(201).send(getEndRemark)
console.log(getEndRemark)
  }catch(e){
res.status(500).send(e);
  }}) 

//api for remark made by attendee

  router.post("/remarkByAttendee",async(req,res)=>{
    const {date,remark,status,time} =req.body
    try{
  
      
    const attendeeRemark=  await EndRemark.create(
      { date,remark,status,time}
    )
    if(attendeeRemark){
      res.status(201).json({date: attendeeRemark.date, remark: attendeeRemark.remark,status:attendeeRemark.status,time: attendeeRemark.time})
  }
  
    }
    catch(e){
      res.status(404).send(e);
    }
    })
  
  



//api making for  Location

router.get("/location",async(req,res)=>{

  try{
const getLocation= await Location.find({}) ;
res.status(201).send(getLocation)
console.log(getLocation)
  }catch(e){
res.status(500).send(e);
  }}) 


// api making for departments

router.get("/departments",async(req,res)=>{

  try{
const acessDepartment= await Department.find({}) ;
res.status(201).send(acessDepartment)
  }catch(e){
res.status(500).send(e);
  }

})

//Api for changing password(Json m object banake change krna upper )
router.patch("/changepassword/:id",async(req,res)=>{
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


//api for registering complaint log
router.post("/registercomplaintlog",async(req,res)=>{
  try{

    const {id,date,description} =req.body
  const complaintlogcreate= Log.create(
    { id,date,description}
  )
  if(complaintlogcreate){
    res.status(201).json({id: complaintlogcreate.id, date: complaintlogcreate.date,descripton:complaintlogcreate.description})
}

  }
  catch(e){
    res.status(404).send(e);
  }
  })







module.exports = router 
