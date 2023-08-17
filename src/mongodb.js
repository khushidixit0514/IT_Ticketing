const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginFormPractice")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    key:{
        type:String,
        required:true
    }
})



const locationSchema= new mongoose.Schema({

 id:{
    type:String,
    required:true
},
 name:{
    type:String,
    required:true
}
})

const complaintTypeSchema=new mongoose.Schema({

    id:{
       type:String,
       required:true
   },
    type:{
       type:String,
       required:true
   }
   })
   const department=new mongoose.Schema({

    id:{
       type:String,
       required:true
   },
    departmentName:{
       type:String,
       required:true
   }
   })
   

   const callStatus=new mongoose.Schema({

    id:{
       type:String,
       required:true
   },
    callStatusName:{
       type:String,
       required:true
   }
   })
   
   const complaintLog=new mongoose.Schema({

    id:{
       type:String,
       required:true
   },
    date:{
       type:String,
       required:true
   },
   description:{
    type:String,
    required:true
   }
   })
   
const Location=new mongoose.model('Location',locationSchema)
const CallStatus=new mongoose.model('CallStatus',callStatus)
const ComplaintType=new mongoose.model('ComplaintType', complaintTypeSchema)
const Department=new mongoose.model('Department',department)
const LogInCollection=new mongoose.model('LogInCollection',logInSchema)
const Log=new mongoose.model('Log',complaintLog)

module.exports={LogInCollection,Location,ComplaintType,Department,CallStatus,Log}